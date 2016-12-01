/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import * as ts from 'typescript';

import {SourceMapGenerator} from 'source-map';
import {Rewriter} from './rewriter';

/**
 * postprocesses TypeScript compilation output JS, to rewrite shorthand imports like from 'foo'
 * to from 'foo/index'.
 * Note that Webpack and Rollup happen to follow the CommonJS convention of allowing shorthand
 * imports,
 * but this is not specified by the ECMAScript standard so some loaders (eg closure compiler) do not
 * handle it.
 */
class ESMRewriter extends Rewriter {
  constructor(
      protected program: ts.Program, file: ts.SourceFile, private opts: ts.CompilerOptions,
      private host: ts.ModuleResolutionHost) {
    super(file);
  }

  /**
   * maybeProcess lets subclasses optionally processes a node.
   *
   * @return True if the node has been handled and doesn't need to be traversed;
   *    false to have the node written and its children recursively visited.
   */
  protected maybeProcess(node: ts.Node): boolean {
    let rewrite = false;
    if (node.kind === ts.SyntaxKind.ImportDeclaration) {
      const importClause = (node as ts.ImportDeclaration).importClause;
      this.emit('import');
      if (importClause) this.visit(importClause);
      rewrite = true;
    }
    if (node.kind === ts.SyntaxKind.ExportDeclaration &&
        (node as ts.ExportDeclaration).moduleSpecifier) {
      const exportClause = (node as ts.ExportDeclaration).exportClause;
      this.emit('export');
      if (exportClause) this.visit(exportClause);
      rewrite = true;
    }
    if (rewrite) {
      this.emit(` from '`);
      let importModule = (node as any).moduleSpecifier.text;
      const resolved = ts.resolveModuleName(importModule, this.file.fileName, this.opts, this.host);
      if (resolved && resolved.resolvedModule) {
        const resolvedModule = resolved.resolvedModule.resolvedFileName.replace(/(\.d)?\.ts$/, '');
        if (resolvedModule.indexOf('/index') === resolvedModule.length - '/index'.length &&
            importModule.indexOf('/index') !== importModule.length - '/index'.length) {
          importModule += '/index';
        }
      }
      this.emit(importModule);
      this.emit(`';\n`);
      return true;
    }
    return false;
  }
}

export function fixIndexImports(
    program: ts.Program, sourceFile: ts.SourceFile, opts: ts.CompilerOptions,
    host: ts.ModuleResolutionHost) {
  const rewriter = new ESMRewriter(program, sourceFile, opts, host);
  rewriter.visit(sourceFile);
  return rewriter.getOutput();
}

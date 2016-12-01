import {readFileSync as realReadFile} from 'fs';
import * as ts from 'typescript';

import fsmodule = require('fs');

type fsType = typeof fsmodule;

export class MockCompilerHost implements ts.CompilerHost {
  constructor(private fs: fsType, private opts: ts.CompilerOptions) {}

  fileExists(fileName: string) {
    return this.fs.existsSync(fileName);
  }

  readFile(fileName: string) {
    return this.fs.readFileSync(fileName, {encoding: 'utf-8'});
  }

  getDefaultLibFileName(options: ts.CompilerOptions) {
    return ts.getDefaultLibFileName(options);
  }

  getSourceFile(
      fileName: string, languageVersion: ts.ScriptTarget, onError?: (message: string) => void) {
    if (fileName === ts.getDefaultLibFileName(this.opts)) {
      const fileText =
          realReadFile(ts.getDefaultLibFilePath(this.opts), {encoding: 'utf-8'}).toString();
      return ts.createSourceFile(fileName, fileText, this.opts.target!);
    }
    return ts.createSourceFile(
        fileName, this.fs.readFileSync(fileName, {encoding: 'utf-8'}), ts.ScriptTarget.Latest);
  };
  getDirectories(path: string) {
    console.error('getDirectories', path, this.fs.readdirSync(path));
    return this.fs.readdirSync(path);
  }
  getCanonicalFileName(fileName: string) {
    return fileName;
  }
  writeFile(fileName: string, text: string) {
    throw 'writeFile not implemented';
  }

  getCurrentDirectory() {
    return '/';
  }
  useCaseSensitiveFileNames() {
    return true;
  }
  getNewLine() {
    return '\n';
  }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {expect} from 'chai';
import * as mockFs from 'mock-fs';
import * as ts from 'typescript';

import {fixIndexImports} from '../src/esm_explicit_index';

import {MockCompilerHost} from './typescript_mocks';

describe('convertIndexImports', () => {
  it('should add explicit /index', () => {
    const filesystem = {
      'folder': {'index.ts': `export const a = 1;`},
      'b.ts': `export const b = 2;`,
      'node_modules': {
        'library': {'index.ts': `export const c = 3;`},
      },
      'user.ts': `
        import {a} from './folder';
        import {b} from './b';
        import {c} from 'library';
        import {a} from './folder/index';
        export {a} from './folder';
      `,
    };
    const fs = mockFs.fs(filesystem);
    const opts: ts.CompilerOptions = {
      module: ts.ModuleKind.ES2015,
      moduleResolution: ts.ModuleResolutionKind.NodeJs
    };
    const host = new MockCompilerHost(fs, opts);
    const program = ts.createProgram(['user.ts'], opts, host);
    const out = fixIndexImports(program, program.getSourceFile('user.ts'), opts, host);
    expect(out.output.trim()).to.equal(`
import {a} from './folder/index';
import {b} from './b';
import {c} from 'library/index';
import {a} from './folder/index';
export {a} from './folder/index';
    `.trim());
  });
});

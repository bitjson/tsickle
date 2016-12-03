Warning at test_files/typedef/typedef.ts:4:1: unhandled type {type flags:0x8000 Object}
====
type MyType = number;
/** @typedef {number} */
var MyType;

var /** @type {number} */ y: MyType = 3;

type Recursive = {value: number, next: Recursive};
/** @typedef {?} */
var Recursive;


export type ExportedType = string;
/** @typedef {string} */
exports.ExportedType;


Warning at test_files/type/type.ts:11:5: unhandled type {type flags:0x8000 Object}
Warning at test_files/type/type.ts:12:5: unhandled type {type flags:0x8000 Object}
Warning at test_files/type/type.ts:13:5: unhandled type {type flags:0x8000 Object}
Warning at test_files/type/type.ts:14:5: unhandled type {type flags:0x8000 Object}
Warning at test_files/type/type.ts:18:5: unhandled type {type flags:0x8000 Object}
Warning at test_files/type/type.ts:19:5: unhandled type {type flags:0x8000 Object}
Warning at test_files/type/type.ts:21:5: unhandled type {type flags:0x8000 Object}
Warning at test_files/type/type.ts:22:5: unhandled type {type flags:0x8000 Object}
Warning at test_files/type/type.ts:23:5: unhandled type {type flags:0x8000 Object}
Warning at test_files/type/type.ts:26:1: unhandled type {type flags:0x8000 Object}
Warning at test_files/type/type.ts:28:1: unhandled type {type flags:0x8000 Object}
====
// Ensure we still understand what Array is, even when it has been
// monkeypatched -- issue #170.
interface Array<T> {
  monkeyPatch: boolean;
}

let /** @type {?} */ typeAny: any;
let /** @type {!Array} */ typeArr: Array<any>;
let /** @type {!Array} */ typeArr2: any[];
let /** @type {!Array} */ typeNestedArr: {a:any}[][];
let /** @type {?} */ typeObject: {a:number, b:string} = {a:3, b:'b'};
let /** @type {?} */ typeObject2: {[key:string]: number};
let /** @type {?} */ typeObject3: {a:number, [key:string]: number};
let /** @type {?} */ typeObjectEmpty: {};

let /** @type {(string|boolean)} */ typeUnion: string|boolean = Math.random() > 0.5 ? false : '';
let /** @type {(string|boolean)} */ typeUnion2: (string|boolean) = Math.random() > 0.5 ? false : '';
let /** @type {?} */ typeOptionalField: {optional?: boolean} = {};
let /** @type {?} */ typeOptionalUnion: {optional?: string|boolean} = {};

let /** @type {?} */ typeFunc: () => void = function() {};
let /** @type {?} */ typeFunc2: (a: number, b: any) => string = function(a, b) { return ''; };
let /** @type {?} */ typeFunc3: (x: number, callback: (x: number) => string) => string = function(x, cb) { return ''; }
/**
 * @param {?} callback
 * @return {void}
 */
function typeCallback(callback: (val: number) => number) { }
typeCallback(val => val + 1);
/**
 * @param {?} callback
 * @return {void}
 */
function typeGenericCallback<T>(callback: (val: T) => T) { }
typeGenericCallback(val => val);

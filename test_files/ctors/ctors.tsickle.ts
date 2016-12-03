Warning at test_files/ctors/ctors.ts:1:5: unhandled type {type flags:0x8000 Object}
Warning at test_files/ctors/ctors.ts:5:5: unhandled type {type flags:0x8000 Object}
====
let /** @type {?} */ x = Document;
class X {
/**
 * @param {number} a
 */
constructor(private a: number) {}
}

function X_tsickle_Closure_declarations() {
/** @type {number} */
X.prototype.a;
}

let /** @type {?} */ y: {new (a: number): X} = X;

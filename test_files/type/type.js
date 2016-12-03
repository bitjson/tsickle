goog.module('test_files.type.type');var module = module || {id: 'test_files/type/type.js'};let /** @type {?} */ typeAny;
let /** @type {!Array} */ typeArr;
let /** @type {!Array} */ typeArr2;
let /** @type {!Array} */ typeNestedArr;
let /** @type {?} */ typeObject = { a: 3, b: 'b' };
let /** @type {?} */ typeObject2;
let /** @type {?} */ typeObject3;
let /** @type {?} */ typeObjectEmpty;
let /** @type {(string|boolean)} */ typeUnion = Math.random() > 0.5 ? false : '';
let /** @type {(string|boolean)} */ typeUnion2 = Math.random() > 0.5 ? false : '';
let /** @type {?} */ typeOptionalField = {};
let /** @type {?} */ typeOptionalUnion = {};
let /** @type {?} */ typeFunc = function () { };
let /** @type {?} */ typeFunc2 = function (a, b) { return ''; };
let /** @type {?} */ typeFunc3 = function (x, cb) { return ''; };
/**
 * @param {?} callback
 * @return {void}
 */
function typeCallback(callback) { }
typeCallback(val => val + 1);
/**
 * @param {?} callback
 * @return {void}
 */
function typeGenericCallback(callback) { }
typeGenericCallback(val => val);

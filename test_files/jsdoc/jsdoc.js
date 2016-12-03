goog.module('test_files.jsdoc.jsdoc');var module = module || {id: 'test_files/jsdoc/jsdoc.js'};/**
 * @param {string} foo a string.
 * @param {string} baz
 * @return {string} return comment.
 */
function jsDocTestFunction(foo, baz) {
    return foo;
}
/**
 * @return {string} return comment in a "\@returns" block.
 */
function returnsTest() {
    return 'abc';
}
/**
 * @param {string} foo
 * @return {void}
 */
function jsDocTestBadDoc(foo) { }
/**
 * Test JS doc on class.
 */
class JSDocTest {
}
function JSDocTest_tsickle_Closure_declarations() {
    /**
     * @export
     * @type {string}
     */
    JSDocTest.prototype.exported;
    /** @type {string} */
    JSDocTest.prototype.badExport;
    /** @type {string} */
    JSDocTest.prototype.stringWithoutJSDoc;
    /** @type {number} */
    JSDocTest.prototype.typedThing;
}
/**
 * @see This tag will be kept, because Closure allows it.
 * @return {void}
 */
function x() { }
;
/**
 * This class has JSDoc, but some of it should be stripped.
 * @see Nothing.
 */
class RedundantJSDocShouldBeStripped {
    constructor() { }
}
/**
 * This comment has code that needs to be escaped to pass Closure checking.
 *
 *   \@Reflect
 *   function example() {}
 *   \@Reflect.metadata(foo, bar)
 *   function example2() {}
 * @return {void}
 */
function JSDocWithBadTag() { }

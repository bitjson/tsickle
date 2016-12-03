goog.module('test_files.decorator.decorator');var module = module || {id: 'test_files/decorator/decorator.js'};/**
 * @param {!Object} a
 * @param {string} b
 * @return {void}
 */
function decorator(a, b) { }
/**
 * @param {!Object} a
 * @param {string} b
 * @return {void}
 */
function annotationDecorator(a, b) { }
/**
 * @param {?} t
 * @return {?}
 */
function classDecorator(t) { return t; }
/**
 * @param {?} t
 * @return {?}
 */
function classAnnotation(t) { return t; }
let DecoratorTest = class DecoratorTest {
};
__decorate([
    decorator,
    __metadata("design:type", Number)
], DecoratorTest.prototype, "x", void 0);
__decorate([
    annotationDecorator,
    __metadata("design:type", Number)
], DecoratorTest.prototype, "y", void 0);
DecoratorTest = __decorate([
    classAnnotation,
    __metadata("design:paramtypes", [])
], DecoratorTest);
function DecoratorTest_tsickle_Closure_declarations() {
    /** @type {number} */
    DecoratorTest.prototype.x;
    /** @type {number} */
    DecoratorTest.prototype.y;
}
let DecoratedClass = class DecoratedClass {
};
DecoratedClass = __decorate([
    classDecorator,
    __metadata("design:paramtypes", [])
], DecoratedClass);
function DecoratedClass_tsickle_Closure_declarations() {
    /** @type {string} */
    DecoratedClass.prototype.z;
}

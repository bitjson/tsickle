
/**
 * @param {!Object} a
 * @param {string} b
 * @return {void}
 */
function decorator(a: Object, b: string) {}
/**
 * @param {!Object} a
 * @param {string} b
 * @return {void}
 */
function annotationDecorator(a: Object, b: string) {}
/**
 * @param {?} t
 * @return {?}
 */
function classDecorator(t: any) { return t; }
/**
 * @param {?} t
 * @return {?}
 */
function classAnnotation(t: any) { return t; }
@classAnnotation
class DecoratorTest {
  @decorator
private x: number;

  @annotationDecorator
private y: number;
}

function DecoratorTest_tsickle_Closure_declarations() {
/** @type {number} */
DecoratorTest.prototype.x;
/** @type {number} */
DecoratorTest.prototype.y;
}

@classDecorator
class DecoratedClass {
  z: string;
}

function DecoratedClass_tsickle_Closure_declarations() {
/** @type {string} */
DecoratedClass.prototype.z;
}


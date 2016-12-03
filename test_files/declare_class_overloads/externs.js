/**
 * @externs
 * @suppress {duplicate}
 */
// NOTE: generated by tsickle, do not edit.

/**
 * @constructor
 * @struct
 * @param {number} opt_a
 */
function MultipleConstructorsOptional(opt_a) {}

/**
 * @constructor
 * @struct
 * @param {boolean|number} a
 */
function MultipleConstructorsTypes(a) {}

/**
 * @constructor
 * @struct
 * @param {boolean|number} a_or_b
 */
function MultipleConstructorsNamesAndTypes(a_or_b) {}

/**
 * @constructor
 * @struct
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {(undefined|string)|(undefined|!Array)} normal_or_vertexNormals
 * @param {(undefined|boolean)|(undefined|!Array)} color_or_vertexColors
 * @param {(undefined|number)} materialIndex
 */
function MultipleConstructorsComplexMatrix(a, b, c, normal_or_vertexNormals, color_or_vertexColors, materialIndex) {}

/**
 * @constructor
 * @struct
 * @param {number|!Array} a
 */
function MultipleConstructorsVariadic(a) {}

/**
 * @constructor
 * @struct
 * @param {!Array|string|number} points
 */
function MultipleConstructorsVariadicNames(points) {}

/** @constructor @struct */
function OverloadSimpleArgs() {}

/**
 * @param {string|number} a
 * @param {boolean} opt_b
 * @param {number} opt_c
 * @return {void}
 */
OverloadSimpleArgs.prototype.overloaded = function(a, opt_b, opt_c) {};

/** @constructor @struct */
function OverloadNameVariants() {}

/**
 * @param {string|boolean|number} a_or_b_or_c
 * @return {void}
 */
OverloadNameVariants.prototype.overloaded = function(a_or_b_or_c) {};

/** @constructor @struct */
function OverloadReturnTypesNoVoid() {}

/**
 * @param {string} a
 * @param {boolean} b
 * @param {number} opt_c
 * @return {boolean|number}
 */
OverloadReturnTypesNoVoid.prototype.overloaded = function(a, b, opt_c) {};

/** @constructor @struct */
function OverloadReturnTypesWithVoid() {}

/**
 * @param {string} a
 * @param {boolean} opt_b
 * @param {number} opt_c
 * @return {void|boolean|number}
 */
OverloadReturnTypesWithVoid.prototype.overloaded = function(a, opt_b, opt_c) {};

/** @constructor @struct */
function OverloadBigMix() {}

/**
 * @param {string|number|!Array|!OverloadBigMix} a_or_c_or_e_or_f
 * @param {number} opt_b
 * @return {void|number|boolean}
 */
OverloadBigMix.prototype.overloaded = function(a_or_c_or_e_or_f, opt_b) {};

/** @constructor @struct */
function OverloadValueOf() {}

/**
 * @return {string}
 */
OverloadValueOf.prototype.valueOf = function() {};

/** @constructor @struct */
function Merged() {}

/**
 * @param {(string|number|!Array)} a_or_c_or_e_or_f
 * @param {number} opt_b
 * @return {(number|boolean|void)}
 */
Merged.prototype.overloaded = function(a_or_c_or_e_or_f, opt_b) {};

/**
 * @param {...number} test
 * @return {void}
 */
Merged.prototype.variadic = function(test) {};

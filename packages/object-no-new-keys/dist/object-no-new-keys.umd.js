/**
 * object-no-new-keys
 * Check, does a plain object (AST/JSON) has any unique keys, not present in a reference object (another AST/JSON)
 * Version: 2.9.11
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/object-no-new-keys/
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).objectNoNewKeys=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function o(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?r(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function n(t){return t&&"object"===e(t)&&!Array.isArray(t)}return function(t,r,c){if(c&&!n(c))throw new TypeError("object-no-new-keys/objectNoNewKeys(): [THROW_ID_02] opts should be a plain object. It was given as ".concat(JSON.stringify(c,null,4)," (type ").concat(e(c),")"));var s=o(o({},{mode:2}),c);if("string"==typeof s.mode&&["1","2"].includes(s.mode))"1"===s.mode?s.mode=1:s.mode=2;else if(![1,2].includes(s.mode))throw new TypeError('object-no-new-keys/objectNoNewKeys(): [THROW_ID_01] opts.mode should be "1" or "2" (string or number).');return function e(t,r,o,c){var s;if(void 0===c&&(c={path:"",res:[]}),n(t))n(r)?Object.keys(t).forEach((function(a){Object.prototype.hasOwnProperty.call(r,a)?(n(t[a])||Array.isArray(t[a]))&&(s={path:c.path.length>0?"".concat(c.path,".").concat(a):a,res:c.res},c.res=e(t[a],r[a],o,s).res):(s=c.path.length>0?"".concat(c.path,".").concat(a):a,c.res.push(s))})):c.res=c.res.concat(Object.keys(t).map((function(e){return c.path.length>0?"".concat(c.path,".").concat(e):e})));else if(Array.isArray(t))if(Array.isArray(r))for(var a=0,i=t.length;a<i;a++)s={path:"".concat(c.path.length>0?c.path:"","[").concat(a,"]"),res:c.res},2===o.mode?c.res=e(t[a],r[0],o,s).res:c.res=e(t[a],r[a],o,s).res;else c.res=c.res.concat(t.map((function(e,t){return"".concat(c.path.length>0?c.path:"","[").concat(t,"]")})));return c}(t,r,s).res}}));

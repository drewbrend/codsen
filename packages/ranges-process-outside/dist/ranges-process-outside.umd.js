/**
 * ranges-process-outside
 * Iterate through string and optionally a given ranges as if they were one
 * Version: 2.2.22
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ranges-process-outside
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e=e||self).rangesProcessOutside=r()}(this,(function(){"use strict";function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function r(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],t=!0,s=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(t=(i=a.next()).done)&&(n.push(i.value),!r||n.length!==r);t=!0);}catch(e){s=!0,o=e}finally{try{t||null==a.return||a.return()}finally{if(s)throw o}}return n}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function t(e,r){if(!Array.isArray(e))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===e.length)return e;const n=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null},r);let t,s;if(n.strictlyTwoElementsInRangeArrays&&!e.every((e,r)=>2===e.length||(t=r,s=e.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${t}th range (${JSON.stringify(e[t],null,4)}) has not two but ${s} elements!`);if(!e.every((e,r)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(t=r,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${t}th range (${JSON.stringify(e[t],null,4)}) does not consist of only natural numbers!`);const o=e.length*e.length;let i=0;return Array.from(e).sort((e,r)=>(n.progressFn&&(i++,n.progressFn(Math.floor(100*i/o))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1))}function s(e,r){function n(e){return"string"==typeof e}function s(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e))return e;const o={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let i;if(r){if(!s(r))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(r,null,4)} (type ${typeof r})`);if(i=Object.assign({},o,r),i.progressFn&&s(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof i.progressFn}", equal to ${JSON.stringify(i.progressFn,null,4)}`);if(i.mergeType&&1!==i.mergeType&&2!==i.mergeType)if(n(i.mergeType)&&"1"===i.mergeType.trim())i.mergeType=1;else{if(!n(i.mergeType)||"2"!==i.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof i.mergeType}", equal to ${JSON.stringify(i.mergeType,null,4)}`);i.mergeType=2}if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof i.joinRangesThatTouchEdges}", equal to ${JSON.stringify(i.joinRangesThatTouchEdges,null,4)}`)}else i=Object.assign({},o);const a=e.map(e=>[...e]).filter(e=>void 0!==e[2]||e[0]!==e[1]);let u,g,l;u=i.progressFn?t(a,{progressFn:e=>{l=Math.floor(e/5),l!==g&&(g=l,i.progressFn(l))}}):t(a);const f=u.length-1;for(let e=f;e>0;e--)i.progressFn&&(l=Math.floor(78*(1-e/f))+21,l!==g&&l>g&&(g=l,i.progressFn(l))),(u[e][0]<=u[e-1][0]||!i.joinRangesThatTouchEdges&&u[e][0]<u[e-1][1]||i.joinRangesThatTouchEdges&&u[e][0]<=u[e-1][1])&&(u[e-1][0]=Math.min(u[e][0],u[e-1][0]),u[e-1][1]=Math.max(u[e][1],u[e-1][1]),void 0!==u[e][2]&&(u[e-1][0]>=u[e][0]||u[e-1][1]<=u[e][1])&&null!==u[e-1][2]&&(null===u[e][2]&&null!==u[e-1][2]?u[e-1][2]=null:void 0!==u[e-1][2]?2===i.mergeType&&u[e-1][0]===u[e][0]?u[e-1][2]=u[e][2]:u[e-1][2]+=u[e][2]:u[e-1][2]=u[e][2]),u.splice(e,1),e=u.length);return u}const o=Array.isArray;function i(e,r){if(!o(e))throw new TypeError(`ranges-crop: [THROW_ID_01] The first input's argument must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(!Number.isInteger(r))throw new TypeError(`ranges-crop: [THROW_ID_02] The second input's argument must be a natural number or zero (coming from String.length)! Currently its type is: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(0===e.length)return e;let n;if(!e.every((e,r)=>!(!Number.isInteger(e[0])||!Number.isInteger(e[1]))||(n=r,!1))){if(Array.isArray(e)&&"number"==typeof e[0]&&"number"==typeof e[1])throw new TypeError(`ranges-crop: [THROW_ID_03] The first argument should be AN ARRAY OF RANGES, not a single range! Currently arrOfRanges = ${JSON.stringify(e,null,0)}!`);throw new TypeError(`ranges-crop: [THROW_ID_04] The first argument should be AN ARRAY OF ARRAYS! Each sub-array means string slice indexes. In our case, here ${n+1}th range (${JSON.stringify(e[n],null,0)}) does not consist of only natural numbers!`)}if(!e.every((e,r)=>null==e[2]||"string"==typeof e[2]||(n=r,!1)))throw new TypeError(`ranges-crop: [THROW_ID_05] The third argument, if present at all, should be of a string-type or null. Currently the ${n}th range ${JSON.stringify(e[n],null,0)} has a argument in the range of a type ${typeof e[n][2]}`);return s(e).filter(e=>e[0]<=r&&(void 0!==e[2]||e[0]<r)).map(e=>e[1]>r?void 0!==e[2]?[e[0],r,e[2]]:[e[0],r]:e)}const a=Array.isArray;function u(e,r,n){if(!a(e)&&null!==e)throw new TypeError(`ranges-invert: [THROW_ID_01] Input's first argument must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(!Number.isInteger(r)||r<0)throw new TypeError(`ranges-invert: [THROW_ID_02] Input's second argument must be a natural number or zero (coming from String.length)! Currently its type is: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(null===e)return 0===r?[]:[[0,r]];if(0===e.length)return[];const t=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,skipChecks:!1},n);let o,u,g;if(!t.skipChecks&&t.strictlyTwoElementsInRangeArrays&&!e.every((e,r)=>2===e.length||(o=r,u=e.length,!1)))throw new TypeError(`ranges-invert: [THROW_ID_04] Because opts.strictlyTwoElementsInRangeArrays was enabled, all ranges must be strictly two-element-long. However, the ${o}th range (${JSON.stringify(e[o],null,0)}) has not two but ${u} elements!`);if(!t.skipChecks&&!e.every((e,r)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(o=r,!1))){if(Array.isArray(e)&&"number"==typeof e[0]&&"number"==typeof e[1])throw new TypeError(`ranges-invert: [THROW_ID_07] The first argument should be AN ARRAY OF RANGES, not a single range! Currently arrOfRanges = ${JSON.stringify(e,null,0)}!`);throw new TypeError(`ranges-invert: [THROW_ID_05] The first argument should be AN ARRAY OF ARRAYS! Each sub-array means string slice indexes. In our case, here ${o+1}th range (${JSON.stringify(e[o],null,0)}) does not consist of only natural numbers!`)}if(g=t.skipChecks?e.filter(e=>e[0]!==e[1]):s(e.filter(e=>e[0]!==e[1])),0===g.length)return 0===r?[]:[[0,r]];return i(g.reduce((e,n,s,o)=>{const i=[];0===s&&0!==o[0][0]&&i.push([0,o[0][0]]);const a=s<o.length-1?o[s+1][0]:r;if(n[1]!==a){if(t.skipChecks&&n[1]>a)throw new TypeError(`ranges-invert: [THROW_ID_08] The checking (opts.skipChecks) is off and input ranges were not sorted! We nearly wrote range [${n[1]}, ${a}] which is backwards. For investigation, whole ranges array is:\n${JSON.stringify(o,null,0)}`);i.push([n[1],a])}return e.concat(i)},[]),r)}const g=[776,2359,2359,2367,2367,2984,3007,3021,3633,3635,3648,3657,4352,4449,4520];function l(e){if("string"!=typeof e)throw new Error("string cannot be undefined or null");const r=[];let n=0,t=0;for(;n<e.length;)t+=f(n+t,e),h(e[n+t])&&t++,c(e[n+t])&&t++,p(e[n+t])&&t++,m(e[n+t])?t++:(r.push(e.substring(n,n+t)),n+=t,t=0);return r}function f(e,r){const n=r[e];if(!function(e){return e&&T(e[0].charCodeAt(0),55296,56319)}(n)||e===r.length-1)return 1;const t=n+r[e+1];let s=r.substring(e+2,e+5);return y(t)&&y(s)||function(e){return T(d(e),127995,127999)}(s)?4:2}function y(e){return T(d(e),127462,127487)}function c(e){return"string"==typeof e&&T(e.charCodeAt(0),65024,65039)}function p(e){return"string"==typeof e&&T(e.charCodeAt(0),8400,8447)}function h(e){return"string"==typeof e&&-1!==g.indexOf(e.charCodeAt(0))}function m(e){return"string"==typeof e&&8205===e.charCodeAt(0)}function d(e){return(e.charCodeAt(0)-55296<<10)+(e.charCodeAt(1)-56320)+65536}function T(e,r,n){return e>=r&&e<=n}var w=l,b=function(e,r,n){const t=l(e);if(void 0===r)return e;if(r>=t.length)return"";const s=t.length-r;let o=r+(void 0===n?s:n);return o>r+s&&(o=void 0),t.slice(r,o).join("")};w.substr=b;var O=Array.isArray;return function(n,t,s){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];function a(e){return e&&"[object Function]"==={}.toString.call(e)}if("string"!=typeof n)throw void 0===n?new Error("ranges-process-outside: [THROW_ID_01] the first input argument must be string! It's missing currently (undefined)!"):new Error("ranges-process-outside: [THROW_ID_02] the first input argument must be string! It was given as:\n".concat(JSON.stringify(n,null,4)," (type ").concat(e(n),")"));if(t&&!O(t))throw new Error("ranges-process-outside: [THROW_ID_03] the second input argument must be array of ranges or null! It was given as:\n".concat(JSON.stringify(t,null,4)," (type ").concat(e(t),")"));if(!a(s))throw new Error("ranges-process-outside: [THROW_ID_04] the third input argument must be a function! It was given as:\n".concat(JSON.stringify(s,null,4)," (type ").concat(e(s),")"));function g(e,n){n.forEach((function(n){for(var t=r(n,2),o=t[0],i=t[1],a=o;a<i;a++){var u=w(e.slice(a))[0].length;s(a,a+u,(function(e){null!=e&&(a+=e)})),u&&u>1&&(a+=u-1)}}))}if(t&&t.length){var l=i(u(t,n.length,{skipChecks:!!o}),n.length);g(n,l)}else g(n,[[0,n.length]])}}));

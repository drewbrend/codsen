/**
 * email-all-chars-within-ascii
 * Scans all characters within a string and checks are they within ASCII range
 * Version: 2.9.50
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/email-all-chars-within-ascii
 */

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).emailAllCharsWithinAscii=n()}(this,(function(){"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}var n="[object Object]";var o,e,i=Function.prototype,c=Object.prototype,r=i.toString,a=c.hasOwnProperty,l=r.call(Object),f=c.toString,u=(o=Object.getPrototypeOf,e=Object,function(t){return o(e(t))});var s=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||f.call(t)!=n||function(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}(t))return!1;var o=u(t);if(null===o)return!0;var e=a.call(o,"constructor")&&o.constructor;return"function"==typeof e&&e instanceof e&&r.call(e)==l};return function(n,o){if("string"!=typeof n)throw new Error("email-all-chars-within-ascii/within(): [THROW_ID_01] The input is not string but ".concat(t(n),", equal to: ").concat(JSON.stringify(n,null,4)));if(null!=o&&!s(o))throw new Error("email-all-chars-within-ascii/within(): [THROW_ID_02] The opts is not a plain object but ".concat(t(o),", equal to:\n").concat(JSON.stringify(o,null,4)));for(var e=Object.assign({},{messageOnly:!1,checkLineLength:!0},o),i=0,c=0,r=n.length;c<r;c++){if(i+=1,n[c].codePointAt(0)>126||n[c].codePointAt(0)<9||11===n[c].codePointAt(0)||12===n[c].codePointAt(0)||n[c].codePointAt(0)>13&&n[c].codePointAt(0)<32)throw new Error("".concat(e.messageOnly?"":"email-all-chars-within-ascii: ","Non ascii character found at index ").concat(c,", equal to: ").concat(JSON.stringify(n[c],null,4),", its decimal code point is ").concat(n[c].codePointAt(0),"."));if(i>997&&e.checkLineLength)throw new Error("".concat(e.messageOnly?"":"email-all-chars-within-ascii: ","Line length is beyond 999 characters!"));"\r"!==n[c]&&"\n"!==n[c]||(i=0)}}}));

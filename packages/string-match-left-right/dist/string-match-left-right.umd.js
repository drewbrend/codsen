/**
 * string-match-left-right
 * Do substrings match what's on the left or right of a given index?
 * Version: 4.0.3
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-match-left-right
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t=t||self).stringMatchLeftRight={})}(this,(function(t){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t){return t&&"object"===r(t)&&!Array.isArray(t)}function n(t){return"string"==typeof t}function i(t,r,e,n,i,a){var o="function"==typeof e?e():e;if(r<0&&i&&"EOL"===o)return o;if(r>=t.length&&!i)return!1;for(var c=i?1:e.length,h=!1,s=!1,f=n.maxMismatches,u=r,l=!1,g=!1,m=!1;t[u];){var y=a(u);if(n.trimBeforeMatching&&""===t[u].trim()){if(!t[y]&&i&&"EOL"===e)return!0;u=a(u)}else if(!n.i&&n.trimCharsBeforeMatching.includes(t[u])||n.i&&n.trimCharsBeforeMatching.map((function(t){return t.toLowerCase()})).includes(t[u].toLowerCase())){if(i&&"EOL"===e&&!t[y])return!0;u=a(u)}else{var M=y>u?e[e.length-c]:e[c-1];if(!n.i&&t[u]===M||n.i&&t[u].toLowerCase()===M.toLowerCase()){if(l||(l=!0),s||(s=!0),c===e.length?g=!0:1===c&&(m=!0),(c-=1)<1)return u}else{if(!(n.maxMismatches&&f&&u))return!(0!==u||1!==c||n.lastMustMatch||!s)&&0;f--;for(var p=0;p<=f;p++){var b=y>u?e[e.length-c+1+p]:e[c-2-p],d=t[a(u)];if(b&&(!n.i&&t[u]===b||n.i&&t[u].toLowerCase()===b.toLowerCase())&&(!n.firstMustMatch||c!==e.length)){c-=2,l=!0;break}if(d&&b&&(!n.i&&d===b||n.i&&d.toLowerCase()===b.toLowerCase())&&(!n.firstMustMatch||c!==e.length)){c-=1,l=!0;break}if(void 0===b&&f>=0&&l&&(!n.firstMustMatch||g)&&(!n.lastMustMatch||m))return u}l||(h=u)}if(!1!==h&&h!==u&&(h=!1),c<1)return u;u=a(u)}}return c>0?!(!i||"EOL"!==o)||!!(n.maxMismatches>=c&&s)&&(h||0):void 0}function a(t,a,o,c,h){if(e(h)&&Object.prototype.hasOwnProperty.call(h,"trimBeforeMatching")&&"boolean"!=typeof h.trimBeforeMatching)throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!").concat(Array.isArray(h.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""));var s,f,u,l,g,m=Object.assign({},{i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],maxMismatches:0,firstMustMatch:!1,lastMustMatch:!1},h);if(m.trimCharsBeforeMatching="string"==typeof(s=m.trimCharsBeforeMatching)?s.length>0?[s]:[]:s,m.trimCharsBeforeMatching=m.trimCharsBeforeMatching.map((function(t){return n(t)?t:String(t)})),!n(a))return!1;if(!a.length)return!1;if(!Number.isInteger(o)||o<0)throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ").concat(r(o),", equal to:\n").concat(JSON.stringify(o,null,4)));if(n(c))f=[c];else if(Array.isArray(c))f=c;else if(c){if("function"!=typeof c)throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ").concat(r(c),", equal to:\n").concat(JSON.stringify(c,null,4)));(f=[]).push(c)}else f=c;if(h&&!e(h))throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type \"").concat(r(h),'", and equal to:\n').concat(JSON.stringify(h,null,4)));if(m.trimCharsBeforeMatching.some((function(t,r){return t.length>1&&(l=r,g=t,!0)})))throw new Error("string-match-left-right/".concat(t,"(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ").concat(l," is longer than 1 character, ").concat(g.length," (equals to ").concat(g,"). Please split it into separate characters and put into array as separate elements."));if(!f||!Array.isArray(f)||Array.isArray(f)&&!f.length||Array.isArray(f)&&1===f.length&&n(f[0])&&!f[0].trim().length){if("function"==typeof m.cb){var y,M=o;if("matchLeftIncl"!==t&&"matchRight"!==t||(M+=1),"L"===t[5])for(var p=M;p--;){var b=a[p];if((!m.trimBeforeMatching||m.trimBeforeMatching&&void 0!==b&&b.trim().length)&&(!m.trimCharsBeforeMatching.length||void 0!==b&&!m.trimCharsBeforeMatching.includes(b))){y=p;break}}else if(t.startsWith("matchRight"))for(var d=M;d<a.length;d++){var v=a[d];if((!m.trimBeforeMatching||m.trimBeforeMatching&&v.trim().length)&&(!m.trimCharsBeforeMatching.length||!m.trimCharsBeforeMatching.includes(v))){y=d;break}}if(void 0===y)return!1;var w=a[y],L=y+1,B="";return L&&L>0&&(B=a.slice(0,L)),"L"===t[5]?m.cb(w,B,y):(y&&y>0&&(B=a.slice(y)),m.cb(w,B,y))}var C="";throw h||(C=" More so, the whole options object, the fourth input argument, is missing!"),new Error("string-match-left-right/".concat(t,'(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!').concat(C))}for(var O=0,I=f.length;O<I;O++){u="function"==typeof f[O];var R=f[O],_=void 0,A=void 0,E="",T=o;"matchRight"===t?T++:"matchLeft"===t&&T--;var j=i(a,T,R,m,u,(function(r){return"L"===t[5]?r-1:r+1}));if(j&&u&&"function"==typeof R&&"EOL"===R())return!(!R()||m.cb&&!m.cb(_,E,A))&&R();if(Number.isInteger(j)&&(A=t.startsWith("matchLeft")?j-1:j+1,E="L"===t[5]?a.slice(0,j):a.slice(A)),A<0&&(A=void 0),a[A]&&(_=a[A]),Number.isInteger(j)&&(!m.cb||m.cb(_,E,A)))return R}return!1}t.matchLeft=function(t,r,e,n){return a("matchLeft",t,r,e,n)},t.matchLeftIncl=function(t,r,e,n){return a("matchLeftIncl",t,r,e,n)},t.matchRight=function(t,r,e,n){return a("matchRight",t,r,e,n)},t.matchRightIncl=function(t,r,e,n){return a("matchRightIncl",t,r,e,n)},Object.defineProperty(t,"__esModule",{value:!0})}));

/**
 * object-flatten-referencing
 * Flatten complex nested objects according to a reference objects
 * Version: 4.11.14
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/object-flatten-referencing
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).objectFlattenReferencing=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var r=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t,r){var n="[object Arguments]",o="[object Function]",i="[object GeneratorFunction]",a="[object Map]",c="[object Set]",u=/\w*$/,s=/^\[object .+?Constructor\]$/,f=/^(?:0|[1-9]\d*)$/,l={};l[n]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object DataView]"]=l["[object Boolean]"]=l["[object Date]"]=l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l[a]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l[c]=l["[object String]"]=l["[object Symbol]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Error]"]=l[o]=l["[object WeakMap]"]=!1;var p="object"==typeof e&&e&&e.Object===Object&&e,h="object"==typeof self&&self&&self.Object===Object&&self,y=p||h||Function("return this")(),g=r&&!r.nodeType&&r,b=g&&t&&!t.nodeType&&t,d=b&&b.exports===g;function v(t,e){return t.set(e[0],e[1]),t}function _(t,e){return t.add(e),t}function w(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function j(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function m(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function A(t,e){return function(r){return t(e(r))}}function W(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var O,I=Array.prototype,T=Function.prototype,x=Object.prototype,S=y["__core-js_shared__"],E=(O=/[^.]+$/.exec(S&&S.keys&&S.keys.IE_PROTO||""))?"Symbol(src)_1."+O:"",D=T.toString,P=x.hasOwnProperty,C=x.toString,$=RegExp("^"+D.call(P).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),M=d?y.Buffer:void 0,R=y.Symbol,B=y.Uint8Array,k=A(Object.getPrototypeOf,Object),F=Object.create,H=x.propertyIsEnumerable,L=I.splice,K=Object.getOwnPropertySymbols,N=M?M.isBuffer:void 0,U=A(Object.keys,Object),V=bt(y,"DataView"),G=bt(y,"Map"),J=bt(y,"Promise"),z=bt(y,"Set"),q=bt(y,"WeakMap"),Q=bt(Object,"create"),X=jt(V),Y=jt(G),Z=jt(J),tt=jt(z),et=jt(q),rt=R?R.prototype:void 0,nt=rt?rt.valueOf:void 0;function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function it(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ct(t){this.__data__=new it(t)}function ut(t,e){var r=At(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Wt(t)}(t)&&P.call(t,"callee")&&(!H.call(t,"callee")||C.call(t)==n)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],o=r.length,i=!!o;for(var a in t)!e&&!P.call(t,a)||i&&("length"==a||_t(a,o))||r.push(a);return r}function st(t,e,r){var n=t[e];P.call(t,e)&&mt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function ft(t,e){for(var r=t.length;r--;)if(mt(t[r][0],e))return r;return-1}function lt(t,e,r,s,f,p,h){var y;if(s&&(y=p?s(t,f,p,h):s(t)),void 0!==y)return y;if(!Tt(t))return t;var g=At(t);if(g){if(y=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&P.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,y)}else{var b=vt(t),d=b==o||b==i;if(Ot(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if("[object Object]"==b||b==n||d&&!p){if(j(t))return p?t:{};if(y=function(t){return"function"!=typeof t.constructor||wt(t)?{}:(e=k(t),Tt(e)?F(e):{});var e}(d?{}:t),!e)return function(t,e){return yt(t,dt(t),e)}(t,function(t,e){return t&&yt(e,xt(e),t)}(y,t))}else{if(!l[b])return p?t:{};y=function(t,e,r,n){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return ht(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var r=e?ht(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?ht(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case a:return function(t,e,r){return w(e?r(m(t),!0):m(t),v,new t.constructor)}(t,n,r);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,u.exec(t));return e.lastIndex=t.lastIndex,e}(t);case c:return function(t,e,r){return w(e?r(W(t),!0):W(t),_,new t.constructor)}(t,n,r);case"[object Symbol]":return i=t,nt?Object(nt.call(i)):{}}var i}(t,b,lt,e)}}h||(h=new ct);var A=h.get(t);if(A)return A;if(h.set(t,y),!g)var O=r?function(t){return function(t,e,r){var n=e(t);return At(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,xt,dt)}(t):xt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(O||t,(function(n,o){O&&(n=t[o=n]),st(y,o,lt(n,e,r,s,o,t,h))})),y}function pt(t){return!(!Tt(t)||(e=t,E&&E in e))&&(It(t)||j(t)?$:s).test(jt(t));var e}function ht(t){var e=new t.constructor(t.byteLength);return new B(e).set(new B(t)),e}function yt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;st(r,a,void 0===c?t[a]:c)}return r}function gt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function bt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return pt(r)?r:void 0}ot.prototype.clear=function(){this.__data__=Q?Q(null):{}},ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ot.prototype.get=function(t){var e=this.__data__;if(Q){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return P.call(e,t)?e[t]:void 0},ot.prototype.has=function(t){var e=this.__data__;return Q?void 0!==e[t]:P.call(e,t)},ot.prototype.set=function(t,e){return this.__data__[t]=Q&&void 0===e?"__lodash_hash_undefined__":e,this},it.prototype.clear=function(){this.__data__=[]},it.prototype.delete=function(t){var e=this.__data__,r=ft(e,t);return!(r<0)&&(r==e.length-1?e.pop():L.call(e,r,1),!0)},it.prototype.get=function(t){var e=this.__data__,r=ft(e,t);return r<0?void 0:e[r][1]},it.prototype.has=function(t){return ft(this.__data__,t)>-1},it.prototype.set=function(t,e){var r=this.__data__,n=ft(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},at.prototype.clear=function(){this.__data__={hash:new ot,map:new(G||it),string:new ot}},at.prototype.delete=function(t){return gt(this,t).delete(t)},at.prototype.get=function(t){return gt(this,t).get(t)},at.prototype.has=function(t){return gt(this,t).has(t)},at.prototype.set=function(t,e){return gt(this,t).set(t,e),this},ct.prototype.clear=function(){this.__data__=new it},ct.prototype.delete=function(t){return this.__data__.delete(t)},ct.prototype.get=function(t){return this.__data__.get(t)},ct.prototype.has=function(t){return this.__data__.has(t)},ct.prototype.set=function(t,e){var r=this.__data__;if(r instanceof it){var n=r.__data__;if(!G||n.length<199)return n.push([t,e]),this;r=this.__data__=new at(n)}return r.set(t,e),this};var dt=K?A(K,Object):function(){return[]},vt=function(t){return C.call(t)};function _t(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||f.test(t))&&t>-1&&t%1==0&&t<e}function wt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||x)}function jt(t){if(null!=t){try{return D.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function mt(t,e){return t===e||t!=t&&e!=e}(V&&"[object DataView]"!=vt(new V(new ArrayBuffer(1)))||G&&vt(new G)!=a||J&&"[object Promise]"!=vt(J.resolve())||z&&vt(new z)!=c||q&&"[object WeakMap]"!=vt(new q))&&(vt=function(t){var e=C.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?jt(r):void 0;if(n)switch(n){case X:return"[object DataView]";case Y:return a;case Z:return"[object Promise]";case tt:return c;case et:return"[object WeakMap]"}return e});var At=Array.isArray;function Wt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!It(t)}var Ot=N||function(){return!1};function It(t){var e=Tt(t)?C.call(t):"";return e==o||e==i}function Tt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function xt(t){return Wt(t)?ut(t):function(t){if(!wt(t))return U(t);var e=[];for(var r in Object(t))P.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return lt(t,!0,!0)}}));function n(t){return null!=t}function o(t){return"string"==typeof t}function i(t,e,r){if(0===arguments.length)throw new Error("str-indexes-of-plus/strIndexesOfPlus(): inputs missing!");if(!o(t))throw new TypeError(`str-indexes-of-plus/strIndexesOfPlus(): first input argument must be a string! Currently it's: ${typeof t}`);if(!o(e))throw new TypeError(`str-indexes-of-plus/strIndexesOfPlus(): second input argument must be a string! Currently it's: ${typeof e}`);if(arguments.length>=3&&!Number.isInteger(r)&&(!o(r)||!/^\d*$/.test(r)))throw new TypeError(`str-indexes-of-plus/strIndexesOfPlus(): third input argument must be a natural number! Currently it's: ${r}`);/^\d*$/.test(r)&&(r=Number(r));const i=Array.from(t),a=Array.from(e);if(0===i.length||0===a.length||n(r)&&r>=i.length)return[];n(r)||(r=0);const c=[];let u,s=!1;for(let t=r,e=i.length;t<e;t++)s&&(i[t]===a[t-u]?t-u+1===a.length&&c.push(u):(u=null,s=!1)),s||i[t]===a[0]&&(1===a.length?c.push(t):(s=!0,u=t));return c}const a=/[|\\{}()[\]^$+*?.-]/g;const c=new Map;function u(t,e){e={caseSensitive:!1,...e};const r=t+JSON.stringify(e);if(c.has(r))return c.get(r);const n="!"===t[0];n&&(t=t.slice(1)),t=(t=>{if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(a,"\\$&")})(t).replace(/\\\*/g,".*");const o=new RegExp(`^${t}$`,e.caseSensitive?"":"i");return o.negated=n,c.set(r,o),o}var s=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>u(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};s.isMatch=(t,e,r)=>{const n=Array.isArray(t)?t:[t],o=Array.isArray(e)?e:[e];return n.some(t=>o.every(e=>{const n=u(e,r),o=n.test(t);return n.negated?!o:o}))};var f,l,p=Function.prototype,h=Object.prototype,y=p.toString,g=h.hasOwnProperty,b=y.call(Object),d=h.toString,v=(f=Object.getPrototypeOf,l=Object,function(t){return f(l(t))});var _=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=d.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=v(t);if(null===e)return!0;var r=g.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&y.call(r)==b},w=Array.isArray;
/*!
   * is-string-int | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-string-int.js
  */function j(t){return"string"==typeof t}function m(t,e){if(0===arguments.length||0===Object.keys(t).length)return[];var n=r(t),o=[];return _(n)&&Object.keys(n).forEach((function(t){_(n[t])&&(n[t]=m(n[t],e)),w(n[t])&&(o=o.concat(n[t].map((function(r){return t+e.objectKeyAndValueJoinChar+r})))),j(n[t])&&o.push(t+e.objectKeyAndValueJoinChar+n[t])})),o}function A(t,e,n,o){if(0===arguments.length||0===t.length)return"";var i=r(t),a="";if(i.length>0)if(o)for(var c=0,u=i.length;c<u;c++)if(j(i[c])){var s=void 0;s="",e.mergeArraysWithLineBreaks&&c>0&&(!e.mergeWithoutTrailingBrIfLineContainsBr||"string"!=typeof i[c-1]||e.mergeWithoutTrailingBrIfLineContainsBr&&void 0!==i[c-1]&&!i[c-1].toLowerCase().includes("<br"))&&(s="<br".concat(e.xhtml?" /":"",">")),a+=s+(n?e.wrapHeadsWith:"")+i[c]+(n?e.wrapTailsWith:"")}else w(i[c])&&i[c].length>0&&i[c].every(j)&&function(){var t="";e.mergeArraysWithLineBreaks&&a.length>0&&(t="<br".concat(e.xhtml?" /":"",">")),a=i[c].reduce((function(r,o,i,a){var c="";return i!==a.length-1&&(c=" "),r+(0===i?t:"")+(n?e.wrapHeadsWith:"")+o+(n?e.wrapTailsWith:"")+c}),a)}();else a=i.reduce((function(t,r,o,i){var a="";e.mergeArraysWithLineBreaks&&o>0&&(a="<br".concat(e.xhtml?" /":"",">"));var c="";return o!==i.length-1&&(c=" "),t+(0===o?a:"")+(n?e.wrapHeadsWith:"")+r+(n?e.wrapTailsWith:"")+c}),a);return a}function W(t){return j(t)?t.length>0?[t]:[]:t}function O(t){return j(t)&&function(t,e){if(e=e||{},0===arguments.length)throw new TypeError("No arguments. (One argument required)");if("string"!=typeof t)throw new TypeError(t+" is not a string. Argument must be a string to be checked if it represents an integer.");var r,n=Number(t);if(e.parseLiteral){if(t.trim()!==t)return!1;r=n.toString()}else r=t;return"NaN"!==r&&Math.round(n).toString()===r}(t.trim())?parseInt(t.trim(),10):t}var I=Array.isArray;function T(t){return null!=t}function x(t){return"string"==typeof t}return function(e,n,o){if(0===arguments.length)throw new Error("object-flatten-referencing/ofr(): [THROW_ID_01] all inputs missing!");if(1===arguments.length)throw new Error("object-flatten-referencing/ofr(): [THROW_ID_02] reference object missing!");if(T(o)&&!_(o))throw new Error("object-flatten-referencing/ofr(): [THROW_ID_03] third input, options object must be a plain object. Currently it's: ".concat(t(o)));function a(e,n,o,c,u,f){var l=r(e),p=r(n);void 0===c&&(c=!0),void 0===u&&(u=!0),void 0===f&&(f="");return(o=Object.assign({},{wrapHeadsWith:"%%_",wrapTailsWith:"_%%",dontWrapKeys:[],dontWrapPaths:[],xhtml:!0,preventDoubleWrapping:!0,preventWrappingIfContains:[],objectKeyAndValueJoinChar:".",wrapGlobalFlipSwitch:!0,ignore:[],whatToDoWhenReferenceIsMissing:0,mergeArraysWithLineBreaks:!0,mergeWithoutTrailingBrIfLineContainsBr:!0,enforceStrictKeyset:!0},o)).dontWrapKeys=W(o.dontWrapKeys),o.preventWrappingIfContains=W(o.preventWrappingIfContains),o.dontWrapPaths=W(o.dontWrapPaths),o.ignore=W(o.ignore),o.whatToDoWhenReferenceIsMissing=O(o.whatToDoWhenReferenceIsMissing),o.wrapGlobalFlipSwitch||(c=!1),_(l)?Object.keys(l).forEach((function(e){var r=f+(0===f.length?e:".".concat(e));if(0===o.ignore.length||!o.ignore.includes(e))if(o.wrapGlobalFlipSwitch&&(c=!0,o.dontWrapKeys.length>0&&(c=c&&!o.dontWrapKeys.some((function(t){return s.isMatch(e,t,{caseSensitive:!0})}))),o.dontWrapPaths.length>0&&(c=c&&!o.dontWrapPaths.some((function(t){return t===r}))),o.preventWrappingIfContains.length>0&&"string"==typeof l[e]&&(c=c&&!o.preventWrappingIfContains.some((function(t){return l[e].includes(t)})))),T(p[e])||!T(p[e])&&2===o.whatToDoWhenReferenceIsMissing)if(I(l[e]))if(2===o.whatToDoWhenReferenceIsMissing||x(p[e]))l[e]=A(l[e],o,c,u);else{if(l[e].every((function(t){return"string"==typeof t||Array.isArray(t)}))){var n=!0;l[e].forEach((function(t){Array.isArray(t)&&!t.every(x)&&(n=!1)})),n&&(u=!1)}l[e]=a(l[e],p[e],o,c,u,r)}else _(l[e])?2===o.whatToDoWhenReferenceIsMissing||x(p[e])?l[e]=A(m(l[e],o),o,c,u):l[e]=a(l[e],p[e],c?o:Object.assign({},o,{wrapGlobalFlipSwitch:!1}),c,u,r):x(l[e])&&(l[e]=a(l[e],p[e],o,c,u,r));else if(t(l[e])!==t(p[e])&&1===o.whatToDoWhenReferenceIsMissing)throw new Error("object-flatten-referencing/ofr(): [THROW_ID_06] reference object does not have the key ".concat(e," and we need it. TIP: Turn off throwing via opts.whatToDoWhenReferenceIsMissing."))})):I(l)?I(p)?l.forEach((function(t,e){T(l[e])&&T(p[e])?l[e]=a(l[e],p[e],o,c,u,"".concat(f,"[").concat(e,"]")):l[e]=a(l[e],p[0],o,c,u,"".concat(f,"[").concat(e,"]"))})):x(p)&&(l=A(l,o,c,u)):x(l)&&l.length>0&&(o.wrapHeadsWith||o.wrapTailsWith)&&(o.preventDoubleWrapping&&(""!==o.wrapHeadsWith&&i(l,o.wrapHeadsWith.trim()).length||""!==o.wrapTailsWith&&i(l,o.wrapTailsWith.trim()).length)||(l=(c?o.wrapHeadsWith:"")+l+(c?o.wrapTailsWith:""))),l}return a(e,n,o)}}));

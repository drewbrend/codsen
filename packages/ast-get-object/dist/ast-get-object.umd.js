/**
 * ast-get-object
 * Getter/setter for nested parsed HTML AST's, querying objects by key/value pairs
 * Version: 1.9.2
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ast-get-object
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).astGetObject=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t,e){return t(e={exports:{}},e.exports),e.exports}var n=r((function(t,r){var n,o,i,a,c,u,s,f,l,y,p,h,b,g,d,v,j,_;t.exports=(n="function"==typeof Promise,o="object"==typeof self?self:e,i="undefined"!=typeof Symbol,a="undefined"!=typeof Map,c="undefined"!=typeof Set,u="undefined"!=typeof WeakMap,s="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,l=i&&void 0!==Symbol.iterator,y=i&&void 0!==Symbol.toStringTag,p=c&&"function"==typeof Set.prototype.entries,h=a&&"function"==typeof Map.prototype.entries,b=p&&Object.getPrototypeOf((new Set).entries()),g=h&&Object.getPrototypeOf((new Map).entries()),d=l&&"function"==typeof Array.prototype[Symbol.iterator],v=d&&Object.getPrototypeOf([][Symbol.iterator]()),j=l&&"function"==typeof String.prototype[Symbol.iterator],_=j&&Object.getPrototypeOf(""[Symbol.iterator]()),function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===y||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var r=y&&t[Symbol.toStringTag];if("string"==typeof r)return r;var i=Object.getPrototypeOf(t);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":n&&i===Promise.prototype?"Promise":c&&i===Set.prototype?"Set":a&&i===Map.prototype?"Map":s&&i===WeakSet.prototype?"WeakSet":u&&i===WeakMap.prototype?"WeakMap":f&&i===DataView.prototype?"DataView":a&&i===g?"Map Iterator":c&&i===b?"Set Iterator":d&&i===v?"Array Iterator":j&&i===_?"String Iterator":null===i?"Object":Object.prototype.toString.call(t).slice(8,-1)})})),o=r((function(t,r){var n="[object Arguments]",o="[object Function]",i="[object GeneratorFunction]",a="[object Map]",c="[object Set]",u=/\w*$/,s=/^\[object .+?Constructor\]$/,f=/^(?:0|[1-9]\d*)$/,l={};l[n]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object DataView]"]=l["[object Boolean]"]=l["[object Date]"]=l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l[a]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l[c]=l["[object String]"]=l["[object Symbol]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Error]"]=l[o]=l["[object WeakMap]"]=!1;var y="object"==typeof e&&e&&e.Object===Object&&e,p="object"==typeof self&&self&&self.Object===Object&&self,h=y||p||Function("return this")(),b=r&&!r.nodeType&&r,g=b&&t&&!t.nodeType&&t,d=g&&g.exports===b;function v(t,e){return t.set(e[0],e[1]),t}function j(t,e){return t.add(e),t}function _(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function m(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function w(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function O(t,e){return function(r){return t(e(r))}}function S(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var A,T=Array.prototype,W=Function.prototype,$=Object.prototype,M=h["__core-js_shared__"],E=(A=/[^.]+$/.exec(M&&M.keys&&M.keys.IE_PROTO||""))?"Symbol(src)_1."+A:"",k=W.toString,N=$.hasOwnProperty,x=$.toString,D=RegExp("^"+k.call(N).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),F=d?h.Buffer:void 0,I=h.Symbol,P=h.Uint8Array,H=O(Object.getPrototypeOf,Object),R=Object.create,J=$.propertyIsEnumerable,L=T.splice,U=Object.getOwnPropertySymbols,B=F?F.isBuffer:void 0,V=O(Object.keys,Object),C=gt(h,"DataView"),z=gt(h,"Map"),q=gt(h,"Promise"),G=gt(h,"Set"),K=gt(h,"WeakMap"),Q=gt(Object,"create"),X=mt(C),Y=mt(z),Z=mt(q),tt=mt(G),et=mt(K),rt=I?I.prototype:void 0,nt=rt?rt.valueOf:void 0;function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function it(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ct(t){this.__data__=new it(t)}function ut(t,e){var r=Ot(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&St(t)}(t)&&N.call(t,"callee")&&(!J.call(t,"callee")||x.call(t)==n)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],o=r.length,i=!!o;for(var a in t)!e&&!N.call(t,a)||i&&("length"==a||jt(a,o))||r.push(a);return r}function st(t,e,r){var n=t[e];N.call(t,e)&&wt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function ft(t,e){for(var r=t.length;r--;)if(wt(t[r][0],e))return r;return-1}function lt(t,e,r,s,f,y,p){var h;if(s&&(h=y?s(t,f,y,p):s(t)),void 0!==h)return h;if(!Wt(t))return t;var b=Ot(t);if(b){if(h=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&N.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,h)}else{var g=vt(t),d=g==o||g==i;if(At(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if("[object Object]"==g||g==n||d&&!y){if(m(t))return y?t:{};if(h=function(t){return"function"!=typeof t.constructor||_t(t)?{}:(e=H(t),Wt(e)?R(e):{});var e}(d?{}:t),!e)return function(t,e){return ht(t,dt(t),e)}(t,function(t,e){return t&&ht(e,$t(e),t)}(h,t))}else{if(!l[g])return y?t:{};h=function(t,e,r,n){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return pt(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var r=e?pt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?pt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case a:return function(t,e,r){return _(e?r(w(t),!0):w(t),v,new t.constructor)}(t,n,r);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,u.exec(t));return e.lastIndex=t.lastIndex,e}(t);case c:return function(t,e,r){return _(e?r(S(t),!0):S(t),j,new t.constructor)}(t,n,r);case"[object Symbol]":return i=t,nt?Object(nt.call(i)):{}}var i}(t,g,lt,e)}}p||(p=new ct);var O=p.get(t);if(O)return O;if(p.set(t,h),!b)var A=r?function(t){return function(t,e,r){var n=e(t);return Ot(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,$t,dt)}(t):$t(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(A||t,(function(n,o){A&&(n=t[o=n]),st(h,o,lt(n,e,r,s,o,t,p))})),h}function yt(t){return!(!Wt(t)||(e=t,E&&E in e))&&(Tt(t)||m(t)?D:s).test(mt(t));var e}function pt(t){var e=new t.constructor(t.byteLength);return new P(e).set(new P(t)),e}function ht(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;st(r,a,void 0===c?t[a]:c)}return r}function bt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function gt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return yt(r)?r:void 0}ot.prototype.clear=function(){this.__data__=Q?Q(null):{}},ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ot.prototype.get=function(t){var e=this.__data__;if(Q){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return N.call(e,t)?e[t]:void 0},ot.prototype.has=function(t){var e=this.__data__;return Q?void 0!==e[t]:N.call(e,t)},ot.prototype.set=function(t,e){return this.__data__[t]=Q&&void 0===e?"__lodash_hash_undefined__":e,this},it.prototype.clear=function(){this.__data__=[]},it.prototype.delete=function(t){var e=this.__data__,r=ft(e,t);return!(r<0)&&(r==e.length-1?e.pop():L.call(e,r,1),!0)},it.prototype.get=function(t){var e=this.__data__,r=ft(e,t);return r<0?void 0:e[r][1]},it.prototype.has=function(t){return ft(this.__data__,t)>-1},it.prototype.set=function(t,e){var r=this.__data__,n=ft(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},at.prototype.clear=function(){this.__data__={hash:new ot,map:new(z||it),string:new ot}},at.prototype.delete=function(t){return bt(this,t).delete(t)},at.prototype.get=function(t){return bt(this,t).get(t)},at.prototype.has=function(t){return bt(this,t).has(t)},at.prototype.set=function(t,e){return bt(this,t).set(t,e),this},ct.prototype.clear=function(){this.__data__=new it},ct.prototype.delete=function(t){return this.__data__.delete(t)},ct.prototype.get=function(t){return this.__data__.get(t)},ct.prototype.has=function(t){return this.__data__.has(t)},ct.prototype.set=function(t,e){var r=this.__data__;if(r instanceof it){var n=r.__data__;if(!z||n.length<199)return n.push([t,e]),this;r=this.__data__=new at(n)}return r.set(t,e),this};var dt=U?O(U,Object):function(){return[]},vt=function(t){return x.call(t)};function jt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||f.test(t))&&t>-1&&t%1==0&&t<e}function _t(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||$)}function mt(t){if(null!=t){try{return k.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function wt(t,e){return t===e||t!=t&&e!=e}(C&&"[object DataView]"!=vt(new C(new ArrayBuffer(1)))||z&&vt(new z)!=a||q&&"[object Promise]"!=vt(q.resolve())||G&&vt(new G)!=c||K&&"[object WeakMap]"!=vt(new K))&&(vt=function(t){var e=x.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?mt(r):void 0;if(n)switch(n){case X:return"[object DataView]";case Y:return a;case Z:return"[object Promise]";case tt:return c;case et:return"[object WeakMap]"}return e});var Ot=Array.isArray;function St(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!Tt(t)}var At=B||function(){return!1};function Tt(t){var e=Wt(t)?x.call(t):"";return e==o||e==i}function Wt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function $t(t){return St(t)?ut(t):function(t){if(!_t(t))return V(t);var e=[];for(var r in Object(t))N.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return lt(t,!0,!0)}}));function i(t){return"string"==typeof t&&t.length&&"."===t[0]?t.slice(1):t}function a(t,e){return function t(e,r,n,a){const c=o(e);let u,s,f;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,Array.isArray(c))for(u=0,s=c.length;u<s&&!a.now;u++){const e=`${n.path}.${u}`;void 0!==c[u]?(n.parent=o(c),n.parentType="array",f=t(r(c[u],void 0,Object.assign({},n,{path:i(e)}),a),r,Object.assign({},n,{path:i(e)}),a),Number.isNaN(f)&&u<c.length?(c.splice(u,1),u-=1):c[u]=f):c.splice(u,1)}else if((l=c)&&"object"==typeof l&&!Array.isArray(l))for(const e in c){if(a.now&&null!=e)break;const u=`${n.path}.${e}`;0===n.depth&&null!=e&&(n.topmostKey=e),n.parent=o(c),n.parentType="object",f=t(r(e,c[e],Object.assign({},n,{path:i(u)}),a),r,Object.assign({},n,{path:i(u)}),a),Number.isNaN(f)?delete c[e]:c[e]=f}var l;return c}(t,e,{},{now:!1})}function c(t){if("string"==typeof t)return!t.trim().length;if(!["object","string"].includes(typeof t)||!t)return!1;let e=!0;return t=a(t,(t,r,n,o)=>{const i=void 0!==r?r:t;return"string"==typeof i&&i.trim().length&&(e=!1,o.now=!0),i}),e}const u=/[|\\{}()[\]^$+*?.-]/g;const s=new Map;function f(t,e){e={caseSensitive:!1,...e};const r=t+JSON.stringify(e);if(s.has(r))return s.get(r);const n="!"===t[0];n&&(t=t.slice(1)),t=(t=>{if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(u,"\\$&")})(t).replace(/\\\*/g,".*");const o=new RegExp(`^${t}$`,e.caseSensitive?"":"i");return o.negated=n,s.set(r,o),o}var l=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>f(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};l.isMatch=(t,e,r)=>{const n=Array.isArray(t)?t:[t],o=Array.isArray(e)?e:[e];return n.some(t=>o.every(e=>{const n=f(e,r),o=n.test(t);return n.negated?!o:o}))};const y=Array.isArray;function p(t){return null!=t}function h(t){return t&&"object"==typeof t&&!Array.isArray(t)}function b(t){return"string"==typeof t}function g(t){return h(t)||b(t)||function(t){return"number"==typeof t}(t)||function(t){return"boolean"==typeof t}(t)||y(t)||function(t){return null===t}(t)}function d(t,e,r){if(void 0===t)throw new TypeError("ast-compare/compare(): [THROW_ID_01] first argument is missing!");if(void 0===e)throw new TypeError("ast-compare/compare(): [THROW_ID_02] second argument is missing!");if(p(t)&&!g(t))throw new TypeError(`ast-compare/compare(): [THROW_ID_03] first input argument is of a wrong type, ${n(t)}, equal to: ${JSON.stringify(t,null,4)}`);if(p(e)&&!g(e))throw new TypeError(`ast-compare/compare(): [THROW_ID_04] second input argument is of a wrong type, ${n(e)}, equal to: ${JSON.stringify(e,null,4)}`);if(p(r)&&!h(r))throw new TypeError(`ast-compare/compare(): [THROW_ID_05] third argument, options object, must, well, be an object! Currently it's: ${n(r)} and equal to: ${JSON.stringify(r,null,4)}`);let o,i,a,u=0;const s=Object.assign({},{hungryForWhitespace:!1,matchStrictly:!1,verboseWhenMismatches:!1,useWildcards:!1},r);if(s.hungryForWhitespace&&s.matchStrictly&&h(t)&&c(t)&&h(e)&&!Object.keys(e).length)return!0;if((!s.hungryForWhitespace||s.hungryForWhitespace&&!c(t)&&c(e))&&h(t)&&0!==Object.keys(t).length&&h(e)&&0===Object.keys(e).length||n(t)!==n(e)&&(!s.hungryForWhitespace||s.hungryForWhitespace&&!c(t)))return!1;if(b(t)&&b(e))return!!(s.hungryForWhitespace&&c(t)&&c(e))||(s.verboseWhenMismatches?t===e||`Given string ${e} is not matched! We have ${t} on the other end.`:s.useWildcards?l.isMatch(t,e,{caseSensitive:!0}):t===e);if(y(t)&&y(e)){if(s.hungryForWhitespace&&c(e)&&(!s.matchStrictly||s.matchStrictly&&t.length===e.length))return!0;if(!s.hungryForWhitespace&&e.length>t.length||s.matchStrictly&&e.length!==t.length)return!!s.verboseWhenMismatches&&`The length of a given array, ${JSON.stringify(e,null,4)} is ${e.length} but the length of an array on the other end, ${JSON.stringify(t,null,4)} is ${t.length}`;if(0===e.length)return 0===t.length||!!s.verboseWhenMismatches&&`The given array has no elements, but the array on the other end, ${JSON.stringify(t,null,4)} does have some`;for(let r=0,n=e.length;r<n;r++){a=!1;for(let n=u,o=t.length;n<o;n++)if(u+=1,!0===d(t[n],e[r],s)){a=!0;break}if(!a)return!!s.verboseWhenMismatches&&`The given array ${JSON.stringify(e,null,4)} is not a subset of an array on the other end, ${JSON.stringify(t,null,4)}`}}else{if(!h(t)||!h(e))return!!(s.hungryForWhitespace&&c(t)&&c(e)&&(!s.matchStrictly||s.matchStrictly&&(f=e,h(f)?0===Object.keys(f).length:(y(f)||b(f))&&0===f.length)))||t===e;if(o=new Set(Object.keys(e)),i=new Set(Object.keys(t)),s.matchStrictly&&o.size!==i.size){if(!s.verboseWhenMismatches)return!1;const t=new Set([...o].filter(t=>!i.has(t))),e=t.size?` First object has unique keys: ${JSON.stringify(t,null,4)}.`:"",r=new Set([...i].filter(t=>!o.has(t)));return`When matching strictly, we found that both objects have different amount of keys.${e}${r.size?` Second object has unique keys:\n        ${JSON.stringify(r,null,4)}.`:""}`}for(const r of o){if(!Object.prototype.hasOwnProperty.call(t,r))return!s.useWildcards||s.useWildcards&&!r.includes("*")?!!s.verboseWhenMismatches&&`The given object has key "${r}" which the other-one does not have.`:!!Object.keys(t).some(t=>l.isMatch(t,r,{caseSensitive:!0}))||!!s.verboseWhenMismatches&&`The given object has key "${r}" which the other-one does not have.`;if(p(t[r])&&n(t[r])!==n(e[r])){if(!(c(t[r])&&c(e[r])&&s.hungryForWhitespace))return!!s.verboseWhenMismatches&&`The given key ${r} is of a different type on both objects. On the first-one, it's ${n(e[r])}, on the second-one, it's ${n(t[r])}`}else if(!0!==d(t[r],e[r],s))return!!s.verboseWhenMismatches&&`The given piece ${JSON.stringify(e[r],null,4)} and ${JSON.stringify(t[r],null,4)} don't match.`}}var f;return!0}function v(t){return null!=t}function j(t){return!1!==t&&v(t)}function _(e){return e&&"object"===t(e)&&!Array.isArray(e)}return function(t,e,r){return function t(e,r,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if(!v(e))throw new Error("ast-get-object: [THROW_ID_01] First argument is missing!");if(!v(r))throw new Error("ast-get-object: [THROW_ID_02] Second argument is missing!");var a=!1;v(n)&&Array.isArray(n)&&(a=!0);var c=o(e);return _(c)?d(c,r)?a?n.length>0&&(c=n[0],n.shift()):i.push(c):Object.keys(c).forEach((function(e){(Array.isArray(c[e])||_(c[e]))&&(a?c[e]=t(c[e],r,n,i):t(c[e],r,n,i))})):Array.isArray(c)&&c.forEach((function(e,o){(_(c[o])||Array.isArray(c[o]))&&(a?c[o]=t(c[o],r,n,i):t(c[o],r,n,i))})),j(n)?c:i}(t,e,r)}}));

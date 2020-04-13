/**
 * ast-get-values-by-key
 * Read or edit parsed HTML (or AST in general)
 * Version: 2.6.60
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ast-get-values-by-key
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).astGetValuesByKey=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var r=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t,r){var n="[object Arguments]",o="[object Function]",a="[object GeneratorFunction]",c="[object Map]",i="[object Set]",u=/\w*$/,s=/^\[object .+?Constructor\]$/,f=/^(?:0|[1-9]\d*)$/,l={};l[n]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object DataView]"]=l["[object Boolean]"]=l["[object Date]"]=l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l[c]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l[i]=l["[object String]"]=l["[object Symbol]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Error]"]=l[o]=l["[object WeakMap]"]=!1;var p="object"==typeof e&&e&&e.Object===Object&&e,y="object"==typeof self&&self&&self.Object===Object&&self,h=p||y||Function("return this")(),b=r&&!r.nodeType&&r,_=b&&t&&!t.nodeType&&t,v=_&&_.exports===b;function d(t,e){return t.set(e[0],e[1]),t}function g(t,e){return t.add(e),t}function j(t,e,r,n){var o=-1,a=t?t.length:0;for(n&&a&&(r=t[++o]);++o<a;)r=e(r,t[o],o,t);return r}function w(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function m(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function A(t,e){return function(r){return t(e(r))}}function O(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var S,x=Array.prototype,$=Function.prototype,E=Object.prototype,I=h["__core-js_shared__"],T=(S=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+S:"",k=$.toString,D=E.hasOwnProperty,N=E.toString,F=RegExp("^"+k.call(D).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),M=v?h.Buffer:void 0,R=h.Symbol,U=h.Uint8Array,B=A(Object.getPrototypeOf,Object),P=Object.create,W=E.propertyIsEnumerable,V=x.splice,C=Object.getOwnPropertySymbols,H=M?M.isBuffer:void 0,J=A(Object.keys,Object),z=_t(h,"DataView"),G=_t(h,"Map"),K=_t(h,"Promise"),L=_t(h,"Set"),q=_t(h,"WeakMap"),Q=_t(Object,"create"),X=wt(z),Y=wt(G),Z=wt(K),tt=wt(L),et=wt(q),rt=R?R.prototype:void 0,nt=rt?rt.valueOf:void 0;function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ct(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function it(t){this.__data__=new at(t)}function ut(t,e){var r=At(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ot(t)}(t)&&D.call(t,"callee")&&(!W.call(t,"callee")||N.call(t)==n)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],o=r.length,a=!!o;for(var c in t)!e&&!D.call(t,c)||a&&("length"==c||gt(c,o))||r.push(c);return r}function st(t,e,r){var n=t[e];D.call(t,e)&&mt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function ft(t,e){for(var r=t.length;r--;)if(mt(t[r][0],e))return r;return-1}function lt(t,e,r,s,f,p,y){var h;if(s&&(h=p?s(t,f,p,y):s(t)),void 0!==h)return h;if(!$t(t))return t;var b=At(t);if(b){if(h=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&D.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,h)}else{var _=dt(t),v=_==o||_==a;if(St(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if("[object Object]"==_||_==n||v&&!p){if(w(t))return p?t:{};if(h=function(t){return"function"!=typeof t.constructor||jt(t)?{}:(e=B(t),$t(e)?P(e):{});var e}(v?{}:t),!e)return function(t,e){return ht(t,vt(t),e)}(t,function(t,e){return t&&ht(e,Et(e),t)}(h,t))}else{if(!l[_])return p?t:{};h=function(t,e,r,n){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return yt(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var r=e?yt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?yt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case c:return function(t,e,r){return j(e?r(m(t),!0):m(t),d,new t.constructor)}(t,n,r);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,u.exec(t));return e.lastIndex=t.lastIndex,e}(t);case i:return function(t,e,r){return j(e?r(O(t),!0):O(t),g,new t.constructor)}(t,n,r);case"[object Symbol]":return a=t,nt?Object(nt.call(a)):{}}var a}(t,_,lt,e)}}y||(y=new it);var A=y.get(t);if(A)return A;if(y.set(t,h),!b)var S=r?function(t){return function(t,e,r){var n=e(t);return At(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Et,vt)}(t):Et(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(S||t,(function(n,o){S&&(n=t[o=n]),st(h,o,lt(n,e,r,s,o,t,y))})),h}function pt(t){return!(!$t(t)||(e=t,T&&T in e))&&(xt(t)||w(t)?F:s).test(wt(t));var e}function yt(t){var e=new t.constructor(t.byteLength);return new U(e).set(new U(t)),e}function ht(t,e,r,n){r||(r={});for(var o=-1,a=e.length;++o<a;){var c=e[o],i=n?n(r[c],t[c],c,r,t):void 0;st(r,c,void 0===i?t[c]:i)}return r}function bt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function _t(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return pt(r)?r:void 0}ot.prototype.clear=function(){this.__data__=Q?Q(null):{}},ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ot.prototype.get=function(t){var e=this.__data__;if(Q){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return D.call(e,t)?e[t]:void 0},ot.prototype.has=function(t){var e=this.__data__;return Q?void 0!==e[t]:D.call(e,t)},ot.prototype.set=function(t,e){return this.__data__[t]=Q&&void 0===e?"__lodash_hash_undefined__":e,this},at.prototype.clear=function(){this.__data__=[]},at.prototype.delete=function(t){var e=this.__data__,r=ft(e,t);return!(r<0)&&(r==e.length-1?e.pop():V.call(e,r,1),!0)},at.prototype.get=function(t){var e=this.__data__,r=ft(e,t);return r<0?void 0:e[r][1]},at.prototype.has=function(t){return ft(this.__data__,t)>-1},at.prototype.set=function(t,e){var r=this.__data__,n=ft(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},ct.prototype.clear=function(){this.__data__={hash:new ot,map:new(G||at),string:new ot}},ct.prototype.delete=function(t){return bt(this,t).delete(t)},ct.prototype.get=function(t){return bt(this,t).get(t)},ct.prototype.has=function(t){return bt(this,t).has(t)},ct.prototype.set=function(t,e){return bt(this,t).set(t,e),this},it.prototype.clear=function(){this.__data__=new at},it.prototype.delete=function(t){return this.__data__.delete(t)},it.prototype.get=function(t){return this.__data__.get(t)},it.prototype.has=function(t){return this.__data__.has(t)},it.prototype.set=function(t,e){var r=this.__data__;if(r instanceof at){var n=r.__data__;if(!G||n.length<199)return n.push([t,e]),this;r=this.__data__=new ct(n)}return r.set(t,e),this};var vt=C?A(C,Object):function(){return[]},dt=function(t){return N.call(t)};function gt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||f.test(t))&&t>-1&&t%1==0&&t<e}function jt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||E)}function wt(t){if(null!=t){try{return k.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function mt(t,e){return t===e||t!=t&&e!=e}(z&&"[object DataView]"!=dt(new z(new ArrayBuffer(1)))||G&&dt(new G)!=c||K&&"[object Promise]"!=dt(K.resolve())||L&&dt(new L)!=i||q&&"[object WeakMap]"!=dt(new q))&&(dt=function(t){var e=N.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?wt(r):void 0;if(n)switch(n){case X:return"[object DataView]";case Y:return c;case Z:return"[object Promise]";case tt:return i;case et:return"[object WeakMap]"}return e});var At=Array.isArray;function Ot(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!xt(t)}var St=H||function(){return!1};function xt(t){var e=$t(t)?N.call(t):"";return e==o||e==a}function $t(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Et(t){return Ot(t)?ut(t):function(t){if(!jt(t))return J(t);var e=[];for(var r in Object(t))D.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return lt(t,!0,!0)}}));function n(t){return"string"==typeof t&&t.length&&"."===t[0]?t.slice(1):t}function o(t,e){return function t(e,o,a,c){const i=r(e);let u,s,f;if((a=Object.assign({depth:-1,path:""},a)).depth+=1,Array.isArray(i))for(u=0,s=i.length;u<s&&!c.now;u++){const e=`${a.path}.${u}`;void 0!==i[u]?(a.parent=r(i),a.parentType="array",f=t(o(i[u],void 0,Object.assign({},a,{path:n(e)}),c),o,Object.assign({},a,{path:n(e)}),c),Number.isNaN(f)&&u<i.length?(i.splice(u,1),u-=1):i[u]=f):i.splice(u,1)}else if((l=i)&&"object"==typeof l&&!Array.isArray(l))for(const e in i){if(c.now&&null!=e)break;const u=`${a.path}.${e}`;0===a.depth&&null!=e&&(a.topmostKey=e),a.parent=r(i),a.parentType="object",f=t(o(e,i[e],Object.assign({},a,{path:n(u)}),c),o,Object.assign({},a,{path:n(u)}),c),Number.isNaN(f)?delete i[e]:i[e]=f}var l;return i}(t,e,{},{now:!1})}const a=/[|\\{}()[\]^$+*?.-]/g;const c=new Map;function i(t,e){e={caseSensitive:!1,...e};const r=t+JSON.stringify(e);if(c.has(r))return c.get(r);const n="!"===t[0];n&&(t=t.slice(1)),t=(t=>{if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(a,"\\$&")})(t).replace(/\\\*/g,".*");const o=new RegExp(`^${t}$`,e.caseSensitive?"":"i");return o.negated=n,c.set(r,o),o}var u=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>i(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};u.isMatch=(t,e,r)=>{const n=Array.isArray(t)?t:[t],o=Array.isArray(e)?e:[e];return n.some(t=>o.every(e=>{const n=i(e,r),o=n.test(t);return n.negated?!o:o}))};var s=Array.isArray;function f(t){return null!=t}return function(e,n,a){if(!f(e))throw new Error("ast-get-values-by-key: [THROW_ID_01] the first argument is missing!");if(!f(n))throw new Error("ast-get-values-by-key: [THROW_ID_02] the second argument is missing!");var c,i,l;if(s(n)){if(n.length&&n.some((function(t,e){return"string"!=typeof t&&(c=e,i=t,!0)})))throw new Error("ast-get-values-by-key: [THROW_ID_03] the second argument is array of values and not all of them are strings! For example, at index ".concat(c,", we have a value ").concat(JSON.stringify(i,null,0)," which is not string but ").concat(t(i),"!"))}else if("string"!=typeof n)throw new Error("ast-get-values-by-key: [THROW_ID_04] the second argument must be string! Currently it's of a type \"".concat(t(n),'", equal to:\n').concat(JSON.stringify(n,null,4)));f(a)&&(l="string"==typeof a?[a]:r(a));var p=[],y=o(e,(function(t,e,r){var o=void 0!==e?e:t;if(void 0!==e&&u.isMatch(t,n,{caseSensitive:!0}))if(void 0===l)p.push({val:e,path:r.path});else if(l.length>0)return l.shift();return o}));return void 0===l?p:y}}));

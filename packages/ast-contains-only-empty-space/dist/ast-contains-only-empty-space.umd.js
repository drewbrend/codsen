/**
 * ast-contains-only-empty-space
 * Returns Boolean depending if passed AST contain only empty space
 * Version: 1.9.10
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ast-contains-only-empty-space
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).astContainsOnlyEmptySpace=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var c=function(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports}((function(e,r){var n="[object Arguments]",c="[object Boolean]",u="[object Function]",a="[object GeneratorFunction]",i="[object Map]",f="[object Set]",s="[object DataView]",l="[object Float32Array]",p="[object Float64Array]",y="[object Int8Array]",b="[object Int16Array]",h="[object Int32Array]",_="[object Uint8Array]",d="[object Uint16Array]",v="[object Uint32Array]",j=/\w*$/,g=/^\[object .+?Constructor\]$/,w=/^(?:0|[1-9]\d*)$/,O={};O[n]=O["[object Array]"]=O["[object ArrayBuffer]"]=O["[object DataView]"]=O["[object Boolean]"]=O["[object Date]"]=O["[object Float32Array]"]=O["[object Float64Array]"]=O["[object Int8Array]"]=O["[object Int16Array]"]=O["[object Int32Array]"]=O[i]=O["[object Number]"]=O["[object Object]"]=O["[object RegExp]"]=O[f]=O["[object String]"]=O["[object Symbol]"]=O["[object Uint8Array]"]=O["[object Uint8ClampedArray]"]=O["[object Uint16Array]"]=O["[object Uint32Array]"]=!0,O["[object Error]"]=O[u]=O["[object WeakMap]"]=!1;var m="object"==t(o)&&o&&o.Object===Object&&o,A="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,S=m||A||Function("return this")(),x=r&&!r.nodeType&&r,P=x&&e&&!e.nodeType&&e,E=P&&P.exports===x;function D(t,e){return t.set(e[0],e[1]),t}function I(t,e){return t.add(e),t}function k(t,e,r,n){var o=-1,c=t?t.length:0;for(n&&c&&(r=t[++o]);++o<c;)r=e(r,t[o],o,t);return r}function T(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function U(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function F(t,e){return function(r){return t(e(r))}}function N(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var $,B=Array.prototype,M=Function.prototype,C=Object.prototype,R=S["__core-js_shared__"],W=($=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""))?"Symbol(src)_1."+$:"",V=M.toString,q=C.hasOwnProperty,z=C.toString,L=RegExp("^"+V.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),G=E?S.Buffer:void 0,K=S.Symbol,H=S.Uint8Array,J=F(Object.getPrototypeOf,Object),Q=Object.create,X=C.propertyIsEnumerable,Y=B.splice,Z=Object.getOwnPropertySymbols,tt=G?G.isBuffer:void 0,et=F(Object.keys,Object),rt=Pt(S,"DataView"),nt=Pt(S,"Map"),ot=Pt(S,"Promise"),ct=Pt(S,"Set"),ut=Pt(S,"WeakMap"),at=Pt(Object,"create"),it=Tt(rt),ft=Tt(nt),st=Tt(ot),lt=Tt(ct),pt=Tt(ut),yt=K?K.prototype:void 0,bt=yt?yt.valueOf:void 0;function ht(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function _t(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function dt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function vt(t){this.__data__=new _t(t)}function jt(e,r){var o=Ft(e)||function(e){return function(e){return function(e){return!!e&&"object"==t(e)}(e)&&Nt(e)}(e)&&q.call(e,"callee")&&(!X.call(e,"callee")||z.call(e)==n)}(e)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(e.length,String):[],c=o.length,u=!!c;for(var a in e)!r&&!q.call(e,a)||u&&("length"==a||It(a,c))||o.push(a);return o}function gt(t,e,r){var n=t[e];q.call(t,e)&&Ut(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function wt(t,e){for(var r=t.length;r--;)if(Ut(t[r][0],e))return r;return-1}function Ot(t,e,r,o,g,w,m){var A;if(o&&(A=w?o(t,g,w,m):o(t)),void 0!==A)return A;if(!Mt(t))return t;var S=Ft(t);if(S){if(A=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&q.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,A)}else{var x=Dt(t),P=x==u||x==a;if($t(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if("[object Object]"==x||x==n||P&&!w){if(T(t))return w?t:{};if(A=function(t){return"function"!=typeof t.constructor||kt(t)?{}:(e=J(t),Mt(e)?Q(e):{});var e}(P?{}:t),!e)return function(t,e){return St(t,Et(t),e)}(t,function(t,e){return t&&St(e,Ct(e),t)}(A,t))}else{if(!O[x])return w?t:{};A=function(t,e,r,n){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return At(t);case c:case"[object Date]":return new o(+t);case s:return function(t,e){var r=e?At(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case l:case p:case y:case b:case h:case _:case"[object Uint8ClampedArray]":case d:case v:return function(t,e){var r=e?At(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case i:return function(t,e,r){return k(e?r(U(t),!0):U(t),D,new t.constructor)}(t,n,r);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,j.exec(t));return e.lastIndex=t.lastIndex,e}(t);case f:return function(t,e,r){return k(e?r(N(t),!0):N(t),I,new t.constructor)}(t,n,r);case"[object Symbol]":return u=t,bt?Object(bt.call(u)):{}}var u}(t,x,Ot,e)}}m||(m=new vt);var E=m.get(t);if(E)return E;if(m.set(t,A),!S)var F=r?function(t){return function(t,e,r){var n=e(t);return Ft(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Ct,Et)}(t):Ct(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(F||t,(function(n,c){F&&(n=t[c=n]),gt(A,c,Ot(n,e,r,o,c,t,m))})),A}function mt(t){return!(!Mt(t)||(e=t,W&&W in e))&&(Bt(t)||T(t)?L:g).test(Tt(t));var e}function At(t){var e=new t.constructor(t.byteLength);return new H(e).set(new H(t)),e}function St(t,e,r,n){r||(r={});for(var o=-1,c=e.length;++o<c;){var u=e[o],a=n?n(r[u],t[u],u,r,t):void 0;gt(r,u,void 0===a?t[u]:a)}return r}function xt(e,r){var n,o,c=e.__data__;return("string"==(o=t(n=r))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?c["string"==typeof r?"string":"hash"]:c.map}function Pt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return mt(r)?r:void 0}ht.prototype.clear=function(){this.__data__=at?at(null):{}},ht.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ht.prototype.get=function(t){var e=this.__data__;if(at){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return q.call(e,t)?e[t]:void 0},ht.prototype.has=function(t){var e=this.__data__;return at?void 0!==e[t]:q.call(e,t)},ht.prototype.set=function(t,e){return this.__data__[t]=at&&void 0===e?"__lodash_hash_undefined__":e,this},_t.prototype.clear=function(){this.__data__=[]},_t.prototype.delete=function(t){var e=this.__data__,r=wt(e,t);return!(r<0)&&(r==e.length-1?e.pop():Y.call(e,r,1),!0)},_t.prototype.get=function(t){var e=this.__data__,r=wt(e,t);return r<0?void 0:e[r][1]},_t.prototype.has=function(t){return wt(this.__data__,t)>-1},_t.prototype.set=function(t,e){var r=this.__data__,n=wt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},dt.prototype.clear=function(){this.__data__={hash:new ht,map:new(nt||_t),string:new ht}},dt.prototype.delete=function(t){return xt(this,t).delete(t)},dt.prototype.get=function(t){return xt(this,t).get(t)},dt.prototype.has=function(t){return xt(this,t).has(t)},dt.prototype.set=function(t,e){return xt(this,t).set(t,e),this},vt.prototype.clear=function(){this.__data__=new _t},vt.prototype.delete=function(t){return this.__data__.delete(t)},vt.prototype.get=function(t){return this.__data__.get(t)},vt.prototype.has=function(t){return this.__data__.has(t)},vt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof _t){var n=r.__data__;if(!nt||n.length<199)return n.push([t,e]),this;r=this.__data__=new dt(n)}return r.set(t,e),this};var Et=Z?F(Z,Object):function(){return[]},Dt=function(t){return z.call(t)};function It(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||w.test(t))&&t>-1&&t%1==0&&t<e}function kt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||C)}function Tt(t){if(null!=t){try{return V.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ut(t,e){return t===e||t!=t&&e!=e}(rt&&Dt(new rt(new ArrayBuffer(1)))!=s||nt&&Dt(new nt)!=i||ot&&"[object Promise]"!=Dt(ot.resolve())||ct&&Dt(new ct)!=f||ut&&"[object WeakMap]"!=Dt(new ut))&&(Dt=function(t){var e=z.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?Tt(r):void 0;if(n)switch(n){case it:return s;case ft:return i;case st:return"[object Promise]";case lt:return f;case pt:return"[object WeakMap]"}return e});var Ft=Array.isArray;function Nt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!Bt(t)}var $t=tt||function(){return!1};function Bt(t){var e=Mt(t)?z.call(t):"";return e==u||e==a}function Mt(e){var r=t(e);return!!e&&("object"==r||"function"==r)}function Ct(t){return Nt(t)?jt(t):function(t){if(!kt(t))return et(t);var e=[];for(var r in Object(t))q.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}e.exports=function(t){return Ot(t,!0,!0)}}));function u(t){return"string"==typeof t&&t.length&&"."===t[0]?t.slice(1):t}function a(e,r){return function e(r,o,a,i){var f,s,l,p,y=c(r),b=n({depth:-1,path:""},a);if(b.depth+=1,Array.isArray(y))for(f=0,s=y.length;f<s&&!i.now;f++){var h="".concat(b.path,".").concat(f);void 0!==y[f]?(b.parent=c(y),b.parentType="array",l=e(o(y[f],void 0,n(n({},b),{},{path:u(h)}),i),o,n(n({},b),{},{path:u(h)}),i),Number.isNaN(l)&&f<y.length?(y.splice(f,1),f-=1):y[f]=l):y.splice(f,1)}else if((p=y)&&"object"===t(p)&&!Array.isArray(p))for(var _ in y){if(i.now&&null!=_)break;var d="".concat(b.path,".").concat(_);0===b.depth&&null!=_&&(b.topmostKey=_),b.parent=c(y),b.parentType="object",l=e(o(_,y[_],n(n({},b),{},{path:u(d)}),i),o,n(n({},b),{},{path:u(d)}),i),Number.isNaN(l)?delete y[_]:y[_]=l}return y}(e,r,{},{now:!1})}return function(e){if("string"==typeof e)return!e.trim();if(!["object","string"].includes(t(e))||!e)return!1;var r=!0;return e=a(e,(function(t,e,n,o){var c=void 0!==e?e:t;return"string"==typeof c&&c.trim()&&(r=!1,o.now=!0),c})),r}}));

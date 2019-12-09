/**
 * edit-package-json
 * Edit package.json without parsing, as string, keep indentation etc intact
 * Version: 0.1.12
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/edit-package-json
 */

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t=t||self).editPackageJson={})}(this,(function(t){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var e="[object Object]";var r,o,i=Function.prototype,u=Object.prototype,c=i.toString,l=u.hasOwnProperty,a=c.call(Object),s=u.toString,f=(r=Object.getPrototypeOf,o=Object,function(t){return r(o(t))});var g=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||s.call(t)!=e||function(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}(t))return!1;var n=f(t);if(null===n)return!0;var r=l.call(n,"constructor")&&n.constructor;return"function"==typeof r&&r instanceof r&&c.call(r)==a},h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var p=function(t,n){return t(n={exports:{}},n.exports),n.exports}((function(t,n){var e=200,r="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",u="[object Boolean]",c="[object Date]",l="[object Function]",a="[object GeneratorFunction]",s="[object Map]",f="[object Number]",g="[object Object]",p="[object RegExp]",y="[object Set]",m="[object String]",d="[object Symbol]",v="[object ArrayBuffer]",b="[object DataView]",_="[object Float32Array]",w="[object Float64Array]",O="[object Int8Array]",j="[object Int16Array]",T="[object Int32Array]",S="[object Uint8Array]",I="[object Uint8ClampedArray]",N="[object Uint16Array]",$="[object Uint32Array]",E=/\w*$/,J=/^\[object .+?Constructor\]$/,A=/^(?:0|[1-9]\d*)$/,P={};P[i]=P["[object Array]"]=P[v]=P[b]=P[u]=P[c]=P[_]=P[w]=P[O]=P[j]=P[T]=P[s]=P[f]=P[g]=P[p]=P[y]=P[m]=P[d]=P[S]=P[I]=P[N]=P[$]=!0,P["[object Error]"]=P[l]=P["[object WeakMap]"]=!1;var F="object"==typeof h&&h&&h.Object===Object&&h,W="object"==typeof self&&self&&self.Object===Object&&self,R=F||W||Function("return this")(),x=n&&!n.nodeType&&n,H=x&&t&&!t.nodeType&&t,D=H&&H.exports===x;function Z(t,n){return t.set(n[0],n[1]),t}function k(t,n){return t.add(n),t}function M(t,n,e,r){var o=-1,i=t?t.length:0;for(r&&i&&(e=t[++o]);++o<i;)e=n(e,t[o],o,t);return e}function U(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}function C(t){var n=-1,e=Array(t.size);return t.forEach((function(t,r){e[++n]=[r,t]})),e}function q(t,n){return function(e){return t(n(e))}}function L(t){var n=-1,e=Array(t.size);return t.forEach((function(t){e[++n]=t})),e}var B,z=Array.prototype,V=Function.prototype,G=Object.prototype,Q=R["__core-js_shared__"],K=(B=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+B:"",X=V.toString,Y=G.hasOwnProperty,tt=G.toString,nt=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=D?R.Buffer:void 0,rt=R.Symbol,ot=R.Uint8Array,it=q(Object.getPrototypeOf,Object),ut=Object.create,ct=G.propertyIsEnumerable,lt=z.splice,at=Object.getOwnPropertySymbols,st=et?et.isBuffer:void 0,ft=q(Object.keys,Object),gt=Ht(R,"DataView"),ht=Ht(R,"Map"),pt=Ht(R,"Promise"),yt=Ht(R,"Set"),mt=Ht(R,"WeakMap"),dt=Ht(Object,"create"),vt=Ut(gt),bt=Ut(ht),_t=Ut(pt),wt=Ut(yt),Ot=Ut(mt),jt=rt?rt.prototype:void 0,Tt=jt?jt.valueOf:void 0;function St(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function It(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function Nt(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function $t(t){this.__data__=new It(t)}function Et(t,n){var e=qt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Lt(t)}(t)&&Y.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==i)}(t)?function(t,n){for(var e=-1,r=Array(t);++e<t;)r[e]=n(e);return r}(t.length,String):[],r=e.length,o=!!r;for(var u in t)!n&&!Y.call(t,u)||o&&("length"==u||kt(u,r))||e.push(u);return e}function Jt(t,n,e){var r=t[n];Y.call(t,n)&&Ct(r,e)&&(void 0!==e||n in t)||(t[n]=e)}function At(t,n){for(var e=t.length;e--;)if(Ct(t[e][0],n))return e;return-1}function Pt(t,n,e,r,o,h,J){var A;if(r&&(A=h?r(t,o,h,J):r(t)),void 0!==A)return A;if(!Vt(t))return t;var F=qt(t);if(F){if(A=function(t){var n=t.length,e=t.constructor(n);n&&"string"==typeof t[0]&&Y.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!n)return function(t,n){var e=-1,r=t.length;n||(n=Array(r));for(;++e<r;)n[e]=t[e];return n}(t,A)}else{var W=Zt(t),R=W==l||W==a;if(Bt(t))return function(t,n){if(n)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,n);if(W==g||W==i||R&&!h){if(U(t))return h?t:{};if(A=function(t){return"function"!=typeof t.constructor||Mt(t)?{}:(n=it(t),Vt(n)?ut(n):{});var n}(R?{}:t),!n)return function(t,n){return Rt(t,Dt(t),n)}(t,function(t,n){return t&&Rt(n,Gt(n),t)}(A,t))}else{if(!P[W])return h?t:{};A=function(t,n,e,r){var o=t.constructor;switch(n){case v:return Wt(t);case u:case c:return new o(+t);case b:return function(t,n){var e=n?Wt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,r);case _:case w:case O:case j:case T:case S:case I:case N:case $:return function(t,n){var e=n?Wt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,r);case s:return function(t,n,e){return M(n?e(C(t),!0):C(t),Z,new t.constructor)}(t,r,e);case f:case m:return new o(t);case p:return(a=new(l=t).constructor(l.source,E.exec(l))).lastIndex=l.lastIndex,a;case y:return function(t,n,e){return M(n?e(L(t),!0):L(t),k,new t.constructor)}(t,r,e);case d:return i=t,Tt?Object(Tt.call(i)):{}}var i;var l,a}(t,W,Pt,n)}}J||(J=new $t);var x=J.get(t);if(x)return x;if(J.set(t,A),!F)var H=e?function(t){return function(t,n,e){var r=n(t);return qt(t)?r:function(t,n){for(var e=-1,r=n.length,o=t.length;++e<r;)t[o+e]=n[e];return t}(r,e(t))}(t,Gt,Dt)}(t):Gt(t);return function(t,n){for(var e=-1,r=t?t.length:0;++e<r&&!1!==n(t[e],e,t););}(H||t,(function(o,i){H&&(o=t[i=o]),Jt(A,i,Pt(o,n,e,r,i,t,J))})),A}function Ft(t){return!(!Vt(t)||function(t){return!!K&&K in t}(t))&&(zt(t)||U(t)?nt:J).test(Ut(t))}function Wt(t){var n=new t.constructor(t.byteLength);return new ot(n).set(new ot(t)),n}function Rt(t,n,e,r){e||(e={});for(var o=-1,i=n.length;++o<i;){var u=n[o],c=r?r(e[u],t[u],u,e,t):void 0;Jt(e,u,void 0===c?t[u]:c)}return e}function xt(t,n){var e,r,o=t.__data__;return("string"==(r=typeof(e=n))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e)?o["string"==typeof n?"string":"hash"]:o.map}function Ht(t,n){var e=function(t,n){return null==t?void 0:t[n]}(t,n);return Ft(e)?e:void 0}St.prototype.clear=function(){this.__data__=dt?dt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var n=this.__data__;if(dt){var e=n[t];return e===r?void 0:e}return Y.call(n,t)?n[t]:void 0},St.prototype.has=function(t){var n=this.__data__;return dt?void 0!==n[t]:Y.call(n,t)},St.prototype.set=function(t,n){return this.__data__[t]=dt&&void 0===n?r:n,this},It.prototype.clear=function(){this.__data__=[]},It.prototype.delete=function(t){var n=this.__data__,e=At(n,t);return!(e<0)&&(e==n.length-1?n.pop():lt.call(n,e,1),!0)},It.prototype.get=function(t){var n=this.__data__,e=At(n,t);return e<0?void 0:n[e][1]},It.prototype.has=function(t){return At(this.__data__,t)>-1},It.prototype.set=function(t,n){var e=this.__data__,r=At(e,t);return r<0?e.push([t,n]):e[r][1]=n,this},Nt.prototype.clear=function(){this.__data__={hash:new St,map:new(ht||It),string:new St}},Nt.prototype.delete=function(t){return xt(this,t).delete(t)},Nt.prototype.get=function(t){return xt(this,t).get(t)},Nt.prototype.has=function(t){return xt(this,t).has(t)},Nt.prototype.set=function(t,n){return xt(this,t).set(t,n),this},$t.prototype.clear=function(){this.__data__=new It},$t.prototype.delete=function(t){return this.__data__.delete(t)},$t.prototype.get=function(t){return this.__data__.get(t)},$t.prototype.has=function(t){return this.__data__.has(t)},$t.prototype.set=function(t,n){var r=this.__data__;if(r instanceof It){var o=r.__data__;if(!ht||o.length<e-1)return o.push([t,n]),this;r=this.__data__=new Nt(o)}return r.set(t,n),this};var Dt=at?q(at,Object):function(){return[]},Zt=function(t){return tt.call(t)};function kt(t,n){return!!(n=null==n?o:n)&&("number"==typeof t||A.test(t))&&t>-1&&t%1==0&&t<n}function Mt(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||G)}function Ut(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ct(t,n){return t===n||t!=t&&n!=n}(gt&&Zt(new gt(new ArrayBuffer(1)))!=b||ht&&Zt(new ht)!=s||pt&&"[object Promise]"!=Zt(pt.resolve())||yt&&Zt(new yt)!=y||mt&&"[object WeakMap]"!=Zt(new mt))&&(Zt=function(t){var n=tt.call(t),e=n==g?t.constructor:void 0,r=e?Ut(e):void 0;if(r)switch(r){case vt:return b;case bt:return s;case _t:return"[object Promise]";case wt:return y;case Ot:return"[object WeakMap]"}return n});var qt=Array.isArray;function Lt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!zt(t)}var Bt=st||function(){return!1};function zt(t){var n=Vt(t)?tt.call(t):"";return n==l||n==a}function Vt(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function Gt(t){return Lt(t)?Et(t):function(t){if(!Mt(t))return ft(t);var n=[];for(var e in Object(t))Y.call(t,e)&&"constructor"!=e&&n.push(e);return n}(t)}t.exports=function(t){return Pt(t,!0,!0)}}));function y(t){const n={value:t,hungry:!1,optional:!1};return(n.value.endsWith("?*")||n.value.endsWith("*?"))&&n.value.length>2?(n.value=n.value.slice(0,n.value.length-2),n.optional=!0,n.hungry=!0):n.value.endsWith("?")&&n.value.length>1?(n.value=n.value.slice(0,n.value.length-1),n.optional=!0):n.value.endsWith("*")&&n.value.length>1&&(n.value=n.value.slice(0,n.value.length-1),n.hungry=!0),n}function m(t){return"number"==typeof t}function d(t){return"string"==typeof t}function v(t,n){return function(t,n,e){if("string"!=typeof t||!t.length)return null;if(n&&"number"==typeof n||(n=0),!t[n+1])return null;if(t[n+1]&&(!e&&t[n+1].trim().length||e&&(t[n+1].trim().length||"\n\r".includes(t[n+1]))))return n+1;if(t[n+2]&&(!e&&t[n+2].trim().length||e&&(t[n+2].trim().length||"\n\r".includes(t[n+2]))))return n+2;for(let r=n+1,o=t.length;r<o;r++)if(t[r]&&(!e&&t[r].trim().length||e&&(t[r].trim().length||"\n\r".includes(t[r]))))return r;return null}(t,n,!1)}function b(t,n){return function(t,n,e){if("string"!=typeof t||!t.length)return null;if(n&&"number"==typeof n||(n=0),n<1)return null;if(t[n-1]&&(!e&&t[n-1].trim().length||e&&(t[n-1].trim().length||"\n\r".includes(t[n-1]))))return n-1;if(t[n-2]&&(!e&&t[n-2].trim().length||e&&(t[n-2].trim().length||"\n\r".includes(t[n-2]))))return n-2;for(let r=n;r--;)if(t[r]&&(!e&&t[r].trim().length||e&&(t[r].trim().length||"\n\r".includes(t[r]))))return r;return null}(t,n,!1)}function _(t,n,e,r,o){if("string"!=typeof n||!n.length)return null;if(e&&"number"==typeof e||(e=0),"right"===t&&!n[e+1]||"left"===t&&!n[e-1])return null;let i=e;const u=[];let c,l,a,s=0;for(;s<o.length;){if(!d(o[s])||!o[s].length){s++;continue}const{value:e,optional:f,hungry:g}=y(o[s]),h="right"===t?v(n,i):b(n,i);if(!(r.i&&n[h].toLowerCase()===e.toLowerCase()||!r.i&&n[h]===e)){if(f){s++;continue}if(a){s++,a=void 0;continue}return null}{const o="right"===t?v(n,h):b(n,h);g&&(r.i&&n[o].toLowerCase()===e.toLowerCase()||!r.i&&n[o]===e)?a=!0:s++,"right"===t&&h>i+1?u.push([i+1,h]):"left"===t&&h<i-1&&u.unshift([h+1,i]),i=h,"right"===t?(void 0===c&&(c=h),l=h):(void 0===l&&(l=h),c=h)}}return void 0===c?null:{gaps:u,leftmostChar:c,rightmostChar:l}}function w(t,n,...e){if(!e.length)return b(t,n);const r={i:!1};let o;return _("left",t,n,o=g(e[0])?Object.assign({},r,e.shift()):r,Array.from(e).reverse())}function O(t,n,...e){if(!e.length)return v(t,n);const r={i:!1};let o;return _("right",t,n,o=g(e[0])?Object.assign({},r,e.shift()):r,e)}function j(t,n,e,r,o){if("string"!=typeof n||!n.length)return null;if(e&&"number"==typeof e||(e=0),"right"===t&&!n[e+1]||"left"===t&&(m(e)&&e<1||"0"===e))return null;let i=null,u=null;do{null!==(i="right"===t?O(n,m(u)?u:e,...o):w(n,m(u)?u:e,...o))&&(u="right"===t?i.rightmostChar:i.leftmostChar)}while(i);if(null!=u&&"right"===t&&u++,null===u)return null;if("right"===t){if(n[u]&&n[u].trim().length)return u;const t=v(n,u);if(0===r.mode){if(t===u+1)return u;if(!(n.slice(u,t||n.length).trim().length||n.slice(u,t||n.length).includes("\n")||n.slice(u,t||n.length).includes("\r")))return t?t-1:n.length;for(let t=u,e=n.length;t<e;t++)if("\n\r".includes(n[t]))return t}else{if(1===r.mode)return u;if(2===r.mode){const t=n.slice(u);if(t.trim().length||t.includes("\n")||t.includes("\r"))for(let t=u,e=n.length;t<e;t++)if(n[t].trim().length||"\n\r".includes(n[t]))return t;return n.length}}return t||n.length}if(n[u]&&n[u-1]&&n[u-1].trim().length)return u;const c=b(n,u);if(0===r.mode){if(c===u-2)return u;if(n.slice(0,u).trim().length||n.slice(0,u).includes("\n")||n.slice(0,u).includes("\r"))for(let t=u;t--;)if("\n\r".includes(n[t])||n[t].trim().length)return t+1+(n[t].trim().length?1:0);return 0}if(1===r.mode)return u;if(2===r.mode){const t=n.slice(0,u);if(t.trim().length||t.includes("\n")||t.includes("\r"))for(let t=u;t--;)if(n[t].trim().length||"\n\r".includes(n[t]))return t+1;return 0}return null!==c?c+1:0}var T=function(t,n){if(n){if("object"!=typeof n)throw new TypeError(String(n)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in n){if("boolean"!=typeof n.includeZero)throw new TypeError(String(n.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(n.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},S=function(t,n){if("string"!=typeof t)return!1;if(n&&"includeZero"in n){if("boolean"!=typeof n.includeZero)throw new TypeError(String(n.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(n.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(t)}return/^[1-9]\d*(\.0+)?$/.test(t)};const I=Array.isArray;function N(t,n){if(!I(t))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(0===t.length)return t;const e=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null},n);let r,o;if(e.strictlyTwoElementsInRangeArrays&&!t.every((t,n)=>2===t.length||(r=n,o=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${r}th range (${JSON.stringify(t[r],null,4)}) has not two but ${o} elements!`);if(!t.every((t,n)=>!(!T(t[0],{includeZero:!0})||!T(t[1],{includeZero:!0}))||(r=n,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${r}th range (${JSON.stringify(t[r],null,4)}) does not consist of only natural numbers!`);const i=t.length*t.length;let u=0;return Array.from(t).sort((t,n)=>(e.progressFn&&(u++,e.progressFn(Math.floor(100*u/i))),t[0]===n[0]?t[1]<n[1]?-1:t[1]>n[1]?1:0:t[0]<n[0]?-1:1))}const $=Array.isArray;function E(t,n,e){let r=0,o=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof t)throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(null===n)return t;if(!$(n))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof n}, equal to: ${JSON.stringify(n,null,4)}`);if(e&&"function"!=typeof e)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);$(n)&&(T(n[0],{includeZero:!0})||S(n[0],{includeZero:!0}))&&(T(n[1],{includeZero:!0})||S(n[1],{includeZero:!0}))&&(n=[n]);const i=n.length;let u=0;n.forEach((t,c)=>{if(e&&(r=Math.floor(u/i*10))!==o&&(o=r,e(r)),!$(t))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${c}th element not an array: ${JSON.stringify(t,null,4)}, which is ${typeof t}`);if(!T(t[0],{includeZero:!0})){if(!S(t[0],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${c}th element, array [${t[0]},${t[1]}]. That array has first element not an integer, but ${typeof t[0]}, equal to: ${JSON.stringify(t[0],null,4)}. Computer doesn't like this.`);n[c][0]=Number.parseInt(n[c][0],10)}if(!T(t[1],{includeZero:!0})){if(!S(t[1],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${c}th element, array [${t[0]},${t[1]}]. That array has second element not an integer, but ${typeof t[1]}, equal to: ${JSON.stringify(t[1],null,4)}. Computer doesn't like this.`);n[c][1]=Number.parseInt(n[c][1],10)}u++});const c=function(t,n){function e(t){return"string"==typeof t}if(!Array.isArray(t))return t;const r={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let o;if(n){if(!g(n))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(n,null,4)} (type ${typeof n})`);if((o=Object.assign({},r,n)).progressFn&&g(o.progressFn)&&!Object.keys(o.progressFn).length)o.progressFn=null;else if(o.progressFn&&"function"!=typeof o.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof o.progressFn}", equal to ${JSON.stringify(o.progressFn,null,4)}`);if(o.mergeType&&1!==o.mergeType&&2!==o.mergeType)if(e(o.mergeType)&&"1"===o.mergeType.trim())o.mergeType=1;else{if(!e(o.mergeType)||"2"!==o.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof o.mergeType}", equal to ${JSON.stringify(o.mergeType,null,4)}`);o.mergeType=2}if("boolean"!=typeof o.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof o.joinRangesThatTouchEdges}", equal to ${JSON.stringify(o.joinRangesThatTouchEdges,null,4)}`)}else o=p(r);const i=p(t).filter(t=>void 0!==t[2]||t[0]!==t[1]);let u,c,l;const a=(u=o.progressFn?N(i,{progressFn:t=>{(l=Math.floor(t/5))!==c&&(c=l,o.progressFn(l))}}):N(i)).length-1;for(let t=a;t>0;t--)o.progressFn&&(l=Math.floor(78*(1-t/a))+21)!==c&&l>c&&(c=l,o.progressFn(l)),(u[t][0]<=u[t-1][0]||!o.joinRangesThatTouchEdges&&u[t][0]<u[t-1][1]||o.joinRangesThatTouchEdges&&u[t][0]<=u[t-1][1])&&(u[t-1][0]=Math.min(u[t][0],u[t-1][0]),u[t-1][1]=Math.max(u[t][1],u[t-1][1]),void 0!==u[t][2]&&(u[t-1][0]>=u[t][0]||u[t-1][1]<=u[t][1])&&null!==u[t-1][2]&&(null===u[t][2]&&null!==u[t-1][2]?u[t-1][2]=null:void 0!==u[t-1][2]?2===o.mergeType&&u[t-1][0]===u[t][0]?u[t-1][2]=u[t][2]:u[t-1][2]+=u[t][2]:u[t-1][2]=u[t][2]),u.splice(t,1),t=u.length);return u}(n,{progressFn:t=>{e&&(r=10+Math.floor(t/10))!==o&&(o=r,e(r))}}),l=c.length;if(l>0){const n=t.slice(c[l-1][1]);t=c.reduce((n,i,u,c)=>{e&&(r=20+Math.floor(u/l*80))!==o&&(o=r,e(r));const a=0===u?0:c[u-1][1],s=c[u][0];return n+t.slice(a,s)+(function(t){return null!=t}(c[u][2])?c[u][2]:"")},""),t+=n}return t}var J=Array.isArray;function A(t){return"string"==typeof t}function P(t){return"number"==typeof t}function F(t){return J(t)?t.join("."):A(t)?t:String(t)}function W(t,n){if("\\"!==t[n])return!0;var e=function(t,n,...e){if(!e.length||1===e.length&&g(e[0]))return null;const r={mode:0};if(g(e[0])){const o=Object.assign({},r,p(e[0]));if(o.mode){if(d(o.mode)&&"0123".includes(o.mode))o.mode=Number.parseInt(o.mode,10);else if(!m(o.mode))throw new Error(`string-left-right/chompLeft(): [THROW_ID_01] the opts.mode is wrong! It should be 0, 1, 2 or 3. It was given as ${o.mode} (type ${typeof o.mode})`)}else o.mode=0;return j("left",t,n,o,p(e).slice(1))}return d(e[0])?j("left",t,n,r,p(e)):j("left",t,n,r,p(e).slice(1))}(t,n,{mode:1},"\\");return!(!P(e)||(n-e)%2==0)}function R(t){var n,e=t.str,r=t.path,o=t.valToInsert,i=t.mode;function u(t){e[n]}var c=e.length,l=[];u();var a=["{","}","[","]",":",","],s=o;!A(o)||o.startsWith('"')||o.startsWith("{")||(s='"'.concat(o,'"'));var f,g,h,p,y,m,d,_=[],w=[],O=!1,j=!1,T=!1,S=!1,I=[];function N(){f=null,g=null,h=null,p=null,y=null,m=null}N();var $,R=[];for(n=0;n<c;n++){if(u("\n[".concat(36,"m","===============================","[",39,"m [",35,"m","str[ ".concat(n," ] = ").concat(e[n]&&e[n].trim().length?e[n]:JSON.stringify(e[n],null,0)),"[",39,"m [",36,"m","===============================","[",39,"m\n")),P(d)||"["!==e[n-1]||(j=!0,"]"!==e[n]&&(O=!1)),P(d)||"{"!==e[n-1]||(O=!0,"}"!==e[n]&&(j=!1)),P(d)||"{"!==e[n]||!W(e,n-1)||T||(j&&(S||(u("198 ".concat("[".concat(33,"m","currentPath","[",39,"m")," = ",JSON.stringify(R,null,4))),R[R.length-1]=R[R.length-1]+1,u())),_.push(n),u("215 ".concat("[".concat(32,"m","PUSH","[",39,"m")," ","[".concat(33,"m","withinObjectIndexes","[",39,"m")," = ",JSON.stringify(_,null,4)))),P(d)||"}"!==e[n]||!W(e,n-1)||T||(_.pop(),u("231 ".concat("[".concat(31,"m","POP","[",39,"m")," ","[".concat(33,"m","withinObjectIndexes","[",39,"m")," = ",JSON.stringify(_,null,4)))),P(d)||"]"!==e[n]||!W(e,n-1)||T||(w.pop(),u("248 ".concat("[".concat(32,"m","POP","[",39,"m")," ","[".concat(33,"m","withinArrayIndexes","[",39,"m")," = ",JSON.stringify(w,null,4))),R.pop(),u("256 POP path, now = ".concat(JSON.stringify(R,null,4))),u(),N(),S&&(S=!1,u())),P(d)||"]"!==e[n]||(w.length?w.length&&(!_.length||w[w.length-1]>_[_.length-1])&&(j=!0):(j=!1,_.length&&!O&&(O=!0))),P(d)||"}"!==e[n]||(_.length?(!w.length||_[_.length-1]>w[w.length-1])&&(O=!0):O=!1),j&&F(r)===R.join(".")&&!T&&e[n].trim().length&&(T=!0,u(),h=n,u()),P(d)||"["!==e[n]||!W(e,n-1)||T||(w.push(n),S=!0,u("348 ".concat("[".concat(32,"m","PUSH","[",39,"m")," ","[".concat(33,"m","withinArrayIndexes","[",39,"m")," = ",JSON.stringify(w,null,4),"; ","[".concat(33,"m","itsTheFirstElem","[",39,"m")," = ").concat(S)),R.push(0),u("359 ".concat("[".concat(32,"m","PUSH","[",39,"m")," zero to path, now = ",JSON.stringify(R,null,0)))),j&&","===e[n]&&S&&(!h||p)&&(S=!1,u()),T||h||!e[n].trim().length||a.includes(e[n])||!(j||!j&&y)||(u(),h=n,u(),j&&(S?(S=!1,u()):(R[R.length-1]=R[R.length-1]+1,u()))),!T&&!P(d)&&(j||!j&&y)&&h&&h<n&&!p&&('"'===e[h]&&'"'===e[n]&&"\\"!==e[n-1]||'"'!==e[h]&&!e[n].trim().length||["}",","].includes(e[n]))&&(u(),m=e.slice(h,'"'===e[h]?n+1:n),u(),p=n,u()),T||j||'"'!==e[n]||"\\"===e[n-1]||y||f||g||!e[n+1]||(f=n+1,u()),!T&&!j&&'"'===e[n]&&"\\"!==e[n-1]&&!g&&f&&!h&&f<n&&(g=n+1,y=e.slice(f,n),u(),R.push(y),u("506 PUSH to path, now = ".concat(JSON.stringify(R,null,4))),F(r)===R.join(".")&&(T=!0,u())),T||P(d)||","!==e[n]||!O||(R.pop(),u("535 POP(), now ".concat("[".concat(33,"m","currentPath","[",39,"m")," = ",JSON.stringify(R,null,0)))),!T&&(p&&n>=p||["}","]"].includes(e[b(e,n)])&&["}","]"].includes(e[n])||"}"===e[n]&&"{"===e[b(e,n)])&&e[n].trim().length&&(u(),","!==e[n]||["}","]"].includes(e[v(e,n)])?"}"===e[n]&&(u(),(p||"{"!==e[b(e,n)])&&(R.pop(),u("569 POP(), now ".concat("[".concat(33,"m","currentPath","[",39,"m")," = ",JSON.stringify(R,null,0)))),u(),u(),w.length&&_.length&&w[w.length-1]>_[_.length-1]&&(O=!1,j=!0),u(),N()):(u(),N())),T||"{"!==e[n]||!A(y)||h||m||(u(),N()),e[n].trim().length&&T&&!h&&n>g&&![":"].includes(e[n])&&(h=n,u()),'"'===e[n]&&W(e,n-1)&&(P(f)&&!g||P(h)&&!p)&&!P(d)&&(d=n,u()),I.length&&e[n]===I[I.length-1]&&W(e,n-1)?(I.pop(),u("677 ".concat("[".concat(32,"m","POP","[",39,"m")," skipUntilTheFollowingIsMet = ",JSON.stringify(I,null,4)))):d&&d!==n||!T||j||!h||("{"===e[n]&&W(e,n-1)?(I.push("}"),u("695 ".concat("[".concat(32,"m","PUSH","[",39,"m")," ","[".concat(33,"m","skipUntilTheFollowingIsMet","[",39,"m")," = ",JSON.stringify(I,null,4)))):"["===e[n]&&W(e,n-1)?(I.push("]"),u("705 ".concat("[".concat(32,"m","PUSH","[",39,"m")," ","[".concat(33,"m","skipUntilTheFollowingIsMet","[",39,"m")," = ",JSON.stringify(I,null,4)))):'"'===e[n]&&W(e,n-1)&&(I.push('"'),u("715 ".concat("[".concat(32,"m","PUSH","[",39,"m")," ","[".concat(33,"m","skipUntilTheFollowingIsMet","[",39,"m")," = ",JSON.stringify(I,null,4))))),'"'===e[n]&&W(e,n-1)&&P(d)&&d!==n&&(d=void 0,u()),T&&J(I)&&!I.length&&h&&n>h&&(u(),!d&&("["===e[h]&&"]"===e[n]||"{"===e[h]&&"}"===e[n]||'"'===e[h]&&'"'===e[n]||!["[","{",'"'].includes(e[h])&&e[h].trim().length&&(!e[n].trim().length||a.includes(e[n])&&W(e,n-1))))){if(u("780 INSIDE CATCH-END CLAUSES currently ".concat("[".concat(33,"m","str[valueStartedAt=".concat(h,"]"),"[",39,"m")," = ",JSON.stringify(e[h],null,4))),"set"===i){u();var x="";e.slice(h,n+(e[n].trim().length?1:0)).includes("\n")&&"\n"!==e[n+(e[n].trim().length?1:0)]&&(x="\n");var H=n+(e[n].trim().length?1:0);return(j&&!['"',"[","{"].includes(e[h])&&"]"!==e[v(e,H-1)]||","===e[H-1]&&'"'!==e[h-1])&&(H-=1),j&&'"'===e[h-1]&&(h-=1),"".concat(e.slice(0,h)).concat(($=s,A($)&&$.startsWith('"')&&$.endsWith('"')?"".concat(JSON.stringify($.slice(1,$.length-1),null,0)):JSON.stringify($,null,0))).concat(x).concat(e.slice(H))}if("del"===i){u(),u("851 ".concat("[".concat(33,"m","keyStartedAt","[",39,"m")," = ",JSON.stringify(f,null,4),"; val = ").concat((j?h:f)-1));var D=b(e,(j?h:f)-1)+1;u();var Z=n+(e[n].trim().length?1:0);","===e[D-1]&&["}","]"].includes(e[v(e,Z-1)])&&(D--,u()),","===e[Z]&&(Z++,u()),u("883 ".concat("[".concat(33,"m","startingPoint","[",39,"m")," = ",JSON.stringify(D,null,4),"; ","[".concat(33,"m","endingPoint","[",39,"m")," = ").concat(JSON.stringify(Z,null,4),";")),l.push([D,Z]),u("896 ".concat("[".concat(32,"m","FINAL PUSH","[",39,"m")," ","[".concat(33,"m","ranges","[",39,"m")," = ",JSON.stringify(l,null,4))),u();break}}u("".concat("[".concat(d?32:31,"m","withinQuotesSince".concat(P(d)?"=".concat(d):""),"[",39,"m"),"; ","[".concat(O?32:31,"m","currentlyWithinObject","[",39,"m"),"; ","[".concat(j?32:31,"m","currentlyWithinArray","[",39,"m"),"; ","[".concat(T?32:31,"m","replaceThisValue","[",39,"m"),"; ","[".concat(S?32:31,"m","itsTheFirstElem","[",39,"m"),"; ","[".concat(I.length?32:31,"m","skipUntilTheFollowingIsMet".concat(I?": ".concat(JSON.stringify(I,null,0)):""),"[",39,"m"))),u("current path: ".concat(JSON.stringify(R.join("."),null,0))),u(),u("".concat("[".concat(33,"m","withinArrayIndexes","[",39,"m")," = ",JSON.stringify(w,null,0),"; ","[".concat(33,"m","withinObjectIndexes","[",39,"m")," = ").concat(JSON.stringify(_,null,0),";"))}return u(),u("947 RETURN applied ".concat(JSON.stringify(E(e,l),null,4))),E(e,l)}t.del=function(t,e){if(!A(t)||!t.length)throw new Error("edit-package-json/del(): [THROW_ID_02] first input argument must be a non-empty string. It was given as ".concat(JSON.stringify(t,null,4)," (type ").concat(n(t),")"));return R({str:t,path:e,mode:"del"})},t.set=function(t,e,r){if(!A(t)||!t.length)throw new Error("edit-package-json/set(): [THROW_ID_01] first input argument must be a non-empty string. It was given as ".concat(JSON.stringify(t,null,4)," (type ").concat(n(t),")"));return R({str:t,path:e,valToInsert:r,mode:"set"})},Object.defineProperty(t,"__esModule",{value:!0})}));

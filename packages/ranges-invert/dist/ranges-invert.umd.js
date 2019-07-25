/**
 * ranges-invert
 * Invert string index ranges [ [1, 3] ] => [ [0, 1], [3, ...] ]
 * Version: 2.1.11
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ranges-invert
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).rangesInvert=t()}(this,function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}var t=function(e,t){if(t){if("object"!=typeof t)throw new TypeError(String(t)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero&&0===e)return!0}}return Number.isSafeInteger(e)&&e>=1},r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e,t){return e(t={exports:{}},t.exports),t.exports}var o=n(function(e,t){(t=e.exports=function(e){return e+t.suffix(+e)}).suffix=function(e){return e%=100,1===Math.floor(e/10)?"th":e%10==1?"st":e%10==2?"nd":e%10==3?"rd":"th"}}),i=(o.suffix,n(function(e,t){var n,o,i,a,s,c,u,f,l,p,y,h,g,d,b,m,v,_,w,j;e.exports=(n="function"==typeof Promise,o="object"==typeof self?self:r,i="undefined"!=typeof Symbol,a="undefined"!=typeof Map,s="undefined"!=typeof Set,c="undefined"!=typeof WeakMap,u="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,l=i&&void 0!==Symbol.iterator,p=i&&void 0!==Symbol.toStringTag,y=s&&"function"==typeof Set.prototype.entries,h=a&&"function"==typeof Map.prototype.entries,g=y&&Object.getPrototypeOf((new Set).entries()),d=h&&Object.getPrototypeOf((new Map).entries()),b=l&&"function"==typeof Array.prototype[Symbol.iterator],m=b&&Object.getPrototypeOf([][Symbol.iterator]()),v=l&&"function"==typeof String.prototype[Symbol.iterator],_=v&&Object.getPrototypeOf(""[Symbol.iterator]()),w=8,j=-1,function(e){var t=typeof e;if("object"!==t)return t;if(null===e)return"null";if(e===o)return"global";if(Array.isArray(e)&&(!1===p||!(Symbol.toStringTag in e)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&e===window.location)return"Location";if("object"==typeof window.document&&e===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&e===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&e===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&e instanceof window.HTMLElement){if("BLOCKQUOTE"===e.tagName)return"HTMLQuoteElement";if("TD"===e.tagName)return"HTMLTableDataCellElement";if("TH"===e.tagName)return"HTMLTableHeaderCellElement"}}var r=p&&e[Symbol.toStringTag];if("string"==typeof r)return r;var i=Object.getPrototypeOf(e);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":n&&i===Promise.prototype?"Promise":s&&i===Set.prototype?"Set":a&&i===Map.prototype?"Map":u&&i===WeakSet.prototype?"WeakSet":c&&i===WeakMap.prototype?"WeakMap":f&&i===DataView.prototype?"DataView":a&&i===d?"Map Iterator":s&&i===g?"Set Iterator":b&&i===m?"Array Iterator":v&&i===_?"String Iterator":null===i?"Object":Object.prototype.toString.call(e).slice(w,j)})}));function a(e,t,r){if(t!=t)return function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,c,r);for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}function s(e,t,r,n){for(var o=r-1,i=e.length;++o<i;)if(n(e[o],t))return o;return-1}function c(e){return e!=e}var u=Array.prototype.splice;function f(e,t,r,n){var o,i=n?s:a,c=-1,f=t.length,l=e;for(e===t&&(t=function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(t)),r&&(l=function(e,t){for(var r=-1,n=e?e.length:0,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}(e,(o=r,function(e){return o(e)})));++c<f;)for(var p=0,y=t[c],h=r?r(y):y;(p=i(l,h,p,n))>-1;)l!==e&&u.call(l,p,1),u.call(e,p,1);return e}var l=function(e,t){return e&&e.length&&t&&t.length?f(e,t):e},p=n(function(e,t){var n=200,o="__lodash_hash_undefined__",i=9007199254740991,a="[object Arguments]",s="[object Boolean]",c="[object Date]",u="[object Function]",f="[object GeneratorFunction]",l="[object Map]",p="[object Number]",y="[object Object]",h="[object RegExp]",g="[object Set]",d="[object String]",b="[object Symbol]",m="[object ArrayBuffer]",v="[object DataView]",_="[object Float32Array]",w="[object Float64Array]",j="[object Int8Array]",O="[object Int16Array]",T="[object Int32Array]",$="[object Uint8Array]",S="[object Uint8ClampedArray]",A="[object Uint16Array]",E="[object Uint32Array]",I=/\w*$/,N=/^\[object .+?Constructor\]$/,R=/^(?:0|[1-9]\d*)$/,k={};k[a]=k["[object Array]"]=k[m]=k[v]=k[s]=k[c]=k[_]=k[w]=k[j]=k[O]=k[T]=k[l]=k[p]=k[y]=k[h]=k[g]=k[d]=k[b]=k[$]=k[S]=k[A]=k[E]=!0,k["[object Error]"]=k[u]=k["[object WeakMap]"]=!1;var x="object"==typeof r&&r&&r.Object===Object&&r,F="object"==typeof self&&self&&self.Object===Object&&self,M=x||F||Function("return this")(),P=t&&!t.nodeType&&t,W=P&&e&&!e.nodeType&&e,C=W&&W.exports===P;function D(e,t){return e.set(t[0],t[1]),e}function H(e,t){return e.add(t),e}function J(e,t,r,n){var o=-1,i=e?e.length:0;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function L(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function K(e){var t=-1,r=Array(e.size);return e.forEach(function(e,n){r[++t]=[n,e]}),r}function V(e,t){return function(r){return e(t(r))}}function Z(e){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r}var q,B=Array.prototype,U=Function.prototype,Y=Object.prototype,z=M["__core-js_shared__"],G=(q=/[^.]+$/.exec(z&&z.keys&&z.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"",Q=U.toString,X=Y.hasOwnProperty,ee=Y.toString,te=RegExp("^"+Q.call(X).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),re=C?M.Buffer:void 0,ne=M.Symbol,oe=M.Uint8Array,ie=V(Object.getPrototypeOf,Object),ae=Object.create,se=Y.propertyIsEnumerable,ce=B.splice,ue=Object.getOwnPropertySymbols,fe=re?re.isBuffer:void 0,le=V(Object.keys,Object),pe=We(M,"DataView"),ye=We(M,"Map"),he=We(M,"Promise"),ge=We(M,"Set"),de=We(M,"WeakMap"),be=We(Object,"create"),me=Le(pe),ve=Le(ye),_e=Le(he),we=Le(ge),je=Le(de),Oe=ne?ne.prototype:void 0,Te=Oe?Oe.valueOf:void 0;function $e(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Se(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ae(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ee(e){this.__data__=new Se(e)}function Ie(e,t){var r=Ve(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&Ze(e)}(e)&&X.call(e,"callee")&&(!se.call(e,"callee")||ee.call(e)==a)}(e)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],n=r.length,o=!!n;for(var i in e)!t&&!X.call(e,i)||o&&("length"==i||He(i,n))||r.push(i);return r}function Ne(e,t,r){var n=e[t];X.call(e,t)&&Ke(n,r)&&(void 0!==r||t in e)||(e[t]=r)}function Re(e,t){for(var r=e.length;r--;)if(Ke(e[r][0],t))return r;return-1}function ke(e,t,r,n,o,i,N){var R;if(n&&(R=i?n(e,o,i,N):n(e)),void 0!==R)return R;if(!Ue(e))return e;var x=Ve(e);if(x){if(R=function(e){var t=e.length,r=e.constructor(t);t&&"string"==typeof e[0]&&X.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!t)return function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(e,R)}else{var F=De(e),M=F==u||F==f;if(qe(e))return function(e,t){if(t)return e.slice();var r=new e.constructor(e.length);return e.copy(r),r}(e,t);if(F==y||F==a||M&&!i){if(L(e))return i?e:{};if(R=function(e){return"function"!=typeof e.constructor||Je(e)?{}:(t=ie(e),Ue(t)?ae(t):{});var t}(M?{}:e),!t)return function(e,t){return Me(e,Ce(e),t)}(e,function(e,t){return e&&Me(t,Ye(t),e)}(R,e))}else{if(!k[F])return i?e:{};R=function(e,t,r,n){var o=e.constructor;switch(t){case m:return Fe(e);case s:case c:return new o(+e);case v:return function(e,t){var r=t?Fe(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,n);case _:case w:case j:case O:case T:case $:case S:case A:case E:return function(e,t){var r=t?Fe(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}(e,n);case l:return function(e,t,r){return J(t?r(K(e),!0):K(e),D,new e.constructor)}(e,n,r);case p:case d:return new o(e);case h:return(u=new(a=e).constructor(a.source,I.exec(a))).lastIndex=a.lastIndex,u;case g:return function(e,t,r){return J(t?r(Z(e),!0):Z(e),H,new e.constructor)}(e,n,r);case b:return i=e,Te?Object(Te.call(i)):{}}var i;var a,u}(e,F,ke,t)}}N||(N=new Ee);var P=N.get(e);if(P)return P;if(N.set(e,R),!x)var W=r?function(e){return function(e,t,r){var n=t(e);return Ve(e)?n:function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}(n,r(e))}(e,Ye,Ce)}(e):Ye(e);return function(e,t){for(var r=-1,n=e?e.length:0;++r<n&&!1!==t(e[r],r,e););}(W||e,function(o,i){W&&(o=e[i=o]),Ne(R,i,ke(o,t,r,n,i,e,N))}),R}function xe(e){return!(!Ue(e)||(t=e,G&&G in t))&&(Be(e)||L(e)?te:N).test(Le(e));var t}function Fe(e){var t=new e.constructor(e.byteLength);return new oe(t).set(new oe(e)),t}function Me(e,t,r,n){r||(r={});for(var o=-1,i=t.length;++o<i;){var a=t[o],s=n?n(r[a],e[a],a,r,e):void 0;Ne(r,a,void 0===s?e[a]:s)}return r}function Pe(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function We(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return xe(r)?r:void 0}$e.prototype.clear=function(){this.__data__=be?be(null):{}},$e.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},$e.prototype.get=function(e){var t=this.__data__;if(be){var r=t[e];return r===o?void 0:r}return X.call(t,e)?t[e]:void 0},$e.prototype.has=function(e){var t=this.__data__;return be?void 0!==t[e]:X.call(t,e)},$e.prototype.set=function(e,t){return this.__data__[e]=be&&void 0===t?o:t,this},Se.prototype.clear=function(){this.__data__=[]},Se.prototype.delete=function(e){var t=this.__data__,r=Re(t,e);return!(r<0||(r==t.length-1?t.pop():ce.call(t,r,1),0))},Se.prototype.get=function(e){var t=this.__data__,r=Re(t,e);return r<0?void 0:t[r][1]},Se.prototype.has=function(e){return Re(this.__data__,e)>-1},Se.prototype.set=function(e,t){var r=this.__data__,n=Re(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},Ae.prototype.clear=function(){this.__data__={hash:new $e,map:new(ye||Se),string:new $e}},Ae.prototype.delete=function(e){return Pe(this,e).delete(e)},Ae.prototype.get=function(e){return Pe(this,e).get(e)},Ae.prototype.has=function(e){return Pe(this,e).has(e)},Ae.prototype.set=function(e,t){return Pe(this,e).set(e,t),this},Ee.prototype.clear=function(){this.__data__=new Se},Ee.prototype.delete=function(e){return this.__data__.delete(e)},Ee.prototype.get=function(e){return this.__data__.get(e)},Ee.prototype.has=function(e){return this.__data__.has(e)},Ee.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Se){var o=r.__data__;if(!ye||o.length<n-1)return o.push([e,t]),this;r=this.__data__=new Ae(o)}return r.set(e,t),this};var Ce=ue?V(ue,Object):function(){return[]},De=function(e){return ee.call(e)};function He(e,t){return!!(t=null==t?i:t)&&("number"==typeof e||R.test(e))&&e>-1&&e%1==0&&e<t}function Je(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Y)}function Le(e){if(null!=e){try{return Q.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Ke(e,t){return e===t||e!=e&&t!=t}(pe&&De(new pe(new ArrayBuffer(1)))!=v||ye&&De(new ye)!=l||he&&"[object Promise]"!=De(he.resolve())||ge&&De(new ge)!=g||de&&"[object WeakMap]"!=De(new de))&&(De=function(e){var t=ee.call(e),r=t==y?e.constructor:void 0,n=r?Le(r):void 0;if(n)switch(n){case me:return v;case ve:return l;case _e:return"[object Promise]";case we:return g;case je:return"[object WeakMap]"}return t});var Ve=Array.isArray;function Ze(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=i}(e.length)&&!Be(e)}var qe=fe||function(){return!1};function Be(e){var t=Ue(e)?ee.call(e):"";return t==u||t==f}function Ue(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Ye(e){return Ze(e)?Ie(e):function(e){if(!Je(e))return le(e);var t=[];for(var r in Object(e))X.call(e,r)&&"constructor"!=r&&t.push(r);return t}(e)}e.exports=function(e){return ke(e,!0,!0)}}),y="[object Object]";var h,g,d=Function.prototype,b=Object.prototype,m=d.toString,v=b.hasOwnProperty,_=m.call(Object),w=b.toString,j=(h=Object.getPrototypeOf,g=Object,function(e){return h(g(e))});var O=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||w.call(e)!=y||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=j(e);if(null===t)return!0;var r=v.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&m.call(r)==_};const T=Array.isArray;function $(e){return"string"==typeof e&&e.length>0&&"."===e[0]?e.slice(1):e}function S(e,t){return function e(t,r,n){const o=p(t);let i,a,s,c,u;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,T(o))for(i=0,a=o.length;i<a;i++){const t=`${n.path}.${i}`;void 0!==o[i]?(n.parent=p(o),n.parentType="array",s=e(r(o[i],void 0,Object.assign({},n,{path:$(t)})),r,Object.assign({},n,{path:$(t)})),Number.isNaN(s)&&i<o.length?(o.splice(i,1),i-=1):o[i]=s):o.splice(i,1)}else if(O(o))for(i=0,a=(c=Object.keys(o)).length;i<a;i++){u=c[i];const t=`${n.path}.${u}`;0===n.depth&&null!=u&&(n.topmostKey=u),n.parent=p(o),n.parentType="object",s=e(r(u,o[u],Object.assign({},n,{path:$(t)})),r,Object.assign({},n,{path:$(t)})),Number.isNaN(s)?delete o[u]:o[u]=s}return o}(e,t,{})}var A="__lodash_hash_undefined__",E=9007199254740991,I="[object Function]",N="[object GeneratorFunction]",R=/^\[object .+?Constructor\]$/,k="object"==typeof r&&r&&r.Object===Object&&r,x="object"==typeof self&&self&&self.Object===Object&&self,F=k||x||Function("return this")();function M(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function P(e,t){return!!(e?e.length:0)&&function(e,t,r){if(t!=t)return function(e,t,r,n){var o=e.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,D,r);var n=r-1,o=e.length;for(;++n<o;)if(e[n]===t)return n;return-1}(e,t,0)>-1}function W(e,t,r){for(var n=-1,o=e?e.length:0;++n<o;)if(r(t,e[n]))return!0;return!1}function C(e,t){for(var r=-1,n=e?e.length:0,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function D(e){return e!=e}function H(e){return function(t){return e(t)}}function J(e,t){return e.has(t)}var L,K=Array.prototype,V=Function.prototype,Z=Object.prototype,q=F["__core-js_shared__"],B=(L=/[^.]+$/.exec(q&&q.keys&&q.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"",U=V.toString,Y=Z.hasOwnProperty,z=Z.toString,G=RegExp("^"+U.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Q=K.splice,X=Math.max,ee=Math.min,te=le(F,"Map"),re=le(Object,"create");function ne(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function oe(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function ie(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function ae(e){var t=-1,r=e?e.length:0;for(this.__data__=new ie;++t<r;)this.add(e[t])}function se(e,t){for(var r,n,o=e.length;o--;)if((r=e[o][0])===(n=t)||r!=r&&n!=n)return o;return-1}function ce(e){return!(!ye(e)||function(e){return!!B&&B in e}(e))&&(pe(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?G:R).test(function(e){if(null!=e){try{return U.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e))}function ue(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&function(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=E}(e.length)&&!pe(e)}(e)}(e)?e:[]}function fe(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function le(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return ce(r)?r:void 0}function pe(e){var t=ye(e)?z.call(e):"";return t==I||t==N}function ye(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}ne.prototype.clear=function(){this.__data__=re?re(null):{}},ne.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},ne.prototype.get=function(e){var t=this.__data__;if(re){var r=t[e];return r===A?void 0:r}return Y.call(t,e)?t[e]:void 0},ne.prototype.has=function(e){var t=this.__data__;return re?void 0!==t[e]:Y.call(t,e)},ne.prototype.set=function(e,t){return this.__data__[e]=re&&void 0===t?A:t,this},oe.prototype.clear=function(){this.__data__=[]},oe.prototype.delete=function(e){var t=this.__data__,r=se(t,e);return!(r<0||(r==t.length-1?t.pop():Q.call(t,r,1),0))},oe.prototype.get=function(e){var t=this.__data__,r=se(t,e);return r<0?void 0:t[r][1]},oe.prototype.has=function(e){return se(this.__data__,e)>-1},oe.prototype.set=function(e,t){var r=this.__data__,n=se(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},ie.prototype.clear=function(){this.__data__={hash:new ne,map:new(te||oe),string:new ne}},ie.prototype.delete=function(e){return fe(this,e).delete(e)},ie.prototype.get=function(e){return fe(this,e).get(e)},ie.prototype.has=function(e){return fe(this,e).has(e)},ie.prototype.set=function(e,t){return fe(this,e).set(e,t),this},ae.prototype.add=ae.prototype.push=function(e){return this.__data__.set(e,A),this},ae.prototype.has=function(e){return this.__data__.has(e)};var he=function(e,t){return t=X(void 0===t?e.length-1:t,0),function(){for(var r=arguments,n=-1,o=X(r.length-t,0),i=Array(o);++n<o;)i[n]=r[t+n];n=-1;for(var a=Array(t+1);++n<t;)a[n]=r[n];return a[t]=i,M(e,this,a)}}(function(e){var t=C(e,ue);return t.length&&t[0]===e[0]?function(e,t,r){for(var n=r?W:P,o=e[0].length,i=e.length,a=i,s=Array(i),c=1/0,u=[];a--;){var f=e[a];a&&t&&(f=C(f,H(t))),c=ee(f.length,c),s[a]=!r&&(t||o>=120&&f.length>=120)?new ae(a&&f):void 0}f=e[0];var l=-1,p=s[0];e:for(;++l<o&&u.length<c;){var y=f[l],h=t?t(y):y;if(y=r||0!==y?y:0,!(p?J(p,h):n(u,h,r))){for(a=i;--a;){var g=s[a];if(!(g?J(g,h):n(e[a],h,r)))continue e}p&&p.push(h),u.push(y)}}return u}(t):[]});function ge(e){return"string"==typeof e?e.length>0?[e]:[]:e}var de=n(function(e){e.exports=function(){var e=Object.prototype.toString;function t(e,t){return null!=e&&Object.prototype.hasOwnProperty.call(e,t)}function r(e){if(!e)return!0;if(o(e)&&0===e.length)return!0;if("string"!=typeof e){for(var r in e)if(t(e,r))return!1;return!0}return!1}function n(t){return e.call(t)}var o=Array.isArray||function(t){return"[object Array]"===e.call(t)};function i(e){var t=parseInt(e);return t.toString()===e?t:e}function a(e){e=e||{};var a=function(e){return Object.keys(a).reduce(function(t,r){return"create"===r?t:("function"==typeof a[r]&&(t[r]=a[r].bind(a,e)),t)},{})};function s(r,n){return e.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||t(r,n)}function c(e,t){if(s(e,t))return e[t]}function u(e,t,r,n){if("number"==typeof t&&(t=[t]),!t||0===t.length)return e;if("string"==typeof t)return u(e,t.split(".").map(i),r,n);var o=t[0],a=c(e,o);return 1===t.length?(void 0!==a&&n||(e[o]=r),a):(void 0===a&&("number"==typeof t[1]?e[o]=[]:e[o]={}),u(e[o],t.slice(1),r,n))}return a.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var a=0;a<n.length;a++){var s=i(n[a]);if(!("number"==typeof s&&o(r)&&s<r.length||(e.includeInheritedProps?s in Object(r):t(r,s))))return!1;r=r[s]}return!0},a.ensureExists=function(e,t,r){return u(e,t,r,!0)},a.set=function(e,t,r,n){return u(e,t,r,n)},a.insert=function(e,t,r,n){var i=a.get(e,t);n=~~n,o(i)||(i=[],a.set(e,t,i)),i.splice(n,0,r)},a.empty=function(e,t){var i,c;if(!r(t)&&null!=e&&(i=a.get(e,t))){if("string"==typeof i)return a.set(e,t,"");if(function(e){return"boolean"==typeof e||"[object Boolean]"===n(e)}(i))return a.set(e,t,!1);if("number"==typeof i)return a.set(e,t,0);if(o(i))i.length=0;else{if(!function(e){return"object"==typeof e&&"[object Object]"===n(e)}(i))return a.set(e,t,null);for(c in i)s(i,c)&&delete i[c]}}},a.push=function(e,t){var r=a.get(e,t);o(r)||(r=[],a.set(e,t,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},a.coalesce=function(e,t,r){for(var n,o=0,i=t.length;o<i;o++)if(void 0!==(n=a.get(e,t[o])))return n;return r},a.get=function(e,t,r){if("number"==typeof t&&(t=[t]),!t||0===t.length)return e;if(null==e)return r;if("string"==typeof t)return a.get(e,t.split("."),r);var n=i(t[0]),o=c(e,n);return void 0===o?r:1===t.length?o:a.get(e[n],t.slice(1),r)},a.del=function(e,t){if("number"==typeof t&&(t=[t]),null==e)return e;if(r(t))return e;if("string"==typeof t)return a.del(e,t.split("."));var n=i(t[0]);return s(e,n)?1!==t.length?a.del(e[n],t.slice(1)):(o(e)?e.splice(n,1):delete e[n],e):e},a}var s=a();return s.create=a,s.withInheritedProps=a({includeInheritedProps:!0}),s}()}),be=function(e){var t=(e=Math.abs(e))%100;if(t>=10&&t<=20)return"th";var r=e%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"};function me(e){if("number"!=typeof e)throw new TypeError("Expected Number, got "+typeof e+" "+e);return Number.isFinite(e)?e+be(e):e}me.indicator=be;var ve=me;const _e=/[|\\{}()[\]^$+*?.-]/g;var we=e=>{if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(_e,"\\$&")};const je=new Map;function Oe(e,t){t={caseSensitive:!1,...t};const r=e+JSON.stringify(t);if(je.has(r))return je.get(r);const n="!"===e[0];n&&(e=e.slice(1)),e=we(e).replace(/\\\*/g,".*");const o=new RegExp(`^${e}$`,t.caseSensitive?"":"i");return o.negated=n,je.set(r,o),o}var Te=(e,t,r)=>{if(!Array.isArray(e)||!Array.isArray(t))throw new TypeError(`Expected two arrays, got ${typeof e} ${typeof t}`);if(0===t.length)return e;const n="!"===t[0][0];t=t.map(e=>Oe(e,r));const o=[];for(const r of e){let e=n;for(const n of t)n.test(r)&&(e=!n.negated);e&&o.push(r)}return o};function $e(e,t,r){return function e(t,r,n,o=!0){const a=Object.prototype.hasOwnProperty;function s(e){return null!=e}function c(e){return"Object"===i(e)}function u(e,t){return t=ge(t),Array.from(e).filter(e=>!t.some(t=>Te.isMatch(e,t,{caseSensitive:!0})))}const f=["any","anything","every","everything","all","whatever","whatevs"],p=Array.isArray;if(!s(t))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const y={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let h;if(h=s(n)&&c(n)?Object.assign({},y,n):Object.assign({},y),s(h.ignoreKeys)&&h.ignoreKeys?h.ignoreKeys=ge(h.ignoreKeys):h.ignoreKeys=[],s(h.ignorePaths)&&h.ignorePaths?h.ignorePaths=ge(h.ignorePaths):h.ignorePaths=[],s(h.acceptArraysIgnore)&&h.acceptArraysIgnore?h.acceptArraysIgnore=ge(h.acceptArraysIgnore):h.acceptArraysIgnore=[],h.msg="string"==typeof h.msg?h.msg.trim():h.msg,":"===h.msg[h.msg.length-1]&&(h.msg=h.msg.slice(0,h.msg.length-1).trim()),h.schema&&(Object.keys(h.schema).forEach(e=>{if(c(h.schema[e])){const t={};S(h.schema[e],(r,n,o)=>{const i=void 0!==n?n:r;return p(i)||c(i)||(t[`${e}.${o.path}`]=i),i}),delete h.schema[e],h.schema=Object.assign(h.schema,t)}}),Object.keys(h.schema).forEach(e=>{p(h.schema[e])||(h.schema[e]=[h.schema[e]]),h.schema[e]=h.schema[e].map(String).map(e=>e.toLowerCase()).map(e=>e.trim())})),s(r)||(r={}),o&&e(h,y,{enforceStrictKeyset:!1},!1),h.enforceStrictKeyset)if(s(h.schema)&&Object.keys(h.schema).length>0){if(0!==u(l(Object.keys(t),Object.keys(r).concat(Object.keys(h.schema))),h.ignoreKeys).length){const e=l(Object.keys(t),Object.keys(r).concat(Object.keys(h.schema)));throw new TypeError(`${h.msg}: ${h.optsVarName}.enforceStrictKeyset is on and the following key${e.length>1?"s":""} ${e.length>1?"are":"is"} not covered by schema and/or reference objects: ${e.join(", ")}`)}}else{if(!(s(r)&&Object.keys(r).length>0))throw new TypeError(`${h.msg}: Both ${h.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==u(l(Object.keys(t),Object.keys(r)),h.ignoreKeys).length){const e=l(Object.keys(t),Object.keys(r));throw new TypeError(`${h.msg}: The input object has key${e.length>1?"s":""} which ${e.length>1?"are":"is"} not covered by the reference object: ${e.join(", ")}`)}if(0!==u(l(Object.keys(r),Object.keys(t)),h.ignoreKeys).length){const e=l(Object.keys(r),Object.keys(t));throw new TypeError(`${h.msg}: The reference object has key${e.length>1?"s":""} which ${e.length>1?"are":"is"} not present in the input object: ${e.join(", ")}`)}}const g=[];S(t,(e,n,o)=>{let s=n,u=e;if("array"===o.parentType&&(u=void 0,s=e),p(g)&&g.length&&g.some(e=>o.path.startsWith(e)))return s;if(u&&h.ignoreKeys.some(e=>Te.isMatch(u,e)))return s;if(h.ignorePaths.some(e=>Te.isMatch(o.path,e)))return s;const l=!(!c(s)&&!p(s)&&p(o.parent));let y=!1;c(h.schema)&&a.call(h.schema,de.get(o.path))&&(y=!0);let d=!1;if(c(r)&&de.has(r,de.get(o.path))&&(d=!0),h.enforceStrictKeyset&&l&&!y&&!d)throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path} is neither covered by reference object (second input argument), nor ${h.optsVarName}.schema! To stop this error, turn off ${h.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${h.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(t,null,4)}\n\nref = ${JSON.stringify(r,null,4)}\n\ninnerObj = ${JSON.stringify(o,null,4)}\n\nopts = ${JSON.stringify(h,null,4)}\n\ncurrent = ${JSON.stringify(s,null,4)}\n\n`);if(y){const e=ge(h.schema[o.path]).map(String).map(e=>e.toLowerCase());if(de.set(h.schema,o.path,e),he(e,f).length)g.push(o.path);else if(!0!==s&&!1!==s&&!e.includes(i(s).toLowerCase())||(!0===s||!1===s)&&!e.includes(String(s))&&!e.includes("boolean")){if(!p(s)||!h.acceptArrays)throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path} was customised to ${"string"!==i(s)?'"':""}${JSON.stringify(s,null,0)}${"string"!==i(s)?'"':""} (type: ${i(s).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(e,null,0)})`);for(let t=0,r=s.length;t<r;t++)if(!e.includes(i(s[t]).toLowerCase()))throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path}.${t}, the ${ve(t+1)} element (equal to ${JSON.stringify(s[t],null,0)}) is of a type ${i(s[t]).toLowerCase()}, but only the following are allowed by the ${h.optsVarName}.schema: ${e.join(", ")}`)}}else if(d){const t=de.get(r,o.path);if(h.acceptArrays&&p(s)&&!h.acceptArraysIgnore.includes(e)){if(!s.every(t=>i(t).toLowerCase()===i(r[e]).toLowerCase()))throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path} was customised to be array, but not all of its elements are ${i(r[e]).toLowerCase()}-type`)}else if(i(s)!==i(t))throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path} was customised to ${"string"===i(s).toLowerCase()?"":'"'}${JSON.stringify(s,null,0)}${"string"===i(s).toLowerCase()?"":'"'} which is not ${i(t).toLowerCase()} but ${i(s).toLowerCase()}`)}return s})}(e,t,r)}Te.isMatch=(e,t,r)=>{const n=Oe(t,r),o=n.test(e);return n.negated?!o:o};const Se=Array.isArray;function Ae(e,r){if(!Se(e))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===e.length)return e;const n={strictlyTwoElementsInRangeArrays:!1,progressFn:null},i=Object.assign({},n,r);let a,s;if($e(i,n,{msg:"ranges-sort: [THROW_ID_02*]",schema:{progressFn:["function","false","null"]}}),i.strictlyTwoElementsInRangeArrays&&!e.every((e,t)=>2===e.length||(a=t,s=e.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${o(a)} range (${JSON.stringify(e[a],null,4)}) has not two but ${s} elements!`);if(!e.every((e,r)=>!(!t(e[0],{includeZero:!0})||!t(e[1],{includeZero:!0}))||(a=r,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${o(a)} range (${JSON.stringify(e[a],null,4)}) does not consist of only natural numbers!`);const c=e.length*e.length;let u=0;return Array.from(e).sort((e,t)=>(i.progressFn&&(u++,i.progressFn(Math.floor(100*u/c))),e[0]===t[0]?e[1]<t[1]?-1:e[1]>t[1]?1:0:e[0]<t[0]?-1:1))}function Ee(e,t){function r(e){return"string"==typeof e}if(!Array.isArray(e))return e;const n={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let o;if(t){if(!O(t))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(t,null,4)} (type ${typeof t})`);if((o=Object.assign({},n,t)).progressFn&&O(o.progressFn)&&!Object.keys(o.progressFn).length)o.progressFn=null;else if(o.progressFn&&"function"!=typeof o.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof o.progressFn}", equal to ${JSON.stringify(o.progressFn,null,4)}`);if(o.mergeType&&1!==o.mergeType&&2!==o.mergeType)if(r(o.mergeType)&&"1"===o.mergeType.trim())o.mergeType=1;else{if(!r(o.mergeType)||"2"!==o.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof o.mergeType}", equal to ${JSON.stringify(o.progressFn,null,4)}`);o.mergeType=2}if("boolean"!=typeof o.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof o.joinRangesThatTouchEdges}", equal to ${JSON.stringify(o.joinRangesThatTouchEdges,null,4)}`)}else o=p(n);const i=p(e).filter(e=>void 0!==e[2]||e[0]!==e[1]);let a,s,c;const u=(a=o.progressFn?Ae(i,{progressFn:e=>{(c=Math.floor(e/5))!==s&&(s=c,o.progressFn(c))}}):Ae(i)).length-1;for(let e=u;e>0;e--)o.progressFn&&(c=Math.floor(78*(1-e/u))+21)!==s&&c>s&&(s=c,o.progressFn(c)),(a[e][0]<=a[e-1][0]||!o.joinRangesThatTouchEdges&&a[e][0]<a[e-1][1]||o.joinRangesThatTouchEdges&&a[e][0]<=a[e-1][1])&&(a[e-1][0]=Math.min(a[e][0],a[e-1][0]),a[e-1][1]=Math.max(a[e][1],a[e-1][1]),void 0!==a[e][2]&&(a[e-1][0]>=a[e][0]||a[e-1][1]<=a[e][1])&&null!==a[e-1][2]&&(null===a[e][2]&&null!==a[e-1][2]?a[e-1][2]=null:void 0!==a[e-1][2]?2===o.mergeType&&a[e-1][0]===a[e][0]?a[e-1][2]=a[e][2]:a[e-1][2]+=a[e][2]:a[e-1][2]=a[e][2]),a.splice(e,1),e=a.length);return a}const Ie=Array.isArray;var Ne=Array.isArray;return function(r,n,i){if(!Ne(r)&&null!==r)throw new TypeError("ranges-invert: [THROW_ID_01] Input's first argument must be an array, consisting of range arrays! Currently its type is: ".concat(e(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(!t(n,{includeZero:!0}))throw new TypeError("ranges-invert: [THROW_ID_02] Input's second argument must be a natural number or zero (coming from String.length)! Currently its type is: ".concat(e(n),", equal to: ").concat(JSON.stringify(n,null,4)));if(null===r)return 0===n?[]:[[0,n]];if(0===r.length)return[];var a,s,c,u={strictlyTwoElementsInRangeArrays:!1,skipChecks:!1},f=Object.assign({},u,i);if($e(f,u,{msg:"ranges-invert: [THROW_ID_03*]"}),!f.skipChecks&&f.strictlyTwoElementsInRangeArrays&&!r.every(function(e,t){return 2===e.length||(a=t,s=e.length,!1)}))throw new TypeError("ranges-invert: [THROW_ID_04] Because opts.strictlyTwoElementsInRangeArrays was enabled, all ranges must be strictly two-element-long. However, the ".concat(o(a)," range (").concat(JSON.stringify(r[a],null,0),") has not two but ").concat(s," elements!"));if(!f.skipChecks&&!r.every(function(e,r){return!(!t(e[0],{includeZero:!0})||!t(e[1],{includeZero:!0}))||(a=r,!1)})){if(Array.isArray(r)&&"number"==typeof r[0]&&"number"==typeof r[1])throw new TypeError("ranges-invert: [THROW_ID_07] The first argument should be AN ARRAY OF RANGES, not a single range! Currently arrOfRanges = ".concat(JSON.stringify(r,null,0),"!"));throw new TypeError("ranges-invert: [THROW_ID_05] The first argument should be AN ARRAY OF ARRAYS! Each sub-array means string slice indexes. In our case, here ".concat(o(a+1)," range (").concat(JSON.stringify(r[a],null,0),") does not consist of only natural numbers!"))}return 0===(c=f.skipChecks?r.filter(function(e){return e[0]!==e[1]}):Ee(r.filter(function(e){return e[0]!==e[1]}))).length?0===n?[]:[[0,n]]:function(e,r){if(!Ie(e))throw new TypeError(`ranges-crop: [THROW_ID_01] The first input's argument must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(!t(r,{includeZero:!0}))throw new TypeError(`ranges-crop: [THROW_ID_02] The second input's argument must be a natural number or zero (coming from String.length)! Currently its type is: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(0===e.length)return e;let n;if(!e.every((e,r)=>!(!t(e[0],{includeZero:!0})||!t(e[1],{includeZero:!0}))||(n=r,!1))){if(Array.isArray(e)&&"number"==typeof e[0]&&"number"==typeof e[1])throw new TypeError(`ranges-crop: [THROW_ID_03] The first argument should be AN ARRAY OF RANGES, not a single range! Currently arrOfRanges = ${JSON.stringify(e,null,0)}!`);throw new TypeError(`ranges-crop: [THROW_ID_04] The first argument should be AN ARRAY OF ARRAYS! Each sub-array means string slice indexes. In our case, here ${o(n+1)} range (${JSON.stringify(e[n],null,0)}) does not consist of only natural numbers!`)}if(!e.every((e,t)=>!(function(e){return null!=e}(e[2])&&!function(e){return"string"==typeof e}(e[2])&&(n=t,1))))throw new TypeError(`ranges-crop: [THROW_ID_05] The third argument, if present at all, should be of a string-type or null. Currently the ${o(n)} range ${JSON.stringify(e[n],null,0)} has a argument in the range of a type ${typeof e[n][2]}`);return Ee(e).filter(e=>e[0]<=r&&(void 0!==e[2]||e[0]<r)).map(e=>e[1]>r?void 0!==e[2]?[e[0],r,e[2]]:[e[0],r]:e)}(c.reduce(function(e,t,r,o){var i=[];0===r&&0!==o[0][0]&&i.push([0,o[0][0]]);var a=r<o.length-1?o[r+1][0]:n;if(t[1]!==a){if(f.skipChecks&&t[1]>a)throw new TypeError("ranges-invert: [THROW_ID_08] The checking (opts.skipChecks) is off and input ranges were not sorted! We nearly wrote range [".concat(t[1],", ").concat(a,"] which is backwards. For investigation, whole ranges array is:\n").concat(JSON.stringify(o,null,0)));i.push([t[1],a])}return e.concat(i)},[]),n)}});

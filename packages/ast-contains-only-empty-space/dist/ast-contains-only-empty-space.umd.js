/**
 * ast-contains-only-empty-space
 * Returns Boolean depending if passed AST contain only empty space
 * Version: 1.8.19
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ast-contains-only-empty-space
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).astContainsOnlyEmptySpace=e()}(this,function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var e=1/0,r="[object Symbol]",n=/^\s+|\s+$/g,o="[\\ud800-\\udfff]",u="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",c="\\ud83c[\\udffb-\\udfff]",i="[^\\ud800-\\udfff]",a="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",s="(?:"+u+"|"+c+")"+"?",l="[\\ufe0e\\ufe0f]?"+s+("(?:\\u200d(?:"+[i,a,f].join("|")+")[\\ufe0e\\ufe0f]?"+s+")*"),p="(?:"+[i+u+"?",u,a,f,o].join("|")+")",y=RegExp(c+"(?="+c+")|"+p+l,"g"),h=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),d="object"==typeof t&&t&&t.Object===Object&&t,b="object"==typeof self&&self&&self.Object===Object&&self,v=d||b||Function("return this")();function _(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,u=r+(n?1:-1);n?u--:++u<o;)if(e(t[u],u,t))return u;return-1}(t,j,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function j(t){return t!=t}function g(t){return function(t){return h.test(t)}(t)?function(t){return t.match(y)||[]}(t):function(t){return t.split("")}(t)}var O=Object.prototype.toString,w=v.Symbol,m=w?w.prototype:void 0,A=m?m.toString:void 0;function S(t){if("string"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&O.call(t)==r}(t))return A?A.call(t):"";var n=t+"";return"0"==n&&1/t==-e?"-0":n}function x(t,e,r){var n=t.length;return r=void 0===r?n:r,!e&&r>=n?t:function(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(r=r>o?o:r)<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var u=Array(o);++n<o;)u[n]=t[n+e];return u}(t,e,r)}var $=function(t,e,r){var o;if((t=null==(o=t)?"":S(o))&&(r||void 0===e))return t.replace(n,"");if(!t||!(e=S(e)))return t;var u=g(t),c=g(e);return x(u,function(t,e){for(var r=-1,n=t.length;++r<n&&_(e,t[r],0)>-1;);return r}(u,c),function(t,e){for(var r=t.length;r--&&_(e,t[r],0)>-1;);return r}(u,c)+1).join("")},E="[object Object]";var P,k,F=Function.prototype,I=Object.prototype,N=F.toString,T=I.hasOwnProperty,M=N.call(Object),B=I.toString,R=(P=Object.getPrototypeOf,k=Object,function(t){return P(k(t))});var U,W=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||B.call(t)!=E||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=R(t);if(null===e)return!0;var r=T.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&N.call(r)==M},C=(function(e,r){var n=200,o="__lodash_hash_undefined__",u=9007199254740991,c="[object Arguments]",i="[object Boolean]",a="[object Date]",f="[object Function]",s="[object GeneratorFunction]",l="[object Map]",p="[object Number]",y="[object Object]",h="[object RegExp]",d="[object Set]",b="[object String]",v="[object Symbol]",_="[object ArrayBuffer]",j="[object DataView]",g="[object Float32Array]",O="[object Float64Array]",w="[object Int8Array]",m="[object Int16Array]",A="[object Int32Array]",S="[object Uint8Array]",x="[object Uint8ClampedArray]",$="[object Uint16Array]",E="[object Uint32Array]",P=/\w*$/,k=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,I={};I[c]=I["[object Array]"]=I[_]=I[j]=I[i]=I[a]=I[g]=I[O]=I[w]=I[m]=I[A]=I[l]=I[p]=I[y]=I[h]=I[d]=I[b]=I[v]=I[S]=I[x]=I[$]=I[E]=!0,I["[object Error]"]=I[f]=I["[object WeakMap]"]=!1;var N="object"==typeof t&&t&&t.Object===Object&&t,T="object"==typeof self&&self&&self.Object===Object&&self,M=N||T||Function("return this")(),B=r&&!r.nodeType&&r,R=B&&e&&!e.nodeType&&e,U=R&&R.exports===B;function W(t,e){return t.set(e[0],e[1]),t}function C(t,e){return t.add(e),t}function D(t,e,r,n){var o=-1,u=t?t.length:0;for(n&&u&&(r=t[++o]);++o<u;)r=e(r,t[o],o,t);return r}function z(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function L(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function V(t,e){return function(r){return t(e(r))}}function G(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var K,q=Array.prototype,H=Function.prototype,J=Object.prototype,Q=M["__core-js_shared__"],X=(K=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+K:"",Y=H.toString,Z=J.hasOwnProperty,tt=J.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=U?M.Buffer:void 0,nt=M.Symbol,ot=M.Uint8Array,ut=V(Object.getPrototypeOf,Object),ct=Object.create,it=J.propertyIsEnumerable,at=q.splice,ft=Object.getOwnPropertySymbols,st=rt?rt.isBuffer:void 0,lt=V(Object.keys,Object),pt=Rt(M,"DataView"),yt=Rt(M,"Map"),ht=Rt(M,"Promise"),dt=Rt(M,"Set"),bt=Rt(M,"WeakMap"),vt=Rt(Object,"create"),_t=zt(pt),jt=zt(yt),gt=zt(ht),Ot=zt(dt),wt=zt(bt),mt=nt?nt.prototype:void 0,At=mt?mt.valueOf:void 0;function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function xt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function $t(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){this.__data__=new xt(t)}function Pt(t,e){var r=Vt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Gt(t)}(t)&&Z.call(t,"callee")&&(!it.call(t,"callee")||tt.call(t)==c)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var u in t)!e&&!Z.call(t,u)||o&&("length"==u||Ct(u,n))||r.push(u);return r}function kt(t,e,r){var n=t[e];Z.call(t,e)&&Lt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Ft(t,e){for(var r=t.length;r--;)if(Lt(t[r][0],e))return r;return-1}function It(t,e,r,n,o,u,k){var F;if(n&&(F=u?n(t,o,u,k):n(t)),void 0!==F)return F;if(!Ht(t))return t;var N=Vt(t);if(N){if(F=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,F)}else{var T=Wt(t),M=T==f||T==s;if(Kt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(T==y||T==c||M&&!u){if(z(t))return u?t:{};if(F=function(t){return"function"!=typeof t.constructor||Dt(t)?{}:(e=ut(t),Ht(e)?ct(e):{});var e}(M?{}:t),!e)return function(t,e){return Mt(t,Ut(t),e)}(t,function(t,e){return t&&Mt(e,Jt(e),t)}(F,t))}else{if(!I[T])return u?t:{};F=function(t,e,r,n){var o=t.constructor;switch(e){case _:return Tt(t);case i:case a:return new o(+t);case j:return function(t,e){var r=e?Tt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case g:case O:case w:case m:case A:case S:case x:case $:case E:return function(t,e){var r=e?Tt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return D(e?r(L(t),!0):L(t),W,new t.constructor)}(t,n,r);case p:case b:return new o(t);case h:return(f=new(c=t).constructor(c.source,P.exec(c))).lastIndex=c.lastIndex,f;case d:return function(t,e,r){return D(e?r(G(t),!0):G(t),C,new t.constructor)}(t,n,r);case v:return u=t,At?Object(At.call(u)):{}}var u;var c,f}(t,T,It,e)}}k||(k=new Et);var B=k.get(t);if(B)return B;if(k.set(t,F),!N)var R=r?function(t){return function(t,e,r){var n=e(t);return Vt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Jt,Ut)}(t):Jt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(R||t,function(o,u){R&&(o=t[u=o]),kt(F,u,It(o,e,r,n,u,t,k))}),F}function Nt(t){return!(!Ht(t)||(e=t,X&&X in e))&&(qt(t)||z(t)?et:k).test(zt(t));var e}function Tt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Mt(t,e,r,n){r||(r={});for(var o=-1,u=e.length;++o<u;){var c=e[o],i=n?n(r[c],t[c],c,r,t):void 0;kt(r,c,void 0===i?t[c]:i)}return r}function Bt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Rt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Nt(r)?r:void 0}St.prototype.clear=function(){this.__data__=vt?vt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var e=this.__data__;if(vt){var r=e[t];return r===o?void 0:r}return Z.call(e,t)?e[t]:void 0},St.prototype.has=function(t){var e=this.__data__;return vt?void 0!==e[t]:Z.call(e,t)},St.prototype.set=function(t,e){return this.__data__[t]=vt&&void 0===e?o:e,this},xt.prototype.clear=function(){this.__data__=[]},xt.prototype.delete=function(t){var e=this.__data__,r=Ft(e,t);return!(r<0||(r==e.length-1?e.pop():at.call(e,r,1),0))},xt.prototype.get=function(t){var e=this.__data__,r=Ft(e,t);return r<0?void 0:e[r][1]},xt.prototype.has=function(t){return Ft(this.__data__,t)>-1},xt.prototype.set=function(t,e){var r=this.__data__,n=Ft(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},$t.prototype.clear=function(){this.__data__={hash:new St,map:new(yt||xt),string:new St}},$t.prototype.delete=function(t){return Bt(this,t).delete(t)},$t.prototype.get=function(t){return Bt(this,t).get(t)},$t.prototype.has=function(t){return Bt(this,t).has(t)},$t.prototype.set=function(t,e){return Bt(this,t).set(t,e),this},Et.prototype.clear=function(){this.__data__=new xt},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,e){var r=this.__data__;if(r instanceof xt){var o=r.__data__;if(!yt||o.length<n-1)return o.push([t,e]),this;r=this.__data__=new $t(o)}return r.set(t,e),this};var Ut=ft?V(ft,Object):function(){return[]},Wt=function(t){return tt.call(t)};function Ct(t,e){return!!(e=null==e?u:e)&&("number"==typeof t||F.test(t))&&t>-1&&t%1==0&&t<e}function Dt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||J)}function zt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Lt(t,e){return t===e||t!=t&&e!=e}(pt&&Wt(new pt(new ArrayBuffer(1)))!=j||yt&&Wt(new yt)!=l||ht&&"[object Promise]"!=Wt(ht.resolve())||dt&&Wt(new dt)!=d||bt&&"[object WeakMap]"!=Wt(new bt))&&(Wt=function(t){var e=tt.call(t),r=e==y?t.constructor:void 0,n=r?zt(r):void 0;if(n)switch(n){case _t:return j;case jt:return l;case gt:return"[object Promise]";case Ot:return d;case wt:return"[object WeakMap]"}return e});var Vt=Array.isArray;function Gt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=u}(t.length)&&!qt(t)}var Kt=st||function(){return!1};function qt(t){var e=Ht(t)?tt.call(t):"";return e==f||e==s}function Ht(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Jt(t){return Gt(t)?Pt(t):function(t){if(!Dt(t))return lt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}e.exports=function(t){return It(t,!0,!0)}}(U={exports:{}},U.exports),U.exports);const D=Array.isArray;function z(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function L(t,e){return function t(e,r,n){const o=C(e);let u,c,i,a,f;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,D(o))for(u=0,c=o.length;u<c;u++){const e=`${n.path}.${u}`;void 0!==o[u]?(n.parent=C(o),n.parentType="array",i=t(r(o[u],void 0,Object.assign({},n,{path:z(e)})),r,Object.assign({},n,{path:z(e)})),Number.isNaN(i)&&u<o.length?(o.splice(u,1),u-=1):o[u]=i):o.splice(u,1)}else if(W(o))for(u=0,c=(a=Object.keys(o)).length;u<c;u++){f=a[u];const e=`${n.path}.${f}`;0===n.depth&&null!=f&&(n.topmostKey=f),n.parent=C(o),n.parentType="object",i=t(r(f,o[f],Object.assign({},n,{path:z(e)})),r,Object.assign({},n,{path:z(e)})),Number.isNaN(i)?delete o[f]:o[f]=i}return o}(t,e,{})}return function(t){function e(t){return"string"==typeof t}var r=Array.isArray,n=!0;return!!(r(t)||W(t)||e(t))&&(e(t)?0===$(t).length:(t=L(t,function(t,r){var o=void 0!==r?r:t;return e(o)&&""!==$(o)&&(n=!1),o}),n))}});

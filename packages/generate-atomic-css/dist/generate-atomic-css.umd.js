/**
 * generate-atomic-css
 * Generate Atomic CSS
 * Version: 1.2.52
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/generate-atomic-css/
 */

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).generateAtomicCss={})}(this,(function(t){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){e(t,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))}))}return t}function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],r=!0,i=!1,o=void 0;try{for(var c,u=t[Symbol.iterator]();!(r=(c=u.next()).done)&&(e.push(c.value),!n||e.length!==n);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return e}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return c(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var u,l,a=Function.prototype,f=Object.prototype,s=a.toString,d=f.hasOwnProperty,h=s.call(Object),g=f.toString,p=(u=Object.getPrototypeOf,l=Object,function(t){return u(l(t))});var v=function(t){if(!function(t){return!!t&&"object"==n(t)}(t)||"[object Object]"!=g.call(t)||function(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}(t))return!1;var e=p(t);if(null===e)return!0;var r=d.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&s.call(r)==h},y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t,n,e){t(e={path:n,exports:{},require:function(t,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&e.path)}},e.exports),e.exports}((function(t,e){var r="__lodash_hash_undefined__",i=9007199254740991,o="[object Arguments]",c="[object Boolean]",u="[object Date]",l="[object Function]",a="[object GeneratorFunction]",f="[object Map]",s="[object Number]",d="[object Object]",h="[object Promise]",g="[object RegExp]",p="[object Set]",v="[object String]",b="[object Symbol]",m="[object WeakMap]",O="[object ArrayBuffer]",_="[object DataView]",j="[object Float32Array]",w="[object Float64Array]",A="[object Int8Array]",x="[object Int16Array]",S="[object Int32Array]",T="[object Uint8Array]",E="[object Uint8ClampedArray]",C="[object Uint16Array]",I="[object Uint32Array]",N=/\w*$/,$=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,P={};P[o]=P["[object Array]"]=P[O]=P[_]=P[c]=P[u]=P[j]=P[w]=P[A]=P[x]=P[S]=P[f]=P[s]=P[d]=P[g]=P[p]=P[v]=P[b]=P[T]=P[E]=P[C]=P[I]=!0,P["[object Error]"]=P[l]=P[m]=!1;var W="object"==n(y)&&y&&y.Object===Object&&y,D="object"==("undefined"==typeof self?"undefined":n(self))&&self&&self.Object===Object&&self,H=W||D||Function("return this")(),R=e&&!e.nodeType&&e,G=R&&t&&!t.nodeType&&t,L=G&&G.exports===R;function M(t,n){return t.set(n[0],n[1]),t}function k(t,n){return t.add(n),t}function U(t,n,e,r){var i=-1,o=t?t.length:0;for(r&&o&&(e=t[++i]);++i<o;)e=n(e,t[i],i,t);return e}function B(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}function q(t){var n=-1,e=Array(t.size);return t.forEach((function(t,r){e[++n]=[r,t]})),e}function z(t,n){return function(e){return t(n(e))}}function V(t){var n=-1,e=Array(t.size);return t.forEach((function(t){e[++n]=t})),e}var J,K=Array.prototype,Q=Function.prototype,X=Object.prototype,Y=H["__core-js_shared__"],Z=(J=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+J:"",tt=Q.toString,nt=X.hasOwnProperty,et=X.toString,rt=RegExp("^"+tt.call(nt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),it=L?H.Buffer:void 0,ot=H.Symbol,ct=H.Uint8Array,ut=z(Object.getPrototypeOf,Object),lt=Object.create,at=X.propertyIsEnumerable,ft=K.splice,st=Object.getOwnPropertySymbols,dt=it?it.isBuffer:void 0,ht=z(Object.keys,Object),gt=Gt(H,"DataView"),pt=Gt(H,"Map"),vt=Gt(H,"Promise"),yt=Gt(H,"Set"),bt=Gt(H,"WeakMap"),mt=Gt(Object,"create"),Ot=Bt(gt),_t=Bt(pt),jt=Bt(vt),wt=Bt(yt),At=Bt(bt),xt=ot?ot.prototype:void 0,St=xt?xt.valueOf:void 0;function Tt(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function Et(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function Ct(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function It(t){this.__data__=new Et(t)}function Nt(t,e){var r=zt(t)||function(t){return function(t){return function(t){return!!t&&"object"==n(t)}(t)&&Vt(t)}(t)&&nt.call(t,"callee")&&(!at.call(t,"callee")||et.call(t)==o)}(t)?function(t,n){for(var e=-1,r=Array(t);++e<t;)r[e]=n(e);return r}(t.length,String):[],i=r.length,c=!!i;for(var u in t)!e&&!nt.call(t,u)||c&&("length"==u||kt(u,i))||r.push(u);return r}function $t(t,n,e){var r=t[n];nt.call(t,n)&&qt(r,e)&&(void 0!==e||n in t)||(t[n]=e)}function Ft(t,n){for(var e=t.length;e--;)if(qt(t[e][0],n))return e;return-1}function Pt(t,n,e,r,i,h,y){var m;if(r&&(m=h?r(t,i,h,y):r(t)),void 0!==m)return m;if(!Qt(t))return t;var $=zt(t);if($){if(m=function(t){var n=t.length,e=t.constructor(n);n&&"string"==typeof t[0]&&nt.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!n)return function(t,n){var e=-1,r=t.length;n||(n=Array(r));for(;++e<r;)n[e]=t[e];return n}(t,m)}else{var F=Mt(t),W=F==l||F==a;if(Jt(t))return function(t,n){if(n)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,n);if(F==d||F==o||W&&!h){if(B(t))return h?t:{};if(m=function(t){return"function"!=typeof t.constructor||Ut(t)?{}:(n=ut(t),Qt(n)?lt(n):{});var n}(W?{}:t),!n)return function(t,n){return Ht(t,Lt(t),n)}(t,function(t,n){return t&&Ht(n,Xt(n),t)}(m,t))}else{if(!P[F])return h?t:{};m=function(t,n,e,r){var i=t.constructor;switch(n){case O:return Dt(t);case c:case u:return new i(+t);case _:return function(t,n){var e=n?Dt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,r);case j:case w:case A:case x:case S:case T:case E:case C:case I:return function(t,n){var e=n?Dt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,r);case f:return function(t,n,e){return U(n?e(q(t),!0):q(t),M,new t.constructor)}(t,r,e);case s:case v:return new i(t);case g:return function(t){var n=new t.constructor(t.source,N.exec(t));return n.lastIndex=t.lastIndex,n}(t);case p:return function(t,n,e){return U(n?e(V(t),!0):V(t),k,new t.constructor)}(t,r,e);case b:return o=t,St?Object(St.call(o)):{}}var o}(t,F,Pt,n)}}y||(y=new It);var D=y.get(t);if(D)return D;if(y.set(t,m),!$)var H=e?function(t){return function(t,n,e){var r=n(t);return zt(t)?r:function(t,n){for(var e=-1,r=n.length,i=t.length;++e<r;)t[i+e]=n[e];return t}(r,e(t))}(t,Xt,Lt)}(t):Xt(t);return function(t,n){for(var e=-1,r=t?t.length:0;++e<r&&!1!==n(t[e],e,t););}(H||t,(function(i,o){H&&(i=t[o=i]),$t(m,o,Pt(i,n,e,r,o,t,y))})),m}function Wt(t){return!(!Qt(t)||function(t){return!!Z&&Z in t}(t))&&(Kt(t)||B(t)?rt:$).test(Bt(t))}function Dt(t){var n=new t.constructor(t.byteLength);return new ct(n).set(new ct(t)),n}function Ht(t,n,e,r){e||(e={});for(var i=-1,o=n.length;++i<o;){var c=n[i],u=r?r(e[c],t[c],c,e,t):void 0;$t(e,c,void 0===u?t[c]:u)}return e}function Rt(t,e){var r,i,o=t.__data__;return("string"==(i=n(r=e))||"number"==i||"symbol"==i||"boolean"==i?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Gt(t,n){var e=function(t,n){return null==t?void 0:t[n]}(t,n);return Wt(e)?e:void 0}Tt.prototype.clear=function(){this.__data__=mt?mt(null):{}},Tt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Tt.prototype.get=function(t){var n=this.__data__;if(mt){var e=n[t];return e===r?void 0:e}return nt.call(n,t)?n[t]:void 0},Tt.prototype.has=function(t){var n=this.__data__;return mt?void 0!==n[t]:nt.call(n,t)},Tt.prototype.set=function(t,n){return this.__data__[t]=mt&&void 0===n?r:n,this},Et.prototype.clear=function(){this.__data__=[]},Et.prototype.delete=function(t){var n=this.__data__,e=Ft(n,t);return!(e<0)&&(e==n.length-1?n.pop():ft.call(n,e,1),!0)},Et.prototype.get=function(t){var n=this.__data__,e=Ft(n,t);return e<0?void 0:n[e][1]},Et.prototype.has=function(t){return Ft(this.__data__,t)>-1},Et.prototype.set=function(t,n){var e=this.__data__,r=Ft(e,t);return r<0?e.push([t,n]):e[r][1]=n,this},Ct.prototype.clear=function(){this.__data__={hash:new Tt,map:new(pt||Et),string:new Tt}},Ct.prototype.delete=function(t){return Rt(this,t).delete(t)},Ct.prototype.get=function(t){return Rt(this,t).get(t)},Ct.prototype.has=function(t){return Rt(this,t).has(t)},Ct.prototype.set=function(t,n){return Rt(this,t).set(t,n),this},It.prototype.clear=function(){this.__data__=new Et},It.prototype.delete=function(t){return this.__data__.delete(t)},It.prototype.get=function(t){return this.__data__.get(t)},It.prototype.has=function(t){return this.__data__.has(t)},It.prototype.set=function(t,n){var e=this.__data__;if(e instanceof Et){var r=e.__data__;if(!pt||r.length<199)return r.push([t,n]),this;e=this.__data__=new Ct(r)}return e.set(t,n),this};var Lt=st?z(st,Object):function(){return[]},Mt=function(t){return et.call(t)};function kt(t,n){return!!(n=null==n?i:n)&&("number"==typeof t||F.test(t))&&t>-1&&t%1==0&&t<n}function Ut(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||X)}function Bt(t){if(null!=t){try{return tt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function qt(t,n){return t===n||t!=t&&n!=n}(gt&&Mt(new gt(new ArrayBuffer(1)))!=_||pt&&Mt(new pt)!=f||vt&&Mt(vt.resolve())!=h||yt&&Mt(new yt)!=p||bt&&Mt(new bt)!=m)&&(Mt=function(t){var n=et.call(t),e=n==d?t.constructor:void 0,r=e?Bt(e):void 0;if(r)switch(r){case Ot:return _;case _t:return f;case jt:return h;case wt:return p;case At:return m}return n});var zt=Array.isArray;function Vt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!Kt(t)}var Jt=dt||function(){return!1};function Kt(t){var n=Qt(t)?et.call(t):"";return n==l||n==a}function Qt(t){var e=n(t);return!!t&&("object"==e||"function"==e)}function Xt(t){return Vt(t)?Nt(t):function(t){if(!Ut(t))return ht(t);var n=[];for(var e in Object(t))nt.call(t,e)&&"constructor"!=e&&n.push(e);return n}(t)}t.exports=function(t){return Pt(t,!0,!0)}}));function b(t){var n={value:t,hungry:!1,optional:!1};return(n.value.endsWith("?*")||n.value.endsWith("*?"))&&n.value.length>2?(n.value=n.value.slice(0,n.value.length-2),n.optional=!0,n.hungry=!0):n.value.endsWith("?")&&n.value.length>1?(n.value=n.value.slice(0,~-n.value.length),n.optional=!0):n.value.endsWith("*")&&n.value.length>1&&(n.value=n.value.slice(0,~-n.value.length),n.hungry=!0),n}function m(t,n){return function(t,n,e){if("string"!=typeof t||!t.length)return null;if(n&&"number"==typeof n||(n=0),!t[n+1])return null;if(t[n+1]&&(!e&&t[n+1].trim()||e&&(t[n+1].trim()||"\n\r".includes(t[n+1]))))return n+1;if(t[n+2]&&(!e&&t[n+2].trim()||e&&(t[n+2].trim()||"\n\r".includes(t[n+2]))))return n+2;for(var r=n+1,i=t.length;r<i;r++)if(t[r]&&(!e&&t[r].trim()||e&&(t[r].trim()||"\n\r".includes(t[r]))))return r;return null}(t,n,!1)}function O(t,n){return function(t,n,e){if("string"!=typeof t||!t.length)return null;if(n&&"number"==typeof n||(n=0),n<1)return null;if(t[~-n]&&(!e&&t[~-n].trim()||e&&(t[~-n].trim()||"\n\r".includes(t[~-n]))))return~-n;if(t[n-2]&&(!e&&t[n-2].trim()||e&&(t[n-2].trim()||"\n\r".includes(t[n-2]))))return n-2;for(var r=n;r--;)if(t[r]&&(!e&&t[r].trim()||e&&(t[r].trim()||"\n\r".includes(t[r]))))return r;return null}(t,n,!1)}function _(t,n,e,r,i){if("string"!=typeof n||!n.length)return null;if(e&&"number"==typeof e||(e=0),"right"===t&&!n[e+1]||"left"===t&&!n[~-e])return null;for(var o,c,u,l=e,a=[],f=0;f<i.length;)if("string"==typeof i[f]&&i[f].length){var s=b(i[f]),d=s.value,h=s.optional,g=s.hungry,p="right"===t?m(n,l):O(n,l);if(!(r.i&&n[p].toLowerCase()===d.toLowerCase()||!r.i&&n[p]===d)){if(h){f+=1;continue}if(u){f+=1,u=void 0;continue}return null}var v="right"===t?m(n,p):O(n,p);g&&(r.i&&n[v].toLowerCase()===d.toLowerCase()||!r.i&&n[v]===d)?u=!0:f+=1,"right"===t&&p>l+1?a.push([l+1,p]):"left"===t&&p<~-l&&a.unshift([p+1,l]),l=p,"right"===t?(void 0===o&&(o=p),c=p):(void 0===c&&(c=p),o=p)}else f+=1;return void 0===o?null:{gaps:a,leftmostChar:o,rightmostChar:c}}function j(t,n){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];if(!r.length)return O(t,n);var c={i:!1};return _("left",t,n,v(r[0])?i(i({},c),r.shift()):c,Array.from(r).reverse())}function w(t,n){for(var e=arguments.length,r=new Array(e>2?e-2:0),o=2;o<e;o++)r[o-2]=arguments[o];if(!r.length)return m(t,n);var c={i:!1};return _("right",t,n,v(r[0])?i(i({},c),r.shift()):c,r)}var A=Array.isArray;function x(t){return"string"==typeof t}var S={CONFIGHEAD:"GENERATE-ATOMIC-CSS-CONFIG-STARTS",CONFIGTAIL:"GENERATE-ATOMIC-CSS-CONFIG-ENDS",CONTENTHEAD:"GENERATE-ATOMIC-CSS-CONTENT-STARTS",CONTENTTAIL:"GENERATE-ATOMIC-CSS-CONTENT-ENDS"},T=["px","em","%","rem","cm","mm","in","pt","pc","ex","ch","vw","vmin","vmax"],E=S.CONFIGHEAD,C=S.CONFIGTAIL,I=S.CONTENTHEAD,N=S.CONTENTTAIL,$=[":"];function F(t){var n=t,e="",r="";if(t.includes(E)&&t.includes(C)){if(-1!==t.indexOf(C)&&-1!==t.indexOf(I)&&t.indexOf(C)>t.indexOf(I))throw new Error("generate-atomic-css: [THROW_ID_02] Config heads are after config tails!");var i=t.indexOf(E)+E.length,o=t.indexOf(C);if("*"===t[m(t,i)]&&"/"===t[m(t,m(t,i))]&&(i=m(t,m(t,i))+1),"*"===t[O(t,o)]&&"/"===t[O(t,O(t,o))]&&(o=O(t,O(t,o))),!x(n=t.slice(i,o).trim())||!n.trim().length)return{log:{count:0},result:""}}else if(t.includes(E)&&!t.includes(C)&&t.includes(I)){if(t.indexOf(E)>t.indexOf(I))throw new Error("generate-atomic-css: [THROW_ID_03] Config heads are after content heads!");n=t.slice(t.indexOf(E)+E.length,t.indexOf(I))}else if(t.includes(E)||t.includes(C)||!t.includes(I)&&!t.includes(N)){for(var c=new RegExp("(\\/\\s*\\*\\s*)*".concat(I,"(\\s*\\*\\s*\\/)*")),u=new RegExp("(\\/\\s*\\*\\s*)*".concat(N,"(\\s*\\*\\s*\\/)*")),l=!1,a=[],f=[],s=t.split("\n").filter((function(t){return!!l||(t.includes("$$$")||t.includes("{")||t.includes(":")?(l=!0,!0):(a.push(t),!1))})),d=s.length;d--&&!(s[d].includes("$$$")||s[d].includes("}")||s[d].includes(":"));)f.unshift(s.pop());n=s.join("\n").replace(c,"").replace(u,""),a.length&&(e="".concat(a.join("\n"),"\n")),f.length&&(r="\n".concat(f.join("\n")))}else if((n=t).includes(I)){if(O(t,n.indexOf(I))){var h=n.indexOf(I);j(t,h,"/","*")&&(h=j(t,h,"/","*").leftmostChar),e=0===h?"":t.slice(0,h)}var g=n.indexOf(I)+I.length;w(n,g-1,"*","/")&&(g=w(n,g-1,"*","/").rightmostChar+1);var p=null;if(t.includes(N)){p=t.indexOf(N),"*"===t[O(t,p)]&&"/"===t[O(t,O(t,p))]&&(p=O(t,O(t,p)));var v=t.indexOf(N)+N.length;"*"===t[m(t,v-1)]&&"/"===t[m(t,m(t,v-1))]&&(v=m(t,m(t,v-1))+1),m(t,v)&&(r=t.slice(v))}n=p?n.slice(g,p).trim():n.slice(g).trim()}else if(n.includes(N)){var y,b=[],_=!1,A=(n=n.split("\n").filter((function(t){return t.includes("$$$")||_?(_||(_=!0),!0):(_||b.push(t),!1)})).join("\n")).indexOf(N);j(n,A,"/","*")&&(A=j(n,A,"/","*").leftmostChar),n=n.slice(0,A).trim(),b.length&&(e="".concat(b.join("\n"),"\n")),m(t,t.indexOf(N)+N.length)&&(y=t.indexOf(N)+N.length,"*"===t[m(t,y)]&&"/"===t[m(t,m(t,y))]&&(y=m(t,m(t,y))+1,m(t,y)&&(r=t.slice(y))))}return[n,e,r]}function P(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!n)return t;var e=Array.from(t);if(e.length&&x(e[0])&&!e[0].trim().length)do{e.shift()}while(x(e[0])&&!e[0].trim().length);if(e.length&&x(e[e.length-1])&&!e[e.length-1].trim().length)do{e.pop()}while(e&&e[e.length-1]&&!e[e.length-1].trim().length);return e}function W(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,i=e,o=r,c=t;if(t.lastIndexOf("}")>0&&t.slice(t.lastIndexOf("}")+1).includes("|")?n=t.slice(t.lastIndexOf("}")+1).split("|").filter((function(t){return t.trim().length})).map((function(t){return t.trim()})).filter((function(t){return String(t).split("").every((function(t){return/\d/g.test(t)}))})):t.includes("|")&&(n=t.split("|").filter((function(t){return t.trim().length})).map((function(t){return t.trim()})).filter((function(t){return String(t).split("").every((function(t){return/\d/g.test(t)}))}))),A(n)&&(1===n.length?o=Number.parseInt(n[0],10):n.length>1&&(i=Number.parseInt(n[0],10),o=Number.parseInt(n[1],10))),t.lastIndexOf("}")>0&&t.slice(t.lastIndexOf("}")+1).includes("|")){if((c=t.slice(0,t.indexOf("|",t.lastIndexOf("}")+1)).trimEnd()).trim().startsWith("|"))for(;c.trim().startsWith("|");)c=c.trimStart().slice(1)}else{for(var u=null,l=!1,a=0,f=t.length,s=null,d=0,h=t.length;d<h;d++)if("0123456789".includes(t[d])?null===s&&t[d].trim().length&&(s=!0):"|"!==t[d]&&t[d].trim().length&&(s=!1),!t[d+1]&&s&&(f=u),"|"===t[d]){if(s){f=u;break}u=d,s=null}else!l&&t[d].trim().length&&(l=!0,null!==u&&(a=u+1));c=t.slice(a,f).trimEnd()}return[i,o,c]}function D(t,n,e,r,i,c){for(var u,l=0,a=o(W(t,0,500),3),f=a[0],s=a[1],d=a[2],h=r-e,g="",p=function(t){for(var r=0,o=0,a=function(n,e){d[n].charCodeAt(0);if("$"===d[n]&&"$"===d[n-1]&&"$"===d[n-2]){var i,u=d.slice(n+1);if(0!==t||!T.some((function(t){if(u.startsWith(t))return i=t,!0}))||"{"!==d[m(d,n+i.length)]&&d[n+i.length+1].trim().length){var l;if(T.some((function(t){if(d.startsWith(t,n+1))return l=t,!0})),!d[n-3].trim().length||$.some((function(t){return d.slice(o,n-2).trim().endsWith(t)}))){var a=0;0===t&&T.some((function(t){return"".concat(d.slice(o,n-2)).startsWith(t)&&(a=t.length),!0})),g+="".concat(d.slice(o+a,n-2)).concat(c?String(t).padStart(String(s).length+(0===t&&l?l.length:0)):t)}else d[n+1].trim().length&&"{"!==d[m(d,n)]?(g+="".concat(d.slice(o,n-2)).concat(t),c&&(r=String(s).length-String(t).length)):g+="".concat(d.slice(o,n-2)).concat(c?String(t).padEnd(String(s).length+(0===t&&l?l.length:0)):t);o=n+1}else g+="".concat(d.slice(o,n-2)).concat(c?String(t).padStart(String(s).length-String(t).length+i.length+1):t),o=n+1+(i?i.length:0)}if("{"===d[n]&&c&&r&&(g+="".concat(d.slice(o,n)).concat(" ".repeat(r)),o=n,r=0),!d[n+1]){var f,h=d.slice(o);0===t&&T.some((function(t){if(h.startsWith(t))return f=t,!0}))?g+="".concat(d.slice(o+f.length)):g+="".concat(d.slice(o)),g+="".concat(t!==s?"\n":"")}},p=0,v=d.length;p<v;p++)a(p);i.count+=1,"function"==typeof n&&(u=Math.floor(e+t/(s-f)*h))!==l&&(l=u,n(u))},v=f;v<=s;v++)p(v);return g}function H(t,n){return/\.\w/g.test(t)&&(n.count+=1),t}t.extractFromToSource=W,t.genAtomic=function(t,e){if("string"!=typeof t)throw new Error('generate-atomic-css: [THROW_ID_01] First input argument must be a string! It was given as "'.concat(JSON.stringify(t,null,4),'" (type ').concat(n(t),")"));var r=S.CONFIGHEAD,c=S.CONFIGTAIL,u=S.CONTENTHEAD,l=S.CONTENTTAIL,a={count:0},f=i(i({},{includeConfig:!0,includeHeadsAndTails:!0,pad:!0,configOverride:null,reportProgressFunc:null,reportProgressFuncFrom:0,reportProgressFuncTo:100}),e);if(f.includeConfig&&!f.includeHeadsAndTails&&(f.includeHeadsAndTails=!0),!f.configOverride&&!t.includes("$$$")&&!t.includes(r)&&!t.includes(c)&&!t.includes(u)&&!t.includes(l)||x(f.configOverride)&&!f.configOverride.includes("$$$")&&!f.configOverride.includes(r)&&!f.configOverride.includes(c)&&!f.configOverride.includes(u)&&!f.configOverride.includes(l))return{log:{count:0},result:t};var s="",d="",h=o(F(f.configOverride?f.configOverride:t),3),g=h[0],p=h[1],v=h[2];if(!x(g)||!g.trim())return{log:{count:0},result:""};if((f.includeConfig||f.includeHeadsAndTails)&&(s="".concat(u," */\n"),f.includeConfig||(s="/* ".concat(s)),d="\n/* ".concat(l," */")),f.includeConfig&&(s="/* ".concat(r,"\n").concat(g.trim(),"\n").concat(c,"\n").concat(s)),t.includes(r)&&null!=O(t,t.indexOf(r))){var y=t.indexOf(r);"*"===t[O(t,y)]&&"/"===t[O(t,O(t,y))]&&(y=O(t,O(t,y)));var b="/* ";("/"===t[m(t,y-1)]&&"*"===t[m(t,m(t,y-1))]||s.trim().startsWith("/*"))&&(b=""),s="".concat(t.slice(0,y)).concat(b).concat(s)}if(t.includes(c)&&m(t,t.indexOf(c)+c.length)){var _=t.indexOf(c)+c.length;if("*"===t[m(t,t.indexOf(c)+c.length)]&&"/"===t[m(t,m(t,t.indexOf(c)+c.length))]&&(_=m(t,m(t,t.indexOf(c)+c.length))+1),t.slice(m(t,_-1)).startsWith(u)){var j=m(t,_);"*"===t[m(t,(_=j+u.length)-1)]&&"/"===t[m(t,m(t,_-1))]&&(_=m(t,m(t,_-1))+1),t.includes(l)&&(_=t.indexOf(l)+l.length,"*"===t[m(t,_)]&&"/"===t[m(t,m(t,_))]&&(_=m(t,m(t,_))+1))}var w=t.slice(_);w.length&&w.includes(l)&&(_=t.indexOf(l)+l.length,"*"===t[m(t,_)]&&"/"===t[m(t,m(t,_))]&&(_=m(t,m(t,_))+1)),d="".concat(d).concat(t[_]&&m(t,_-1)?t.slice(_):"")}if(x(p)&&(s="".concat(p).concat(s)),x(v)){if(v.trim().endsWith("/*")&&!v.trim().startsWith("*/")){var A="";x(v)&&v[0]&&!v[0].trim()&&(A=v.slice(0,m(v,0))),v="".concat(A,"/* ").concat(v.trim())}d="".concat(d).concat(v)}var T="".concat(function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n.includeConfig||n.includeHeadsAndTails?t.trim():t}("".concat(s).concat(function(t,n,e,r){var i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],o=arguments.length>5?arguments[5]:void 0,c=arguments.length>6?arguments[6]:void 0;return P(t.split(/\r?\n/).map((function(t,i,u){return t.includes("$$$")?D(t,n,e+(r-e)/u.length*i,e+(r-e)/u.length*(i+1),o,c):H(t,o)})),i).join("\n")}(g,f.reportProgressFunc,f.reportProgressFuncFrom,f.reportProgressFuncTo,!0,a,f.pad)).concat(d),f),"\n");return{log:{count:a.count},result:T}},t.headsAndTails=S,t.version="1.2.52",Object.defineProperty(t,"__esModule",{value:!0})}));

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.astGetValuesByKey=e()}(this,function(){"use strict";var Qt="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var t,Xt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=(function(t,e){var n="__lodash_hash_undefined__",r=9007199254740991,w="[object Arguments]",O="[object Boolean]",S="[object Date]",A="[object Function]",x="[object GeneratorFunction]",E="[object Map]",$="[object Number]",I="[object Object]",o="[object Promise]",P="[object RegExp]",k="[object Set]",N="[object String]",F="[object Symbol]",i="[object WeakMap]",M="[object ArrayBuffer]",T="[object DataView]",B="[object Float32Array]",R="[object Float64Array]",D="[object Int8Array]",U="[object Int16Array]",W="[object Int32Array]",V="[object Uint8Array]",z="[object Uint8ClampedArray]",C="[object Uint16Array]",G="[object Uint32Array]",H=/\w*$/,a=/^\[object .+?Constructor\]$/,c=/^(?:0|[1-9]\d*)$/,K={};K[w]=K["[object Array]"]=K[M]=K[T]=K[O]=K[S]=K[B]=K[R]=K[D]=K[U]=K[W]=K[E]=K[$]=K[I]=K[P]=K[k]=K[N]=K[F]=K[V]=K[z]=K[C]=K[G]=!0,K["[object Error]"]=K[A]=K[i]=!1;var u="object"==Xt(Qt)&&Qt&&Qt.Object===Object&&Qt,f="object"==("undefined"==typeof self?"undefined":Xt(self))&&self&&self.Object===Object&&self,s=u||f||Function("return this")(),l=e&&!e.nodeType&&e,p=l&&t&&!t.nodeType&&t,y=p&&p.exports===l;function L(t,e){return t.set(e[0],e[1]),t}function J(t,e){return t.add(e),t}function q(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function Q(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function X(t){var r=-1,n=Array(t.size);return t.forEach(function(t,e){n[++r]=[e,t]}),n}function v(e,r){return function(t){return e(r(t))}}function Y(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var d,h=Array.prototype,b=Function.prototype,_=Object.prototype,g=s["__core-js_shared__"],j=(d=/[^.]+$/.exec(g&&g.keys&&g.keys.IE_PROTO||""))?"Symbol(src)_1."+d:"",m=b.toString,Z=_.hasOwnProperty,tt=_.toString,et=RegExp("^"+m.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=y?s.Buffer:void 0,nt=s.Symbol,ot=s.Uint8Array,it=v(Object.getPrototypeOf,Object),at=Object.create,ct=_.propertyIsEnumerable,ut=h.splice,ft=Object.getOwnPropertySymbols,st=rt?rt.isBuffer:void 0,lt=v(Object.keys,Object),pt=Rt(s,"DataView"),yt=Rt(s,"Map"),vt=Rt(s,"Promise"),dt=Rt(s,"Set"),ht=Rt(s,"WeakMap"),bt=Rt(Object,"create"),_t=zt(pt),gt=zt(yt),jt=zt(vt),mt=zt(dt),wt=zt(ht),Ot=nt?nt.prototype:void 0,St=Ot?Ot.valueOf:void 0;function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function xt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function $t(t){this.__data__=new xt(t)}function It(t,e){var r,n,o,i=Gt(t)||(o=n=r=t)&&"object"==(void 0===o?"undefined":Xt(o))&&Ht(n)&&Z.call(r,"callee")&&(!ct.call(r,"callee")||tt.call(r)==w)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],a=i.length,c=!!a;for(var u in t)!e&&!Z.call(t,u)||c&&("length"==u||Wt(u,a))||i.push(u);return i}function Pt(t,e,r){var n=t[e];Z.call(t,e)&&Ct(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function kt(t,e){for(var r=t.length;r--;)if(Ct(t[r][0],e))return r;return-1}function Nt(r,n,o,i,t,e,a){var c;if(i&&(c=e?i(r,t,e,a):i(r)),void 0!==c)return c;if(!Jt(r))return r;var u,f,s,l,p,y,v=Gt(r);if(v){if(c=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(r),!n)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(r,c)}else{var d=Ut(r),h=d==A||d==x;if(Kt(r))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(r,n);if(d==I||d==w||h&&!e){if(Q(r))return e?r:{};if(c="function"!=typeof(p=h?{}:r).constructor||Vt(p)?{}:Jt(y=it(p))?at(y):{},!n)return l=u=r,f=(s=c)&&Tt(l,qt(l),s),Tt(u,Dt(u),f)}else{if(!K[d])return e?r:{};c=function(t,e,r,n){var o=t.constructor;switch(e){case M:return Mt(t);case O:case S:return new o(+t);case T:return v=t,d=n?Mt(v.buffer):v.buffer,new v.constructor(d,v.byteOffset,v.byteLength);case B:case R:case D:case U:case W:case V:case z:case C:case G:return p=t,y=n?Mt(p.buffer):p.buffer,new p.constructor(y,p.byteOffset,p.length);case E:return s=t,l=r,q(n?l(X(s),!0):X(s),L,new s.constructor);case $:case N:return new o(t);case P:return(f=new(u=t).constructor(u.source,H.exec(u))).lastIndex=u.lastIndex,f;case k:return a=t,c=r,q(n?c(Y(a),!0):Y(a),J,new a.constructor);case F:return i=t,St?Object(St.call(i)):{}}var i;var a,c;var u,f;var s,l;var p,y;var v,d}(r,d,Nt,n)}}a||(a=new $t);var b,_,g,j=a.get(r);if(j)return j;if(a.set(r,c),!v)var m=o?(_=Dt,g=qt(b=r),Gt(b)?g:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(g,_(b))):qt(r);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(m||r,function(t,e){m&&(t=r[e=t]),Pt(c,e,Nt(t,n,o,i,e,r,a))}),c}function Ft(t){return!(!Jt(t)||(e=t,j&&j in e))&&(Lt(t)||Q(t)?et:a).test(zt(t));var e}function Mt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Tt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;Pt(r,a,void 0===c?t[a]:c)}return r}function Bt(t,e){var r,n,o=t.__data__;return("string"==(n=void 0===(r=e)?"undefined":Xt(r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Rt(t,e){var r,n,o=(n=e,null==(r=t)?void 0:r[n]);return Ft(o)?o:void 0}At.prototype.clear=function(){this.__data__=bt?bt(null):{}},At.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},At.prototype.get=function(t){var e=this.__data__;if(bt){var r=e[t];return r===n?void 0:r}return Z.call(e,t)?e[t]:void 0},At.prototype.has=function(t){var e=this.__data__;return bt?void 0!==e[t]:Z.call(e,t)},At.prototype.set=function(t,e){return this.__data__[t]=bt&&void 0===e?n:e,this},xt.prototype.clear=function(){this.__data__=[]},xt.prototype.delete=function(t){var e=this.__data__,r=kt(e,t);return!(r<0||(r==e.length-1?e.pop():ut.call(e,r,1),0))},xt.prototype.get=function(t){var e=this.__data__,r=kt(e,t);return r<0?void 0:e[r][1]},xt.prototype.has=function(t){return-1<kt(this.__data__,t)},xt.prototype.set=function(t,e){var r=this.__data__,n=kt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Et.prototype.clear=function(){this.__data__={hash:new At,map:new(yt||xt),string:new At}},Et.prototype.delete=function(t){return Bt(this,t).delete(t)},Et.prototype.get=function(t){return Bt(this,t).get(t)},Et.prototype.has=function(t){return Bt(this,t).has(t)},Et.prototype.set=function(t,e){return Bt(this,t).set(t,e),this},$t.prototype.clear=function(){this.__data__=new xt},$t.prototype.delete=function(t){return this.__data__.delete(t)},$t.prototype.get=function(t){return this.__data__.get(t)},$t.prototype.has=function(t){return this.__data__.has(t)},$t.prototype.set=function(t,e){var r=this.__data__;if(r instanceof xt){var n=r.__data__;if(!yt||n.length<199)return n.push([t,e]),this;r=this.__data__=new Et(n)}return r.set(t,e),this};var Dt=ft?v(ft,Object):function(){return[]},Ut=function(t){return tt.call(t)};function Wt(t,e){return!!(e=null==e?r:e)&&("number"==typeof t||c.test(t))&&-1<t&&t%1==0&&t<e}function Vt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||_)}function zt(t){if(null!=t){try{return m.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ct(t,e){return t===e||t!=t&&e!=e}(pt&&Ut(new pt(new ArrayBuffer(1)))!=T||yt&&Ut(new yt)!=E||vt&&Ut(vt.resolve())!=o||dt&&Ut(new dt)!=k||ht&&Ut(new ht)!=i)&&(Ut=function(t){var e=tt.call(t),r=e==I?t.constructor:void 0,n=r?zt(r):void 0;if(n)switch(n){case _t:return T;case gt:return E;case jt:return o;case mt:return k;case wt:return i}return e});var Gt=Array.isArray;function Ht(t){return null!=t&&("number"==typeof(e=t.length)&&-1<e&&e%1==0&&e<=r)&&!Lt(t);var e}var Kt=st||function(){return!1};function Lt(t){var e=Jt(t)?tt.call(t):"";return e==A||e==x}function Jt(t){var e=void 0===t?"undefined":Xt(t);return!!t&&("object"==e||"function"==e)}function qt(t){return Ht(t)?It(t):function(t){if(!Vt(t))return lt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Nt(t,!0,!0)}}(t={exports:{}},t.exports),t.exports),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var e,r,n=Function.prototype,i=Object.prototype,a=n.toString,c=i.hasOwnProperty,u=a.call(Object),f=i.toString,s=(e=Object.getPrototypeOf,r=Object,function(t){return e(r(t))});var y=function(t){if(!(e=t)||"object"!=(void 0===e?"undefined":o(e))||"[object Object]"!=f.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e,r=s(t);if(null===r)return!0;var n=c.call(r,"constructor")&&r.constructor;return"function"==typeof n&&n instanceof n&&a.call(n)==u},v=Array.isArray;function d(t){return"string"==typeof t&&0<t.length&&"."===t[0]?t.slice(1):t}var l=/[|\\{}()[\]^$+*?.]/g,_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=new Map;function g(t,e){var r=Object.assign({caseSensitive:!1},e),n=t+JSON.stringify(r);if(h.has(n))return h.get(n);var o="!"===t[0];o&&(t=t.slice(1)),t=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(l,"\\$&")}(t).replace(/\\\*/g,".*");var i=new RegExp("^"+t+"$",r.caseSensitive?"":"i");return i.negated=o,h.set(n,i),i}var b=function(t,e,r){if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError("Expected two arrays, got "+(void 0===t?"undefined":_(t))+" "+(void 0===e?"undefined":_(e)));if(0===e.length)return t;var n="!"===e[0][0];e=e.map(function(t){return g(t,r)});var o=[],i=!0,a=!1,c=void 0;try{for(var u,f=t[Symbol.iterator]();!(i=(u=f.next()).done);i=!0){var s=u.value,l=n,p=!0,y=!1,v=void 0;try{for(var d,h=e[Symbol.iterator]();!(p=(d=h.next()).done);p=!0){var b=d.value;b.test(s)&&(l=!b.negated)}}catch(t){y=!0,v=t}finally{try{!p&&h.return&&h.return()}finally{if(y)throw v}}l&&o.push(s)}}catch(t){a=!0,c=t}finally{try{!i&&f.return&&f.return()}finally{if(a)throw c}}return o};function j(t){return null!=t}return b.isMatch=function(t,e,r){var n=g(e,r),o=n.test(t);return n.negated?!o:o},function(t,n,e){if(!j(t))throw new Error("ast-get-values-by-key: [THROW_ID_01] the first argument is missing!");if(!j(n))throw new Error("ast-get-values-by-key: [THROW_ID_02] the second argument is missing!");var o=void 0;j(e)&&(o="string"==typeof e?[e]:p(e));var i=[],r=function t(e,r,n){var o=p(e),i=void 0,a=void 0,c=void 0,u=void 0,f=void 0;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,v(o))for(i=0,a=o.length;i<a;i++){var s=n.path+"."+i;void 0!==o[i]?(n.parent=p(o),c=t(r(o[i],void 0,Object.assign({},n,{path:d(s)})),r,Object.assign({},n,{path:d(s)})),Number.isNaN(c)&&i<o.length?(o.splice(i,1),i-=1):o[i]=c):o.splice(i,1)}else if(y(o))for(i=0,a=(u=Object.keys(o)).length;i<a;i++){f=u[i];var l=n.path+"."+f;0===n.depth&&null!=f&&(n.topmostKey=f),n.parent=p(o),c=t(r(f,o[f],Object.assign({},n,{path:d(l)})),r,Object.assign({},n,{path:d(l)})),Number.isNaN(c)?delete o[f]:o[f]=c}return o}(t,function(t,e){var r=void 0!==e?e:t;if(void 0!==e&&b.isMatch(t,n,{caseSensitive:!0}))if(void 0===o)i.push(e);else if(0<o.length)return o.shift();return r},{});return void 0===o?i:r}});

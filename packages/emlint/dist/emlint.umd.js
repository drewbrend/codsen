/**
 * emlint
 * Detects errors in HTML/CSS, proposes fixes, email-template friendly
 * Version: 0.3.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://bitbucket.org/codsen/codsen/src/master/packages/emlint
 */

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t=t||self).emlint={})}(this,function(t){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t){return"string"==typeof t}function r(t){return function(t){return e(t)&&1===t.length&&t.charCodeAt(0)>96&&t.charCodeAt(0)<123}(t)}var o="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var a,c=(function(t,n){var e=200,r="__lodash_hash_undefined__",a=9007199254740991,c="[object Arguments]",u="[object Boolean]",i="[object Date]",l="[object Function]",s="[object GeneratorFunction]",f="[object Map]",p="[object Number]",g="[object Object]",y="[object RegExp]",h="[object Set]",_="[object String]",b="[object Symbol]",m="[object ArrayBuffer]",v="[object DataView]",d="[object Float32Array]",j="[object Float64Array]",A="[object Int8Array]",S="[object Int16Array]",O="[object Int32Array]",w="[object Uint8Array]",N="[object Uint8ClampedArray]",E="[object Uint16Array]",T="[object Uint32Array]",x=/\w*$/,k=/^\[object .+?Constructor\]$/,W=/^(?:0|[1-9]\d*)$/,I={};I[c]=I["[object Array]"]=I[m]=I[v]=I[u]=I[i]=I[d]=I[j]=I[A]=I[S]=I[O]=I[f]=I[p]=I[g]=I[y]=I[h]=I[_]=I[b]=I[w]=I[N]=I[E]=I[T]=!0,I["[object Error]"]=I[l]=I["[object WeakMap]"]=!1;var P="object"==typeof o&&o&&o.Object===Object&&o,J="object"==typeof self&&self&&self.Object===Object&&self,L=P||J||Function("return this")(),$=n&&!n.nodeType&&n,F=$&&t&&!t.nodeType&&t,M=F&&F.exports===$;function R(t,n){return t.set(n[0],n[1]),t}function B(t,n){return t.add(n),t}function D(t,n,e,r){var o=-1,a=t?t.length:0;for(r&&a&&(e=t[++o]);++o<a;)e=n(e,t[o],o,t);return e}function U(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}function C(t){var n=-1,e=Array(t.size);return t.forEach(function(t,r){e[++n]=[r,t]}),e}function z(t,n){return function(e){return t(n(e))}}function H(t){var n=-1,e=Array(t.size);return t.forEach(function(t){e[++n]=t}),e}var V,G=Array.prototype,q=Function.prototype,K=Object.prototype,Q=L["__core-js_shared__"],X=(V=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"",Y=q.toString,Z=K.hasOwnProperty,tt=K.toString,nt=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=M?L.Buffer:void 0,rt=L.Symbol,ot=L.Uint8Array,at=z(Object.getPrototypeOf,Object),ct=Object.create,ut=K.propertyIsEnumerable,it=G.splice,lt=Object.getOwnPropertySymbols,st=et?et.isBuffer:void 0,ft=z(Object.keys,Object),pt=Ft(L,"DataView"),gt=Ft(L,"Map"),yt=Ft(L,"Promise"),ht=Ft(L,"Set"),_t=Ft(L,"WeakMap"),bt=Ft(Object,"create"),mt=Ut(pt),vt=Ut(gt),dt=Ut(yt),jt=Ut(ht),At=Ut(_t),St=rt?rt.prototype:void 0,Ot=St?St.valueOf:void 0;function wt(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function Nt(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function Et(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function Tt(t){this.__data__=new Nt(t)}function xt(t,n){var e=zt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ht(t)}(t)&&Z.call(t,"callee")&&(!ut.call(t,"callee")||tt.call(t)==c)}(t)?function(t,n){for(var e=-1,r=Array(t);++e<t;)r[e]=n(e);return r}(t.length,String):[],r=e.length,o=!!r;for(var a in t)!n&&!Z.call(t,a)||o&&("length"==a||Bt(a,r))||e.push(a);return e}function kt(t,n,e){var r=t[n];Z.call(t,n)&&Ct(r,e)&&(void 0!==e||n in t)||(t[n]=e)}function Wt(t,n){for(var e=t.length;e--;)if(Ct(t[e][0],n))return e;return-1}function It(t,n,e,r,o,a,k){var W;if(r&&(W=a?r(t,o,a,k):r(t)),void 0!==W)return W;if(!qt(t))return t;var P=zt(t);if(P){if(W=function(t){var n=t.length,e=t.constructor(n);n&&"string"==typeof t[0]&&Z.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!n)return function(t,n){var e=-1,r=t.length;n||(n=Array(r));for(;++e<r;)n[e]=t[e];return n}(t,W)}else{var J=Rt(t),L=J==l||J==s;if(Vt(t))return function(t,n){if(n)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,n);if(J==g||J==c||L&&!a){if(U(t))return a?t:{};if(W=function(t){return"function"!=typeof t.constructor||Dt(t)?{}:(n=at(t),qt(n)?ct(n):{});var n}(L?{}:t),!n)return function(t,n){return Lt(t,Mt(t),n)}(t,function(t,n){return t&&Lt(n,Kt(n),t)}(W,t))}else{if(!I[J])return a?t:{};W=function(t,n,e,r){var o=t.constructor;switch(n){case m:return Jt(t);case u:case i:return new o(+t);case v:return function(t,n){var e=n?Jt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,r);case d:case j:case A:case S:case O:case w:case N:case E:case T:return function(t,n){var e=n?Jt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,r);case f:return function(t,n,e){return D(n?e(C(t),!0):C(t),R,new t.constructor)}(t,r,e);case p:case _:return new o(t);case y:return(l=new(c=t).constructor(c.source,x.exec(c))).lastIndex=c.lastIndex,l;case h:return function(t,n,e){return D(n?e(H(t),!0):H(t),B,new t.constructor)}(t,r,e);case b:return a=t,Ot?Object(Ot.call(a)):{}}var a;var c,l}(t,J,It,n)}}k||(k=new Tt);var $=k.get(t);if($)return $;if(k.set(t,W),!P)var F=e?function(t){return function(t,n,e){var r=n(t);return zt(t)?r:function(t,n){for(var e=-1,r=n.length,o=t.length;++e<r;)t[o+e]=n[e];return t}(r,e(t))}(t,Kt,Mt)}(t):Kt(t);return function(t,n){for(var e=-1,r=t?t.length:0;++e<r&&!1!==n(t[e],e,t););}(F||t,function(o,a){F&&(o=t[a=o]),kt(W,a,It(o,n,e,r,a,t,k))}),W}function Pt(t){return!(!qt(t)||(n=t,X&&X in n))&&(Gt(t)||U(t)?nt:k).test(Ut(t));var n}function Jt(t){var n=new t.constructor(t.byteLength);return new ot(n).set(new ot(t)),n}function Lt(t,n,e,r){e||(e={});for(var o=-1,a=n.length;++o<a;){var c=n[o],u=r?r(e[c],t[c],c,e,t):void 0;kt(e,c,void 0===u?t[c]:u)}return e}function $t(t,n){var e,r,o=t.__data__;return("string"==(r=typeof(e=n))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e)?o["string"==typeof n?"string":"hash"]:o.map}function Ft(t,n){var e=function(t,n){return null==t?void 0:t[n]}(t,n);return Pt(e)?e:void 0}wt.prototype.clear=function(){this.__data__=bt?bt(null):{}},wt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},wt.prototype.get=function(t){var n=this.__data__;if(bt){var e=n[t];return e===r?void 0:e}return Z.call(n,t)?n[t]:void 0},wt.prototype.has=function(t){var n=this.__data__;return bt?void 0!==n[t]:Z.call(n,t)},wt.prototype.set=function(t,n){return this.__data__[t]=bt&&void 0===n?r:n,this},Nt.prototype.clear=function(){this.__data__=[]},Nt.prototype.delete=function(t){var n=this.__data__,e=Wt(n,t);return!(e<0||(e==n.length-1?n.pop():it.call(n,e,1),0))},Nt.prototype.get=function(t){var n=this.__data__,e=Wt(n,t);return e<0?void 0:n[e][1]},Nt.prototype.has=function(t){return Wt(this.__data__,t)>-1},Nt.prototype.set=function(t,n){var e=this.__data__,r=Wt(e,t);return r<0?e.push([t,n]):e[r][1]=n,this},Et.prototype.clear=function(){this.__data__={hash:new wt,map:new(gt||Nt),string:new wt}},Et.prototype.delete=function(t){return $t(this,t).delete(t)},Et.prototype.get=function(t){return $t(this,t).get(t)},Et.prototype.has=function(t){return $t(this,t).has(t)},Et.prototype.set=function(t,n){return $t(this,t).set(t,n),this},Tt.prototype.clear=function(){this.__data__=new Nt},Tt.prototype.delete=function(t){return this.__data__.delete(t)},Tt.prototype.get=function(t){return this.__data__.get(t)},Tt.prototype.has=function(t){return this.__data__.has(t)},Tt.prototype.set=function(t,n){var r=this.__data__;if(r instanceof Nt){var o=r.__data__;if(!gt||o.length<e-1)return o.push([t,n]),this;r=this.__data__=new Et(o)}return r.set(t,n),this};var Mt=lt?z(lt,Object):function(){return[]},Rt=function(t){return tt.call(t)};function Bt(t,n){return!!(n=null==n?a:n)&&("number"==typeof t||W.test(t))&&t>-1&&t%1==0&&t<n}function Dt(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||K)}function Ut(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ct(t,n){return t===n||t!=t&&n!=n}(pt&&Rt(new pt(new ArrayBuffer(1)))!=v||gt&&Rt(new gt)!=f||yt&&"[object Promise]"!=Rt(yt.resolve())||ht&&Rt(new ht)!=h||_t&&"[object WeakMap]"!=Rt(new _t))&&(Rt=function(t){var n=tt.call(t),e=n==g?t.constructor:void 0,r=e?Ut(e):void 0;if(r)switch(r){case mt:return v;case vt:return f;case dt:return"[object Promise]";case jt:return h;case At:return"[object WeakMap]"}return n});var zt=Array.isArray;function Ht(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=a}(t.length)&&!Gt(t)}var Vt=st||function(){return!1};function Gt(t){var n=qt(t)?tt.call(t):"";return n==l||n==s}function qt(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function Kt(t){return Ht(t)?xt(t):function(t){if(!Dt(t))return ft(t);var n=[];for(var e in Object(t))Z.call(t,e)&&"constructor"!=e&&n.push(e);return n}(t)}t.exports=function(t){return It(t,!0,!0)}}(a={exports:{}},a.exports),a.exports),u="[object Object]";var i,l,s=Function.prototype,f=Object.prototype,p=s.toString,g=f.hasOwnProperty,y=p.call(Object),h=f.toString,_=(i=Object.getPrototypeOf,l=Object,function(t){return i(l(t))});var b=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||h.call(t)!=u||function(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}(t))return!1;var n=_(t);if(null===n)return!0;var e=g.call(n,"constructor")&&n.constructor;return"function"==typeof e&&e instanceof e&&p.call(e)==y};t.emlint=function(t,o){if(!e(t))throw new Error("emlint: [THROW_ID_01] the first input argument must be a string. It was given as:\n".concat(JSON.stringify(t,null,4)," (type ").concat(n(t),")"));if(o&&!b(o))throw new Error("emlint: [THROW_ID_02] the second input argument must be a plain object. It was given as:\n".concat(JSON.stringify(o,null,4)," (type ").concat(n(o),")"));var a,u,i={tagStartAt:null,tagNameStartAt:null,tagNameEndAt:null,tagName:null,attributes:[]};function l(){a=c(i)}l();var s={startAt:null,includesLinebreaks:!1,lastLinebreakAt:null};function f(){u=c(s)}f();for(var p={issues:[]},g=0,y=t.length;g<y;g++){console.log("[".concat(36,"m","===============================","[",39,"m [",35,"m","str[ ".concat(g," ] = ").concat(t[g].trim().length?t[g]:JSON.stringify(t[g],null,0)),"[",39,"m [",36,"m","===============================","[",39,"m")),null!==u.startAt&&t[g].trim().length&&(f(),console.log("131 ".concat("[".concat(32,"m","SET","[",39,"m")," ","[".concat(33,"m","logWhitespace.startAt","[",39,"m")," = ",JSON.stringify(u.startAt,null,4)))),t[g].trim().length||null!==u.startAt||(u.startAt=g,console.log("143 ".concat("[".concat(32,"m","SET","[",39,"m")," ","[".concat(33,"m","logWhitespace.startAt","[",39,"m")," = ",JSON.stringify(u.startAt,null,4)))),"\n"!==t[g]&&"\r"!==t[g]||(null===u.startAt||u.includesLinebreaks||(u.includesLinebreaks=!0,console.log("156 ".concat("[".concat(32,"m","SET","[",39,"m")," ","[".concat(33,"m","logWhitespace.includesLinebreaks","[",39,"m")," = ",JSON.stringify(u.includesLinebreaks,null,4)))),u.lastLinebreakAt=g),null===a.tagNameStartAt||r(t[g])||(console.log("168 character not suitable for tag name"),a.tagNameEndAt=g,a.tagName=t.slice(a.tagNameStartAt,g),console.log("172 ".concat("[".concat(32,"m","SET","[",39,"m")," ","[".concat(33,"m","logTag.tagNameEndAt","[",39,"m")," = ",a.tagNameEndAt,"; ","[".concat(33,"m","logTag.tagName","[",39,"m")," = ").concat(JSON.stringify(a.tagName,null,0)))),null!==a.tagStartAt&&null===a.tagNameStartAt&&r(t[g])&&a.tagStartAt<g&&(a.tagNameStartAt=g,console.log("191 ".concat("[".concat(32,"m","SET","[",39,"m")," ","[".concat(33,"m","logTag.tagNameStartAt","[",39,"m")," = ",a.tagNameStartAt)),a.tagStartAt<g-1&&p.issues.push({name:"space-after-opening-bracket",position:[[a.tagStartAt+1,g]]})),"<"===t[g]&&null===a.tagStartAt&&(a.tagStartAt=g,console.log("209 ".concat("[".concat(32,"m","SET","[",39,"m")," ","[".concat(33,"m","logTag.tagStartAt","[",39,"m")," = ",a.tagStartAt))),">"===t[g]&&null!==a.tagStartAt&&(l(),console.log("219 end of tag - ".concat("[".concat(32,"m","RESET","[",39,"m")," logTag")));var h={logTag:!0,logWhitespace:!0};console.log("".concat("[".concat(31,"m","█ ","[",39,"m"),h.logTag&&null!==a.tagStartAt?"".concat("[".concat(33,"m","logTag","[",39,"m")," ",JSON.stringify(a,null,0),"; "):"").concat(h.logWhitespace&&null!==u.startAt?"".concat("[".concat(33,"m","logWhitespace","[",39,"m")," ",JSON.stringify(u,null,0),"; "):""))}return p},t.version="0.3.0",Object.defineProperty(t,"__esModule",{value:!0})});

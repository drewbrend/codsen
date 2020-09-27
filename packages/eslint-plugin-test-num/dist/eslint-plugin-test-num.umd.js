/**
 * eslint-plugin-test-num
 * ESLint plugin to update unit test numbers automatically
 * Version: 1.3.9
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/eslint-plugin-test-num/
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).eslintPluginTestNum=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports}var u=i((function(e){e.exports=function(){var e=Object.prototype.toString;function r(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function n(t){if(!t)return!0;if(u(t)&&0===t.length)return!0;if("string"!=typeof t){for(var e in t)if(r(t,e))return!1;return!0}return!1}function o(t){return e.call(t)}function i(e){return"object"===t(e)&&"[object Object]"===o(e)}var u=Array.isArray||function(t){return"[object Array]"===e.call(t)};function s(t){return"boolean"==typeof t||"[object Boolean]"===o(t)}function a(t){var e=parseInt(t);return e.toString()===t?e:t}function c(t){t=t||{};var e=function t(e){return Object.keys(t).reduce((function(r,n){return"create"===n||"function"==typeof t[n]&&(r[n]=t[n].bind(t,e)),r}),{})};function o(e,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(e)||r(e,n)}function c(t,e){if(o(t,e))return t[e]}function l(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return l(t,e.split(".").map(a),r,n);var o=e[0],i=c(t,o);return 1===e.length?(void 0!==i&&n||(t[o]=r),i):(void 0===i&&("number"==typeof e[1]?t[o]=[]:t[o]={}),l(t[o],e.slice(1),r,n))}return e.has=function(e,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!e;for(var o=0;o<n.length;o++){var i=a(n[o]);if(!("number"==typeof i&&u(e)&&i<e.length||(t.includeInheritedProps?i in Object(e):r(e,i))))return!1;e=e[i]}return!0},e.ensureExists=function(t,e,r){return l(t,e,r,!0)},e.set=function(t,e,r,n){return l(t,e,r,n)},e.insert=function(t,r,n,o){var i=e.get(t,r);o=~~o,u(i)||(i=[],e.set(t,r,i)),i.splice(o,0,n)},e.empty=function(t,r){var a,c;if(!n(r)&&null!=t&&(a=e.get(t,r))){if("string"==typeof a)return e.set(t,r,"");if(s(a))return e.set(t,r,!1);if("number"==typeof a)return e.set(t,r,0);if(u(a))a.length=0;else{if(!i(a))return e.set(t,r,null);for(c in a)o(a,c)&&delete a[c]}}},e.push=function(t,r){var n=e.get(t,r);u(n)||(n=[],e.set(t,r,n)),n.push.apply(n,Array.prototype.slice.call(arguments,2))},e.coalesce=function(t,r,n){for(var o,i=0,u=r.length;i<u;i++)if(void 0!==(o=e.get(t,r[i])))return o;return n},e.get=function(t,r,n){if("number"==typeof r&&(r=[r]),!r||0===r.length)return t;if(null==t)return n;if("string"==typeof r)return e.get(t,r.split("."),n);var o=a(r[0]),i=c(t,o);return void 0===i?n:1===r.length?i:e.get(t[o],r.slice(1),n)},e.del=function(t,r){if("number"==typeof r&&(r=[r]),null==t)return t;if(n(r))return t;if("string"==typeof r)return e.del(t,r.split("."));var i=a(r[0]);return o(t,i)?1!==r.length?e.del(t[i],r.slice(1)):(u(t)?t.splice(i,1):delete t[i],t):t},e}var l=c();return l.create=c,l.withInheritedProps=c({includeInheritedProps:!0}),l}()}));Function.prototype.toString.call(Object),i((function(e,r){var n="__lodash_hash_undefined__",i=9007199254740991,u="[object Arguments]",s="[object Boolean]",a="[object Date]",c="[object Function]",l="[object GeneratorFunction]",f="[object Map]",p="[object Number]",y="[object Object]",g="[object Promise]",d="[object RegExp]",h="[object Set]",v="[object String]",b="[object Symbol]",m="[object WeakMap]",_="[object ArrayBuffer]",j="[object DataView]",x="[object Float32Array]",w="[object Float64Array]",O="[object Int8Array]",S="[object Int16Array]",A="[object Int32Array]",E="[object Uint8Array]",q="[object Uint8ClampedArray]",I="[object Uint16Array]",P="[object Uint32Array]",T=/\w*$/,k=/^\[object .+?Constructor\]$/,D=/^(?:0|[1-9]\d*)$/,N={};N[u]=N["[object Array]"]=N[_]=N[j]=N[s]=N[a]=N[x]=N[w]=N[O]=N[S]=N[A]=N[f]=N[p]=N[y]=N[d]=N[h]=N[v]=N[b]=N[E]=N[q]=N[I]=N[P]=!0,N["[object Error]"]=N[c]=N[m]=!1;var L="object"==t(o)&&o&&o.Object===Object&&o,F="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,R=L||F||Function("return this")(),U=r&&!r.nodeType&&r,$=U&&e&&!e.nodeType&&e,B=$&&$.exports===U;function M(t,e){return t.set(e[0],e[1]),t}function C(t,e){return t.add(e),t}function z(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function V(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function W(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function G(t,e){return function(r){return t(e(r))}}function H(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var J,K=Array.prototype,Q=Function.prototype,X=Object.prototype,Y=R["__core-js_shared__"],Z=(J=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+J:"",tt=Q.toString,et=X.hasOwnProperty,rt=X.toString,nt=RegExp("^"+tt.call(et).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=B?R.Buffer:void 0,it=R.Symbol,ut=R.Uint8Array,st=G(Object.getPrototypeOf,Object),at=Object.create,ct=X.propertyIsEnumerable,lt=K.splice,ft=Object.getOwnPropertySymbols,pt=ot?ot.isBuffer:void 0,yt=G(Object.keys,Object),gt=$t(R,"DataView"),dt=$t(R,"Map"),ht=$t(R,"Promise"),vt=$t(R,"Set"),bt=$t(R,"WeakMap"),mt=$t(Object,"create"),_t=Vt(gt),jt=Vt(dt),xt=Vt(ht),wt=Vt(vt),Ot=Vt(bt),St=it?it.prototype:void 0,At=St?St.valueOf:void 0;function Et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function qt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function It(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Pt(t){this.__data__=new qt(t)}function Tt(e,r){var n=Gt(e)||function(e){return function(e){return function(e){return!!e&&"object"==t(e)}(e)&&Ht(e)}(e)&&et.call(e,"callee")&&(!ct.call(e,"callee")||rt.call(e)==u)}(e)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(e.length,String):[],o=n.length,i=!!o;for(var s in e)!r&&!et.call(e,s)||i&&("length"==s||Ct(s,o))||n.push(s);return n}function kt(t,e,r){var n=t[e];et.call(t,e)&&Wt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Dt(t,e){for(var r=t.length;r--;)if(Wt(t[r][0],e))return r;return-1}function Nt(t,e,r,n,o,i,g){var m;if(n&&(m=i?n(t,o,i,g):n(t)),void 0!==m)return m;if(!Qt(t))return t;var k=Gt(t);if(k){if(m=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&et.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,m)}else{var D=Mt(t),L=D==c||D==l;if(Jt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(D==y||D==u||L&&!i){if(V(t))return i?t:{};if(m=function(t){return"function"!=typeof t.constructor||zt(t)?{}:(e=st(t),Qt(e)?at(e):{});var e}(L?{}:t),!e)return function(t,e){return Rt(t,Bt(t),e)}(t,function(t,e){return t&&Rt(e,Xt(e),t)}(m,t))}else{if(!N[D])return i?t:{};m=function(t,e,r,n){var o=t.constructor;switch(e){case _:return Ft(t);case s:case a:return new o(+t);case j:return function(t,e){var r=e?Ft(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case x:case w:case O:case S:case A:case E:case q:case I:case P:return function(t,e){var r=e?Ft(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case f:return function(t,e,r){return z(e?r(W(t),!0):W(t),M,new t.constructor)}(t,n,r);case p:case v:return new o(t);case d:return function(t){var e=new t.constructor(t.source,T.exec(t));return e.lastIndex=t.lastIndex,e}(t);case h:return function(t,e,r){return z(e?r(H(t),!0):H(t),C,new t.constructor)}(t,n,r);case b:return i=t,At?Object(At.call(i)):{}}var i}(t,D,Nt,e)}}g||(g=new Pt);var F=g.get(t);if(F)return F;if(g.set(t,m),!k)var R=r?function(t){return function(t,e,r){var n=e(t);return Gt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Xt,Bt)}(t):Xt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(R||t,(function(o,i){R&&(o=t[i=o]),kt(m,i,Nt(o,e,r,n,i,t,g))})),m}function Lt(t){return!(!Qt(t)||(e=t,Z&&Z in e))&&(Kt(t)||V(t)?nt:k).test(Vt(t));var e}function Ft(t){var e=new t.constructor(t.byteLength);return new ut(e).set(new ut(t)),e}function Rt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var u=e[o],s=n?n(r[u],t[u],u,r,t):void 0;kt(r,u,void 0===s?t[u]:s)}return r}function Ut(e,r){var n,o,i=e.__data__;return("string"==(o=t(n=r))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?i["string"==typeof r?"string":"hash"]:i.map}function $t(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Lt(r)?r:void 0}Et.prototype.clear=function(){this.__data__=mt?mt(null):{}},Et.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Et.prototype.get=function(t){var e=this.__data__;if(mt){var r=e[t];return r===n?void 0:r}return et.call(e,t)?e[t]:void 0},Et.prototype.has=function(t){var e=this.__data__;return mt?void 0!==e[t]:et.call(e,t)},Et.prototype.set=function(t,e){return this.__data__[t]=mt&&void 0===e?n:e,this},qt.prototype.clear=function(){this.__data__=[]},qt.prototype.delete=function(t){var e=this.__data__,r=Dt(e,t);return!(r<0)&&(r==e.length-1?e.pop():lt.call(e,r,1),!0)},qt.prototype.get=function(t){var e=this.__data__,r=Dt(e,t);return r<0?void 0:e[r][1]},qt.prototype.has=function(t){return Dt(this.__data__,t)>-1},qt.prototype.set=function(t,e){var r=this.__data__,n=Dt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},It.prototype.clear=function(){this.__data__={hash:new Et,map:new(dt||qt),string:new Et}},It.prototype.delete=function(t){return Ut(this,t).delete(t)},It.prototype.get=function(t){return Ut(this,t).get(t)},It.prototype.has=function(t){return Ut(this,t).has(t)},It.prototype.set=function(t,e){return Ut(this,t).set(t,e),this},Pt.prototype.clear=function(){this.__data__=new qt},Pt.prototype.delete=function(t){return this.__data__.delete(t)},Pt.prototype.get=function(t){return this.__data__.get(t)},Pt.prototype.has=function(t){return this.__data__.has(t)},Pt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof qt){var n=r.__data__;if(!dt||n.length<199)return n.push([t,e]),this;r=this.__data__=new It(n)}return r.set(t,e),this};var Bt=ft?G(ft,Object):function(){return[]},Mt=function(t){return rt.call(t)};function Ct(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||D.test(t))&&t>-1&&t%1==0&&t<e}function zt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||X)}function Vt(t){if(null!=t){try{return tt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Wt(t,e){return t===e||t!=t&&e!=e}(gt&&Mt(new gt(new ArrayBuffer(1)))!=j||dt&&Mt(new dt)!=f||ht&&Mt(ht.resolve())!=g||vt&&Mt(new vt)!=h||bt&&Mt(new bt)!=m)&&(Mt=function(t){var e=rt.call(t),r=e==y?t.constructor:void 0,n=r?Vt(r):void 0;if(n)switch(n){case _t:return j;case jt:return f;case xt:return g;case wt:return h;case Ot:return m}return e});var Gt=Array.isArray;function Ht(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!Kt(t)}var Jt=pt||function(){return!1};function Kt(t){var e=Qt(t)?rt.call(t):"";return e==c||e==l}function Qt(e){var r=t(e);return!!e&&("object"==r||"function"==r)}function Xt(t){return Ht(t)?Tt(t):function(t){if(!zt(t))return yt(t);var e=[];for(var r in Object(t))et.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}e.exports=function(t){return Nt(t,!0,!0)}}));function s(t,e){if("string"==typeof t&&t.length)for(var r,o=n(n({},{offset:0}),e),i=null,u=0,s=t.length;u<=s;u++){if(null!==i&&(t[u]&&t[u].trim().length&&!/\d/.test(t[u])&&!["."].includes(t[u])||!t[u]))return{start:o.offset+i,end:o.offset+r+1,value:t.slice(i,r+1)};if(/^\d*$/.test(t[u])&&(r=u,null===i&&(i=u)),null===i&&t[u]&&t[u].trim().length&&!/[\d.'"`]/.test(t[u]))return}}var a=function(t,e,r){return"single"===t?e:"".concat(e,".").concat("".concat(r).padStart(2,"0"))},c=new Set(["ok","notOk","true","false","assert","assertNot","error","ifErr","ifError","rejects","resolves","resolveMatchSnapshot","throws","throw","doesNotThrow","notThrow","expectUncaughtException"]),l=new Set(["emits","rejects","resolveMatch","throws","throw","expectUncaughtException","equal","equals","isEqual","is","strictEqual","strictEquals","strictIs","isStrict","isStrictly","notEqual","inequal","notEqual","notEquals","notStrictEqual","notStrictEquals","isNotEqual","isNot","doesNotEqual","isInequal","same","equivalent","looseEqual","looseEquals","deepEqual","deepEquals","isLoose","looseIs","notSame","inequivalent","looseInequal","notDeep","deepInequal","notLoose","looseNot","strictSame","strictEquivalent","strictDeepEqual","sameStrict","deepIs","isDeeply","isDeep","strictDeepEquals","strictNotSame","strictInequivalent","strictDeepInequal","notSameStrict","deepNot","notDeeply","strictDeepInequals","notStrictSame","hasStrict","match","has","hasFields","matches","similar","like","isLike","includes","include","contains","notMatch","dissimilar","unsimilar","notSimilar","unlike","isUnlike","notLike","isNotLike","doesNotHave","isNotSimilar","isDissimilar","type","isa","isA"]);return{configs:{recommended:{plugins:["test-num"],rules:{"no-console":"off","test-num/correct-test-num":"error"}}},rules:{"correct-test-num":{create:function(t){var e=0;return{ExpressionStatement:function(r){if("CallExpression"===u.get(r,"expression.type")&&["test","only","skip","todo"].includes(u.get(r,"expression.callee.property.name"))&&["TemplateLiteral","Literal"].includes(u.get(r,"expression.arguments.0.type"))){var n,o="".concat(e+=1).padStart(2,"0");if(!n&&"TemplateLiteral"===u.get(r,"expression.arguments.0.type")&&u.has(r,"expression.arguments.0.quasis.0.value.raw")){var i=s(u.get(r,"expression.arguments.0.quasis.0.value.raw"),{offset:u.get(r,"expression.arguments.0.quasis.0.start"),returnRangesOnly:!0})||{},f=i.start,p=i.end,y=i.value;f&&p&&y&&y!==o&&(n={start:f,end:p,value:o,node:u.get(r,"expression.arguments.0.quasis.0")})}if(!n&&"Literal"===r.expression.arguments[0].type&&r.expression.arguments[0].raw){var g=s(r.expression.arguments[0].raw,{offset:r.expression.arguments[0].start,returnRangesOnly:!0})||{},d=g.start,h=g.end,v=g.value;d&&h&&v&&v!==o&&(n={start:d,end:h,value:o,node:r.expression.arguments[0]})}if(!n&&"ArrowFunctionExpression"===u.get(r,"expression.arguments.1.type")&&"BlockStatement"===u.get(r,"expression.arguments.1.body.type")&&u.get(r,"expression.arguments.1.body.body").length){var b,m="multiple";2===(b=u.get(r,"expression.arguments.1.body.body").filter((function(t){return"ExpressionStatement"===t.type&&"t"===u.get(t,"expression.callee.object.name")}))).length&&"end"===u.get(b[b.length-1],"expression.callee.property.name")&&(m="single");var _=u.get(r,"expression.arguments.1.body.body");if(Array.isArray(_))for(var j=0,x=0,w=_.length;x<w;x++){var O=u.get(_[x],"expression.callee.property.name");if(O){var S=void 0;if(l.has(O)&&u.has(_[x],"expression.arguments.2")?S=2:c.has(O)&&u.has(_[x],"expression.arguments.1")&&(S=1),S){if("continue"===function(){var e=void 0,r=void 0,n=void 0;"TemplateLiteral"===u.get(_[x],"expression.arguments.".concat(S,".type"))?(r="expression.arguments.".concat(S,".quasis.0"),e=u.get(_[x],"".concat(r,".value.raw")),n=u.get(_[x],"".concat(r,".start")),j+=1):"Literal"===u.get(_[x],"expression.arguments.".concat(S,".type"))&&(r="expression.arguments.".concat(S),e=u.get(_[x],"".concat(r,".raw")),n=u.get(_[x],"".concat(r,".start")),j+=1);var i=s(e,{offset:n,returnRangesOnly:!0})||{},c=i.start,l=i.end;if(!c||!l)return"continue";var f=a(m,o,j);s(e).value!==f&&t.report({node:u.get(_[x],r),messageId:"correctTestNum",fix:function(t){return t.replaceTextRange([c,l],f)}})}())continue}else{var A=void 0;l.has(O)&&Array.isArray(u.get(_[x],"expression.arguments"))&&2===u.get(_[x],"expression.arguments").length?A=2:c.has(O)&&Array.isArray(u.get(_[x],"expression.arguments"))&&1===u.get(_[x],"expression.arguments").length&&(A=1),A&&function(){var e=u.get(_[x],"expression.end")-1,r=a(m,o,j),n=t.getSourceCode().getText(),i=e,s=function(t,e,r){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),e<1)return null;if(t[~-e]&&(!r&&t[~-e].trim()||r&&(t[~-e].trim()||"\n\r".includes(t[~-e]))))return~-e;if(t[e-2]&&(!r&&t[e-2].trim()||r&&(t[e-2].trim()||"\n\r".includes(t[e-2]))))return e-2;for(var n=e;n--;)if(t[n]&&(!r&&t[n].trim()||r&&(t[n].trim()||"\n\r".includes(t[n]))))return n;return null}(n,i,!1)+1,c=', "'.concat(r,'"');if(n.slice(s,i).includes("\n")){var l=Array.from(n.slice(s,i)).filter((function(t){return!"\r\n".includes(t)})).join("");c=",\n".concat(l,'  "').concat(r,'"\n').concat(l)}t.report({node:_[x],messageId:"correctTestNum",fix:function(t){return t.replaceTextRange([s,i],c)}})}()}}}}n&&t.report({messageId:"correctTestNum",node:n.node||r,fix:function(t){return t.replaceTextRange([n.start,n.end],n.value)}})}}}},meta:{type:"suggestion",messages:{correctTestNum:"Update the test number."},fixable:"code"}}}}}));

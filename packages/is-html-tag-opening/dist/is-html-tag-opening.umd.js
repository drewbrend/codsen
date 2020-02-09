/**
 * is-html-tag-opening
 * Is given opening bracket a beginning of a tag?
 * Version: 1.6.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/is-html-tag-opening
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).isHtmlTagOpening=e()}(this,(function(){"use strict";function t(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=56319);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isHighSurrogate(): the input is not string but ${typeof t}`)}function e(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=56320&&t.charCodeAt(0)<=57343);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isLowSurrogate(): the input is not string but ${typeof t}`)}function r(t){return null!=t}function n(t){return"string"==typeof t&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=57343)}function o(n,o,i,a,u){const c="function"==typeof i?i():i;if(o>=n.length&&u&&"EOL"===c)return c;if(!(o<=n.length)){if(a.relaxedApi)return!1;throw new Error(`string-match-left-right/marchForward(): [THROW_ID_102] second argument, fromIndexInclusive is ${o} beyond the input string length, ${n.length}.`)}{let s=u?1:i.length;for(let u=o,c=n.length;u<c;u++){let o=n[u];if(t(n[u])&&e(n[u+1])&&(o=n[u]+n[u+1]),e(n[u])&&t(n[u-1])&&(o=n[u-1]+n[u]),a.trimBeforeMatching&&""===n[u].trim())continue;if(!a.i&&a.trimCharsBeforeMatching.includes(o)||a.i&&a.trimCharsBeforeMatching.map(t=>t.toLowerCase()).includes(o.toLowerCase())){2===o.length&&(u+=1);continue}let c=i[i.length-s];if(t(c)&&r(i[i.length-s+1])&&e(i[i.length-s+1])&&(c=i[i.length-s]+i[i.length-s+1]),!(!a.i&&o===c||a.i&&o.toLowerCase()===c.toLowerCase()))return!1;if(s-=o.length,s<1){let a=u-i.length+o.length;return a>=0&&e(n[a])&&r(n[a-1])&&t(n[a-1])&&(a-=1),a>=0?a:0}2===o.length&&t(n[u])&&(u+=1)}if(s>0)return!(!u||"EOL"!==c)}}function i(r,n,o,i,a){const u="function"==typeof o?o():o;if(n<0&&a&&"EOL"===u)return u;if(n>=r.length){if(i.relaxedApi)return!1;throw new Error(`string-match-left-right/marchBackward(): [THROW_ID_203] second argument, starting index, should not be beyond the last character of the input string! Currently the first argument's last character's index is ${r.length} but the second argument is beyond it:\n${JSON.stringify(n,null,4)}`)}let c=a?1:o.length;for(let u=n+1;u--;){if(i.trimBeforeMatching&&""===r[u].trim()){if(0===u&&a&&"EOL"===o)return!0;continue}let n=r[u];if(e(r[u])&&t(r[u-1])?n=r[u-1]+r[u]:t(r[u])&&e(r[u+1])&&(n=r[u]+r[u+1]),!i.i&&i.trimCharsBeforeMatching.includes(n)||i.i&&i.trimCharsBeforeMatching.map(t=>t.toLowerCase()).includes(n.toLowerCase())){if(2===n.length&&(u-=1),a&&"EOL"===o&&0===u)return!0;continue}let s=o[c-1];if(e(s)&&(s=`${o[c-2]}${o[c-1]}`,c-=1,u-=1),!(!i.i&&n===s||i.i&&n.toLowerCase()===s.toLowerCase()))return!1;if(c-=1,c<1)return u>=0?u:0}return c>0?!(!a||"EOL"!==u):void 0}function a(a,u,c,s){return function(a,u,c,s,f){if("object"==typeof f&&null!==f&&Object.prototype.hasOwnProperty.call(f,"trimBeforeMatching")&&"boolean"!=typeof f.trimBeforeMatching)throw new Error(`string-match-left-right/${a}(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!${Array.isArray(f.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""}`);const l=Object.assign({},{i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],relaxedApi:!1},f);var h;let g,p,y,d;if(l.trimCharsBeforeMatching="string"==typeof(h=l.trimCharsBeforeMatching)?h.length>0?[h]:[]:h,l.trimCharsBeforeMatching=l.trimCharsBeforeMatching.map(t=>"string"==typeof t?t:String(t)),l.trimCharsBeforeMatching.some((t,e)=>t.length>1&&!n(t)&&(g=e,p=t,!0)))throw new Error(`string-match-left-right/${a}(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ${g} is longer than 1 character, ${p.length} (equals to ${p}). Please split it into separate characters and put into array as separate elements.`);if("string"!=typeof u){if(l.relaxedApi)return!1;throw new Error(`string-match-left-right/${a}(): [THROW_ID_01] the first argument should be a string. Currently it's of a type: ${typeof u}, equal to:\n${JSON.stringify(u,null,4)}`)}if(0===u.length){if(l.relaxedApi)return!1;throw new Error(`string-match-left-right/${a}(): [THROW_ID_02] the first argument should be a non-empty string. Currently it's empty!`)}if(!(Number.isInteger(c)&&c>=0)){if(l.relaxedApi)return!1;throw new Error(`string-match-left-right/${a}(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ${typeof c}, equal to:\n${JSON.stringify(c,null,4)}`)}if("string"==typeof s)y=[s];else if(Array.isArray(s))y=s;else if(r(s)){if("function"!=typeof s)throw new Error(`string-match-left-right/${a}(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ${typeof s}, equal to:\n${JSON.stringify(s,null,4)}`);y=[],y.push(s)}else y=s;if(r(f)&&"object"!=typeof f)throw new Error(`string-match-left-right/${a}(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type "${typeof f}", and equal to:\n${JSON.stringify(f,null,4)}`);if(!r(y)||!Array.isArray(y)||Array.isArray(y)&&!y.length||Array.isArray(y)&&1===y.length&&"string"==typeof y[0]&&0===y[0].trim().length){if("function"==typeof l.cb){let r,n=c;if("matchRight"===a&&t(u[c])&&e(u[c+1])&&(n+=1),"matchLeftIncl"!==a&&"matchRight"!==a||(n+=1),a.startsWith("matchLeft"))for(let o=n;o--;){if(e(u[o])&&t(u[o-1]))continue;let n=u[o];if(t(u[o])&&e(u[o+1])&&(n=u[o]+u[o+1]),(!l.trimBeforeMatching||l.trimBeforeMatching&&void 0!==n&&""!==n.trim())&&(0===l.trimCharsBeforeMatching.length||void 0!==n&&!l.trimCharsBeforeMatching.includes(n))){r=o;break}e(u[o-1])&&t(u[o-2])&&(o-=1)}else if(a.startsWith("matchRight"))for(let o=n;o<u.length;o++){let n=u[o];if(t(u[o])&&e(u[o+1])&&(n=u[o]+u[o+1]),(!l.trimBeforeMatching||l.trimBeforeMatching&&""!==n.trim())&&(0===l.trimCharsBeforeMatching.length||!l.trimCharsBeforeMatching.includes(n))){r=o;break}t(u[o])&&e(u[o+1])&&(o+=1)}if(void 0===r)return!1;let o=u[r];t(u[r])&&e(u[r+1])&&(o=u[r]+u[r+1]),e(u[r])&&t(u[r-1])&&(o=u[r-1]+u[r],r-=1);let i,s=r+1;return t(u[r])&&e(u[r+1])&&(s+=1),s&&s>0&&(i=u.slice(0,s)),a.startsWith("matchLeft")?l.cb(o,i,r):(r&&r>0&&(i=u.slice(r)),l.cb(o,i,r))}let n="";throw r(f)||(n=" More so, the whole options object, the fourth input argument, is missing!"),new Error(`string-match-left-right/${a}(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!${n}`)}if(a.startsWith("matchLeft")){for(let o=0,s=y.length;o<s;o++){d="function"==typeof y[o];const s=y[o];let f,h,g="",p=c;"matchLeft"===a&&(n(u[o-1])&&n(u[o-2])?p-=2:p-=1);const b=i(u,p,s,l,d);if(b&&d&&"function"==typeof s&&"EOL"===s())return!(!s()||l.cb&&!l.cb(f,g,h))&&s();if(r(b)&&b>0&&(h=b-1,f=u[h],g=u.slice(0,b)),e(u[h])&&r(u[h-1])&&t(u[h-1])&&(h-=1,f=u[h-1]+u[h]),t(u[h])&&r(u[h+1])&&e(u[h+1])&&(f=u[h]+u[h+1],g=u.slice(0,h+2)),!1!==b&&(!l.cb||l.cb(f,g,h)))return s}return!1}for(let n=0,i=y.length;n<i;n++){d="function"==typeof y[n];const i=y[n];let s=c+("matchRight"===a?1:0);"matchRight"===a&&t(u[s-1])&&e(u[s])&&(s+=1);const f=o(u,s,i,l,d);if(f&&d&&"function"==typeof i&&"EOL"===i()){let t,e,r;return!(!i()||l.cb&&!l.cb(t,e,r))&&i()}let h,g,p;if(r(f)&&r(u[f+i.length-1])&&(h=f+i.length,g=u[h],t(u[h])&&e(u[h+1])&&(g=u[h]+u[h+1])),r(h)&&h>=0&&(p=u.slice(h)),!1!==f&&(!l.cb||l.cb(g,p,h)))return i}return!1}("matchRight",a,u,c,s)}Function.prototype.toString.call(Object);var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t,e){t(e={exports:{}},e.exports)}((function(t,e){var r="[object Arguments]",n="[object Function]",o="[object GeneratorFunction]",i="[object Map]",a="[object Set]",c=/\w*$/,s=/^\[object .+?Constructor\]$/,f=/^(?:0|[1-9]\d*)$/,l={};l[r]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object DataView]"]=l["[object Boolean]"]=l["[object Date]"]=l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l[i]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l[a]=l["[object String]"]=l["[object Symbol]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Error]"]=l[n]=l["[object WeakMap]"]=!1;var h="object"==typeof u&&u&&u.Object===Object&&u,g="object"==typeof self&&self&&self.Object===Object&&self,p=h||g||Function("return this")(),y=e&&!e.nodeType&&e,d=y&&t&&!t.nodeType&&t,b=d&&d.exports===y;function m(t,e){return t.set(e[0],e[1]),t}function _(t,e){return t.add(e),t}function v(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function w(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function j(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function O(t,e){return function(r){return t(e(r))}}function C(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var F,A=Array.prototype,B=Function.prototype,M=Object.prototype,$=p["__core-js_shared__"],D=(F=/[^.]+$/.exec($&&$.keys&&$.keys.IE_PROTO||""))?"Symbol(src)_1."+F:"",x=B.toString,E=M.hasOwnProperty,I=M.toString,L=RegExp("^"+x.call(E).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),T=b?p.Buffer:void 0,S=p.Symbol,k=p.Uint8Array,R=O(Object.getPrototypeOf,Object),W=Object.create,H=M.propertyIsEnumerable,U=A.splice,N=Object.getOwnPropertySymbols,P=T?T.isBuffer:void 0,q=O(Object.keys,Object),z=dt(p,"DataView"),J=dt(p,"Map"),V=dt(p,"Promise"),G=dt(p,"Set"),K=dt(p,"WeakMap"),Q=dt(Object,"create"),X=wt(z),Y=wt(J),Z=wt(V),tt=wt(G),et=wt(K),rt=S?S.prototype:void 0,nt=rt?rt.valueOf:void 0;function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function it(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ut(t){this.__data__=new it(t)}function ct(t,e){var n=Ot(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ct(t)}(t)&&E.call(t,"callee")&&(!H.call(t,"callee")||I.call(t)==r)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],o=n.length,i=!!o;for(var a in t)!e&&!E.call(t,a)||i&&("length"==a||_t(a,o))||n.push(a);return n}function st(t,e,r){var n=t[e];E.call(t,e)&&jt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function ft(t,e){for(var r=t.length;r--;)if(jt(t[r][0],e))return r;return-1}function lt(t,e,u,s,f,h,g){var p;if(s&&(p=h?s(t,f,h,g):s(t)),void 0!==p)return p;if(!Bt(t))return t;var y=Ot(t);if(y){if(p=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&E.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,p)}else{var d=mt(t),b=d==n||d==o;if(Ft(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if("[object Object]"==d||d==r||b&&!h){if(w(t))return h?t:{};if(p=function(t){return"function"!=typeof t.constructor||vt(t)?{}:(e=R(t),Bt(e)?W(e):{});var e}(b?{}:t),!e)return function(t,e){return pt(t,bt(t),e)}(t,function(t,e){return t&&pt(e,Mt(e),t)}(p,t))}else{if(!l[d])return h?t:{};p=function(t,e,r,n){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return gt(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var r=e?gt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?gt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case i:return function(t,e,r){return v(e?r(j(t),!0):j(t),m,new t.constructor)}(t,n,r);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,c.exec(t));return e.lastIndex=t.lastIndex,e}(t);case a:return function(t,e,r){return v(e?r(C(t),!0):C(t),_,new t.constructor)}(t,n,r);case"[object Symbol]":return u=t,nt?Object(nt.call(u)):{}}var u}(t,d,lt,e)}}g||(g=new ut);var O=g.get(t);if(O)return O;if(g.set(t,p),!y)var F=u?function(t){return function(t,e,r){var n=e(t);return Ot(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Mt,bt)}(t):Mt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(F||t,(function(r,n){F&&(r=t[n=r]),st(p,n,lt(r,e,u,s,n,t,g))})),p}function ht(t){return!(!Bt(t)||(e=t,D&&D in e))&&(At(t)||w(t)?L:s).test(wt(t));var e}function gt(t){var e=new t.constructor(t.byteLength);return new k(e).set(new k(t)),e}function pt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],u=n?n(r[a],t[a],a,r,t):void 0;st(r,a,void 0===u?t[a]:u)}return r}function yt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function dt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return ht(r)?r:void 0}ot.prototype.clear=function(){this.__data__=Q?Q(null):{}},ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ot.prototype.get=function(t){var e=this.__data__;if(Q){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return E.call(e,t)?e[t]:void 0},ot.prototype.has=function(t){var e=this.__data__;return Q?void 0!==e[t]:E.call(e,t)},ot.prototype.set=function(t,e){return this.__data__[t]=Q&&void 0===e?"__lodash_hash_undefined__":e,this},it.prototype.clear=function(){this.__data__=[]},it.prototype.delete=function(t){var e=this.__data__,r=ft(e,t);return!(r<0)&&(r==e.length-1?e.pop():U.call(e,r,1),!0)},it.prototype.get=function(t){var e=this.__data__,r=ft(e,t);return r<0?void 0:e[r][1]},it.prototype.has=function(t){return ft(this.__data__,t)>-1},it.prototype.set=function(t,e){var r=this.__data__,n=ft(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},at.prototype.clear=function(){this.__data__={hash:new ot,map:new(J||it),string:new ot}},at.prototype.delete=function(t){return yt(this,t).delete(t)},at.prototype.get=function(t){return yt(this,t).get(t)},at.prototype.has=function(t){return yt(this,t).has(t)},at.prototype.set=function(t,e){return yt(this,t).set(t,e),this},ut.prototype.clear=function(){this.__data__=new it},ut.prototype.delete=function(t){return this.__data__.delete(t)},ut.prototype.get=function(t){return this.__data__.get(t)},ut.prototype.has=function(t){return this.__data__.has(t)},ut.prototype.set=function(t,e){var r=this.__data__;if(r instanceof it){var n=r.__data__;if(!J||n.length<199)return n.push([t,e]),this;r=this.__data__=new at(n)}return r.set(t,e),this};var bt=N?O(N,Object):function(){return[]},mt=function(t){return I.call(t)};function _t(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||f.test(t))&&t>-1&&t%1==0&&t<e}function vt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||M)}function wt(t){if(null!=t){try{return x.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function jt(t,e){return t===e||t!=t&&e!=e}(z&&"[object DataView]"!=mt(new z(new ArrayBuffer(1)))||J&&mt(new J)!=i||V&&"[object Promise]"!=mt(V.resolve())||G&&mt(new G)!=a||K&&"[object WeakMap]"!=mt(new K))&&(mt=function(t){var e=I.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?wt(r):void 0;if(n)switch(n){case X:return"[object DataView]";case Y:return i;case Z:return"[object Promise]";case tt:return a;case et:return"[object WeakMap]"}return e});var Ot=Array.isArray;function Ct(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!At(t)}var Ft=P||function(){return!1};function At(t){var e=Bt(t)?I.call(t):"";return e==n||e==o}function Bt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Mt(t){return Ct(t)?ct(t):function(t){if(!vt(t))return q(t);var e=[];for(var r in Object(t))E.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return lt(t,!0,!0)}}));function c(t,e){return function(t,e,r){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),!t[e+1])return null;if(t[e+1]&&(!r&&t[e+1].trim().length||r&&(t[e+1].trim().length||"\n\r".includes(t[e+1]))))return e+1;if(t[e+2]&&(!r&&t[e+2].trim().length||r&&(t[e+2].trim().length||"\n\r".includes(t[e+2]))))return e+2;for(let n=e+1,o=t.length;n<o;n++)if(t[n]&&(!r&&t[n].trim().length||r&&(t[n].trim().length||"\n\r".includes(t[n]))))return n;return null}(t,e,!1)}var s="\\",f=["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","doctype","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h1 - h6","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xml"];function l(t){return"string"==typeof t}function h(t){return void 0===t||t.toUpperCase()===t.toLowerCase()&&!"0123456789".includes(t)}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0,n={allowCustomTagNames:!1},o=Object.assign({},n,r),i=/^<[\\ \t\r\n/]*\w+[\\ \t\r\n/]*>/g,u=/^<[\\ \t\r\n/]*[.\-_a-z0-9\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\uFFFF]+[\\ \t\r\n/]*>/g,g=/^<\s*\w+\s+\w+(?:-\w+)?\s*=\s*['"\w]/g,p=/^<\s*\w+\s+[.\-_a-z0-9\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\uFFFF]+(?:-\w+)?\s*=\s*['"\w]/g,y=/^<\s*\/?\s*\w+\s*\/?\s*>/g,d=/^<\s*\/?\s*[.\-_a-z0-9\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\uFFFF]+\s*\/?\s*>/g,b=/^<[\\ \t\r\n/]*\w+(?:\s*\w+)*\s*\w+=['"]/g,m=/^<[\\ \t\r\n/]*[.\-_a-z0-9\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\uFFFF]+(?:\s*\w+)*\s*\w+=['"]/g,_=e?t.slice(e):t,v=!1;o.allowCustomTagNames?u.test(_)?v=!0:p.test(_)?v=!0:d.test(_)?v=!0:m.test(_)&&(v=!0):i.test(_)?v=!0:g.test(_)?v=!0:y.test(_)?v=!0:b.test(_)&&(v=!0),!v&&"<"===t[e]&&t[e+1]&&(["/",s].includes(t[e+1])&&a(t,e+1,f,{cb:h,i:!0})||!h(t[e+1])&&a(t,e,f,{cb:h,i:!0,trimCharsBeforeMatching:["/",s,"!"," ","\t","\n","\r"]})||h(t[e+1])&&a(t,e,f,{cb:function(e,r,n){return(void 0===e||e.toUpperCase()===e.toLowerCase()&&!"0123456789".includes(e))&&("/"===t[c(t,n-1)]||">"===t[c(t,n-1)])},i:!0,trimCharsBeforeMatching:["/",s,"!"," ","\t","\n","\r"]}))&&(v=!0);var w=l(t)&&e<t.length&&v;return w}}));

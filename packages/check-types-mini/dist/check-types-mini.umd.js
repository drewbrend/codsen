!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.checkTypesMini=e()}(this,function(){"use strict";var St="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(t,e){return t(e={exports:{}},e.exports),e.exports}var _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=t(function(t,e){var o,i,r,a,c,u,s,f,n,l,p,y,h,d,g,v,b,m;t.exports=(o="function"==typeof Promise,i="object"===("undefined"==typeof self?"undefined":_(self))?self:St,r="undefined"!=typeof Symbol,a="undefined"!=typeof Map,c="undefined"!=typeof Set,u="undefined"!=typeof WeakMap,s="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,n=r&&void 0!==Symbol.iterator,l=r&&void 0!==Symbol.toStringTag,p=c&&"function"==typeof Set.prototype.entries,y=a&&"function"==typeof Map.prototype.entries,h=p&&Object.getPrototypeOf((new Set).entries()),d=y&&Object.getPrototypeOf((new Map).entries()),g=n&&"function"==typeof Array.prototype[Symbol.iterator],v=g&&Object.getPrototypeOf([][Symbol.iterator]()),b=n&&"function"==typeof String.prototype[Symbol.iterator],m=b&&Object.getPrototypeOf(""[Symbol.iterator]()),function(t){var e=void 0===t?"undefined":_(t);if("object"!==e)return e;if(null===t)return"null";if(t===i)return"global";if(Array.isArray(t)&&(!1===l||!(Symbol.toStringTag in t)))return"Array";if("object"===("undefined"==typeof window?"undefined":_(window))&&null!==window){if("object"===_(window.location)&&t===window.location)return"Location";if("object"===_(window.document)&&t===window.document)return"Document";if("object"===_(window.navigator)){if("object"===_(window.navigator.mimeTypes)&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"===_(window.navigator.plugins)&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"===_(window.HTMLElement))&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var r=l&&t[Symbol.toStringTag];if("string"==typeof r)return r;var n=Object.getPrototypeOf(t);return n===RegExp.prototype?"RegExp":n===Date.prototype?"Date":o&&n===Promise.prototype?"Promise":c&&n===Set.prototype?"Set":a&&n===Map.prototype?"Map":s&&n===WeakSet.prototype?"WeakSet":u&&n===WeakMap.prototype?"WeakMap":f&&n===DataView.prototype?"DataView":a&&n===d?"Map Iterator":c&&n===h?"Set Iterator":g&&n===v?"Array Iterator":b&&n===m?"String Iterator":null===n?"Object":Object.prototype.toString.call(t).slice(8,-1)})});function p(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,i,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function y(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}function i(t){return t!=t}var d=Array.prototype.splice;function r(t,e,r,n){var o,i=n?y:p,a=-1,c=e.length,u=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(u=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(o=r,function(t){return o(t)})));++a<c;)for(var s=0,f=e[a],l=r?r(f):f;-1<(s=i(u,l,s,n));)u!==t&&d.call(u,s,1),d.call(t,s,1);return t}var c=function(t,e){return t&&t.length&&e&&e.length?r(t,e):t},At="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g=t(function(t,e){var n="__lodash_hash_undefined__",r=9007199254740991,w="[object Arguments]",O="[object Function]",S="[object GeneratorFunction]",o="[object Map]",A="[object Object]",i="[object Promise]",a="[object Set]",c="[object WeakMap]",u="[object DataView]",s=/^\[object .+?Constructor\]$/,f=/^(?:0|[1-9]\d*)$/,l="object"==At(St)&&St&&St.Object===Object&&St,p="object"==("undefined"==typeof self?"undefined":At(self))&&self&&self.Object===Object&&self,y=l||p||Function("return this")(),h=e&&!e.nodeType&&e,d=h&&t&&!t.nodeType&&t,g=d&&d.exports===h;function k(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function v(e,r){return function(t){return e(r(t))}}var b,m=Array.prototype,_=Function.prototype,j=Object.prototype,T=y["__core-js_shared__"],P=(b=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||""))?"Symbol(src)_1."+b:"",E=_.toString,M=j.hasOwnProperty,L=j.toString,N=RegExp("^"+E.call(M).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),x=g?y.Buffer:void 0,I=y.Symbol,C=(y.Uint8Array,v(Object.getPrototypeOf,Object)),K=Object.create,V=j.propertyIsEnumerable,$=m.splice,D=Object.getOwnPropertySymbols,F=x?x.isBuffer:void 0,W=v(Object.keys,Object),H=lt(y,"DataView"),R=lt(y,"Map"),B=lt(y,"Promise"),G=lt(y,"Set"),J=lt(y,"WeakMap"),Q=lt(Object,"create"),U=gt(H),q=gt(R),z=gt(B),X=gt(G),Y=gt(J),Z=I?I.prototype:void 0;Z&&Z.valueOf;function tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function rt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function nt(t){this.__data__=new et(t)}function ot(t,e){var r,n,o,i=bt(t)||(o=n=r=t)&&"object"==(void 0===o?"undefined":At(o))&&mt(n)&&M.call(r,"callee")&&(!V.call(r,"callee")||L.call(r)==w)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],a=i.length,c=!!a;for(var u in t)!e&&!M.call(t,u)||c&&("length"==u||ht(u,a))||i.push(u);return i}function it(t,e,r){var n=t[e];M.call(t,e)&&vt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function at(t,e){for(var r=t.length;r--;)if(vt(t[r][0],e))return r;return-1}function ct(r,n,o,i,t,e,a){var c;if(i&&(c=e?i(r,t,e,a):i(r)),void 0!==c)return c;if(!wt(r))return r;var u,s,f,l,p,y,h=bt(r);if(h){if(c=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&M.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(r),!n)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(r,c)}else{var d=yt(r),g=d==O||d==S;if(_t(r))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(r,n);if(d!=A&&d!=w&&(!g||e))return e?r:{};if(k(r))return e?r:{};if(c="function"!=typeof(p=g?{}:r).constructor||dt(p)?{}:wt(y=C(p))?K(y):{},!n)return l=u=r,s=(f=c)&&st(l,Ot(l),f),st(u,pt(u),s)}a||(a=new nt);var v,b,m,_=a.get(r);if(_)return _;if(a.set(r,c),!h)var j=o?(b=pt,m=Ot(v=r),bt(v)?m:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(m,b(v))):Ot(r);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(j||r,function(t,e){j&&(t=r[e=t]),it(c,e,ct(t,n,o,i,e,r,a))}),c}function ut(t){return!(!wt(t)||(e=t,P&&P in e))&&(jt(t)||k(t)?N:s).test(gt(t));var e}function st(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;it(r,a,void 0===c?t[a]:c)}return r}function ft(t,e){var r,n,o=t.__data__;return("string"==(n=void 0===(r=e)?"undefined":At(r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function lt(t,e){var r,n,o=(n=e,null==(r=t)?void 0:r[n]);return ut(o)?o:void 0}tt.prototype.clear=function(){this.__data__=Q?Q(null):{}},tt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},tt.prototype.get=function(t){var e=this.__data__;if(Q){var r=e[t];return r===n?void 0:r}return M.call(e,t)?e[t]:void 0},tt.prototype.has=function(t){var e=this.__data__;return Q?void 0!==e[t]:M.call(e,t)},tt.prototype.set=function(t,e){return this.__data__[t]=Q&&void 0===e?n:e,this},et.prototype.clear=function(){this.__data__=[]},et.prototype.delete=function(t){var e=this.__data__,r=at(e,t);return!(r<0||(r==e.length-1?e.pop():$.call(e,r,1),0))},et.prototype.get=function(t){var e=this.__data__,r=at(e,t);return r<0?void 0:e[r][1]},et.prototype.has=function(t){return-1<at(this.__data__,t)},et.prototype.set=function(t,e){var r=this.__data__,n=at(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},rt.prototype.clear=function(){this.__data__={hash:new tt,map:new(R||et),string:new tt}},rt.prototype.delete=function(t){return ft(this,t).delete(t)},rt.prototype.get=function(t){return ft(this,t).get(t)},rt.prototype.has=function(t){return ft(this,t).has(t)},rt.prototype.set=function(t,e){return ft(this,t).set(t,e),this},nt.prototype.clear=function(){this.__data__=new et},nt.prototype.delete=function(t){return this.__data__.delete(t)},nt.prototype.get=function(t){return this.__data__.get(t)},nt.prototype.has=function(t){return this.__data__.has(t)},nt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof et){var n=r.__data__;if(!R||n.length<199)return n.push([t,e]),this;r=this.__data__=new rt(n)}return r.set(t,e),this};var pt=D?v(D,Object):function(){return[]},yt=function(t){return L.call(t)};function ht(t,e){return!!(e=null==e?r:e)&&("number"==typeof t||f.test(t))&&-1<t&&t%1==0&&t<e}function dt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||j)}function gt(t){if(null!=t){try{return E.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function vt(t,e){return t===e||t!=t&&e!=e}(H&&yt(new H(new ArrayBuffer(1)))!=u||R&&yt(new R)!=o||B&&yt(B.resolve())!=i||G&&yt(new G)!=a||J&&yt(new J)!=c)&&(yt=function(t){var e=L.call(t),r=e==A?t.constructor:void 0,n=r?gt(r):void 0;if(n)switch(n){case U:return u;case q:return o;case z:return i;case X:return a;case Y:return c}return e});var bt=Array.isArray;function mt(t){return null!=t&&("number"==typeof(e=t.length)&&-1<e&&e%1==0&&e<=r)&&!jt(t);var e}var _t=F||function(){return!1};function jt(t){var e=wt(t)?L.call(t):"";return e==O||e==S}function wt(t){var e=void 0===t?"undefined":At(t);return!!t&&("object"==e||"function"==e)}function Ot(t){return mt(t)?ot(t):function(t){if(!dt(t))return W(t);var e=[];for(var r in Object(t))M.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return ct(t,!0,!0)}}),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var e,n,a=Function.prototype,u=Object.prototype,s=a.toString,f=u.hasOwnProperty,l=s.call(Object),v=u.toString,b=(e=Object.getPrototypeOf,n=Object,function(t){return e(n(t))});var m=function(t){if(!(e=t)||"object"!=(void 0===e?"undefined":o(e))||"[object Object]"!=v.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e,r=b(t);if(null===r)return!0;var n=f.call(r,"constructor")&&r.constructor;return"function"==typeof n&&n instanceof n&&s.call(n)==l},j=Array.isArray;function w(t){return"string"==typeof t&&0<t.length&&"."===t[0]?t.slice(1):t}var O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S="__lodash_hash_undefined__",A=9007199254740991,k="[object Function]",T="[object GeneratorFunction]",P=/^\[object .+?Constructor\]$/,E="object"==O(St)&&St&&St.Object===Object&&St,M="object"==("undefined"==typeof self?"undefined":O(self))&&self&&self.Object===Object&&self,L=E||M||Function("return this")();function N(t,e){return!!(t?t.length:0)&&-1<function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,C,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)}function x(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function I(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function C(t){return t!=t}function K(e){return function(t){return e(t)}}function V(t,e){return t.has(e)}var $,D,F,W=Array.prototype,H=Function.prototype,R=Object.prototype,B=L["__core-js_shared__"],G=($=/[^.]+$/.exec(B&&B.keys&&B.keys.IE_PROTO||""))?"Symbol(src)_1."+$:"",J=H.toString,Q=R.hasOwnProperty,U=R.toString,q=RegExp("^"+J.call(Q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),z=W.splice,X=Math.max,Y=Math.min,Z=st(L,"Map"),tt=st(Object,"create");function et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function rt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function nt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ot(t){var e=-1,r=t?t.length:0;for(this.__data__=new nt;++e<r;)this.add(t[e])}function it(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function at(t){return!(!lt(t)||(e=t,G&&G in e))&&(ft(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?q:P).test(function(t){if(null!=t){try{return J.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function ct(t){return(o=e=t)&&"object"==(void 0===o?"undefined":O(o))&&(null!=(r=e)&&("number"==typeof(n=r.length)&&-1<n&&n%1==0&&n<=A)&&!ft(r))?t:[];var e,r,n,o}function ut(t,e){var r,n,o=t.__data__;return("string"==(n=void 0===(r=e)?"undefined":O(r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function st(t,e){var r,n,o=(n=e,null==(r=t)?void 0:r[n]);return at(o)?o:void 0}function ft(t){var e=lt(t)?U.call(t):"";return e==k||e==T}function lt(t){var e=void 0===t?"undefined":O(t);return!!t&&("object"==e||"function"==e)}et.prototype.clear=function(){this.__data__=tt?tt(null):{}},et.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},et.prototype.get=function(t){var e=this.__data__;if(tt){var r=e[t];return r===S?void 0:r}return Q.call(e,t)?e[t]:void 0},et.prototype.has=function(t){var e=this.__data__;return tt?void 0!==e[t]:Q.call(e,t)},et.prototype.set=function(t,e){return this.__data__[t]=tt&&void 0===e?S:e,this},rt.prototype.clear=function(){this.__data__=[]},rt.prototype.delete=function(t){var e=this.__data__,r=it(e,t);return!(r<0||(r==e.length-1?e.pop():z.call(e,r,1),0))},rt.prototype.get=function(t){var e=this.__data__,r=it(e,t);return r<0?void 0:e[r][1]},rt.prototype.has=function(t){return-1<it(this.__data__,t)},rt.prototype.set=function(t,e){var r=this.__data__,n=it(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},nt.prototype.clear=function(){this.__data__={hash:new et,map:new(Z||rt),string:new et}},nt.prototype.delete=function(t){return ut(this,t).delete(t)},nt.prototype.get=function(t){return ut(this,t).get(t)},nt.prototype.has=function(t){return ut(this,t).has(t)},nt.prototype.set=function(t,e){return ut(this,t).set(t,e),this},ot.prototype.add=ot.prototype.push=function(t){return this.__data__.set(t,S),this},ot.prototype.has=function(t){return this.__data__.has(t)};var pt=(D=function(t){var e=I(t,ct);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?x:N,o=t[0].length,i=t.length,a=i,c=Array(i),u=1/0,s=[];a--;){var f=t[a];a&&e&&(f=I(f,K(e))),u=Y(f.length,u),c[a]=!r&&(e||120<=o&&120<=f.length)?new ot(a&&f):void 0}f=t[0];var l=-1,p=c[0];t:for(;++l<o&&s.length<u;){var y=f[l],h=e?e(y):y;if(y=r||0!==y?y:0,!(p?V(p,h):n(s,h,r))){for(a=i;--a;){var d=c[a];if(!(d?V(d,h):n(t[a],h,r)))continue t}p&&p.push(h),s.push(y)}}return s}(e):[]},F=X(void 0===F?D.length-1:F,0),function(){for(var t=arguments,e=-1,r=X(t.length-F,0),n=Array(r);++e<r;)n[e]=t[F+e];e=-1;for(var o=Array(F+1);++e<F;)o[e]=t[e];return o[F]=n,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(D,this,o)});function yt(t){return"string"==typeof t?0<t.length?[t]:[]:t}var ht="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},dt=t(function(t){t.exports=function(){var e=Object.prototype.toString;function i(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function f(t){if(!t)return!0;if(p(t)&&0===t.length)return!0;if("string"!=typeof t){for(var e in t)if(i(t,e))return!1;return!0}return!1}function l(t){return e.call(t)}var p=Array.isArray||function(t){return"[object Array]"===e.call(t)};function y(t){var e=parseInt(t);return e.toString()===t?e:t}function t(o){o=o||{};var a=function r(n){return Object.keys(r).reduce(function(t,e){return"create"===e||"function"==typeof r[e]&&(t[e]=r[e].bind(r,n)),t},{})};function c(t,e){return o.includeInheritedProps||"number"==typeof e&&Array.isArray(t)||i(t,e)}function u(t,e){if(c(t,e))return t[e]}function s(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return s(t,e.split(".").map(y),r,n);var o=e[0],i=u(t,o);return 1===e.length?(void 0!==i&&n||(t[o]=r),i):(void 0===i&&("number"==typeof e[1]?t[o]=[]:t[o]={}),s(t[o],e.slice(1),r,n))}return a.has=function(t,e){if("number"==typeof e?e=[e]:"string"==typeof e&&(e=e.split(".")),!e||0===e.length)return!!t;for(var r=0;r<e.length;r++){var n=y(e[r]);if(!("number"==typeof n&&p(t)&&n<t.length||(o.includeInheritedProps?n in Object(t):i(t,n))))return!1;t=t[n]}return!0},a.ensureExists=function(t,e,r){return s(t,e,r,!0)},a.set=function(t,e,r,n){return s(t,e,r,n)},a.insert=function(t,e,r,n){var o=a.get(t,e);n=~~n,p(o)||a.set(t,e,o=[]),o.splice(n,0,r)},a.empty=function(t,e){var r,n;if(!f(e)&&null!=t&&(r=a.get(t,e))){if("string"==typeof r)return a.set(t,e,"");if("boolean"==typeof(i=r)||"[object Boolean]"===l(i))return a.set(t,e,!1);if("number"==typeof r)return a.set(t,e,0);if(p(r))r.length=0;else{if("object"!==(void 0===(o=r)?"undefined":ht(o))||"[object Object]"!==l(o))return a.set(t,e,null);for(n in r)c(r,n)&&delete r[n]}var o,i}},a.push=function(t,e){var r=a.get(t,e);p(r)||a.set(t,e,r=[]),r.push.apply(r,Array.prototype.slice.call(arguments,2))},a.coalesce=function(t,e,r){for(var n,o=0,i=e.length;o<i;o++)if(void 0!==(n=a.get(t,e[o])))return n;return r},a.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return a.get(t,e.split("."),r);var n=y(e[0]),o=u(t,n);return void 0===o?r:1===e.length?o:a.get(t[n],e.slice(1),r)},a.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(f(e))return t;if("string"==typeof e)return a.del(t,e.split("."));var r=y(e[0]);return c(t,r)?1!==e.length?a.del(t[r],e.slice(1)):(p(t)?t.splice(r,1):delete t[r],t):t},a}var r=t();return r.create=t,r.withInheritedProps=t({includeInheritedProps:!0}),r}()});function gt(t,u,e){var r=!(3<arguments.length&&void 0!==arguments[3])||arguments[3];function s(t){return null!=t}function f(t){return"Object"===h(t)}var l=["any","anything","every","everything","all","whatever","whatevs"],p=Array.isArray;if(!s(t))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");var n={ignoreKeys:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"},y=void 0;if(s((y=s(e)&&f(e)?Object.assign({},n,e):Object.assign({},n)).ignoreKeys)&&y.ignoreKeys?y.ignoreKeys=yt(y.ignoreKeys):y.ignoreKeys=[],s(y.acceptArraysIgnore)&&y.acceptArraysIgnore?y.acceptArraysIgnore=yt(y.acceptArraysIgnore):y.acceptArraysIgnore=[],y.msg="string"==typeof y.msg?y.msg.trim():y.msg,":"===y.msg[y.msg.length-1]&&(y.msg=y.msg.slice(0,y.msg.length-1).trim()),y.schema&&Object.keys(y.schema).forEach(function(t){p(y.schema[t])||(y.schema[t]=[y.schema[t]]),y.schema[t]=y.schema[t].map(String).map(function(t){return t.toLowerCase()}).map(function(t){return t.trim()})}),s(u)||(u={}),r&&gt(y,n,{enforceStrictKeyset:!1},!1),y.enforceStrictKeyset)if(s(y.schema)&&0<Object.keys(y.schema).length){if(0!==c(Object.keys(t),Object.keys(u).concat(Object.keys(y.schema))).length){var o=c(Object.keys(t),Object.keys(u).concat(Object.keys(y.schema)));throw new TypeError(y.msg+": "+y.optsVarName+".enforceStrictKeyset is on and the following key"+(1<o.length?"s":"")+" "+(1<o.length?"are":"is")+" not covered by schema and/or reference objects: "+o.join(", "))}}else{if(!(s(u)&&0<Object.keys(u).length))throw new TypeError(y.msg+": Both "+y.optsVarName+".schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!");if(0!==c(Object.keys(t),Object.keys(u)).length){var i=c(Object.keys(t),Object.keys(u));throw new TypeError(y.msg+": The input object has key"+(1<i.length?"s":"")+" that "+(1<i.length?"are":"is")+" not covered by the reference object: "+i.join(", "))}if(0!==c(Object.keys(u),Object.keys(t)).length){var a=c(Object.keys(u),Object.keys(t));throw new TypeError(y.msg+": The reference object has key"+(1<a.length?"s":"")+" that "+(1<a.length?"are":"is")+" not present in the input object: "+a.join(", "))}}(function t(e,r,n){var o=g(e),i=void 0,a=void 0,c=void 0,u=void 0,s=void 0;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,j(o))for(i=0,a=o.length;i<a;i++){var f=n.path+"."+i;void 0!==o[i]?(n.parent=g(o),c=t(r(o[i],void 0,Object.assign({},n,{path:w(f)})),r,Object.assign({},n,{path:w(f)})),Number.isNaN(c)&&i<o.length?(o.splice(i,1),i-=1):o[i]=c):o.splice(i,1)}else if(m(o))for(i=0,a=(u=Object.keys(o)).length;i<a;i++){s=u[i];var l=n.path+"."+s;0===n.depth&&null!=s&&(n.topmostKey=s),n.parent=g(o),c=t(r(s,o[s],Object.assign({},n,{path:w(l)})),r,Object.assign({},n,{path:w(l)})),Number.isNaN(c)?delete o[s]:o[s]=c}return o})(t,function(e,t,r){var n=void 0!==t?t:e;if(!(!y.enforceStrictKeyset||s(y.schema)&&f(y.schema)&&(!f(y.schema)||Object.keys(y.schema).length&&Object.prototype.hasOwnProperty.call(y.schema,r.path))||s(u)&&f(u)&&(!f(u)||Object.keys(u).length&&(y.acceptArrays||dt.has(u,r.path))&&(!y.acceptArrays||(Array.isArray(r.parent)||dt.has(u,r.path))&&(!Array.isArray(r.parent)||dt.has(u,function(t){if(t.includes(".")){var e=t.split(".");return e.pop(),e.join(".")}return t}(r.path)))))))throw new TypeError(y.msg+": "+y.optsVarName+"."+r.path+" is neither covered by reference object (second input argument), nor "+y.optsVarName+".schema!");if(f(y.schema)&&Object.keys(y.schema).length&&Object.prototype.hasOwnProperty.call(y.schema,r.path)){var o=yt(y.schema[r.path]).map(String).map(function(t){return t.toLowerCase()});if(dt.set(y.schema,r.path,o),!(pt(o,l).length||(!0===n||!1===n||o.includes(h(n).toLowerCase()))&&(!0!==n&&!1!==n||o.includes(String(n))||o.includes("boolean")))){if(!p(n)||!y.acceptArrays)throw new TypeError(y.msg+": "+y.optsVarName+"."+r.path+" was customised to "+("string"!==h(n)?'"':"")+JSON.stringify(n,null,0)+("string"!==h(n)?'"':"")+" ("+h(n).toLowerCase()+") which is not among the allowed types in schema ("+o.join(", ")+")");for(var i=0,a=n.length;i<a;i++)if(!o.includes(h(n[i]).toLowerCase()))throw new TypeError(y.msg+": "+y.optsVarName+"."+e+" is of a type "+h(n[i]).toLowerCase()+", but only the following are allowed in "+y.optsVarName+".schema: "+o)}}else if(s(u)&&Object.keys(u).length&&dt.has(u,r.path)&&h(n)!==h(dt.get(u,r.path))&&(!y.ignoreKeys||!y.ignoreKeys.includes(e))&&(!y.ignorePaths||!y.ignorePaths.includes(r.path))){var c=dt.get(u,r.path);if(!y.acceptArrays||!p(n)||y.acceptArraysIgnore.includes(e))throw new TypeError(y.msg+": "+y.optsVarName+"."+r.path+" was customised to "+("string"===h(n).toLowerCase()?"":'"')+JSON.stringify(n,null,0)+("string"===h(n).toLowerCase()?"":'"')+" which is not "+h(c).toLowerCase()+" but "+h(n).toLowerCase());if(!n.every(function(t){return h(t).toLowerCase()===h(u[e]).toLowerCase()}))throw new TypeError(y.msg+": "+y.optsVarName+"."+r.path+" was customised to be array, but not all of its elements are "+h(u[e]).toLowerCase()+"-type")}return n},{})}return function(t,e,r){return gt(t,e,r)}});

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.checkTypesMini=t()}(this,function(){"use strict";var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var t,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=(function(t,n){var o,i,a,c,s,u,f,y,p,l,h,g,m,d,b,w,_,v,O,j;t.exports=(o="function"==typeof Promise,i="object"===("undefined"==typeof self?"undefined":r(self))?self:e,a="undefined"!=typeof Symbol,c="undefined"!=typeof Map,s="undefined"!=typeof Set,u="undefined"!=typeof WeakMap,f="undefined"!=typeof WeakSet,y="undefined"!=typeof DataView,p=a&&void 0!==Symbol.iterator,l=a&&void 0!==Symbol.toStringTag,h=s&&"function"==typeof Set.prototype.entries,g=c&&"function"==typeof Map.prototype.entries,m=h&&Object.getPrototypeOf((new Set).entries()),d=g&&Object.getPrototypeOf((new Map).entries()),b=p&&"function"==typeof Array.prototype[Symbol.iterator],w=b&&Object.getPrototypeOf([][Symbol.iterator]()),_=p&&"function"==typeof String.prototype[Symbol.iterator],v=_&&Object.getPrototypeOf(""[Symbol.iterator]()),O=8,j=-1,function(e){var t=void 0===e?"undefined":r(e);if("object"!==t)return t;if(null===e)return"null";if(e===i)return"global";if(Array.isArray(e)&&(!1===l||!(Symbol.toStringTag in e)))return"Array";if("object"===("undefined"==typeof window?"undefined":r(window))&&null!==window){if("object"===r(window.location)&&e===window.location)return"Location";if("object"===r(window.document)&&e===window.document)return"Document";if("object"===r(window.navigator)){if("object"===r(window.navigator.mimeTypes)&&e===window.navigator.mimeTypes)return"MimeTypeArray";if("object"===r(window.navigator.plugins)&&e===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"===r(window.HTMLElement))&&e instanceof window.HTMLElement){if("BLOCKQUOTE"===e.tagName)return"HTMLQuoteElement";if("TD"===e.tagName)return"HTMLTableDataCellElement";if("TH"===e.tagName)return"HTMLTableHeaderCellElement"}}var n=l&&e[Symbol.toStringTag];if("string"==typeof n)return n;var a=Object.getPrototypeOf(e);return a===RegExp.prototype?"RegExp":a===Date.prototype?"Date":o&&a===Promise.prototype?"Promise":s&&a===Set.prototype?"Set":c&&a===Map.prototype?"Map":f&&a===WeakSet.prototype?"WeakSet":u&&a===WeakMap.prototype?"WeakMap":y&&a===DataView.prototype?"DataView":c&&a===d?"Map Iterator":s&&a===m?"Set Iterator":b&&a===w?"Array Iterator":_&&a===v?"String Iterator":null===a?"Object":Object.prototype.toString.call(e).slice(O,j)})}(t={exports:{}},t.exports),t.exports);function o(e,t,r){if(t!=t)return function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,a,r);for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}function i(e,t,r,n){for(var o=r-1,i=e.length;++o<i;)if(n(e[o],t))return o;return-1}function a(e){return e!=e}var c=Array.prototype.splice;function s(e,t,r,n){var a,s=n?i:o,u=-1,f=t.length,y=e;for(e===t&&(t=function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(t)),r&&(y=function(e,t){for(var r=-1,n=e?e.length:0,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}(e,(a=r,function(e){return a(e)})));++u<f;)for(var p=0,l=t[u],h=r?r(l):l;(p=s(y,h,p,n))>-1;)y!==e&&c.call(y,p,1),c.call(e,p,1);return e}var u=function(e,t){return e&&e.length&&t&&t.length?s(e,t):e},f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y="__lodash_hash_undefined__",p=9007199254740991,l="[object Function]",h="[object GeneratorFunction]",g=/^\[object .+?Constructor\]$/,m="object"==f(e)&&e&&e.Object===Object&&e,d="object"==("undefined"==typeof self?"undefined":f(self))&&self&&self.Object===Object&&self,b=m||d||Function("return this")();function w(e,t){return!!(e?e.length:0)&&function(e,t,r){if(t!=t)return function(e,t,r,n){var o=e.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,O,r);var n=r-1,o=e.length;for(;++n<o;)if(e[n]===t)return n;return-1}(e,t,0)>-1}function _(e,t,r){for(var n=-1,o=e?e.length:0;++n<o;)if(r(t,e[n]))return!0;return!1}function v(e,t){for(var r=-1,n=e?e.length:0,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function O(e){return e!=e}function j(e){return function(t){return e(t)}}function S(e,t){return e.has(t)}var T,k,A,E=Array.prototype,M=Function.prototype,N=Object.prototype,I=b["__core-js_shared__"],D=(T=/[^.]+$/.exec(I&&I.keys&&I.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"",H=M.toString,K=N.hasOwnProperty,V=N.toString,W=RegExp("^"+H.call(K).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),P=E.splice,L=Math.max,R=Math.min,x=z(b,"Map"),C=z(Object,"create");function J(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function $(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function B(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function F(e){var t=-1,r=e?e.length:0;for(this.__data__=new B;++t<r;)this.add(e[t])}function q(e,t){for(var r,n,o=e.length;o--;)if((r=e[o][0])===(n=t)||r!=r&&n!=n)return o;return-1}function Q(e){return!(!Y(e)||D&&D in e)&&(X(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?W:g).test(function(e){if(null!=e){try{return H.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e))}function G(e){return function(e){return function(e){return!!e&&"object"==(void 0===e?"undefined":f(e))}(e)&&function(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=p}(e.length)&&!X(e)}(e)}(e)?e:[]}function U(e,t){var r,n,o=e.__data__;return("string"==(n=void 0===(r=t)?"undefined":f(r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function z(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return Q(r)?r:void 0}function X(e){var t=Y(e)?V.call(e):"";return t==l||t==h}function Y(e){var t=void 0===e?"undefined":f(e);return!!e&&("object"==t||"function"==t)}J.prototype.clear=function(){this.__data__=C?C(null):{}},J.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},J.prototype.get=function(e){var t=this.__data__;if(C){var r=t[e];return r===y?void 0:r}return K.call(t,e)?t[e]:void 0},J.prototype.has=function(e){var t=this.__data__;return C?void 0!==t[e]:K.call(t,e)},J.prototype.set=function(e,t){return this.__data__[e]=C&&void 0===t?y:t,this},$.prototype.clear=function(){this.__data__=[]},$.prototype.delete=function(e){var t=this.__data__,r=q(t,e);return!(r<0||(r==t.length-1?t.pop():P.call(t,r,1),0))},$.prototype.get=function(e){var t=this.__data__,r=q(t,e);return r<0?void 0:t[r][1]},$.prototype.has=function(e){return q(this.__data__,e)>-1},$.prototype.set=function(e,t){var r=this.__data__,n=q(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},B.prototype.clear=function(){this.__data__={hash:new J,map:new(x||$),string:new J}},B.prototype.delete=function(e){return U(this,e).delete(e)},B.prototype.get=function(e){return U(this,e).get(e)},B.prototype.has=function(e){return U(this,e).has(e)},B.prototype.set=function(e,t){return U(this,e).set(e,t),this},F.prototype.add=F.prototype.push=function(e){return this.__data__.set(e,y),this},F.prototype.has=function(e){return this.__data__.has(e)};var Z=(k=function(e){var t=v(e,G);return t.length&&t[0]===e[0]?function(e,t,r){for(var n=r?_:w,o=e[0].length,i=e.length,a=i,c=Array(i),s=1/0,u=[];a--;){var f=e[a];a&&t&&(f=v(f,j(t))),s=R(f.length,s),c[a]=!r&&(t||o>=120&&f.length>=120)?new F(a&&f):void 0}f=e[0];var y=-1,p=c[0];e:for(;++y<o&&u.length<s;){var l=f[y],h=t?t(l):l;if(l=r||0!==l?l:0,!(p?S(p,h):n(u,h,r))){for(a=i;--a;){var g=c[a];if(!(g?S(g,h):n(e[a],h,r)))continue e}p&&p.push(h),u.push(l)}}return u}(t):[]},A=L(void 0===A?k.length-1:A,0),function(){for(var e=arguments,t=-1,r=L(e.length-A,0),n=Array(r);++t<r;)n[t]=e[A+t];t=-1;for(var o=Array(A+1);++t<A;)o[t]=e[t];return o[A]=n,function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}(k,this,o)});function ee(e){return"string"==typeof e?e.length>0?[e]:[]:e}return function(e,t,r){function o(e){return null!=e}function i(e){return"boolean"===n(e)}function a(e){return"string"===n(e)}function c(e){return"Object"===n(e)}var s=["any","anything","every","everything","all","whatever","whatevs"],f=Array.isArray;if(0===arguments.length)throw new Error("check-types-mini: [THROW_ID_01] Missing all arguments!");if(1===arguments.length)throw new Error("check-types-mini: [THROW_ID_02] Missing second argument!");var y=c(t)?t:{},p={ignoreKeys:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"},l=void 0;if(!a((l=o(r)&&c(r)?Object.assign({},p,r):Object.assign({},p)).msg))throw new Error("check-types-mini: [THROW_ID_03] opts.msg must be string! Currently it's: "+n(l.msg)+", equal to "+JSON.stringify(l.msg,null,4));if(l.msg=l.msg.trim(),":"===l.msg[l.msg.length-1]&&(l.msg=l.msg.slice(0,l.msg.length-1)),!a(l.optsVarName))throw new Error("check-types-mini: [THROW_ID_04] opts.optsVarName must be string! Currently it's: "+n(l.optsVarName)+", equal to "+JSON.stringify(l.optsVarName,null,4));if(l.ignoreKeys=ee(l.ignoreKeys),l.acceptArraysIgnore=ee(l.acceptArraysIgnore),!f(l.ignoreKeys))throw new TypeError("check-types-mini: [THROW_ID_05] opts.ignoreKeys should be an array, currently it's: "+n(l.ignoreKeys));if(!i(l.acceptArrays))throw new TypeError("check-types-mini: [THROW_ID_06] opts.acceptArrays should be a Boolean, currently it's: "+n(l.acceptArrays));if(!f(l.acceptArraysIgnore))throw new TypeError("check-types-mini: [THROW_ID_07] opts.acceptArraysIgnore should be an array, currently it's: "+n(l.acceptArraysIgnore));if(!i(l.enforceStrictKeyset))throw new TypeError("check-types-mini: [THROW_ID_08] opts.enforceStrictKeyset should be a Boolean, currently it's: "+n(l.enforceStrictKeyset));if(Object.keys(l.schema).forEach(function(e){f(l.schema[e])||(l.schema[e]=[l.schema[e]]),l.schema[e]=l.schema[e].map(String).map(function(e){return e.toLowerCase()}).map(function(e){return e.trim()})}),l.enforceStrictKeyset)if(o(l.schema)&&Object.keys(l.schema).length>0){if(0!==u(Object.keys(e),Object.keys(y).concat(Object.keys(l.schema))).length)throw new TypeError(l.msg+": "+l.optsVarName+".enforceStrictKeyset is on and the following keys are not covered by schema and/or reference objects: "+JSON.stringify(u(Object.keys(e),Object.keys(y).concat(Object.keys(l.schema))),null,4))}else{if(!(o(y)&&Object.keys(y).length>0))throw new TypeError(l.msg+": Both "+l.optsVarName+".schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!");if(0!==u(Object.keys(e),Object.keys(y)).length)throw new TypeError(l.msg+": The input object has keys that are not covered by reference object: "+JSON.stringify(u(Object.keys(e),Object.keys(y)),null,4));if(0!==u(Object.keys(y),Object.keys(e)).length)throw new TypeError(l.msg+": The reference object has keys that are not present in the input object: "+JSON.stringify(u(Object.keys(y),Object.keys(e)),null,4))}Object.keys(e).forEach(function(t){if(o(l.schema)&&Object.prototype.hasOwnProperty.call(l.schema,t)){if(l.schema[t]=ee(l.schema[t]).map(String).map(function(e){return e.toLowerCase()}),!(Z(l.schema[t],s).length||(!0===e[t]||!1===e[t]||l.schema[t].includes(n(e[t]).toLowerCase()))&&(!0!==e[t]&&!1!==e[t]||l.schema[t].includes(String(e[t]))||l.schema[t].includes("boolean")))){if(!f(e[t])||!l.acceptArrays)throw new TypeError(l.msg+": "+l.optsVarName+"."+t+" was customised to "+JSON.stringify(e[t],null,4)+" which is not among the allowed types in schema ("+l.schema[t]+") but "+n(e[t]));for(var r=0,i=e[t].length;r<i;r++)if(!l.schema[t].includes(n(e[t][r]).toLowerCase()))throw new TypeError(l.msg+": "+l.optsVarName+"."+t+" is of type "+n(e[t][r]).toLowerCase()+", but only the following are allowed in "+l.optsVarName+".schema: "+l.schema[t])}}else if(o(y)&&Object.prototype.hasOwnProperty.call(y,t)&&n(e[t])!==n(y[t])&&!l.ignoreKeys.includes(t)){if(!l.acceptArrays||!f(e[t])||l.acceptArraysIgnore.includes(t))throw new TypeError(l.msg+": "+l.optsVarName+"."+t+" was customised to "+JSON.stringify(e[t],null,4)+" which is not "+n(y[t])+" but "+n(e[t]));if(!e[t].every(function(e){return n(e)===n(y[t])}))throw new TypeError(l.msg+": "+l.optsVarName+"."+t+" was customised to be array, but not all of its elements are "+n(y[t])+"-type")}})}});

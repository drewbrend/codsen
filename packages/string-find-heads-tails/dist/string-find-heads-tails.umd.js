!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.strFindHeadsTails=e()}(this,function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=function(e,r){if(r){if("object"!==(void 0===r?"undefined":t(r)))throw new TypeError(String(r)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in r){if("boolean"!=typeof r.includeZero)throw new TypeError(String(r.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(r.includeZero&&0===e)return!0}}return Number.isSafeInteger(e)&&e>=1},r=function(t,e){if("string"!=typeof t)return!1;if(e&&"includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(t)}return/^[1-9]\d*(\.0+)?$/.test(t)},n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(t,e){return t(e={exports:{}},e.exports),e.exports}var i=o(function(t,e){(e=t.exports=function(t){return t+e.suffix(+t)}).suffix=function(t){return 1===Math.floor(t/10)?"th":t%10==1?"st":t%10==2?"nd":t%10==3?"rd":"th"}}),a=(i.suffix,"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}),s=o(function(t,e){var r,o,i,s,u,c,f,l,h,y,d,p,g,m,b,w,v,_,O,S;t.exports=(r="function"==typeof Promise,o="object"===("undefined"==typeof self?"undefined":a(self))?self:n,i="undefined"!=typeof Symbol,s="undefined"!=typeof Map,u="undefined"!=typeof Set,c="undefined"!=typeof WeakMap,f="undefined"!=typeof WeakSet,l="undefined"!=typeof DataView,h=i&&void 0!==Symbol.iterator,y=i&&void 0!==Symbol.toStringTag,d=u&&"function"==typeof Set.prototype.entries,p=s&&"function"==typeof Map.prototype.entries,g=d&&Object.getPrototypeOf((new Set).entries()),m=p&&Object.getPrototypeOf((new Map).entries()),b=h&&"function"==typeof Array.prototype[Symbol.iterator],w=b&&Object.getPrototypeOf([][Symbol.iterator]()),v=h&&"function"==typeof String.prototype[Symbol.iterator],_=v&&Object.getPrototypeOf(""[Symbol.iterator]()),O=8,S=-1,function(t){var e=void 0===t?"undefined":a(t);if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===y||!(Symbol.toStringTag in t)))return"Array";if("object"===("undefined"==typeof window?"undefined":a(window))&&null!==window){if("object"===a(window.location)&&t===window.location)return"Location";if("object"===a(window.document)&&t===window.document)return"Document";if("object"===a(window.navigator)){if("object"===a(window.navigator.mimeTypes)&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"===a(window.navigator.plugins)&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"===a(window.HTMLElement))&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var n=y&&t[Symbol.toStringTag];if("string"==typeof n)return n;var i=Object.getPrototypeOf(t);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":r&&i===Promise.prototype?"Promise":u&&i===Set.prototype?"Set":s&&i===Map.prototype?"Map":f&&i===WeakSet.prototype?"WeakSet":c&&i===WeakMap.prototype?"WeakMap":l&&i===DataView.prototype?"DataView":s&&i===m?"Map Iterator":u&&i===g?"Set Iterator":b&&i===w?"Array Iterator":v&&i===_?"String Iterator":null===i?"Object":Object.prototype.toString.call(t).slice(O,S)})});function u(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,f,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function c(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}function f(t){return t!=t}var l=Array.prototype.splice;function h(t,e,r,n){var o,i=n?c:u,a=-1,s=e.length,f=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(f=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(o=r,function(t){return o(t)})));++a<s;)for(var h=0,y=e[a],d=r?r(y):y;(h=i(f,d,h,n))>-1;)f!==t&&l.call(f,h,1),l.call(t,h,1);return t}var y=function(t,e){return t&&t.length&&e&&e.length?h(t,e):t},d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p="__lodash_hash_undefined__",g=9007199254740991,m="[object Function]",b="[object GeneratorFunction]",w=/^\[object .+?Constructor\]$/,v="object"==d(n)&&n&&n.Object===Object&&n,_="object"==("undefined"==typeof self?"undefined":d(self))&&self&&self.Object===Object&&self,O=v||_||Function("return this")();function S(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,j,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function T(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function I(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function j(t){return t!=t}function A(t){return function(e){return t(e)}}function W(t,e){return t.has(e)}var E,x,H,D=Array.prototype,k=Function.prototype,C=Object.prototype,R=O["__core-js_shared__"],M=(E=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""))?"Symbol(src)_1."+E:"",N=k.toString,P=C.hasOwnProperty,B=C.toString,L=RegExp("^"+N.call(P).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),J=D.splice,q=Math.max,V=Math.min,K=tt(O,"Map"),Z=tt(Object,"create");function F(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function $(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function G(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Q(t){var e=-1,r=t?t.length:0;for(this.__data__=new G;++e<r;)this.add(t[e])}function z(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function U(t){return!(!rt(t)||M&&M in t)&&(et(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?L:w).test(function(t){if(null!=t){try{return N.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function X(t){return function(t){return function(t){return!!t&&"object"==(void 0===t?"undefined":d(t))}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=g}(t.length)&&!et(t)}(t)}(t)?t:[]}function Y(t,e){var r,n,o=t.__data__;return("string"==(n=void 0===(r=e)?"undefined":d(r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function tt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return U(r)?r:void 0}function et(t){var e=rt(t)?B.call(t):"";return e==m||e==b}function rt(t){var e=void 0===t?"undefined":d(t);return!!t&&("object"==e||"function"==e)}F.prototype.clear=function(){this.__data__=Z?Z(null):{}},F.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},F.prototype.get=function(t){var e=this.__data__;if(Z){var r=e[t];return r===p?void 0:r}return P.call(e,t)?e[t]:void 0},F.prototype.has=function(t){var e=this.__data__;return Z?void 0!==e[t]:P.call(e,t)},F.prototype.set=function(t,e){return this.__data__[t]=Z&&void 0===e?p:e,this},$.prototype.clear=function(){this.__data__=[]},$.prototype.delete=function(t){var e=this.__data__,r=z(e,t);return!(r<0||(r==e.length-1?e.pop():J.call(e,r,1),0))},$.prototype.get=function(t){var e=this.__data__,r=z(e,t);return r<0?void 0:e[r][1]},$.prototype.has=function(t){return z(this.__data__,t)>-1},$.prototype.set=function(t,e){var r=this.__data__,n=z(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},G.prototype.clear=function(){this.__data__={hash:new F,map:new(K||$),string:new F}},G.prototype.delete=function(t){return Y(this,t).delete(t)},G.prototype.get=function(t){return Y(this,t).get(t)},G.prototype.has=function(t){return Y(this,t).has(t)},G.prototype.set=function(t,e){return Y(this,t).set(t,e),this},Q.prototype.add=Q.prototype.push=function(t){return this.__data__.set(t,p),this},Q.prototype.has=function(t){return this.__data__.has(t)};var nt=(x=function(t){var e=I(t,X);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?T:S,o=t[0].length,i=t.length,a=i,s=Array(i),u=1/0,c=[];a--;){var f=t[a];a&&e&&(f=I(f,A(e))),u=V(f.length,u),s[a]=!r&&(e||o>=120&&f.length>=120)?new Q(a&&f):void 0}f=t[0];var l=-1,h=s[0];t:for(;++l<o&&c.length<u;){var y=f[l],d=e?e(y):y;if(y=r||0!==y?y:0,!(h?W(h,d):n(c,d,r))){for(a=i;--a;){var p=s[a];if(!(p?W(p,d):n(t[a],d,r)))continue t}h&&h.push(d),c.push(y)}}return c}(e):[]},H=q(void 0===H?x.length-1:H,0),function(){for(var t=arguments,e=-1,r=q(t.length-H,0),n=Array(r);++e<r;)n[e]=t[H+e];e=-1;for(var o=Array(H+1);++e<H;)o[e]=t[e];return o[H]=n,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(x,this,o)});function ot(t){return"string"==typeof t?t.length>0?[t]:[]:t}function it(t,e,r){function n(t){return null!=t}function o(t){return"boolean"===s(t)}function i(t){return"string"===s(t)}function a(t){return"Object"===s(t)}var u=["any","anything","every","everything","all","whatever","whatevs"],c=Array.isArray;if(0===arguments.length)throw new Error("check-types-mini: [THROW_ID_01] Missing all arguments!");if(1===arguments.length)throw new Error("check-types-mini: [THROW_ID_02] Missing second argument!");var f=a(e)?e:{},l={ignoreKeys:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"},h=void 0;if(!i((h=n(r)&&a(r)?Object.assign({},l,r):Object.assign({},l)).msg))throw new Error("check-types-mini: [THROW_ID_03] opts.msg must be string! Currently it's: "+s(h.msg)+", equal to "+JSON.stringify(h.msg,null,4));if(h.msg=h.msg.trim(),":"===h.msg[h.msg.length-1]&&(h.msg=h.msg.slice(0,h.msg.length-1)),!i(h.optsVarName))throw new Error("check-types-mini: [THROW_ID_04] opts.optsVarName must be string! Currently it's: "+s(h.optsVarName)+", equal to "+JSON.stringify(h.optsVarName,null,4));if(h.ignoreKeys=ot(h.ignoreKeys),h.acceptArraysIgnore=ot(h.acceptArraysIgnore),!c(h.ignoreKeys))throw new TypeError("check-types-mini: [THROW_ID_05] opts.ignoreKeys should be an array, currently it's: "+s(h.ignoreKeys));if(!o(h.acceptArrays))throw new TypeError("check-types-mini: [THROW_ID_06] opts.acceptArrays should be a Boolean, currently it's: "+s(h.acceptArrays));if(!c(h.acceptArraysIgnore))throw new TypeError("check-types-mini: [THROW_ID_07] opts.acceptArraysIgnore should be an array, currently it's: "+s(h.acceptArraysIgnore));if(!o(h.enforceStrictKeyset))throw new TypeError("check-types-mini: [THROW_ID_08] opts.enforceStrictKeyset should be a Boolean, currently it's: "+s(h.enforceStrictKeyset));if(Object.keys(h.schema).forEach(function(t){c(h.schema[t])||(h.schema[t]=[h.schema[t]]),h.schema[t]=h.schema[t].map(String).map(function(t){return t.toLowerCase()}).map(function(t){return t.trim()})}),h.enforceStrictKeyset)if(n(h.schema)&&Object.keys(h.schema).length>0){if(0!==y(Object.keys(t),Object.keys(f).concat(Object.keys(h.schema))).length)throw new TypeError(h.msg+": "+h.optsVarName+".enforceStrictKeyset is on and the following keys are not covered by schema and/or reference objects: "+JSON.stringify(y(Object.keys(t),Object.keys(f).concat(Object.keys(h.schema))),null,4))}else{if(!(n(f)&&Object.keys(f).length>0))throw new TypeError(h.msg+": Both "+h.optsVarName+".schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!");if(0!==y(Object.keys(t),Object.keys(f)).length)throw new TypeError(h.msg+": The input object has keys that are not covered by reference object: "+JSON.stringify(y(Object.keys(t),Object.keys(f)),null,4));if(0!==y(Object.keys(f),Object.keys(t)).length)throw new TypeError(h.msg+": The reference object has keys that are not present in the input object: "+JSON.stringify(y(Object.keys(f),Object.keys(t)),null,4))}Object.keys(t).forEach(function(e){if(n(h.schema)&&Object.prototype.hasOwnProperty.call(h.schema,e)){if(h.schema[e]=ot(h.schema[e]).map(String).map(function(t){return t.toLowerCase()}),!(nt(h.schema[e],u).length||(!0===t[e]||!1===t[e]||h.schema[e].includes(s(t[e]).toLowerCase()))&&(!0!==t[e]&&!1!==t[e]||h.schema[e].includes(String(t[e]))||h.schema[e].includes("boolean")))){if(!c(t[e])||!h.acceptArrays)throw new TypeError(h.msg+": "+h.optsVarName+"."+e+" was customised to "+JSON.stringify(t[e],null,4)+" which is not among the allowed types in schema ("+h.schema[e]+") but "+s(t[e]));for(var r=0,o=t[e].length;r<o;r++)if(!h.schema[e].includes(s(t[e][r]).toLowerCase()))throw new TypeError(h.msg+": "+h.optsVarName+"."+e+" is of type "+s(t[e][r]).toLowerCase()+", but only the following are allowed in "+h.optsVarName+".schema: "+h.schema[e])}}else if(n(f)&&Object.prototype.hasOwnProperty.call(f,e)&&s(t[e])!==s(f[e])&&!h.ignoreKeys.includes(e)){if(!h.acceptArrays||!c(t[e])||h.acceptArraysIgnore.includes(e))throw new TypeError(h.msg+": "+h.optsVarName+"."+e+" was customised to "+JSON.stringify(t[e],null,4)+" which is not "+s(f[e])+" but "+s(t[e]));if(!t[e].every(function(t){return s(t)===s(f[e])}))throw new TypeError(h.msg+": "+h.optsVarName+"."+e+" was customised to be array, but not all of its elements are "+s(f[e])+"-type")}})}var at="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},st="[object Object]";var ut=Function.prototype,ct=Object.prototype,ft=ut.toString,lt=ct.hasOwnProperty,ht=ft.call(Object),yt=ct.toString,dt=function(t,e){return function(r){return t(e(r))}}(Object.getPrototypeOf,Object);var pt=function(t){if(!function(t){return!!t&&"object"==(void 0===t?"undefined":at(t))}(t)||yt.call(t)!=st||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=dt(t);if(null===e)return!0;var r=lt.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&ft.call(r)==ht},gt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mt="function"==typeof Symbol&&"symbol"===gt(Symbol.iterator)?function(t){return void 0===t?"undefined":gt(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":gt(t)};function bt(t){return"string"==typeof t}function wt(t,e,r,n){if(!(e<=t.length)){if(n.strictApi)throw new Error("string-match-left-right/marchForward(): [THROW_ID_102] second argument, fromIndexInclusive is "+e+" beyond the input string length, "+t.length+".");return!1}for(var o=r.length,i=e,a=t.length;i<a;i++)if(!(n.trimBeforeMatching&&""===t[i].trim()||!n.i&&n.trimCharsBeforeMatching.includes(t[i])||n.i&&n.trimCharsBeforeMatching.map(function(t){return t.toLowerCase()}).includes(t[i].toLowerCase()))){if(!(!n.i&&t[i]===r[r.length-o]||n.i&&t[i].toLowerCase()===r[r.length-o].toLowerCase()))return!1;if(0===(o-=1))return i-r.length+1}if(o>0)return!1}function vt(t,e,r,n){if(e>=t.length){if(n.strictApi)throw new Error("string-match-left-right/marchBackward(): [THROW_ID_203] second argument, starting index, should not be beyond the last character of the input string! Currently the first argument's last character's index is "+t.length+" but the second argument is beyond it:\n"+JSON.stringify(e,null,4));return!1}for(var o=r.length,i=e+1;i--;)if(!(n.trimBeforeMatching&&""===t[i].trim()||!n.i&&n.trimCharsBeforeMatching.includes(t[i])||n.i&&n.trimCharsBeforeMatching.map(function(t){return t.toLowerCase()}).includes(t[i].toLowerCase()))){if(!(!n.i&&t[i]===r[o-1]||n.i&&t[i].toLowerCase()===r[o-1].toLowerCase()))return!1;if(0===(o-=1))return i}if(o>0)return!1}function _t(t,r,n,o){return function(t,r,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments[4],a=Array.isArray;if(!bt(r))throw new Error("string-match-left-right/"+t+"(): [THROW_ID_01] the first argument should be a string. Currently it's of a type: "+(void 0===r?"undefined":mt(r))+", equal to:\n"+JSON.stringify(r,null,4));if(0===r.length)throw new Error("string-match-left-right/"+t+"(): [THROW_ID_02] the first argument should be a non-empty string. Currently it's empty!");if(!e(n,{includeZero:!0}))throw new Error("string-match-left-right/"+t+"(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: "+(void 0===n?"undefined":mt(n))+", equal to:\n"+JSON.stringify(n,null,4));var s=void 0;if(bt(o))s=[o];else if(a(o))s=o;else{if(null!==o)throw new Error("string-match-left-right/"+t+"(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's "+(void 0===o?"undefined":mt(o))+", equal to:\n"+JSON.stringify(o,null,4));s=[""]}if(null!=i&&!pt(i))throw new Error("string-match-left-right/"+t+"(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type \""+(void 0===i?"undefined":mt(i))+'", and equal to:\n'+JSON.stringify(i,null,4));var u={i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],strictApi:!0},c=Object.assign({},u,i);c.trimCharsBeforeMatching=ot(c.trimCharsBeforeMatching),it(c,u,{msg:"string-match-left-right: [THROW_ID_07*]",schema:{cb:["null","undefined","function"]}}),c.trimCharsBeforeMatching=c.trimCharsBeforeMatching.map(function(t){return bt(t)?t:String(t)});var f=void 0,l=void 0;if(c.trimCharsBeforeMatching.some(function(t,e){return t.length>1&&(f=e,l=t,!0)}))throw new Error("string-match-left-right/"+t+"(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index "+f+" is longer than 1 character, "+l.length+" (equals to "+l+"). Please split it into separate characters and put into array as separate elements.");if(a(s)&&bt(s[0])&&0===s[0].length){if(c.cb){if("matchLeft"===t)return c.cb(r[n-1],r.slice(0,n-1),n-1);if("matchLeftIncl"===t)return c.cb(r[n],r.slice(0,n),n);if("matchRight"===t)return c.cb(r[n+1],r.slice(n+1),n+1);if("matchRightIncl"===t)return c.cb(r[n],r.slice(n),n)}throw new Error("string-match-left-right/"+t+'(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!')}if(t.startsWith("matchLeft")){for(var h=0,y=s.length;h<y;h++){var d=vt(r,n-("matchLeft"===t?1:0),s[h],c);if(!1!==d&&(!c.cb||c.cb(r[d-1],r.slice(0,d),d-1)))return s[h]}return!1}for(var p=0,g=s.length;p<g;p++){var m=wt(r,n+("matchRight"===t?1:0),s[p],c);if(!1!==m&&(!c.cb||c.cb(r[m+s[p].length],r.slice(m+s[p].length),m+s[p].length)))return s[p]}return!1}("matchRightIncl",t,r,n,o)}var Ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},St=1/0,Tt=9007199254740991,It=1.7976931348623157e308,jt=NaN,At="[object Arguments]",Wt="[object Function]",Et="[object GeneratorFunction]",xt="[object String]",Ht="[object Symbol]",Dt=/^\s+|\s+$/g,kt=/^[-+]0x[0-9a-f]+$/i,Ct=/^0b[01]+$/i,Rt=/^0o[0-7]+$/i,Mt=/^(?:0|[1-9]\d*)$/,Nt=parseInt;function Pt(t){return t!=t}function Bt(t,e){return function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(e,function(e){return t[e]})}var Lt=Object.prototype,Jt=Lt.hasOwnProperty,qt=Lt.toString,Vt=Lt.propertyIsEnumerable,Kt=function(t,e){return function(r){return t(e(r))}}(Object.keys,Object),Zt=Math.max;function Ft(t,e){var r=Qt(t)||function(t){return function(t){return Xt(t)&&zt(t)}(t)&&Jt.call(t,"callee")&&(!Vt.call(t,"callee")||qt.call(t)==At)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var i in t)!e&&!Jt.call(t,i)||o&&("length"==i||Gt(i,n))||r.push(i);return r}function $t(t){if(r=(e=t)&&e.constructor,n="function"==typeof r&&r.prototype||Lt,e!==n)return Kt(t);var e,r,n,o=[];for(var i in Object(t))Jt.call(t,i)&&"constructor"!=i&&o.push(i);return o}function Gt(t,e){return!!(e=null==e?Tt:e)&&("number"==typeof t||Mt.test(t))&&t>-1&&t%1==0&&t<e}var Qt=Array.isArray;function zt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=Tt}(t.length)&&!function(t){var e=Ut(t)?qt.call(t):"";return e==Wt||e==Et}(t)}function Ut(t){var e=void 0===t?"undefined":Ot(t);return!!t&&("object"==e||"function"==e)}function Xt(t){return!!t&&"object"==(void 0===t?"undefined":Ot(t))}var Yt=function(t,e,r,n){var o;t=zt(t)?t:(o=t)?Bt(o,function(t){return zt(t)?Ft(t):$t(t)}(o)):[],r=r&&!n?function(t){var e=function(t){if(!t)return 0===t?t:0;if((t=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":Ot(t))||Xt(t)&&qt.call(t)==Ht}(t))return jt;if(Ut(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Ut(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Dt,"");var r=Ct.test(t);return r||Rt.test(t)?Nt(t.slice(2),r?2:8):kt.test(t)?jt:+t}(t))===St||t===-St){var e=t<0?-1:1;return e*It}return t==t?t:0}(t),r=e%1;return e==e?r?e-r:e:0}(r):0;var i=t.length;return r<0&&(r=Zt(i+r,0)),function(t){return"string"==typeof t||!Qt(t)&&Xt(t)&&qt.call(t)==xt}(t)?r<=i&&t.indexOf(e,r)>-1:!!i&&function(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,Pt,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}(t,e,r)>-1},te="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function ee(t){return"string"==typeof t}var re=Array.isArray;function ne(t){throw new Error("string-find-heads-tails: [THROW_ID_01*] Missing "+i(t)+" parameter!")}return function(t,n,o,a){if(null!=a){if(!pt(a))throw new TypeError("string-find-heads-tails: [THROW_ID_13] the fourth input argument, Optional Options Object, must be a plain object! Currently it's: "+(void 0===a?"undefined":te(a))+", equal to: "+a);r(a.fromIndex,{includeZero:!0})&&(a.fromIndex=Number(a.fromIndex))}var s={fromIndex:0,throwWhenSomethingWrongIsDetected:!0,allowWholeValueToBeOnlyHeadsOrTails:!0,source:"string-find-heads-tails",matchHeadsAndTailsStrictlyInPairsByTheirOrder:!1,relaxedAPI:!1};if(it(a=Object.assign({},s,a),s,{msg:"string-find-heads-tails: [THROW_ID_14*]"}),a.relaxedAPI||(void 0===t&&ne(1),void 0===n&&ne(2),void 0===o&&ne(3)),!ee(t)||0===t.length){if(a.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_02] the first input argument, input string, must be a non-zero-length string! Currently it's: "+(void 0===t?"undefined":te(t))+", equal to: "+t)}var u=void 0,c=void 0;if(!ee(n)&&!re(n)){if(a.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_03] the second input argument, heads, must be either a string or an array of strings! Currently it's: "+(void 0===n?"undefined":te(n))+", equal to:\n"+JSON.stringify(n,null,4))}if(ee(n)){if(0===n.length){if(a.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_04] the second input argument, heads, must be a non-empty string! Currently it's empty.")}n=ot(n)}else if(re(n)){if(0===n.length){if(a.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_05] the second input argument, heads, must be a non-empty array and contain at least one string! Currently it's empty.")}if(n.every(function(t,e){return u=t,c=e,ee(t)})){if(!n.every(function(t,e){return c=e,ee(t)&&t.length>0&&""!==t.trim()})){if(!a.relaxedAPI)throw new TypeError("string-find-heads-tails: [THROW_ID_07] the second input argument, heads, should not contain empty strings! For example, there's one detected at index "+c+" of heads array:\n"+JSON.stringify(n,null,4)+".");if(0===(n=n.filter(function(t){return ee(t)&&t.length>0})).length)return[]}}else{if(!a.relaxedAPI)throw new TypeError("string-find-heads-tails: [THROW_ID_06] the second input argument, heads, contains non-string elements! For example, element at "+i(c)+" index is "+(void 0===u?"undefined":te(u))+", equal to:\n"+JSON.stringify(u,null,4)+". Whole heads array looks like:\n"+JSON.stringify(n,null,4));if(0===(n=n.filter(function(t){return ee(t)&&t.length>0})).length)return[]}}if(!ee(o)&&!re(o)){if(a.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_08] the third input argument, tails, must be either a string or an array of strings! Currently it's: "+(void 0===o?"undefined":te(o))+", equal to:\n"+JSON.stringify(o,null,4))}if(ee(o)){if(0===o.length){if(a.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_09] the third input argument, tails, must be a non-empty string! Currently it's empty.")}o=ot(o)}else if(re(o)){if(0===o.length){if(a.relaxedAPI)return[];throw new TypeError("string-find-heads-tails: [THROW_ID_10] the third input argument, tails, must be a non-empty array and contain at least one string! Currently it's empty.")}if(o.every(function(t,e){return u=t,c=e,ee(t)})){if(!o.every(function(t,e){return c=e,ee(t)&&t.length>0&&""!==t.trim()})){if(!a.relaxedAPI)throw new TypeError("string-find-heads-tails: [THROW_ID_12] the third input argument, tails, should not contain empty strings! For example, there's one detected at index "+c+". Whole tails array is equal to:\n"+JSON.stringify(o,null,4));if(0===(o=o.filter(function(t){return ee(t)&&t.length>0})).length)return[]}}else{if(!a.relaxedAPI)throw new TypeError("string-find-heads-tails: [THROW_ID_11] the third input argument, tails, contains non-string elements! For example, element at "+i(c)+" index is "+(void 0===u?"undefined":te(u))+", equal to:\n"+JSON.stringify(u,null,4)+". Whole tails array is equal to:\n"+JSON.stringify(o,null,4));if(0===(o=o.filter(function(t){return ee(t)&&t.length>0})).length)return[]}}var f=a.source===s.source;if(a.throwWhenSomethingWrongIsDetected&&!a.allowWholeValueToBeOnlyHeadsOrTails){if(Yt(ot(n),t))throw new Error(a.source+(f?": [THROW_ID_16]":"")+" the whole input string can't be equal to "+(ee(n)?"":"one of ")+"heads ("+t+")!");if(Yt(ot(o),t))throw new Error(a.source+(f?": [THROW_ID_17]":"")+" the whole input string can't be equal to "+(ee(o)?"":"one of ")+"tails ("+t+")!")}if(!e(a.fromIndex,{includeZero:!0})&&!r(a.fromIndex,{includeZero:!0}))throw new TypeError(a.source+(f?": [THROW_ID_18]":"")+" the fourth input argument must be a natural number! Currently it's: "+a.fromIndex);for(var l=n.concat(o).map(function(t){return t.charAt(0)}).reduce(function(t,e){return e.charCodeAt(0)>t[1]?[t[0],e.charCodeAt(0)]:e.charCodeAt(0)<t[0]?[e.charCodeAt(0),t[1]]:t},[n[0].charCodeAt(0),n[0].charCodeAt(0)]),h=[],y=!1,d={},p=!1,g=void 0,m=a.fromIndex,b=t.length;m<b;m++){var w=t[m].charCodeAt(0);if(w<=l[1]&&w>=l[0]){var v=_t(t,m,n);if(v&&a.matchHeadsAndTailsStrictlyInPairsByTheirOrder)for(var _=n.length;_--;)if(n[_]===v){g=_;break}if(v){if(!y){(d={}).headsStartAt=m,d.headsEndAt=m+v.length,y=!0,m+=v.length-1,p&&(p=!1);continue}if(a.throwWhenSomethingWrongIsDetected)throw new TypeError(a.source+(f?": [THROW_ID_19]":"")+' When processing "'+t+'", we found heads ('+t.slice(m,m+v.length)+') starting at character with index number "'+m+'" and there was another set of heads before it! Generally speaking, there should be "heads-tails-heads-tails", not "heads-heads-tails"!\nWe\'re talking about the area of the code:\n\n\n--------------------------------------starts\n'+t.slice(Math.max(m-200,0),m)+"\n      [33m-------\x3e[39m [31m"+t.slice(m,m+v.length)+"[39m [33m<-------[39m\n"+t.slice(m+v.length,Math.min(b,m+200))+"\n--------------------------------------ends\n\n\nTo turn off this error being thrown, set opts.throwWhenSomethingWrongIsDetected to Boolean false.")}var O=_t(t,m,o);if(y&&O&&a.matchHeadsAndTailsStrictlyInPairsByTheirOrder&&void 0!==g&&void 0!==o[g]&&o[g]!==O){for(var S=void 0,T=o.length;T--;)if(o[T]===O){S=T;break}throw new TypeError(a.source+(f?": [THROW_ID_20]":"")+' When processing "'+t+'", we had "opts.matchHeadsAndTailsStrictlyInPairsByTheirOrder" on. We found heads ('+n[g]+") but the tails the followed it were not of the same index, "+g+" ("+o[g]+") but "+S+" ("+O+").")}if(O){if(y){d.tailsStartAt=m,d.tailsEndAt=m+O.length,h.push(d),d={},y=!1,m+=O.length-1;continue}a.throwWhenSomethingWrongIsDetected&&(p=a.source+(f?": [THROW_ID_21]":"")+' When processing "'+t+'", we found tails ('+t.slice(m,m+O.length)+') starting at character with index number "'+m+"\" but there were no heads preceding it. That's very naughty!")}}if(a.throwWhenSomethingWrongIsDetected&&m===b-1){if(0!==Object.keys(d).length)throw new TypeError(a.source+(f?": [THROW_ID_22]":"")+' When processing "'+t+"\", we reached the end of the string and yet didn't find any tails ("+JSON.stringify(o,null,4)+") to match the last detected heads ("+t.slice(d.headsStartAt,d.headsEndAt)+")!");if(p)throw new Error(p)}}return h}});

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.charcodeIsValidXmlNameCharacter={})}(this,function(e){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var t,n,r=Function.prototype,i=Object.prototype,a=r.toString,s=i.hasOwnProperty,u=a.call(Object),c=i.toString,f=(t=Object.getPrototypeOf,n=Object,function(e){return t(n(e))});var m=function(e){if(!(t=e)||"object"!=(void 0===t?"undefined":o(t))||"[object Object]"!=c.call(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t,n=f(e);if(null===n)return!0;var r=s.call(n,"constructor")&&n.constructor;return"function"==typeof r&&r instanceof r&&a.call(r)==u},v="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function l(e,t){return e(t={exports:{}},t.exports),t.exports}var _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y=l(function(e,t){var o,i,n,a,s,u,c,f,r,l,y,p,h,g,d,m,b,w;e.exports=(o="function"==typeof Promise,i="object"===("undefined"==typeof self?"undefined":_(self))?self:v,n="undefined"!=typeof Symbol,a="undefined"!=typeof Map,s="undefined"!=typeof Set,u="undefined"!=typeof WeakMap,c="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,r=n&&void 0!==Symbol.iterator,l=n&&void 0!==Symbol.toStringTag,y=s&&"function"==typeof Set.prototype.entries,p=a&&"function"==typeof Map.prototype.entries,h=y&&Object.getPrototypeOf((new Set).entries()),g=p&&Object.getPrototypeOf((new Map).entries()),d=r&&"function"==typeof Array.prototype[Symbol.iterator],m=d&&Object.getPrototypeOf([][Symbol.iterator]()),b=r&&"function"==typeof String.prototype[Symbol.iterator],w=b&&Object.getPrototypeOf(""[Symbol.iterator]()),function(e){var t=void 0===e?"undefined":_(e);if("object"!==t)return t;if(null===e)return"null";if(e===i)return"global";if(Array.isArray(e)&&(!1===l||!(Symbol.toStringTag in e)))return"Array";if("object"===("undefined"==typeof window?"undefined":_(window))&&null!==window){if("object"===_(window.location)&&e===window.location)return"Location";if("object"===_(window.document)&&e===window.document)return"Document";if("object"===_(window.navigator)){if("object"===_(window.navigator.mimeTypes)&&e===window.navigator.mimeTypes)return"MimeTypeArray";if("object"===_(window.navigator.plugins)&&e===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"===_(window.HTMLElement))&&e instanceof window.HTMLElement){if("BLOCKQUOTE"===e.tagName)return"HTMLQuoteElement";if("TD"===e.tagName)return"HTMLTableDataCellElement";if("TH"===e.tagName)return"HTMLTableHeaderCellElement"}}var n=l&&e[Symbol.toStringTag];if("string"==typeof n)return n;var r=Object.getPrototypeOf(e);return r===RegExp.prototype?"RegExp":r===Date.prototype?"Date":o&&r===Promise.prototype?"Promise":s&&r===Set.prototype?"Set":a&&r===Map.prototype?"Map":c&&r===WeakSet.prototype?"WeakSet":u&&r===WeakMap.prototype?"WeakMap":f&&r===DataView.prototype?"DataView":a&&r===g?"Map Iterator":s&&r===h?"Set Iterator":d&&r===m?"Array Iterator":b&&r===w?"String Iterator":null===r?"Object":Object.prototype.toString.call(e).slice(8,-1)})});function p(e,t,n){if(t!=t)return function(e,t,n,r){for(var o=e.length,i=n+(r?1:-1);r?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,g,n);for(var r=n-1,o=e.length;++r<o;)if(e[r]===t)return r;return-1}function h(e,t,n,r){for(var o=n-1,i=e.length;++o<i;)if(r(e[o],t))return o;return-1}function g(e){return e!=e}var d=Array.prototype.splice;function b(e,t,n,r){var o,i=r?h:p,a=-1,s=t.length,u=e;for(e===t&&(t=function(e,t){var n=-1,r=e.length;t||(t=Array(r));for(;++n<r;)t[n]=e[n];return t}(t)),n&&(u=function(e,t){for(var n=-1,r=e?e.length:0,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}(e,(o=n,function(e){return o(e)})));++a<s;)for(var c=0,f=t[a],l=n?n(f):f;-1<(c=i(u,l,c,r));)u!==e&&d.call(u,c,1),d.call(e,c,1);return e}var w=function(e,t){return e&&e.length&&t&&t.length?b(e,t):e},O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S="__lodash_hash_undefined__",T=9007199254740991,j="[object Function]",I="[object GeneratorFunction]",E=/^\[object .+?Constructor\]$/,A="object"==O(v)&&v&&v.Object===Object&&v,R="object"==("undefined"==typeof self?"undefined":O(self))&&self&&self.Object===Object&&self,x=A||R||Function("return this")();function k(e,t){return!!(e?e.length:0)&&-1<function(e,t,n){if(t!=t)return function(e,t,n,r){var o=e.length,i=n+(r?1:-1);for(;r?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,H,n);var r=n-1,o=e.length;for(;++r<o;)if(e[r]===t)return r;return-1}(e,t,0)}function W(e,t,n){for(var r=-1,o=e?e.length:0;++r<o;)if(n(t,e[r]))return!0;return!1}function M(e,t){for(var n=-1,r=e?e.length:0,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}function H(e){return e!=e}function N(t){return function(e){return t(e)}}function D(e,t){return e.has(t)}var P,C,Z,V=Array.prototype,J=Function.prototype,K=Object.prototype,L=x["__core-js_shared__"],q=(P=/[^.]+$/.exec(L&&L.keys&&L.keys.IE_PROTO||""))?"Symbol(src)_1."+P:"",$=J.toString,B=K.hasOwnProperty,F=K.toString,Q=RegExp("^"+$.call(B).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),G=V.splice,U=Math.max,X=Math.min,z=ue(x,"Map"),Y=ue(Object,"create");function ee(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function te(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function ne(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function re(e){var t=-1,n=e?e.length:0;for(this.__data__=new ne;++t<n;)this.add(e[t])}function oe(e,t){for(var n,r,o=e.length;o--;)if((n=e[o][0])===(r=t)||n!=n&&r!=r)return o;return-1}function ie(e){return!(!fe(e)||(t=e,q&&q in t))&&(ce(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?Q:E).test(function(e){if(null!=e){try{return $.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e));var t}function ae(e){return(o=t=e)&&"object"==(void 0===o?"undefined":O(o))&&(null!=(n=t)&&("number"==typeof(r=n.length)&&-1<r&&r%1==0&&r<=T)&&!ce(n))?e:[];var t,n,r,o}function se(e,t){var n,r,o=e.__data__;return("string"==(r=void 0===(n=t)?"undefined":O(n))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof t?"string":"hash"]:o.map}function ue(e,t){var n,r,o=(r=t,null==(n=e)?void 0:n[r]);return ie(o)?o:void 0}function ce(e){var t=fe(e)?F.call(e):"";return t==j||t==I}function fe(e){var t=void 0===e?"undefined":O(e);return!!e&&("object"==t||"function"==t)}ee.prototype.clear=function(){this.__data__=Y?Y(null):{}},ee.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},ee.prototype.get=function(e){var t=this.__data__;if(Y){var n=t[e];return n===S?void 0:n}return B.call(t,e)?t[e]:void 0},ee.prototype.has=function(e){var t=this.__data__;return Y?void 0!==t[e]:B.call(t,e)},ee.prototype.set=function(e,t){return this.__data__[e]=Y&&void 0===t?S:t,this},te.prototype.clear=function(){this.__data__=[]},te.prototype.delete=function(e){var t=this.__data__,n=oe(t,e);return!(n<0||(n==t.length-1?t.pop():G.call(t,n,1),0))},te.prototype.get=function(e){var t=this.__data__,n=oe(t,e);return n<0?void 0:t[n][1]},te.prototype.has=function(e){return-1<oe(this.__data__,e)},te.prototype.set=function(e,t){var n=this.__data__,r=oe(n,e);return r<0?n.push([e,t]):n[r][1]=t,this},ne.prototype.clear=function(){this.__data__={hash:new ee,map:new(z||te),string:new ee}},ne.prototype.delete=function(e){return se(this,e).delete(e)},ne.prototype.get=function(e){return se(this,e).get(e)},ne.prototype.has=function(e){return se(this,e).has(e)},ne.prototype.set=function(e,t){return se(this,e).set(e,t),this},re.prototype.add=re.prototype.push=function(e){return this.__data__.set(e,S),this},re.prototype.has=function(e){return this.__data__.has(e)};var le=(C=function(e){var t=M(e,ae);return t.length&&t[0]===e[0]?function(e,t,n){for(var r=n?W:k,o=e[0].length,i=e.length,a=i,s=Array(i),u=1/0,c=[];a--;){var f=e[a];a&&t&&(f=M(f,N(t))),u=X(f.length,u),s[a]=!n&&(t||120<=o&&120<=f.length)?new re(a&&f):void 0}f=e[0];var l=-1,y=s[0];e:for(;++l<o&&c.length<u;){var p=f[l],h=t?t(p):p;if(p=n||0!==p?p:0,!(y?D(y,h):r(c,h,n))){for(a=i;--a;){var g=s[a];if(!(g?D(g,h):r(e[a],h,n)))continue e}y&&y.push(h),c.push(p)}}return c}(t):[]},Z=U(void 0===Z?C.length-1:Z,0),function(){for(var e=arguments,t=-1,n=U(e.length-Z,0),r=Array(n);++t<n;)r[t]=e[Z+t];t=-1;for(var o=Array(Z+1);++t<Z;)o[t]=e[t];return o[Z]=r,function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}(C,this,o)});function ye(e){return"string"==typeof e?0<e.length?[e]:[]:e}function pe(r,e,t){function o(e){return null!=e}function n(e){return"boolean"===y(e)}function i(e){return"string"===y(e)}function a(e){return"Object"===y(e)}var s=["any","anything","every","everything","all","whatever","whatevs"],u=Array.isArray;if(0===arguments.length)throw new Error("check-types-mini: [THROW_ID_01] Missing all arguments!");if(1===arguments.length)throw new Error("check-types-mini: [THROW_ID_02] Missing second argument!");var c=a(e)?e:{},f={ignoreKeys:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"},l=void 0;if(!i((l=o(t)&&a(t)?Object.assign({},f,t):Object.assign({},f)).msg))throw new Error("check-types-mini: [THROW_ID_03] opts.msg must be string! Currently it's: "+y(l.msg)+", equal to "+JSON.stringify(l.msg,null,4));if(l.msg=l.msg.trim(),":"===l.msg[l.msg.length-1]&&(l.msg=l.msg.slice(0,l.msg.length-1)),!i(l.optsVarName))throw new Error("check-types-mini: [THROW_ID_04] opts.optsVarName must be string! Currently it's: "+y(l.optsVarName)+", equal to "+JSON.stringify(l.optsVarName,null,4));if(l.ignoreKeys=ye(l.ignoreKeys),l.acceptArraysIgnore=ye(l.acceptArraysIgnore),!u(l.ignoreKeys))throw new TypeError("check-types-mini: [THROW_ID_05] opts.ignoreKeys should be an array, currently it's: "+y(l.ignoreKeys));if(!n(l.acceptArrays))throw new TypeError("check-types-mini: [THROW_ID_06] opts.acceptArrays should be a Boolean, currently it's: "+y(l.acceptArrays));if(!u(l.acceptArraysIgnore))throw new TypeError("check-types-mini: [THROW_ID_07] opts.acceptArraysIgnore should be an array, currently it's: "+y(l.acceptArraysIgnore));if(!n(l.enforceStrictKeyset))throw new TypeError("check-types-mini: [THROW_ID_08] opts.enforceStrictKeyset should be a Boolean, currently it's: "+y(l.enforceStrictKeyset));if(Object.keys(l.schema).forEach(function(e){u(l.schema[e])||(l.schema[e]=[l.schema[e]]),l.schema[e]=l.schema[e].map(String).map(function(e){return e.toLowerCase()}).map(function(e){return e.trim()})}),l.enforceStrictKeyset)if(o(l.schema)&&0<Object.keys(l.schema).length){if(0!==w(Object.keys(r),Object.keys(c).concat(Object.keys(l.schema))).length)throw new TypeError(l.msg+": "+l.optsVarName+".enforceStrictKeyset is on and the following keys are not covered by schema and/or reference objects: "+JSON.stringify(w(Object.keys(r),Object.keys(c).concat(Object.keys(l.schema))),null,4))}else{if(!(o(c)&&0<Object.keys(c).length))throw new TypeError(l.msg+": Both "+l.optsVarName+".schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!");if(0!==w(Object.keys(r),Object.keys(c)).length)throw new TypeError(l.msg+": The input object has keys that are not covered by reference object: "+JSON.stringify(w(Object.keys(r),Object.keys(c)),null,4));if(0!==w(Object.keys(c),Object.keys(r)).length)throw new TypeError(l.msg+": The reference object has keys that are not present in the input object: "+JSON.stringify(w(Object.keys(c),Object.keys(r)),null,4))}Object.keys(r).forEach(function(t){if(o(l.schema)&&Object.prototype.hasOwnProperty.call(l.schema,t)){if(l.schema[t]=ye(l.schema[t]).map(String).map(function(e){return e.toLowerCase()}),!(le(l.schema[t],s).length||(!0===r[t]||!1===r[t]||l.schema[t].includes(y(r[t]).toLowerCase()))&&(!0!==r[t]&&!1!==r[t]||l.schema[t].includes(String(r[t]))||l.schema[t].includes("boolean")))){if(!u(r[t])||!l.acceptArrays)throw new TypeError(l.msg+": "+l.optsVarName+"."+t+" was customised to "+JSON.stringify(r[t],null,4)+" which is not among the allowed types in schema ("+l.schema[t]+") but "+y(r[t]));for(var e=0,n=r[t].length;e<n;e++)if(!l.schema[t].includes(y(r[t][e]).toLowerCase()))throw new TypeError(l.msg+": "+l.optsVarName+"."+t+" is of type "+y(r[t][e]).toLowerCase()+", but only the following are allowed in "+l.optsVarName+".schema: "+l.schema[t])}}else if(o(c)&&Object.prototype.hasOwnProperty.call(c,t)&&y(r[t])!==y(c[t])&&!l.ignoreKeys.includes(t)){if(!l.acceptArrays||!u(r[t])||l.acceptArraysIgnore.includes(t))throw new TypeError(l.msg+": "+l.optsVarName+"."+t+" was customised to "+JSON.stringify(r[t],null,4)+" which is not "+y(c[t])+" but "+y(r[t]));if(!r[t].every(function(e){return y(e)===y(c[t])}))throw new TypeError(l.msg+": "+l.optsVarName+"."+t+" was customised to be array, but not all of its elements are "+y(c[t])+"-type")}})}var he=function(e,t){if("string"!=typeof e)return!1;if(t&&"includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(e)}return/^[1-9]\d*(\.0+)?$/.test(e)},ge="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},de=function(e,t){if(t){if("object"!==(void 0===t?"undefined":ge(t)))throw new TypeError(String(t)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero&&0===e)return!0}}return Number.isSafeInteger(e)&&1<=e},me=l(function(e,t){(t=e.exports=function(e){return e+t.suffix(+e)}).suffix=function(e){return 1===Math.floor(e/10)?"th":e%10==1?"st":e%10==2?"nd":e%10==3?"rd":"th"}}),be=(me.suffix,"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}),we=Array.isArray;var ve="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_e=Array.isArray;function Oe(e,t,n){function r(e){return null!=e}var o=void 0;if(de(e,{includeZero:!0}))o=e;else{if(!he(e,{includeZero:!0}))throw new TypeError("ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_01] Input must mean an index, so it has to be either a natural number or a string containing natural number! Currently its type is: "+(void 0===e?"undefined":ve(e))+", equal to: "+JSON.stringify(e,null,4));o=parseInt(e,10)}if(!r(t))throw new TypeError("ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_02] We're missing the second input, rangesArr. It's meant to be an array of one or more range arrays.");if(!_e(t))throw new TypeError("ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_03] Second input argument, rangesArr must be an array! Currently its type is: "+(void 0===e?"undefined":ve(e))+", equal to: "+JSON.stringify(e,null,4));if(0===t.length)throw new TypeError("ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_04] Second input argument, rangesArr must be not empty! Currently it's empty.");var i=null;if(_e(t)&&0<t.length&&!_e(t[0]))throw new TypeError("ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_05] Second input argument, rangesArr must be an array of (index range) arrays! Currently it's equal to: "+t+".");if(!t.every(function(e,t){return!(!de(e[0],{includeZero:!0})||!de(e[1],{includeZero:!0}))||(i=t,!1)}))throw new TypeError("ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_06] Second input argument, rangesArr must consist of arrays which are natural number indexes representing string index ranges. However, "+me(i)+" range ("+JSON.stringify(t[i],null,4)+") does not consist of only natural numbers!");if(!t.every(function(e,t){return!(e[0]>e[1])||(i=t,!1)}))throw new TypeError("ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_07] The "+me(i)+" range ("+JSON.stringify(t[i],null,4)+") in the ranges array has beginning of the index bigger than ending! They can be equal but in the backwards order.");if(r(n)&&!m(n))throw new TypeError("ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_08] Options object must be a plain object! Currently its type is: "+(void 0===n?"undefined":ve(n))+", equal to: "+JSON.stringify(n,null,4));var a={inclusiveRangeEnds:!1,returnMatchedRangeInsteadOfTrue:!1,skipIncomingRangeSorting:!1},s=Object.assign(Object.assign({},a),n);if(pe(s,a,{msg:"ranges-is-index-within/rangesIsIndexWithin(): [THROW_ID_07*]"}),t.length<3){if(1===t.length){var u=void 0;return u=s.inclusiveRangeEnds?o>=t[0][0]&&o<=t[0][1]:o>t[0][0]&&o<t[0][1],s.returnMatchedRangeInsteadOfTrue&&u?t[0]:u}var c=void 0,f=void 0;return s.inclusiveRangeEnds?(c=o>=t[0][0]&&o<=t[0][1],f=o>=t[1][0]&&o<=t[1][1]):(c=o>t[0][0]&&o<t[0][1],f=o>t[1][0]&&o<t[1][1]),s.returnMatchedRangeInsteadOfTrue&&(c||f)?c?t[0]:t[1]:c||f}var l=s.skipIncomingRangeSorting?t:function(e,t){if(!we(e))throw new TypeError("ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: "+(void 0===e?"undefined":be(e))+", equal to: "+JSON.stringify(e,null,4));if(0===e.length)return e;var n={strictlyTwoElementsInRangeArrays:!1},r=Object.assign({},n,t);pe(r,n,{msg:"ranges-sort: [THROW_ID_02*]"});var o=void 0,i=void 0;if(r.strictlyTwoElementsInRangeArrays&&!e.every(function(e,t){return 2===e.length||(o=t,i=e.length,!1)}))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, "+me(o)+" range ("+JSON.stringify(e[o],null,4)+") has not two but "+i+" elements!");if(!e.every(function(e,t){return!(!de(e[0],{includeZero:!0})||!de(e[1],{includeZero:!0}))||(o=t,!1)}))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, "+me(o)+" range ("+JSON.stringify(e[o],null,4)+") does not consist of only natural numbers!");return Array.from(e).sort(function(e,t){return e[0]===t[0]?e[1]<t[1]?-1:e[1]>t[1]?1:0:e[0]<t[0]?-1:1})}(t);if(o<l[0][0]||o>l[l.length-1][1])return!1;if(o===l[0][0])return!!s.inclusiveRangeEnds&&(!s.returnMatchedRangeInsteadOfTrue||l[0]);if(o===l[l.length-1][1])return!!s.inclusiveRangeEnds&&(!s.returnMatchedRangeInsteadOfTrue||l[l.length-1]);for(var y=0,p=l.length-1,h=Math.floor((p+y)/2);1<Math.floor(p-y)&&0!==h;)if(o<l[h=Math.floor((p+y)/2)][0])p=h;else{if(!(o>l[h][1]))return o===l[h][0]||o===l[h][1]?!!s.inclusiveRangeEnds&&(!s.returnMatchedRangeInsteadOfTrue||l[h]):!s.returnMatchedRangeInsteadOfTrue||l[h];y=h}var g=void 0,d=void 0;return s.inclusiveRangeEnds?(g=o>=t[y][0]&&o<=t[y][1],d=o>=t[p][0]&&o<=t[p][1]):(g=o>t[y][0]&&o<t[y][1],d=o>t[p][0]&&o<t[p][1]),s.returnMatchedRangeInsteadOfTrue&&(g||d)?g?t[y]:t[p]:g||d}var Se=[[58,58],[65,90],[95,95],[192,214],[216,246],[248,767],[880,893],[895,8191],[8204,8205],[8304,8591],[11264,12271],[12289,55295],[63744,64975],[65008,65533],[65536,983039]],Te=[[45,45],[46,46],[48,57],[58,58],[65,90],[95,95],[183,183],[192,214],[216,246],[248,767],[768,879],[880,893],[895,8191],[8204,8205],[8255,8256],[8304,8591],[11264,12271],[12289,55295],[63744,64975],[65008,65533],[65536,983039]],je=[[97,122]],Ie={inclusiveRangeEnds:!0,skipIncomingRangeSorting:!0};e.isProduction4=function(e){return Oe(e.codePointAt(0),je,Ie)||Oe(e.codePointAt(0),Se,Ie)},e.isProduction4a=function(e){return Oe(e.codePointAt(0),je,Ie)||Oe(e.codePointAt(0),Te,Ie)},Object.defineProperty(e,"__esModule",{value:!0})});

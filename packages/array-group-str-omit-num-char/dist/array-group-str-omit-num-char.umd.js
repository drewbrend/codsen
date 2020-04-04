/**
 * array-group-str-omit-num-char
 * Groups array of strings by omitting number characters
 * Version: 2.1.34
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/array-group-str-omit-num-char
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).arrayGroupStrOmitNumChar=t()}(this,(function(){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=/^\[object .+?Constructor\]$/,r="object"==typeof e&&e&&e.Object===Object&&e,n="object"==typeof self&&self&&self.Object===Object&&self,o=r||n||Function("return this")();function a(e,t){return!!(e?e.length:0)&&function(e,t,r){if(t!=t)return function(e,t,r,n){var o=e.length,a=r+(n?1:-1);for(;n?a--:++a<o;)if(t(e[a],a,e))return a;return-1}(e,i,r);var n=r-1,o=e.length;for(;++n<o;)if(e[n]===t)return n;return-1}(e,t,0)>-1}function s(e,t,r){for(var n=-1,o=e?e.length:0;++n<o;)if(r(t,e[n]))return!0;return!1}function i(e){return e!=e}function u(e,t){return e.has(t)}function l(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}var f,c=Array.prototype,h=Function.prototype,p=Object.prototype,g=o["__core-js_shared__"],y=(f=/[^.]+$/.exec(g&&g.keys&&g.keys.IE_PROTO||""))?"Symbol(src)_1."+f:"",d=h.toString,_=p.hasOwnProperty,m=p.toString,w=RegExp("^"+d.call(_).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),T=c.splice,v=A(o,"Map"),b=A(o,"Set"),W=A(Object,"create");function O(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function $(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function R(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function j(e){var t=-1,r=e?e.length:0;for(this.__data__=new R;++t<r;)this.add(e[t])}function I(e,t){for(var r,n,o=e.length;o--;)if((r=e[o][0])===(n=t)||r!=r&&n!=n)return o;return-1}function E(e){return!(!S(e)||(r=e,y&&y in r))&&(function(e){var t=S(e)?m.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?w:t).test(function(e){if(null!=e){try{return d.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e));var r}O.prototype.clear=function(){this.__data__=W?W(null):{}},O.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},O.prototype.get=function(e){var t=this.__data__;if(W){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return _.call(t,e)?t[e]:void 0},O.prototype.has=function(e){var t=this.__data__;return W?void 0!==t[e]:_.call(t,e)},O.prototype.set=function(e,t){return this.__data__[e]=W&&void 0===t?"__lodash_hash_undefined__":t,this},$.prototype.clear=function(){this.__data__=[]},$.prototype.delete=function(e){var t=this.__data__,r=I(t,e);return!(r<0)&&(r==t.length-1?t.pop():T.call(t,r,1),!0)},$.prototype.get=function(e){var t=this.__data__,r=I(t,e);return r<0?void 0:t[r][1]},$.prototype.has=function(e){return I(this.__data__,e)>-1},$.prototype.set=function(e,t){var r=this.__data__,n=I(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},R.prototype.clear=function(){this.__data__={hash:new O,map:new(v||$),string:new O}},R.prototype.delete=function(e){return N(this,e).delete(e)},R.prototype.get=function(e){return N(this,e).get(e)},R.prototype.has=function(e){return N(this,e).has(e)},R.prototype.set=function(e,t){return N(this,e).set(e,t),this},j.prototype.add=j.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},j.prototype.has=function(e){return this.__data__.has(e)};var F=b&&1/l(new b([,-0]))[1]==1/0?function(e){return new b(e)}:function(){};function N(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function A(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return E(r)?r:void 0}function S(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}var C=function(e){return e&&e.length?function(e,t,r){var n=-1,o=a,i=e.length,f=!0,c=[],h=c;if(r)f=!1,o=s;else if(i>=200){var p=t?null:F(e);if(p)return l(p);f=!1,o=u,h=new j}else h=t?[]:c;e:for(;++n<i;){var g=e[n],y=t?t(g):g;if(g=r||0!==g?g:0,f&&y==y){for(var d=h.length;d--;)if(h[d]===y)continue e;t&&h.push(y),c.push(g)}else o(h,y,r)||(h!==c&&h.push(y),c.push(g))}return c}(e):[]};function H(e,t){if(!Array.isArray(e))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===e.length)return e;const r=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null},t);let n,o;if(r.strictlyTwoElementsInRangeArrays&&!e.every((e,t)=>2===e.length||(n=t,o=e.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) has not two but ${o} elements!`);if(!e.every((e,t)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(n=t,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${n}th range (${JSON.stringify(e[n],null,4)}) does not consist of only natural numbers!`);const a=e.length*e.length;let s=0;return Array.from(e).sort((e,t)=>(r.progressFn&&(s++,r.progressFn(Math.floor(100*s/a))),e[0]===t[0]?e[1]<t[1]?-1:e[1]>t[1]?1:0:e[0]<t[0]?-1:1))}function D(e,t){function r(e){return"string"==typeof e}function n(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e))return e;const o={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let a;if(t){if(!n(t))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(t,null,4)} (type ${typeof t})`);if(a=Object.assign({},o,t),a.progressFn&&n(a.progressFn)&&!Object.keys(a.progressFn).length)a.progressFn=null;else if(a.progressFn&&"function"!=typeof a.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof a.progressFn}", equal to ${JSON.stringify(a.progressFn,null,4)}`);if(a.mergeType&&1!==a.mergeType&&2!==a.mergeType)if(r(a.mergeType)&&"1"===a.mergeType.trim())a.mergeType=1;else{if(!r(a.mergeType)||"2"!==a.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof a.mergeType}", equal to ${JSON.stringify(a.mergeType,null,4)}`);a.mergeType=2}if("boolean"!=typeof a.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof a.joinRangesThatTouchEdges}", equal to ${JSON.stringify(a.joinRangesThatTouchEdges,null,4)}`)}else a=Object.assign({},o);const s=e.map(e=>[...e]).filter(e=>void 0!==e[2]||e[0]!==e[1]);let i,u,l;i=a.progressFn?H(s,{progressFn:e=>{l=Math.floor(e/5),l!==u&&(u=l,a.progressFn(l))}}):H(s);const f=i.length-1;for(let e=f;e>0;e--)a.progressFn&&(l=Math.floor(78*(1-e/f))+21,l!==u&&l>u&&(u=l,a.progressFn(l))),(i[e][0]<=i[e-1][0]||!a.joinRangesThatTouchEdges&&i[e][0]<i[e-1][1]||a.joinRangesThatTouchEdges&&i[e][0]<=i[e-1][1])&&(i[e-1][0]=Math.min(i[e][0],i[e-1][0]),i[e-1][1]=Math.max(i[e][1],i[e-1][1]),void 0!==i[e][2]&&(i[e-1][0]>=i[e][0]||i[e-1][1]<=i[e][1])&&null!==i[e-1][2]&&(null===i[e][2]&&null!==i[e-1][2]?i[e-1][2]=null:void 0!==i[e-1][2]?2===a.mergeType&&i[e-1][0]===i[e][0]?i[e-1][2]=i[e][2]:i[e-1][2]+=i[e][2]:i[e-1][2]=i[e][2]),i.splice(e,1),e=i.length);return i}function J(e){return null!=e}function x(e){return"string"==typeof e}var q=Array.isArray;return function(e,t){if(!q(e))return e;if(!e.length)return{};var r,n,o={wildcard:"*",dedupePlease:!0};r=null!=t?Object.assign({},o,t):Object.assign({},o);for(var a=(n=r.dedupePlease?C(e):Array.from(e)).length,s={},i=0;i<a;i++){var u=n[i].match(/\d+/gm);u?function(){var e=n[i].replace(/\d+/gm,r.wildcard);Object.prototype.hasOwnProperty.call(s,e)?(u.forEach((function(t,r){s[e].elementsWhichWeCanReplaceWithWildcards[r]&&t!==s[e].elementsWhichWeCanReplaceWithWildcards[r]&&(s[e].elementsWhichWeCanReplaceWithWildcards[r]=!1)})),s[e].count++):s[e]={count:1,elementsWhichWeCanReplaceWithWildcards:Array.from(u)}}():s[n[i]]={count:1}}var l={};return Object.keys(s).forEach((function(e){var t=e;if(q(s[e].elementsWhichWeCanReplaceWithWildcards)&&s[e].elementsWhichWeCanReplaceWithWildcards.some((function(e){return!1!==e}))){for(var n=[],o=0,a=0;a<s[e].elementsWhichWeCanReplaceWithWildcards.length;a++)o=t.indexOf(r.wildcard,o+r.wildcard.length),!1!==s[e].elementsWhichWeCanReplaceWithWildcards[a]&&n.push([o,o+r.wildcard.length,s[e].elementsWhichWeCanReplaceWithWildcards[a]]);t=function(e,t,r){let n=0,o=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(!x(e))throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(null===t)return e;if(!Array.isArray(t))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(r&&"function"!=typeof r)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);Array.isArray(t)&&(Number.isInteger(t[0])&&t[0]>=0||/^\d*$/.test(t[0]))&&(Number.isInteger(t[1])&&t[1]>=0||/^\d*$/.test(t[1]))&&(t=[t]);const a=t.length;let s=0;t.forEach((e,i)=>{if(r&&(n=Math.floor(s/a*10),n!==o&&(o=n,r(n))),!Array.isArray(e))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${i}th element not an array: ${JSON.stringify(e,null,4)}, which is ${typeof e}`);if(!Number.isInteger(e[0])||e[0]<0){if(!/^\d*$/.test(e[0]))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${i}th element, array [${e[0]},${e[1]}]. That array has first element not an integer, but ${typeof e[0]}, equal to: ${JSON.stringify(e[0],null,4)}. Computer doesn't like this.`);t[i][0]=Number.parseInt(t[i][0],10)}if(!Number.isInteger(e[1])){if(!/^\d*$/.test(e[1]))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${i}th element, array [${e[0]},${e[1]}]. That array has second element not an integer, but ${typeof e[1]}, equal to: ${JSON.stringify(e[1],null,4)}. Computer doesn't like this.`);t[i][1]=Number.parseInt(t[i][1],10)}s++});const i=D(t,{progressFn:e=>{r&&(n=10+Math.floor(e/10),n!==o&&(o=n,r(n)))}}),u=i.length;if(u>0){const t=e.slice(i[u-1][1]);e=i.reduce((t,a,s,i)=>{r&&(n=20+Math.floor(s/u*80),n!==o&&(o=n,r(n)));const l=0===s?0:i[s-1][1],f=i[s][0];return t+e.slice(l,f)+(J(i[s][2])?i[s][2]:"")},""),e+=t}return e}(t,n)}l[t]=s[e].count})),l}}));

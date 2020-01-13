/**
 * is-media-descriptor
 * Is given string a valid media descriptor (including media query)?
 * Version: 1.1.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/is-media-descriptor
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).isMediaDescriptor=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var o=[],n=!0,r=!1,f=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(o.push(i.value),!t||o.length!==t);n=!0);}catch(e){r=!0,f=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw f}}return o}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const o=[],n=[],r=(e,t)=>{if(e===t)return 0;const r=e;e.length>t.length&&(e=t,t=r);let f=e.length,i=t.length;for(;f>0&&e.charCodeAt(~-f)===t.charCodeAt(~-i);)f--,i--;let s,l,a,u,c=0;for(;c<f&&e.charCodeAt(c)===t.charCodeAt(c);)c++;if(f-=c,i-=c,0===f)return i;let d=0,h=0;for(;d<f;)n[d]=e.charCodeAt(c+d),o[d]=++d;for(;h<i;)for(s=t.charCodeAt(c+h),a=h++,l=h,d=0;d<f;d++)u=s===n[d]?a:a+1,a=o[d],l=o[d]=a>l?u>l?l+1:u:u>a?a+1:u;return l};var f=r,i=r;f.default=i;var s=["all","aural","braille","embossed","handheld","print","projection","screen","speech","tty","tv"];return function(o,n){var r=Object.assign({},{offset:0},n);if(r.offset&&!Number.isInteger(r.offset))throw new Error("is-media-descriptor: [THROW_ID_01] opts.offset must be an integer, it was given as ".concat(r.offset," (type ").concat(e(r.offset),")"));if(r.offset||(r.offset=0),"string"!=typeof o)return[];if(!o.trim().length)return[];var i=[],l=0,a=o.length,u=o.trim();if(o!==o.trim()){var c=[];if(!o[0].trim().length)for(var d=0,h=o.length;d<h;d++)if(o[d].trim().length){c.push([0+r.offset,d+r.offset]),l=d;break}if(!o[o.length-1].trim().length)for(var m=o.length;m--;)if(o[m].trim().length){c.push([m+1+r.offset,o.length+r.offset]),a=m+1;break}i.push({idxFrom:c[0][0],idxTo:c[c.length-1][1],message:"Remove whitespace.",fix:{ranges:c}})}if(s.includes(u))return i;if(["only","not"].includes(u))i.push({idxFrom:l+r.offset,idxTo:a+r.offset,message:"Missing media type or condition.",fix:null});else if(!u.match(/^\w+$/g)||u.includes("(")||u.includes(")")){var g=!1,p=t(Array.from(u).reduce((function(e,t){return")"===t?(!g&&e[1]+1>e[0]&&(g=!0),[e[0],e[1]+1]):"("===t?[e[0]+1,e[1]]:e}),[0,0]),2),y=p[0],x=p[1];if(g&&y===x&&i.push({idxFrom:l+r.offset,idxTo:a+r.offset,message:"Some closing brackets are before their opening counterparts.",fix:null}),y>x?i.push({idxFrom:l+r.offset,idxTo:a+r.offset,message:"More opening brackets than closing.",fix:null}):x>y&&i.push({idxFrom:l+r.offset,idxTo:a+r.offset,message:"More closing brackets than opening.",fix:null}),i.length)return i;for(var b=null,v=!0,T=[],w=null,F=0,k=u.length;F<=k;F++){if(u[F]&&u[F].trim().length&&null!==w){if(w<F-1||" "!==u[F-1]){var A=w+r.offset,C=F+r.offset,S=" ";w!==F-1&&(" "===u[w]?(A++,S=null):" "===u[F-1]&&(C--,S=null)),i.push({idxFrom:w+r.offset,idxTo:F+r.offset,message:"Bad whitespace.",fix:{ranges:[S?[A,C," "]:[A,C]]}})}w=null}if(u[F]&&!u[F].trim().length&&null===w&&(w=F),!(null===b||u[F]&&u[F].trim().length)){var j=u.slice(b,F);if(T.push(j),v)if(j.startsWith("("));else if(["only","not"].includes(j.toLowerCase())){if(T.length>1&&["only","not"].includes(T[T.length-1])){i.push({idxFrom:b+r.offset,idxTo:F+r.offset,message:'"'.concat(j,'" instead of a media type.'),fix:null});break}}else if(["and"].includes(j.toLowerCase())){if(T.length>1&&["only","not"].includes(T[T.length-2])){i.push({idxFrom:b+r.offset,idxTo:F+r.offset,message:'"'.concat(j,'" instead of a media type.'),fix:null});break}}else{if(!s.includes(j.toLowerCase())){i.push({idxFrom:b+r.offset,idxTo:F+r.offset,message:'Unrecognised media type "'.concat(u.slice(b,F),'".'),fix:null});break}v=!1}else{if("and"!==j){i.push({idxFrom:b+r.offset,idxTo:F+r.offset,message:'Unrecognised media type "'.concat(u.slice(b,F),'".'),fix:null});break}v=!0}b=null}null===b&&u[F]&&u[F].trim().length&&(b=F)}}else for(var M=0,O=s.length;M<O;M++){if(1===f(s[M],u)){i.push({idxFrom:l+r.offset,idxTo:a+r.offset,message:'Did you mean "'.concat(s[M],'"?'),fix:{ranges:[[l+r.offset,a+r.offset,s[M]]]}});break}M===O-1&&i.push({idxFrom:l+r.offset,idxTo:a+r.offset,message:'Unrecognised media type "'.concat(u,'".'),fix:null})}return i}}));

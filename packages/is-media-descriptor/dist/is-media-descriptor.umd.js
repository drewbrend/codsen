/**
 * is-media-descriptor
 * Is given string a valid media descriptor (including media query)?
 * Version: 1.2.4
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/is-media-descriptor
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).isMediaDescriptor=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var o=[],r=!0,n=!1,i=void 0;try{for(var s,f=e[Symbol.iterator]();!(r=(s=f.next()).done)&&(o.push(s.value),!t||o.length!==t);r=!0);}catch(e){n=!0,i=e}finally{try{r||null==f.return||f.return()}finally{if(n)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o];return r}const r=[],n=[],i=(e,t)=>{if(e===t)return 0;const o=e;e.length>t.length&&(e=t,t=o);let i=e.length,s=t.length;for(;i>0&&e.charCodeAt(~-i)===t.charCodeAt(~-s);)i--,s--;let f,a,l,c,u=0;for(;u<i&&e.charCodeAt(u)===t.charCodeAt(u);)u++;if(i-=u,s-=u,0===i)return s;let m=0,h=0;for(;m<i;)n[m]=e.charCodeAt(u+m),r[m]=++m;for(;h<s;)for(f=t.charCodeAt(u+h),l=h++,a=h,m=0;m<i;m++)c=f===n[m]?l:l+1,l=r[m],a=r[m]=l>a?c>a?a+1:c:c>l?l+1:c;return a};var s=i,f=i;s.default=f;var a=["all","aural","braille","embossed","handheld","print","projection","screen","speech","tty","tv"],l=["width","min-width","max-width","height","min-height","max-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","orientation","resolution","min-resolution","max-resolution","scan","grid","update","overflow-block","overflow-inline","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","color-gamut","pointer","hover","any-pointer","any-hover"],c=/^\w+$/g;return function(o,r){var n=Object.assign({},{offset:0},r);if(n.offset&&!Number.isInteger(n.offset))throw new Error("is-media-descriptor: [THROW_ID_01] opts.offset must be an integer, it was given as ".concat(n.offset," (type ").concat(e(n.offset),")"));if(n.offset||(n.offset=0),"string"!=typeof o)return[];if(!o.trim().length)return[];var i=[],f=0,u=o.length,m=o.trim();if(o!==o.trim()){var h=[];if(!o[0].trim().length)for(var d=0,p=o.length;d<p;d++)if(o[d].trim().length){h.push([0+n.offset,d+n.offset]),f=d;break}if(!o[o.length-1].trim().length)for(var g=o.length;g--;)if(o[g].trim().length){h.push([g+1+n.offset,o.length+n.offset]),u=g+1;break}i.push({idxFrom:h[0][0],idxTo:h[h.length-1][1],message:"Remove whitespace.",fix:{ranges:h}})}if(a.includes(m))return i;if(["only","not"].includes(m))i.push({idxFrom:f+n.offset,idxTo:u+n.offset,message:"Missing media type or condition.",fix:null});else if(!m.match(c)||m.includes("(")||m.includes(")")){var x=!1,b=t(Array.from(m).reduce((function(e,t,o){return")"===t?(!x&&e[1]+1>e[0]&&(x=!0),[e[0],e[1]+1]):"("===t?[e[0]+1,e[1]]:(";"===t&&i.push({idxFrom:o+n.offset,idxTo:o+1+n.offset,message:"Semicolon found!",fix:null}),e)}),[0,0]),2),y=b[0],v=b[1];if(x&&y===v&&i.push({idxFrom:f+n.offset,idxTo:u+n.offset,message:"Some closing brackets are before their opening counterparts.",fix:null}),y>v?i.push({idxFrom:f+n.offset,idxTo:u+n.offset,message:"More opening brackets than closing.",fix:null}):v>y&&i.push({idxFrom:f+n.offset,idxTo:u+n.offset,message:"More closing brackets than opening.",fix:null}),!i.length&&m.match(/\(\s*\)/g))for(var w,C=null,T=0,A=m.length;T<A;T++)"("===m[T]?(C=T,w=!1):")"===m[T]?w?w=!0:i.push({idxFrom:C+n.offset,idxTo:T+1+n.offset,message:"Empty bracket pair.",fix:null}):m[T].trim().length&&(w=!0);if(i.length)return i;!function(e,t){if("string"!=typeof e)throw new Error(`string-process-comma-separated: [THROW_ID_01] input must be string! It was given as ${typeof e}, equal to:\n${JSON.stringify(e,null,4)}`);if(!e.length||!t.cb&&!t.errCb)return;const o={from:0,to:e.length,offset:0,leadingWhitespaceOK:!1,trailingWhitespaceOK:!1,oneSpaceAfterCommaOK:!1,innerWhitespaceAllowed:!1,separator:",",cb:null,errCb:null},r=Object.assign({},o,t);Number.isInteger(t.from)||(r.from=0),Number.isInteger(t.to)||(r.to=e.length),Number.isInteger(t.offset)||(r.offset=0);let n=null,i=null,s=!1,f=[],a=null,l=!0;for(let t=r.from;t<r.to;t++){if(e[t].trim().length&&e[t]!==r.separator&&(a=t),null!==n||!e[t].trim().length||r.separator&&e[t]===r.separator||(s||(s=!0),f.length&&(f.length>1&&f.forEach((e,t)=>{t&&r.errCb([[e+r.offset,e+1+r.offset]],"Remove separator.",l)}),f=[]),n=t),Number.isInteger(n)&&(t>n&&r.separator&&e[t]===r.separator||t+1===r.to)){e.slice(n,t+1===r.to&&e[t]!==r.separator&&e[t].trim().length?t+1:t);"function"==typeof r.cb&&r.cb(n+r.offset,(t+1===r.to&&e[t]!==r.separator&&e[t].trim().length?t+1:a+1)+r.offset),n=null}if(e[t].trim().length||null!==i||(i=t),null!==i&&(e[t].trim().length||t+1===r.to)){if(i===r.from)r.leadingWhitespaceOK||"function"!=typeof r.errCb||r.errCb([[i+r.offset,(t+1===r.to?t+1:t)+r.offset]],"Remove whitespace.",l);else if(e[t].trim().length||t+1!==r.to){if(!(r.oneSpaceAfterCommaOK&&e[t].trim().length&&t>r.from+1&&" "===e[t-1]&&","===e[t-2]||r.innerWhitespaceAllowed&&s&&e[i-1]&&e[t].trim().length&&e[t]!==r.separator&&e[i-1]!==r.separator)){let o=i,n=t;t+1!==r.to||e[t]===r.separator||e[t].trim().length||n++;let f="";r.oneSpaceAfterCommaOK&&(" "===e[i]&&e[i-1]===r.separator?o++:" "!==e[i]&&(f=" "));let a="Remove whitespace.";!r.innerWhitespaceAllowed&&s&&e[i-1]&&e[t].trim().length&&e[t]!==r.separator&&e[i-1]!==r.separator&&(l=!1,a="Bad whitespace."),f.length?r.errCb([[o+r.offset,n+r.offset,f]],a,l):r.errCb([[o+r.offset,n+r.offset]],a,l),l=!0}}else r.trailingWhitespaceOK||"function"!=typeof r.errCb||r.errCb([[i+r.offset,t+1+r.offset]],"Remove whitespace.",l);i=null}e[t]===r.separator&&(s?f.push(t):r.errCb([[t+r.offset,t+1+r.offset]],"Remove separator.",l)),t+1===r.to&&f.forEach(e=>{r.errCb([[e+r.offset,e+1+r.offset]],"Remove separator.",l)})}}(m,{offset:n.offset,leadingWhitespaceOK:!1,trailingWhitespaceOK:!1,oneSpaceAfterCommaOK:!0,innerWhitespaceAllowed:!0,separator:",",cb:function(e,t){!function(e,t,o){for(var r=null,n=[],i=null,s=!0,f=!0,u=!0,m=!1,h=[],d=t.idxFrom;d<=t.idxTo;d++){if(")"===e[d]){var p=h.pop(),g=e.slice(p+1,d);g.includes("(")||g.includes(")")||g.match(c)&&(l.includes(g.toLowerCase().trim())||o.push({idxFrom:p+1+t.offset,idxTo:d+t.offset,message:'Unrecognised "'.concat(g.trim(),'".'),fix:null}));var x=new RegExp(a.join("|"),"gi");(g.match(x)||[]).forEach((function(r){var n=e.indexOf(r);o.push({idxFrom:n+t.offset,idxTo:n+r.length+t.offset,message:'Media type "'.concat(r,'" inside brackets.'),fix:null})}))}if("("===e[d]&&h.push(d),e[d]&&e[d].trim().length&&null!==i){if("("===e[i-1]||")"===e[d])o.push({idxFrom:i+t.offset,idxTo:d+t.offset,message:"Bad whitespace.",fix:{ranges:[[i+t.offset,d+t.offset]]}});else if(i<d-1||" "!==e[d-1]){var b=i+t.offset,y=d+t.offset,v=" ";i!==d-1&&(" "===e[i]?(b++,v=null):" "===e[d-1]&&(y--,v=null)),o.push({idxFrom:i+t.offset,idxTo:d+t.offset,message:"Bad whitespace.",fix:{ranges:[v?[b,y," "]:[b,y]]}})}i=null}if(e[d]&&!e[d].trim().length&&null===i&&(i=d),!(null===r||e[d]&&e[d].trim().length||h.length)){var w=e.slice(r,d);if(n.push(w.toLowerCase()),!m||(s||f)&&"and"!==w)if(u&&["not","only"].includes(w))u=!1,f=!1;else if(s||f){if(w.startsWith("("))if(f);else{var C='Media condition "'.concat(e.slice(r,d),"\" can't be here.");"not"===n[n.length-2]&&(C='"not" can be only in front of media type.'),o.push({idxFrom:r+t.offset,idxTo:d+t.offset,message:C,fix:null})}else{if(!s){var T='Expected brackets on "'.concat(w,'".'),A=null,F=d+t.offset;if(["not","else","or"].includes(w.toLowerCase()))T='"'.concat(w,"\" can't be here.");else if(a.includes(w.toLowerCase()))T="Unexpected media type, try using a comma.";else if(l.includes(w.toLowerCase()))T="Missing brackets.",A={ranges:[[r+t.offset,r+t.offset,"("],[d+t.offset,d+t.offset,")"]]};else if(e.slice(d).trim().startsWith(":")){var O=w.slice(0,d).trim();T='Expected brackets on "'.concat(O,'" and its value.'),F=r+O.length+t.offset}o.push({idxFrom:r+t.offset,idxTo:F,message:T,fix:A});break}if(a.includes(w.toLowerCase()))s=!1,f=!1;else{var S='Unrecognised "'.concat(w,'".');w.match(/\w/g)?["and","only","or","not"].includes(w.toLowerCase())&&(S='"'.concat(w,'" instead of a media type.')):S="Strange symbol".concat(1===w.trim().length?"":"s",' "').concat(w,'".'),o.push({idxFrom:r+t.offset,idxTo:d+t.offset,message:S,fix:null})}}m=!0}else o.push({idxFrom:r+t.offset,idxTo:d+t.offset,message:'Unrecognised media type "'.concat(e.slice(r,d),'".'),fix:null});else"and"!==w.toLowerCase()?o.push({idxFrom:r+t.offset,idxTo:d+t.offset,message:'Expected "and", found "'.concat(w,'".'),fix:null}):e[d]||o.push({idxFrom:r+t.offset,idxTo:d+t.offset,message:'Dangling "'.concat(w,'".'),fix:{ranges:[[e.slice(0,r).trimEnd().length+t.offset,d+t.offset]]}}),m=!1,f=!0;r=null,u&&(u=!1)}null===r&&e[d]&&e[d].trim().length&&")"!==e[d]&&(e[d],r=d)}}(m,Object.assign({},n,{idxFrom:e-n.offset,idxTo:t-n.offset}),i)},errCb:function(e,t){}})}else for(var F=0,O=a.length;F<O;F++){if(1===s(a[F],m)){i.push({idxFrom:f+n.offset,idxTo:u+n.offset,message:'Did you mean "'.concat(a[F],'"?'),fix:{ranges:[[f+n.offset,u+n.offset,a[F]]]}});break}F===O-1&&i.push({idxFrom:f+n.offset,idxTo:u+n.offset,message:'Unrecognised media type "'.concat(m,'".'),fix:null})}return i}}));

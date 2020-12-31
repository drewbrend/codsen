/**
 * is-html-tag-opening
 * Does an HTML tag start at given position?
 * Version: 1.10.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/is-html-tag-opening/
 */

import{matchRightIncl as t,matchRight as e}from"string-match-left-right";import{left as r}from"string-left-right";const s={allowCustomTagNames:!1,skipOpeningBracket:!1},i=["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","big","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","doctype","dt","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h1 - h6","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xml"];function n(t){return void 0===t||t.toUpperCase()===t.toLowerCase()&&!/\d/.test(t)&&"="!==t}function a(t,e){return"<"===t[e]||"<"===t[r(t,e)]}var o="1.10.1";function p(o,p=0,g){if("string"!=typeof o)throw Error(`is-html-tag-opening: [THROW_ID_01] the first input argument should have been a string but it was given as "${typeof o}", value being ${JSON.stringify(o,null,4)}`);if(!Number.isInteger(p)||0>p)throw Error(`is-html-tag-opening: [THROW_ID_02] the second input argument should have been a natural number string index but it was given as "${typeof p}", value being ${JSON.stringify(p,null,4)}`);const l={...s,...g},m="._a-z0-9·À-ÖØ-öø-ͽͿ-῿‌-‍‿-⁀⁰-￿",c=RegExp(`^<${l.skipOpeningBracket?"?":""}[\\\\ \\t\\r\\n/]*\\w+[\\\\ \\t\\r\\n/]*\\/?[\\\\ \\t\\r\\n/]*>`,"g"),u=RegExp(`^<${l.skipOpeningBracket?"?":""}[\\\\ \\t\\r\\n/]*[${m}]+[-${m}]*[\\\\ \\t\\r\\n/]*>`,"g"),d=RegExp(`^<${l.skipOpeningBracket?"?":""}\\s*\\w+\\s+\\w+(?:-\\w+)?\\s*=\\s*['"\\w]`,"g"),h=RegExp(`^<${l.skipOpeningBracket?"?":""}\\s*\\w+\\s+[${m}]+[-${m}]*(?:-\\w+)?\\s*=\\s*['"\\w]`),b=RegExp(`^<${l.skipOpeningBracket?"?":""}\\s*\\/?\\s*\\w+\\s*\\/?\\s*>`,"g"),f=RegExp(`^<${l.skipOpeningBracket?"?":""}\\s*\\/?\\s*[${m}]+[-${m}]*\\s*\\/?\\s*>`,"g"),k=RegExp(`^<${l.skipOpeningBracket?"?":""}[\\\\ \\t\\r\\n/]*\\w+(?:\\s*\\w+)?\\s*\\w+=['"]`,"g"),w=RegExp(`^<${l.skipOpeningBracket?"?":""}[\\\\ \\t\\r\\n/]*[${m}]+[-${m}]*\\s+(?:\\s*\\w+)?\\s*\\w+=['"]`,"g"),$=RegExp(`^<${l.skipOpeningBracket?"?\\/?":""}([\\\\ \\t\\r\\n/]*[${m}]+)+[\\\\ \\t\\r\\n/]*[\\\\/=>]`,""),O=p?o.slice(p):o;let v=!1,y=!1;const B={cb:n,i:!0,trimCharsBeforeMatching:["/","\\","!"," ","\t","\n","\r"]};l.allowCustomTagNames?((l.skipOpeningBracket&&("<"===o[p-1]||"/"===o[p-1]&&"<"===o[r(o,r(o,p))])||"<"===O[0]&&O[1]&&O[1].trim())&&($.test(O)||/^<\w+$/.test(O))||u.test(O)&&a(o,p)||h.test(O)||f.test(O)&&a(o,p)||w.test(O))&&(y=!0):(((l.skipOpeningBracket&&("<"===o[p-1]||"/"===o[p-1]&&"<"===o[r(o,r(o,p))])||"<"===O[0]&&O[1]&&O[1].trim())&&$.test(O)||c.test(O)&&a(o,p)||d.test(O)||b.test(O)&&a(o,p)||k.test(O))&&(v=!0),v&&t(o,p,i,{cb:t=>void 0===t?(("<"===o[p]&&o[p+1]&&o[p+1].trim()||"<"===o[p-1])&&(y=!0),!0):t.toUpperCase()===t.toLowerCase()&&!/\d/.test(t)&&"="!==t,i:!0,trimCharsBeforeMatching:["<","/","\\","!"," ","\t","\n","\r"]})&&(y=!0)),!y&&"<"===o[p]&&o[p+1]&&o[p+1].trim()&&e(o,p,i,B)&&(y=!0);return"string"==typeof o&&o.length>p&&y}export{s as defaults,p as isOpening,o as version};

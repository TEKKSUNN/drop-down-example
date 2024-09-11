(()=>{var n={781:n=>{const e=n=>Array.from(document.querySelectorAll(n)),r=n=>document.querySelector(n),t=function(n,e){["none","initial"].includes(e)&&(n.style.display=e)},a=n=>t(n,"none"),o=n=>t(n,"initial"),i=function(n,e){n.addEventListener("click",(()=>{var n;"none"===(n=>(n=>getComputedStyle(n).getPropertyValue("display"))(n))(n=e)?o(n):a(n)}))},A=function(n,e,r){["click","hover"].includes(r)&&(a(e),"hover"!==r?i(n,e):function(n,e){const r=n.parentNode;r.addEventListener("mouseover",(()=>{o(e)})),r.addEventListener("mouseout",(()=>{a(e)}))}(n,e))};n.exports={loadAllDropDowns:function(n,r){const t=e(n),a=e(`${n} + nav`);t.forEach(((n,e)=>{const t=a[e];A(n,t,r)}))},loadDropDown:function(n,e){const t=r(n),a=r(`${n} + nav`);A(t,a,e)}}},243:(n,e,r)=>{"use strict";r.d(e,{A:()=>A});var t=r(354),a=r.n(t),o=r(314),i=r.n(o)()(a());i.push([n.id,':root {\n    --header-bg: #333333;\n    --header-fg: #f5f5f5;\n    --tab-bg: #f5f5f5;\n    --tab-fg: #333333;\n    --light-tab-bg: hsl(31, 44%, 55%);\n    --dark-tab-fg: hsl(186, 45%, 40%);\n    --tab-shadow: 5px 5px 10px #cccccc;\n    --tab-border: 1px dashed #007bff;\n    --pad-normal: 8px 16px;\n    --shadow-normal: 5px 5px 10px rgb(0, 0, 0, 0.25);\n}\n\n* {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    display: grid;\n    grid-template-rows: max-content 1fr;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas:\n        "header header"\n        "click hover";\n    height: 100vh;\n}\n\nheader {\n    grid-area: header;\n    background-color: var(--header-bg);\n    color: var(--header-fg);\n    padding: var(--pad-normal);\n    text-align: center;\n    font-weight: bolder;\n    box-shadow: var(--shadow-normal);\n}\n\nheader h1 {\n    margin: 0;\n    padding: 0;\n}\n\n.drop-down-tab {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#click-drop-down {\n    grid-area: click;\n}\n\n#hover-drop-down {\n    grid-area: hover;\n}\n\n.tab-title {\n    font-size: 48px;\n    text-shadow: var(--tab-shadow);\n    margin: 0;\n    padding: var(--pad-normal);\n}\n\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    position: relative;\n}\n\n.drop-down,\nli > button {\n    border: 0;\n    font-size: 24px;\n    padding: var(--pad-normal);\n    border-radius: 8px;\n    background-color: var(--tab-bg);\n    color: var(--tab-fg);\n    box-shadow: var(--tab-shadow);\n}\n\nli > button:hover,\n.drop-down:hover {\n    background-color: var(--light-tab-bg);\n    color: var(--dark-tab-fg);\n    border: var(--tab-border);\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}',"",{version:3,sources:["webpack://./src/stylesheets/styles.css"],names:[],mappings:"AAAA;IACI,oBAAoB;IACpB,oBAAoB;IACpB,iBAAiB;IACjB,iBAAiB;IACjB,iCAAiC;IACjC,iCAAiC;IACjC,kCAAkC;IAClC,gCAAgC;IAChC,sBAAsB;IACtB,gDAAgD;AACpD;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,SAAS;IACT,UAAU;IACV,aAAa;IACb,mCAAmC;IACnC,8BAA8B;IAC9B;;qBAEiB;IACjB,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,kCAAkC;IAClC,uBAAuB;IACvB,0BAA0B;IAC1B,kBAAkB;IAClB,mBAAmB;IACnB,gCAAgC;AACpC;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,8BAA8B;IAC9B,SAAS;IACT,0BAA0B;AAC9B;;AAEA;IACI,qBAAqB;IACrB,SAAS;IACT,UAAU;IACV,kBAAkB;AACtB;;AAEA;;IAEI,SAAS;IACT,eAAe;IACf,0BAA0B;IAC1B,kBAAkB;IAClB,+BAA+B;IAC/B,oBAAoB;IACpB,6BAA6B;AACjC;;AAEA;;IAEI,qCAAqC;IACrC,yBAAyB;IACzB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B",sourcesContent:[':root {\n    --header-bg: #333333;\n    --header-fg: #f5f5f5;\n    --tab-bg: #f5f5f5;\n    --tab-fg: #333333;\n    --light-tab-bg: hsl(31, 44%, 55%);\n    --dark-tab-fg: hsl(186, 45%, 40%);\n    --tab-shadow: 5px 5px 10px #cccccc;\n    --tab-border: 1px dashed #007bff;\n    --pad-normal: 8px 16px;\n    --shadow-normal: 5px 5px 10px rgb(0, 0, 0, 0.25);\n}\n\n* {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    display: grid;\n    grid-template-rows: max-content 1fr;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas:\n        "header header"\n        "click hover";\n    height: 100vh;\n}\n\nheader {\n    grid-area: header;\n    background-color: var(--header-bg);\n    color: var(--header-fg);\n    padding: var(--pad-normal);\n    text-align: center;\n    font-weight: bolder;\n    box-shadow: var(--shadow-normal);\n}\n\nheader h1 {\n    margin: 0;\n    padding: 0;\n}\n\n.drop-down-tab {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#click-drop-down {\n    grid-area: click;\n}\n\n#hover-drop-down {\n    grid-area: hover;\n}\n\n.tab-title {\n    font-size: 48px;\n    text-shadow: var(--tab-shadow);\n    margin: 0;\n    padding: var(--pad-normal);\n}\n\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    position: relative;\n}\n\n.drop-down,\nli > button {\n    border: 0;\n    font-size: 24px;\n    padding: var(--pad-normal);\n    border-radius: 8px;\n    background-color: var(--tab-bg);\n    color: var(--tab-fg);\n    box-shadow: var(--tab-shadow);\n}\n\nli > button:hover,\n.drop-down:hover {\n    background-color: var(--light-tab-bg);\n    color: var(--dark-tab-fg);\n    border: var(--tab-border);\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}'],sourceRoot:""}]);const A=i},314:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var A=0;A<this.length;A++){var d=this[A][0];null!=d&&(i[d]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);t&&i[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),r&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=r):s[2]=r),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),e.push(s))}},e}},354:n=>{"use strict";n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),o="/*# ".concat(a," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},72:n=>{"use strict";var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var o={},i=[],A=0;A<n.length;A++){var d=n[A],c=t.base?d[0]+t.base:d[0],s=o[c]||0,l="".concat(c," ").concat(s);o[c]=s+1;var p=r(l),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=a(u,t);t.byIndex=A,e.splice(A,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,a){var o=t(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var A=r(o[i]);e[A].references--}for(var d=t(n,a),c=0;c<o.length;c++){var s=r(o[c]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}o=d}}},659:n=>{"use strict";var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},540:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,r)=>{"use strict";n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,a&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var a=e[t];if(void 0!==a)return a.exports;var o=e[t]={id:t,exports:{}};return n[t](o,o.exports,r),o.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0,(()=>{"use strict";var n=r(72),e=r.n(n),t=r(825),a=r.n(t),o=r(659),i=r.n(o),A=r(56),d=r.n(A),c=r(540),s=r.n(c),l=r(113),p=r.n(l),u=r(243),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=s(),e()(u.A,f),u.A&&u.A.locals&&u.A.locals;var g=r(781);document.addEventListener("DOMContentLoaded",(()=>{(0,g.loadDropDown)(".click-drop-down","click"),(0,g.loadDropDown)(".hover-drop-down","hover")}))})()})();
//# sourceMappingURL=main.js.map
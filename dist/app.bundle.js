(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>y});var o=n(354),i=n.n(o),r=n(314),a=n.n(r),s=n(417),c=n.n(s),A=new URL(n(511),n.b),d=new URL(n(271),n.b),l=new URL(n(899),n.b),p=new URL(n(286),n.b),m=new URL(n(290),n.b),h=new URL(n(373),n.b),u=new URL(n(416),n.b),g=new URL(n(411),n.b),C=new URL(n(608),n.b),I=a()(i()),b=c()(A),f=c()(d),v=c()(l),B=c()(p),E=c()(m),w=c()(h),j=c()(u),x=c()(g),k=c()(C);I.push([e.id,`* {\n    box-sizing: border-box;\n}\n\n@font-face {\n\n    font-family: 'Script';\n  \n    src: url(${b}) format('woff2'),\n  \n      url(${f}) format('woff');\n  \n    font-weight: 600;\n  \n    font-style: normal;\n  \n  }\n\n:root {\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    font-size: 16px;\n\n\n}\n\n:root .theme-light {\n    --color-theme-main: #fafaf9;\n    --color-theme-main-bg: #e7e5e4;\n    --color-theme-main-shadow: #a3a3a3;\n    --color-theme-main-highlight: #d1d5db;\n\n    --color-theme-alt: #fef3c7;\n    --color-theme-alt-bg: ;\n    --color-theme-alt-shadow: #e7e5e4;\n    --color-theme-alt-highlight: #fed7aa;\n\n    --color-theme-main-text: #09090b;\n    --color-theme-alt-text: #52525b;\n\n    --color-theme-user: #34d399;\n\n    --color-theme-positive: #86efac;\n    --color-theme-mixed: #f59e0b;\n    --color-theme-negative: #f87171;\n}\n\n:root .theme-dark {\n    --color-theme-main: #0c0a09;\n    --color-theme-main-bg: #09090b;\n    --color-theme-main-shadow: #6b7280;\n\n    --color-theme-alt: ;\n    --color-theme-alt-bg: ;\n\n    --color-theme-main-text: #fafaf9;\n    --color-theme-alt-text: #e5e7eb;\n\n    --color-theme-user: #059669;\n\n    --color-theme-positive: #059669;\n    --color-theme-mixed: #f59e0b;\n    --color-theme-negative: #ef4444;\n}\n\nh1,h2,h3,h4,h5,h6,p,a {\n    margin: 0;\n    padding: 0;\n    color: inherit;\n}\n\nbutton {\n    font: inherit;\n    appearance: none;\n    padding: 0;\n    color: inherit;\n    cursor: pointer;\n}\n\na {\n    text-decoration: none;\n}\n\na:hover {\n    text-decoration: underline;\n}\n\nh6 {\n    font-size: 1rem;\n}\n\nh5 {\n    font-size: 1.1rem;\n}\n\nh4 {\n    font-size: 1.3rem;\n}\n\nh3 {\n    font-size: 1.5rem;\n}\n\nh2 {\n    font-size: 1.7rem;\n}\n\nh1 {\n    font-size: 2rem;\n}\n\nul {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n}\n\ninput, textarea {\n    appearance: none;\n    background-color: inherit;\n    font: inherit;\n    border: none;\n    padding: 0.5rem;\n}\n\ninput:focus, textarea:focus {\n    outline: none;\n    border-bottom: 1px solid var(--color-theme-main-shadow);\n}\n\ntextarea:disabled {\n    color: var(--color-theme-main-text);\n}\n\nbutton {\n    background: none;\n    border: none;\n}\n\nbutton .icon {\n\n    height: 80%;\n    width: 100%;\n    background-position: center;\n    background-repeat: no-repeat;\n    \n}\n\nbutton.home .icon {\n    background-image: url(${v});\n}\n\nbutton.delete .icon {\n    background-image: url(${B});\n}\n\n.todo button.edit .icon {\n    background-image: url(${E});\n}\n\n.todo.locked button.edit .icon {\n    background-image: url(${w});\n}\n\nbutton.expand .icon {\n    background-image: url(${j});\n}\n\n.expanded button.expand .icon {\n    background-image: url(${x});\n}\n\nbutton.new .icon {\n    background-image: url(${k});\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n\n    height: 100%\n}\n\n#page {\n    min-height: 100%;\n    display: flex;\n}\n\n.page-header {\n\n    height: 5rem;\n    display: flex;\n    align-items: center;\n}\n\n.page-header button.home {\n\n    width: 4rem;\n    height: 4rem;\n\n}\n.page-title {\n    font-size: 4rem;\n    font-family: 'Script', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n}\n\n#nav {\n    min-width: clamp(40ch, 20%, 60ch);\n    background: var(--color-theme-alt);\n\n    display: flex;\n    flex-direction: column;\n    padding: 1rem;\n\n    border-right: 0.2rem outset var(--color-theme-alt-highlight);\n}\n\n@media (max-width: 800px) {\n    #page {\n        flex-direction: column;\n    }\n    #nav {\n        min-width: 0;\n    }\n}\n\n#content {\n\n    flex-grow: 1;\n    background: var(--color-theme-main-bg);\n\n    display: flex;\n    flex-direction: column;\n\n    padding: 1rem;\n}\n\n.project button:hover, .project button:active {\n\n    background-color: var(--color-theme-main-highlight);\n\n}\n\n.project {\n\n    display: grid;\n    grid-template-rows: min-content 1fr;\n    gap: 2rem;\n}\n\n.input-wrapper {\n    display: grid;\n}\n\n.input-wrapper::after {\n    content: attr(data-copied-value) " ";\n    white-space: pre-wrap;\n    word-break: break-all;\n    visibility: hidden;\n}\n\n.input-wrapper textarea {\n    resize: none;\n    overflow: hidden;\n}\n\n.input-wrapper textarea, .input-wrapper::after {\n\n    padding: 0.5rem;\n\n    grid-area: 1 / 1 / 2 / 2;\n\n}\n.project .header {\n\n    background-color: var(--color-theme-main);\n    padding: 1rem;\n    border-radius: 0.5rem;\n\n    display: grid;\n    grid-template-columns: 1fr 2rem;\n    grid-template-rows: min-content min-content min-content;\n\n    .title {\n\n        grid-column: 1 / 2;\n\n    }\n    .description {\n        \n        grid-column: 1 / 2;\n        grid-row: 2 / -1;\n\n    }\n\n    button.new {\n\n        min-height: 2rem;\n        min-width: 2rem;\n        grid-row: 3 / -1;\n        border-radius: 0.5rem;\n\n    }\n\n\n}\n\n@media (max-width: 800px) {\n\n    .project .header {\n\n        \n\n    }\n\n}\n\n.todo-list {\n\n}\n\n.todo {\n\n    background-color: var(--color-theme-main);\n    border-radius: 0.5rem;\n    padding: 1rem;\n    margin-bottom: 1rem;\n\n    display: grid;\n    grid-template-columns: 1.5rem 1fr 2rem 2rem 2rem;\n    align-items: center;\n    column-gap: 0.5rem;\n    row-gap: 1rem;\n\n}\n\n.todo.complete .title {\n\n    text-decoration: line-through;\n    color: var(--color-theme-alt-text);\n\n}\n\n.todo input[type='checkbox'] {\n\n    width: 1.2rem;\n    height: 1.2rem;\n    cursor: pointer;\n    border: 0.2rem outset var(--color-theme-alt-text);\n    border-radius: 50%;\n    padding: 0.1rem;\n\n    transition: all 0.1s linear;\n}\n\n.todo input[type='checkbox']:checked {\n\n    background-color: var(--color-theme-user);\n    border: 0.5rem outset var(--color-theme-alt-text);\n\n}\n\n.todo .mini {\n    grid-column: 2 / -1;\n    display: grid;\n    grid-template-columns: subgrid;\n}\n\n.todo .description {\n\n    grid-column: 2 / 3;\n    \n}\n\n.todo button {\n\n    border-radius: 10%;\n    height: 2rem;\n    width: 2rem;\n    \n}\n\n.project-li {\n    height: 3rem;\n\n    display: grid;\n    grid-template-columns: 1fr 5ch 2rem;\n    gap: 1rem;\n    align-items: center;\n    justify-items: left;\n\n    border-radius: 0.1rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n\n    border-bottom: 0.1rem solid var(--color-theme-alt-text);\n}\n\n.project-li:hover, .project-li:active {\n\n    background-color: var(--color-theme-alt-highlight);\n\n}\n\n.project-li.new .icon {\n    background-position: left;\n}\n\n.project-li .title {\n    \n    height: 100%;\n    text-align: left;\n    min-width: 20ch;\n    max-width: 12vw;\n\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n\n}\n\n@media (max-width: 800px) {\n\n    .project-li .title {\n        \n        min-width: 0;\n        max-width: 100%;\n    \n    }\n\n}\n\n.project-li .status {\n\n    padding: 0.5rem;\n    border-radius: 0.5rem;\n    \n}\n\n.project-li .status.incomplete {\n\n    background-color: var(--color-theme-negative);        \n\n}\n\n.project-li .status.in-progress {\n\n    background-color: var(--color-theme-mixed);\n\n}\n\n.project-li .status.complete {\n\n    background-color: var(--color-theme-positive);\n\n}\n\n.project-li button.delete {\n\n    border-radius: 10%;\n    height: 2rem;\n    width: 2rem;\n    \n}\n\nbutton.delete:hover, button.delete:active {\n    background-color: var(--color-theme-negative);\n}\n\n.hidden {\n    display: none;\n}`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:["* {\n    box-sizing: border-box;\n}\n\n@font-face {\n\n    font-family: 'Script';\n  \n    src: url('./fonts/tangerine_regular-webfont.woff2') format('woff2'),\n  \n      url('./fonts/tangerine_regular-webfont.woff') format('woff');\n  \n    font-weight: 600;\n  \n    font-style: normal;\n  \n  }\n\n:root {\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    font-size: 16px;\n\n\n}\n\n:root .theme-light {\n    --color-theme-main: #fafaf9;\n    --color-theme-main-bg: #e7e5e4;\n    --color-theme-main-shadow: #a3a3a3;\n    --color-theme-main-highlight: #d1d5db;\n\n    --color-theme-alt: #fef3c7;\n    --color-theme-alt-bg: ;\n    --color-theme-alt-shadow: #e7e5e4;\n    --color-theme-alt-highlight: #fed7aa;\n\n    --color-theme-main-text: #09090b;\n    --color-theme-alt-text: #52525b;\n\n    --color-theme-user: #34d399;\n\n    --color-theme-positive: #86efac;\n    --color-theme-mixed: #f59e0b;\n    --color-theme-negative: #f87171;\n}\n\n:root .theme-dark {\n    --color-theme-main: #0c0a09;\n    --color-theme-main-bg: #09090b;\n    --color-theme-main-shadow: #6b7280;\n\n    --color-theme-alt: ;\n    --color-theme-alt-bg: ;\n\n    --color-theme-main-text: #fafaf9;\n    --color-theme-alt-text: #e5e7eb;\n\n    --color-theme-user: #059669;\n\n    --color-theme-positive: #059669;\n    --color-theme-mixed: #f59e0b;\n    --color-theme-negative: #ef4444;\n}\n\nh1,h2,h3,h4,h5,h6,p,a {\n    margin: 0;\n    padding: 0;\n    color: inherit;\n}\n\nbutton {\n    font: inherit;\n    appearance: none;\n    padding: 0;\n    color: inherit;\n    cursor: pointer;\n}\n\na {\n    text-decoration: none;\n}\n\na:hover {\n    text-decoration: underline;\n}\n\nh6 {\n    font-size: 1rem;\n}\n\nh5 {\n    font-size: 1.1rem;\n}\n\nh4 {\n    font-size: 1.3rem;\n}\n\nh3 {\n    font-size: 1.5rem;\n}\n\nh2 {\n    font-size: 1.7rem;\n}\n\nh1 {\n    font-size: 2rem;\n}\n\nul {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n}\n\ninput, textarea {\n    appearance: none;\n    background-color: inherit;\n    font: inherit;\n    border: none;\n    padding: 0.5rem;\n}\n\ninput:focus, textarea:focus {\n    outline: none;\n    border-bottom: 1px solid var(--color-theme-main-shadow);\n}\n\ntextarea:disabled {\n    color: var(--color-theme-main-text);\n}\n\nbutton {\n    background: none;\n    border: none;\n}\n\nbutton .icon {\n\n    height: 80%;\n    width: 100%;\n    background-position: center;\n    background-repeat: no-repeat;\n    \n}\n\nbutton.home .icon {\n    background-image: url('./img/notebook.svg');\n}\n\nbutton.delete .icon {\n    background-image: url('./img/trash.svg');\n}\n\n.todo button.edit .icon {\n    background-image: url('./img/lock-open.svg');\n}\n\n.todo.locked button.edit .icon {\n    background-image: url('./img/lock.svg');\n}\n\nbutton.expand .icon {\n    background-image: url('./img/arrow-down.svg');\n}\n\n.expanded button.expand .icon {\n    background-image: url('./img/arrow-up.svg');\n}\n\nbutton.new .icon {\n    background-image: url('./img/plus.svg');\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n\n    height: 100%\n}\n\n#page {\n    min-height: 100%;\n    display: flex;\n}\n\n.page-header {\n\n    height: 5rem;\n    display: flex;\n    align-items: center;\n}\n\n.page-header button.home {\n\n    width: 4rem;\n    height: 4rem;\n\n}\n.page-title {\n    font-size: 4rem;\n    font-family: 'Script', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n}\n\n#nav {\n    min-width: clamp(40ch, 20%, 60ch);\n    background: var(--color-theme-alt);\n\n    display: flex;\n    flex-direction: column;\n    padding: 1rem;\n\n    border-right: 0.2rem outset var(--color-theme-alt-highlight);\n}\n\n@media (max-width: 800px) {\n    #page {\n        flex-direction: column;\n    }\n    #nav {\n        min-width: 0;\n    }\n}\n\n#content {\n\n    flex-grow: 1;\n    background: var(--color-theme-main-bg);\n\n    display: flex;\n    flex-direction: column;\n\n    padding: 1rem;\n}\n\n.project button:hover, .project button:active {\n\n    background-color: var(--color-theme-main-highlight);\n\n}\n\n.project {\n\n    display: grid;\n    grid-template-rows: min-content 1fr;\n    gap: 2rem;\n}\n\n.input-wrapper {\n    display: grid;\n}\n\n.input-wrapper::after {\n    content: attr(data-copied-value) \" \";\n    white-space: pre-wrap;\n    word-break: break-all;\n    visibility: hidden;\n}\n\n.input-wrapper textarea {\n    resize: none;\n    overflow: hidden;\n}\n\n.input-wrapper textarea, .input-wrapper::after {\n\n    padding: 0.5rem;\n\n    grid-area: 1 / 1 / 2 / 2;\n\n}\n.project .header {\n\n    background-color: var(--color-theme-main);\n    padding: 1rem;\n    border-radius: 0.5rem;\n\n    display: grid;\n    grid-template-columns: 1fr 2rem;\n    grid-template-rows: min-content min-content min-content;\n\n    .title {\n\n        grid-column: 1 / 2;\n\n    }\n    .description {\n        \n        grid-column: 1 / 2;\n        grid-row: 2 / -1;\n\n    }\n\n    button.new {\n\n        min-height: 2rem;\n        min-width: 2rem;\n        grid-row: 3 / -1;\n        border-radius: 0.5rem;\n\n    }\n\n\n}\n\n@media (max-width: 800px) {\n\n    .project .header {\n\n        \n\n    }\n\n}\n\n.todo-list {\n\n}\n\n.todo {\n\n    background-color: var(--color-theme-main);\n    border-radius: 0.5rem;\n    padding: 1rem;\n    margin-bottom: 1rem;\n\n    display: grid;\n    grid-template-columns: 1.5rem 1fr 2rem 2rem 2rem;\n    align-items: center;\n    column-gap: 0.5rem;\n    row-gap: 1rem;\n\n}\n\n.todo.complete .title {\n\n    text-decoration: line-through;\n    color: var(--color-theme-alt-text);\n\n}\n\n.todo input[type='checkbox'] {\n\n    width: 1.2rem;\n    height: 1.2rem;\n    cursor: pointer;\n    border: 0.2rem outset var(--color-theme-alt-text);\n    border-radius: 50%;\n    padding: 0.1rem;\n\n    transition: all 0.1s linear;\n}\n\n.todo input[type='checkbox']:checked {\n\n    background-color: var(--color-theme-user);\n    border: 0.5rem outset var(--color-theme-alt-text);\n\n}\n\n.todo .mini {\n    grid-column: 2 / -1;\n    display: grid;\n    grid-template-columns: subgrid;\n}\n\n.todo .description {\n\n    grid-column: 2 / 3;\n    \n}\n\n.todo button {\n\n    border-radius: 10%;\n    height: 2rem;\n    width: 2rem;\n    \n}\n\n.project-li {\n    height: 3rem;\n\n    display: grid;\n    grid-template-columns: 1fr 5ch 2rem;\n    gap: 1rem;\n    align-items: center;\n    justify-items: left;\n\n    border-radius: 0.1rem;\n    padding-left: 1rem;\n    padding-right: 1rem;\n\n    border-bottom: 0.1rem solid var(--color-theme-alt-text);\n}\n\n.project-li:hover, .project-li:active {\n\n    background-color: var(--color-theme-alt-highlight);\n\n}\n\n.project-li.new .icon {\n    background-position: left;\n}\n\n.project-li .title {\n    \n    height: 100%;\n    text-align: left;\n    min-width: 20ch;\n    max-width: 12vw;\n\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n\n}\n\n@media (max-width: 800px) {\n\n    .project-li .title {\n        \n        min-width: 0;\n        max-width: 100%;\n    \n    }\n\n}\n\n.project-li .status {\n\n    padding: 0.5rem;\n    border-radius: 0.5rem;\n    \n}\n\n.project-li .status.incomplete {\n\n    background-color: var(--color-theme-negative);        \n\n}\n\n.project-li .status.in-progress {\n\n    background-color: var(--color-theme-mixed);\n\n}\n\n.project-li .status.complete {\n\n    background-color: var(--color-theme-positive);\n\n}\n\n.project-li button.delete {\n\n    border-radius: 10%;\n    height: 2rem;\n    width: 2rem;\n    \n}\n\nbutton.delete:hover, button.delete:active {\n    background-color: var(--color-theme-negative);\n}\n\n.hidden {\n    display: none;\n}"],sourceRoot:""}]);const y=I},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var A=0;A<e.length;A++){var d=[].concat(e[A]);o&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},354:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),r="/*# ".concat(i," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},a=[],s=0;s<e.length;s++){var c=e[s],A=o.base?c[0]+o.base:c[0],d=r[A]||0,l="".concat(A," ").concat(d);r[A]=d+1;var p=n(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=i(m,o);o.byIndex=s,t.splice(s,0,{identifier:l,updater:h,references:1})}a.push(l)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=o(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var s=n(r[a]);t[s].references--}for(var c=o(e,i),A=0;A<r.length;A++){var d=n(r[A]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=c}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},271:(e,t,n)=>{e.exports=n.p+"4defc3bd38977ae65e11.woff"},511:(e,t,n)=>{e.exports=n.p+"8306dedb1d0984f595ca.woff2"},416:(e,t,n)=>{e.exports=n.p+"42c55502acb8c6ed108f.svg"},411:(e,t,n)=>{e.exports=n.p+"a8edcd644b35f8d63c63.svg"},290:(e,t,n)=>{e.exports=n.p+"1223775389eaa69c2640.svg"},373:(e,t,n)=>{e.exports=n.p+"072fbfa4debb9161d833.svg"},899:(e,t,n)=>{e.exports=n.p+"8470a4cf4884cbb6d4d2.svg"},608:(e,t,n)=>{e.exports=n.p+"5d0faccce0beada635d4.svg"},286:(e,t,n)=>{e.exports=n.p+"a1bb3e4e60149466dee9.svg"}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=o[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(72),t=n.n(e),o=n(825),i=n.n(o),r=n(659),a=n.n(r),s=n(56),c=n.n(s),A=n(540),d=n.n(A),l=n(113),p=n.n(l),m=n(208),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d(),t()(m.A,h),m.A&&m.A.locals&&m.A.locals;class u{#e;title="";description="";complete=!1;dueDate;constructor(e,{title:t=this.title,description:n=this.description,complete:o=this.complete,dueDate:i=this.dueDate}={}){this.#e=e,this.title=t,this.description=n,this.complete=o,this.dueDate=i}update({title:e=this.title,description:t=this.description,dueDate:n=this.dueDate,complete:o=this.complete}={}){this.title=e,this.description=t,this.complete=o,this.dueDate=n}getProject(){return this.#e}}class g{title="";description="";status=0;list=[];dueDate;constructor({title:e=this.title,description:t=this.description,status:n=this.status,list:o=this.list,dueDate:i=this.dueDate}={}){this.title=e,this.description=t,this.status=n;for(let e of o)this.add(new u(this,e));this.dueDate=i}update({title:e=this.title,description:t=this.description,dueDate:n=this.dueDate}={}){this.title=e,this.description=t,this.dueDate=n}checkStatus(){if(this.list[0]){let e=0,t=0;for(let n of this.list)e++,!0===n.complete&&t++;this.status=t/e}}add(e){this.list.push(e)}remove(e){let t=this.list.indexOf(e);-1!==t&&this.list.splice(t,1)}}function C(e){let t;try{t=window[e];const n="__storage_test__";return t.setItem(n,n),t.removeItem(n),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}}class I{projects=[];add(e){this.projects.push(e)}delete(e){let t=this.projects.indexOf(e);-1!==t&&this.projects.splice(t,1)}load(){if(C("localStorage")){const e=JSON.parse(localStorage.getItem("projects"));for(let t of e){let e=new g(t);this.add(e)}}}save(){if(C("localStorage")){const e=JSON.stringify(this.projects);localStorage.setItem("projects",e)}}}const b="Untitled Project",f="Description...";class v{page;nav;content;projectUIInstance;projectListInstance;constructor(e){this.page=document.createElement("div"),this.nav=document.createElement("div"),this.content=document.createElement("div");const t=document.createElement("div"),n=E("home"),o=document.createElement("h1"),i=E("new");this.projectListInstance=new j(e),this.page.setAttribute("id","page"),this.nav.setAttribute("id","nav"),this.content.setAttribute("id","content"),t.className="page-header",o.className="page-title",o.textContent="Noteify",i.classList.add("project-li"),t.append(n,o),this.nav.append(t,i,this.projectListInstance.element),this.page.append(this.nav,this.content),n.addEventListener("click",(e=>{const t=new CustomEvent("save",{bubbles:!0});this.page.dispatchEvent(t)})),i.addEventListener("click",(e=>{const t=new CustomEvent("display-project",{bubbles:!0});this.page.dispatchEvent(t)}))}clear(e){if(e instanceof Element){let t=e.lastElementChild;for(;t;)e.removeChild(t),t=e.lastElementChild}}display(e){this.projectUIInstance=new B(e),this.content.append(this.projectUIInstance.window)}delete(e){void 0!==this.projectUIInstance&&this.projectUIInstance.getProject()===e&&this.clear(this.content),this.projectListInstance.remove(e)}}class B{#e;window;title;description;#t;#n=[];constructor(e){this.#e=e,this.window=document.createElement("div");const t=document.createElement("div"),n=document.createElement("div");this.title=document.createElement("textarea");const o=document.createElement("div");this.description=document.createElement("textarea");const i=E("new");this.#t=document.createElement("div");for(let e of this.#e.list)this.add(e);this.window.className="project",t.className="header",this.title.className="title",this.title.rows="1",this.title.placeholder=b,this.title.value=this.#e.title,n.className="input-wrapper title",n.dataset.copiedValue=this.title.value,this.description.placeholder=f,this.description.value=this.#e.description,o.className="input-wrapper description",o.dataset.copiedValue=this.description.value,this.#t.className="todo-list",n.append(this.title),o.append(this.description),t.append(n,o,i),this.window.append(t,this.#t),this.window.addEventListener("condense",(e=>{for(let e of this.#n)e.condense()})),this.title.addEventListener("input",(t=>{n.dataset.copiedValue=this.title.value;const o=new CustomEvent("update-project",{detail:{project:e,title:this.title.value},bubbles:!0});this.window.dispatchEvent(o)})),this.description.addEventListener("input",(t=>{o.dataset.copiedValue=this.description.value;const n=new CustomEvent("update-project",{detail:{project:e,description:this.description.value},bubbles:!0});this.window.dispatchEvent(n)})),i.addEventListener("click",(e=>{const t=new CustomEvent("new-todo",{detail:{project:this.#e},bubbles:!0});this.window.dispatchEvent(t)}))}getProject(){return this.#e}toggleEdit(){this.title.disabled=!this.title.disabled,this.description.disabled=!this.description.disabled}add(e){const t=new w(e);this.#t.append(t.element),this.#n.push(t)}remove(e){let t=0;for(let n of this.#n){if(n.getToDo()===e)return n.element.remove(),void this.#n.splice(t,1);t++}}}function E(e){const t=document.createElement("button"),n=document.createElement("div");return t.className=e,n.className="icon",t.append(n),t}class w{#o;element;title;description;#i;complete;constructor(e){this.#o=e,this.element=document.createElement("div");const t=document.createElement("div");this.complete=document.createElement("input");const n=document.createElement("div");this.title=document.createElement("textarea");const o=E("expand"),i=E("edit"),r=E("delete");this.#i=document.createElement("div"),this.description=document.createElement("textarea"),this.element.className="todo",t.className="mini",this.complete.className="status",this.complete.type="checkbox",this.complete.checked=this.#o.complete,this.markComplete(),this.title.className="title",this.title.placeholder="New To Do",this.title.rows="1",this.title.value=this.#o.title,n.className="input-wrapper title",n.dataset.copiedValue=this.title.value,this.description.placeholder=f,this.description.value=this.#o.description,this.#i.className="input-wrapper description",this.#i.dataset.copiedValue=this.description.value,this.condense(),n.append(this.title),t.append(n,o,i,r),this.#i.append(this.description),this.element.append(this.complete,t,this.#i),this.complete.addEventListener("input",(e=>{this.markComplete();const t=new CustomEvent("update-todo",{detail:{toDo:this.#o,complete:this.complete.checked},bubbles:!0});this.element.dispatchEvent(t)})),this.title.addEventListener("input",(e=>{n.dataset.copiedValue=this.title.value;const t=new CustomEvent("update-todo",{detail:{toDo:this.#o,title:this.title.value},bubbles:!0});this.element.dispatchEvent(t)})),this.description.addEventListener("input",(e=>{this.#i.dataset.copiedValue=this.description.value;const t=new CustomEvent("update-todo",{detail:{toDo:this.#o,description:this.description.value},bubbles:!0});this.element.dispatchEvent(t)})),r.addEventListener("click",(e=>{const t=new CustomEvent("delete-todo",{detail:{toDo:this.#o},bubbles:!0});this.element.dispatchEvent(t)})),i.addEventListener("click",(e=>{this.toggleEdit()})),o.addEventListener("click",(e=>{if(this.#i.classList.contains("hidden")){const e=new Event("condense",{bubbles:!0});this.element.dispatchEvent(e),this.expand()}else this.condense()}))}expand(){this.#i.classList.remove("hidden"),this.element.classList.add("expanded")}condense(){this.#i.classList.add("hidden"),this.element.classList.remove("expanded")}toggleEdit(){this.title.disabled=!this.title.disabled,this.description.disabled=!this.description.disabled,this.title.disabled?this.element.classList.add("locked"):this.element.classList.remove("locked")}markComplete(){this.complete.checked?this.element.classList.add("complete"):this.element.classList.remove("complete")}getToDo(){return this.#o}}class j{element;#r=[];constructor(e){if(this.element=document.createElement("ul"),this.element.className="project-ul",e.projects[0])for(let t of e.projects)this.add(t)}add(e){const t=new x(e);this.element.append(t.element),this.#r.push(t)}update(e){for(let t of this.#r)t.getProject()===e&&t.update()}remove(e){let t=0;for(let n of this.#r){if(n.getProject()===e)return n.element.remove(),void this.#r.splice(t,1);t++}}}class x{element;#a;#s;#e;constructor(e){this.#e=e,this.element=document.createElement("li"),this.#a=document.createElement("button"),this.#s=document.createElement("span");const t=E("delete");this.element.className="project-li",this.#a.className="title",this.#s.className="status",this.update(),this.element.append(this.#a,this.#s,t),this.#a.addEventListener("click",(e=>{const t=new CustomEvent("display-project",{detail:{project:this.#e},bubbles:!0});this.element.dispatchEvent(t)})),t.addEventListener("click",(e=>{const t=new CustomEvent("delete-project",{detail:{project:this.#e},bubbles:!0});this.element.dispatchEvent(t)}))}update(){""!==this.#e.title.trim()?this.#a.textContent=this.#e.title:this.#a.textContent=b,this.#e.status<.5?(this.#s.classList.remove("complete","in-progress"),this.#s.classList.add("incomplete")):this.#e.status<1?(this.#s.classList.remove("complete","incomplete"),this.#s.classList.add("in-progress")):(this.#s.classList.remove("in-progress","incomplete"),this.#s.classList.add("complete")),this.#s.textContent=`${Math.floor(100*this.#e.status)}%`}getProject(){return this.#e}}!function(){const e=document.querySelector("body"),t=new I;t.load();const n=new v(t);e.append(n.page);const o=()=>{const e=new Event("save");n.page.dispatchEvent(e)};n.page.addEventListener("save",(e=>{t.save()})),n.page.addEventListener("display-project",(e=>{let o;n.clear(n.content),e.detail?o=e.detail.project:(o=new g,t.add(o),n.projectListInstance.add(o)),n.display(o)})),n.page.addEventListener("delete-project",(e=>{const i=e.detail.project;i&&(t.delete(i),n.delete(i)),o()})),n.page.addEventListener("update-project",(e=>{if(e.detail.project){const t=e.detail.project,i={};void 0!==e.detail.title&&(i.title=e.detail.title),void 0!==e.detail.description&&(i.description=e.detail.description),void 0!==e.detail.dueDate&&(i.dueDate=e.detail.dueDate),t.update(i),n.projectListInstance.update(t),o()}})),n.content.addEventListener("new-todo",(e=>{if(e.detail.project){const t=e.detail.project,i=new u(t);t.add(i),t.checkStatus(),n.projectUIInstance.add(i),n.projectListInstance.update(t),o()}})),n.content.addEventListener("update-todo",(e=>{if(e.detail.toDo){const t=e.detail.toDo,i={};let r=!1;if(void 0!==e.detail.title&&(i.title=e.detail.title),void 0!==e.detail.description&&(i.description=e.detail.description),void 0!==e.detail.complete&&(i.complete=e.detail.complete,r=!0),void 0!==e.detail.dueDate&&(i.dueDate=e.detail.dueDate),t.update(i),r){const e=t.getProject();e.checkStatus(),n.projectListInstance.update(e)}o()}})),n.content.addEventListener("delete-todo",(e=>{if(e.detail.toDo){const t=e.detail.toDo,i=t.getProject();n.projectUIInstance.remove(t),i.remove(t),i.checkStatus(),n.projectListInstance.update(i),o()}}))}()})()})();
//# sourceMappingURL=app.bundle.js.map
const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]");document.querySelector("body");let d=null;t.disabled=!0,e.addEventListener("click",(()=>{e.disabled=!0,t.disabled=!1,d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.addEventListener("click",(()=>{e.disabled=!1,t.disabled=!0,clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.a6eacea6.js.map
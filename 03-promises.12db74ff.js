function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var i=r("eWCmQ");const l=document.querySelector('[name="delay"]'),u=document.querySelector('[name="step"]'),d=document.querySelector('[name="amount"]');function a(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector('[type="submit"]').addEventListener("click",(t=>{t.preventDefault();let o=Number(l.value),n=Number(u.value),r=Number(d.value);for(let t=0;t<r;t+=1)a(t,n*t+o).then((({position:t,delay:o})=>{e(i).Notify.success(`✅ Fulfilled promise ${t+1} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(i).Notify.failure(`❌ Rejected promise ${t+1} in ${o}ms`)}))}));
//# sourceMappingURL=03-promises.12db74ff.js.map

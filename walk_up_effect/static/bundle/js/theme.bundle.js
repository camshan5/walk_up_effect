!function(){var e,t={11:function(){},822:function(){function e(){const e=window.innerWidth-document.documentElement.clientWidth;document.documentElement.style.overflow="hidden",document.body.style.paddingRight=e+"px"}document.querySelectorAll(".modal").forEach((function(t){t.addEventListener("show.bs.modal",(function(){e()})),t.addEventListener("hidden.bs.modal",(function(){document.documentElement.style.overflow="",document.body.style.paddingRight=""}))}))},965:function(){const e=document.querySelectorAll(".navbar-nav .dropdown, .navbar-nav .dropend"),t=["mouseenter"],n=["mouseleave","click"];e.forEach((function(e){const o=e.querySelector(".dropdown-menu");t.forEach((function(t){e.addEventListener(t,(function(){!function(e){window.innerWidth<992||(e.classList.add("showing"),setTimeout((function(){e.classList.remove("showing"),e.classList.add("show")}),1))}(o)}))})),n.forEach((function(t){e.addEventListener(t,(function(e){!function(e,t){setTimeout((function(){window.innerWidth<992||t.classList.contains("show")&&("click"===e.type&&e.target.closest(".dropdown-menu form")||(t.classList.add("showing"),t.classList.remove("show"),setTimeout((function(){t.classList.remove("showing")}),200)))}),2)}(e,o)}))}))}))},639:function(){const e=document.querySelectorAll(".navbar-togglable"),t=document.querySelectorAll(".navbar-collapse"),n=["load","scroll"];let o=!1;function r(e){const t=window.pageYOffset;t&&!o&&(e=>{e.classList.add("bg-black"),o=!0})(e),t||(e=>{e.classList.remove("navbar-light"),e.classList.remove("bg-black"),e.classList.add("navbar-dark"),o=!1})(e)}function a(){const e=window.innerWidth-document.documentElement.clientWidth;document.documentElement.style.overflow="hidden",document.body.style.paddingRight=e+"px"}e.forEach((function(e){n.forEach((function(t){window.addEventListener(t,(function(){r(e)}))}))})),t.forEach((function(e){e.addEventListener("show.bs.collapse",(function(){a()})),e.addEventListener("hidden.bs.collapse",(function(){document.documentElement.style.overflow="",document.body.style.paddingRight=""}))}))},918:function(e,t,n){"use strict";var o=n(169),r=(n(442),n(105),n(541),n(31),n(878)),a=n(711);n.n(a)().init({duration:700,easing:"ease-out-quad",once:!0,startEvent:"load"});var c=n(765),i=n.n(c);document.querySelectorAll("[data-bigpicture]").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();const n=JSON.parse(e.dataset.bigpicture),o={...{el:e,noLoader:!0},...n};i()(o)}))}));var d=n(391),l=n.n(d),s=n(564),u=n.n(s);const f=document.querySelectorAll("[data-isotope]"),m=document.querySelectorAll("[data-filter]");f.forEach((function(e){u()(e,(function(){const t=JSON.parse(e.dataset.isotope);new(l())(e,t)}))})),m.forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();const n=e.dataset.filter,o=e.dataset.bsTarget;l().data(o).arrange({filter:n})}))}));const h=document.querySelectorAll("[data-jarallax], [data-jarallax-element]");(0,r.jarallaxVideo)(),(0,r.jarallaxElement)(),(0,r.jarallax)(h);n(822),n(639),n(965);document.querySelectorAll('[data-bs-toggle="popover"]').forEach((e=>{new o.J2(e)}));var p=n(273);const v=document.querySelectorAll('[data-toggle="price"]');v.forEach((e=>{e.addEventListener("change",(e=>{const t=e.target,n=t.checked,o=t.dataset.target;document.querySelectorAll(o).forEach((e=>{const t=e.dataset.annual,o=e.dataset.monthly,r=e.dataset.options?JSON.parse(e.dataset.options):{};r.startVal=n?t:o,r.duration=r.duration?r.duration:1;(n?new p.I(e,o,r):new p.I(e,t,r)).start()}))}))}));var y=n(2);const g={header:".navbar.fixed-top",offset:function(e,t){return t.dataset.scroll&&void 0!==JSON.parse(t.dataset.scroll).offset?JSON.parse(t.dataset.scroll).offset:24}};new(n.n(y)())("[data-scroll]",g);document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((e=>{new o.u(e)}));var b=n(614),w=n.n(b);document.querySelectorAll("[data-typed]").forEach((e=>{const t={typeSpeed:40,backSpeed:40,backDelay:1e3,loop:!0,...e.dataset.typed?JSON.parse(e.dataset.typed):{}};new(w())(e,t)}));var E=n(737),S=n.n(E);document.getElementById("copyBtn").onclick=()=>{let e=document.getElementById("textId").value;navigator.clipboard.writeText(e.trim()).then((()=>{S()({title:"Success!",text:"A message to send to your friends and family has now been copied! Now you paste it into a text, email, or social media! Thank you! ",icon:"success"})})).catch((e=>{S()({title:"Something went wrong!",text:"There has been an error in copying the message.",icon:"error"},e)}))};let k=document.getElementById("contact-form");k.addEventListener("submit",(async function(e){e.preventDefault();let t=new FormData(e.target);fetch(e.target.action,{method:k.method,body:t,headers:{Accept:"application/json"}}).then((e=>{S()({title:"Thanks!",text:"Your information has been submitted to the Walk Up team. Someone will be in touch with you shortly.",icon:"success"}),k.reset()})).catch((e=>{S()({title:"Something went wrong!",text:"Make sure you fill out the entire form before submitting.",icon:"error"},e)}))}));n(492)},492:function(){fetch("/donate/config/").then((e=>e.json())).then((e=>{let t=Stripe(e.publicKey);const n=t.elements().create("card",{style:{base:{color:"#1e273e",fontSmoothing:"antialiased",fontSize:"15px",fontWeight:"400",fontFamily:"Inter","::placeholder":{color:"#7d92b7",fontWeight:"500",fontSize:"16px"}},invalid:{color:"#fb8261",iconColor:"#fb8261"}}});n.mount("#card-element"),n.addEventListener("change",(function(e){const t=document.getElementById("card-errors");e.error?t.textContent=e.error.message:t.textContent=""}));document.getElementById("payment-form").addEventListener("submit",(function(e){e.preventDefault(),t.createToken(n).then((function(e){if(e.error){document.getElementById("card-errors").textContent=e.error.message}else!function(e){const t=document.getElementById("payment-form"),n=document.createElement("input");n.setAttribute("type","hidden"),n.setAttribute("name","stripeToken"),n.setAttribute("value",e.id),t.appendChild(n),t.submit()}(e.token)}))}))}))}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e].call(a.exports,a,a.exports,o),a.exports}o.m=t,e=[],o.O=function(t,n,r,a){if(!n){var c=1/0;for(s=0;s<e.length;s++){n=e[s][0],r=e[s][1],a=e[s][2];for(var i=!0,d=0;d<n.length;d++)(!1&a||c>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[d])}))?n.splice(d--,1):(i=!1,a<c&&(c=a));if(i){e.splice(s--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[n,r,a]},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={505:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,c=n[0],i=n[1],d=n[2],l=0;if(c.some((function(t){return 0!==e[t]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(d)var s=d(o)}for(t&&t(n);l<c.length;l++)a=c[l],o.o(e,a)&&e[a]&&e[a][0](),e[c[l]]=0;return o.O(s)},n=self.webpackChunkwalk_up_effect=self.webpackChunkwalk_up_effect||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),o.O(void 0,[736],(function(){return o(918)}));var r=o.O(void 0,[736],(function(){return o(11)}));r=o.O(r)}();
//# sourceMappingURL=theme.bundle.js.map
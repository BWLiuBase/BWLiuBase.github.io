var getRealPath=(e=window.location.pathname,t=!1)=>{const o=e.split("/").filter((e=>(e=e.trim()).length>0&&"/"!==e&&"index.html"!==e));return t?o[0]||"/":o[o.length-1]||"/"},scrollIntoViewAndWait=e=>new Promise((t=>{"onscrollend"in window?(document.addEventListener("scrollend",t,{once:!0}),e.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})):(e.scrollIntoView({block:"center",inline:"center"}),t())}));_$$(".article-entry h1>a, .article-entry h2>a, .article-entry h3>a, .article-entry h4>a, .article-entry h5>a, .article-entry h6>a").forEach((e=>{window.REIMU_CONFIG.icon_font?e.innerHTML=window.REIMU_CONFIG.anchor_icon?`&#x${window.REIMU_CONFIG.anchor_icon};`:"&#xe635;":e.innerHTML=window.REIMU_CONFIG.anchor_icon?`&#x${window.REIMU_CONFIG.anchor_icon};`:"&#xf292;"})),_$$(".article-entry img").forEach((e=>{if(e.parentElement.classList.contains("friend-icon")||"A"===e.parentElement.tagName||e.classList.contains("no-lightbox"))return;const t=document.createElement("a");t.href?t.href=e.src:t.setAttribute("href",e.src),e.naturalWidth||e.naturalHeight?(t.dataset.pswpWidth=e.naturalWidth,t.dataset.pswpHeight=e.naturalHeight):(console.warn("Image naturalWidth and naturalHeight cannot be obtained right now, fallback to onload."),e.onload=()=>{t.dataset.pswpWidth=e.naturalWidth,t.dataset.pswpHeight=e.naturalHeight}),t.target="_blank",t.classList.add("article-gallery-item"),e.parentNode.insertBefore(t,e),e.parentNode.removeChild(e),t.appendChild(e)})),window.lightboxStatus="ready",window.dispatchEvent(new Event("lightbox:ready"));var isMobileNavAnim=!1;_$("#main-nav-toggle").off("click").on("click",(()=>{isMobileNavAnim||(isMobileNavAnim=!0,document.body.classList.toggle("mobile-nav-on"),_$("#mask").classList.remove("hide"),setTimeout((()=>{isMobileNavAnim=!1}),300))})),_$("#mask")?.off("click").on("click",(()=>{!isMobileNavAnim&&document.body.classList.contains("mobile-nav-on")&&(document.body.classList.remove("mobile-nav-on"),_$("#mask").classList.add("hide"))})),_$$(".sidebar-toc-btn").forEach((e=>{e.off("click").on("click",(function(){this.classList.contains("current")||(_$$(".sidebar-toc-btn").forEach((e=>e.classList.add("current"))),_$$(".sidebar-common-btn").forEach((e=>e.classList.remove("current"))),_$$(".sidebar-toc-sidebar").forEach((e=>e.classList.remove("hidden"))),_$$(".sidebar-common-sidebar").forEach((e=>e.classList.add("hidden"))))}))})),_$$(".sidebar-common-btn").forEach((e=>{e.off("click").on("click",(function(){this.classList.contains("current")||(_$$(".sidebar-common-btn").forEach((e=>e.classList.add("current"))),_$$(".sidebar-toc-btn").forEach((e=>e.classList.remove("current"))),_$$(".sidebar-common-sidebar").forEach((e=>e.classList.remove("hidden"))),_$$(".sidebar-toc-sidebar").forEach((e=>e.classList.add("hidden"))))}))})),(()=>{const e=getRealPath(window.location.pathname);_$$(".sidebar-menu-link-wrap").forEach((t=>{let o=t.querySelector("a").getAttribute("href");o&&getRealPath(o)===e&&t.classList.add("link-active")}))})(),_$$(".article-entry img").forEach((e=>{e.classList.contains("lazyload")||(e.classList.add("lazyload"),e.setAttribute("data-src",e.src),e.setAttribute("data-sizes","auto"),e.removeAttribute("src"))}));var __sidebarTopScrollHandler,sidebarTop=_$(".sidebar-top");function tocInit(){if(!_$("#sidebar"))return;const e="block"===getComputedStyle(_$("#sidebar")).display?_$$("#sidebar .sidebar-toc-wrapper li"):_$$("#mobile-nav .sidebar-toc-wrapper li");if(!e.length)return;let t=null;const o=(e,o)=>{e.preventDefault();const i=document.getElementById(decodeURI(e.currentTarget.getAttribute("href")).slice(1));t=o,scrollIntoViewAndWait(i).then((()=>{n(o),t=null}))},i=[...e].map(((e,t)=>{const i=e.querySelector("a.toc-link");i.off("click").on("click",(e=>o(e,t)));const n=document.getElementById(decodeURI(i.getAttribute("href")).slice(1));if(!n)return null;const a=n.querySelector("a");return a?.off("click").on("click",(e=>o(e,t))),n})),n=t=>{const o=e[t];if(!o||o.classList.contains("current"))return;_$$(".sidebar-toc-wrapper .active").forEach((e=>{e.classList.remove("active","current")})),i.forEach((e=>{e?.classList.remove("active")})),o.classList.add("active","current"),i[t]?.classList.add("active");let n=o.parentNode;for(;!n.matches(".sidebar-toc");){if(n.matches("li")){n.classList.add("active");const e=document.getElementById(decodeURI(n.querySelector("a.toc-link").getAttribute("href").slice(1)));e&&e.classList.add("active")}n=n.parentNode}if(!_$(".sidebar-toc-sidebar").classList.contains("hidden")){const e=_$(".sidebar-toc-wrapper");e.scrollTo({top:e.scrollTop+o.offsetTop-e.offsetHeight/2,behavior:"smooth"})}},a=new IntersectionObserver((e=>{const o=(e=>{let t=0,o=e[t];if(o.boundingClientRect.top>0)return t=i.indexOf(o.target),0===t?0:t-1;for(;t<e.length;t++){if(!(e[t].boundingClientRect.top<=0))return i.indexOf(o.target);o=e[t]}return i.indexOf(o.target)})(e)+(window.diffY>0?1:0);null===t&&n(o)}),{rootMargin:"0px 0px -100% 0px",threshold:0});i.forEach((e=>{e&&a.observe(e)}))}sidebarTop&&(sidebarTop.style.transition="all .3s",sidebarTop.off("click").on("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),document.documentElement.scrollTop<10&&(sidebarTop.style.opacity=0)),__sidebarTopScrollHandler&&window.off("scroll",__sidebarTopScrollHandler),__sidebarTopScrollHandler=()=>{const e=_$(".sidebar-top");document.documentElement.scrollTop<10?e.style.opacity=0:e.style.opacity=1},window.on("scroll",__sidebarTopScrollHandler),_$$("#mobile-nav .toc li").forEach((e=>{e.off("click").on("click",(()=>{!isMobileNavAnim&&document.body.classList.contains("mobile-nav-on")&&(document.body.classList.remove("mobile-nav-on"),_$("#mask").classList.add("hide"))}))})),_$$("#mobile-nav .sidebar-menu-link-dummy").forEach((e=>{e.off("click").on("click",(()=>{!isMobileNavAnim&&document.body.classList.contains("mobile-nav-on")&&setTimeout((()=>{document.body.classList.remove("mobile-nav-on"),_$("#mask").classList.add("hide")}),200)}))})),window.off("hexo-blog-decrypt").on("hexo-blog-decrypt",tocInit).on("hexo-blog-decrypt",(()=>{const e=document.createElement("script");e.src="/js/insert_highlight.js",e.setAttribute("data-pjax",!0),document.body.appendChild(e)})),tocInit(),_$(".sponsor-button-wrapper")?.off("click").on("click",(()=>{_$(".sponsor-button-wrapper")?.classList.toggle("active"),_$(".sponsor-tip")?.classList.toggle("active"),_$(".sponsor-qr")?.classList.toggle("active")})),_$(".share-icon.icon-weixin")?.off("click").on("click",(function(e){const t=this.getBoundingClientRect(),o=this.querySelector("#share-weixin");if(t.x-148<0?o.style.left=`-${t.x-10}px`:t.x+172>window.innerWidth?o.style.left=`-${310-window.innerWidth+t.x}px`:o.style.left="-138px",e.target===this&&o.classList.toggle("active"),_$(".share-weixin-canvas").children.length)return;const{cover:i,excerpt:n,description:a,title:r,stripContent:s,author:c}=window.REIMU_POST;_$("#share-weixin-banner").src=i,_$("#share-weixin-title").innerText=r,_$("#share-weixin-desc").innerText=n||a||s,_$("#share-weixin-author").innerText="By: "+c,QRCode.toDataURL(window.REIMU_POST.url,(function(e,t){e?console.error(e):(_$("#share-weixin-qr").src=t,htmlToImage.toPng(_$(".share-weixin-dom"),{skipFonts:!0,preferredFontFormat:"woff2",backgroundColor:"white"}).then((e=>{const t=new Image;t.src=e,_$(".share-weixin-canvas").appendChild(t)})).catch((()=>{_$("#share-weixin-banner").remove(),htmlToImage.toPng(_$(".share-weixin-dom"),{skipFonts:!0,preferredFontFormat:"woff2",backgroundColor:"white"}).then((e=>{const t=new Image;t.src=e,_$(".share-weixin-canvas").appendChild(t)})).catch((()=>{console.error("Failed to generate weixin share image.")}))})))}))}));
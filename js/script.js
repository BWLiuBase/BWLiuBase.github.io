!function(){[Element,Document,Window].forEach((e=>{e.prototype._addEventListener=e.prototype.addEventListener,e.prototype._removeEventListener=e.prototype.removeEventListener,e.prototype.addEventListener=e.prototype.on=function(e,t,n){this.__listeners__=this.__listeners__||{},this.__listeners__[e]=this.__listeners__[e]||[];for(let[r,o]of this.__listeners__[e])if(r===t&&JSON.stringify(o)===JSON.stringify(n))return this;return this.__listeners__[e].push([t,n]),this._addEventListener(e,t,n),this},e.prototype.removeEventListener=e.prototype.off=function(e,t,n){return this.__listeners__&&this.__listeners__[e]?t?(this._removeEventListener(e,t,n),this.__listeners__[e]=this.__listeners__[e].filter((([e,r])=>e!==t||JSON.stringify(r)!==JSON.stringify(n))),0===this.__listeners__[e].length&&delete this.__listeners__[e],this):(this.__listeners__[e].forEach((([t,n])=>{this.removeEventListener(e,t,n)})),delete this.__listeners__[e],this):this}})),window._$=e=>document.querySelector(e),window._$$=e=>document.querySelectorAll(e);const e=document.createElement("a");e.className="nav-icon dark-mode-btn",_$("#sub-nav").append(e);const t=window.matchMedia("(prefers-color-scheme: dark)").matches;function n(n){const r="true"===n||"auto"===n&&t;document.documentElement.setAttribute("data-theme",r?"dark":null),localStorage.setItem("dark_mode",n),e.id=`nav-${"true"===n?"moon":"false"===n?"sun":"circle-half-stroke"}-btn`,document.body.dispatchEvent(new CustomEvent((r?"dark":"light")+"-theme-set"))}n(localStorage.getItem("dark_mode")||document.documentElement.getAttribute("data-theme-mode")||"auto"),e.addEventListener("click",(()=>{const e=["auto","false","true"];n(e[(e.indexOf(localStorage.getItem("dark_mode"))+1)%3])}));let r=0;document.addEventListener("scroll",(()=>{let e=document.documentElement.scrollTop||document.body.scrollTop;const t=e-r;window.diffY=t,r=e,t<0?_$("#header-nav").classList.remove("header-nav-hidden"):_$("#header-nav").classList.add("header-nav-hidden")})),window.Pace&&Pace.on("done",(()=>{Pace.sources[0].elements=[]}))}();var safeImport=async(e,t)=>{if(!t)return import(e);const n=await fetch(e),r=await n.text(),o=await crypto.subtle.digest("SHA-384",(new TextEncoder).encode(r));if("sha384-"+btoa(String.fromCharCode(...new Uint8Array(o)))!==t)throw new Error(`Integrity check failed for ${e}`);const s=new Blob([r],{type:"application/javascript"}),i=URL.createObjectURL(s),a=await import(i);return URL.revokeObjectURL(i),a};
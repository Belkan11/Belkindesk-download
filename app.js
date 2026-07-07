const cfg=window.BELKIN_SITE_CONFIG||{};
const q=(s,r=document)=>r.querySelector(s);const qa=(s,r=document)=>[...r.querySelectorAll(s)];
function setLink(el,url){if(!el)return;if(url){el.href=url;el.target="_blank";el.rel="noopener noreferrer";el.removeAttribute("aria-disabled")}else{el.href="#";el.setAttribute("aria-disabled","true");el.textContent="ССЫЛКА ОБНОВЛЯЕТСЯ"}}
qa("[data-download]").forEach(a=>setLink(a,cfg.downloads?.[a.dataset.download]));
qa("[data-link]").forEach(a=>setLink(a,cfg.links?.[a.dataset.link]));
qa("[data-build]").forEach(el=>{const [edition,key]=el.dataset.build.split(".");el.textContent=cfg.builds?.[edition]?.[key]||"уточняется"});
qa(".os-switch").forEach(sw=>sw.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;qa("button",sw).forEach(x=>x.classList.toggle("active",x===b));const scope=sw.closest(".edition, .detail");const a=q("[data-med-download]",scope);if(a){const mac=b.dataset.os==="mac";a.dataset.download=mac?"medMac":"medWindows";a.textContent=mac?"DOWNLOAD .DMG":"DOWNLOAD .EXE";setLink(a,cfg.downloads?.[a.dataset.download])}}));
qa(".window").forEach(w=>w.addEventListener("pointermove",e=>{const r=w.getBoundingClientRect();const x=e.clientX-r.left,y=e.clientY-r.top;q(".xray",w)?.style.setProperty("--x",`${x}px`);q(".xray",w)?.style.setProperty("--y",`${y-40}px`)}));
document.addEventListener("pointermove",e=>{const grid=q(".engineer .edition-art");if(grid){const x=(e.clientX/innerWidth-.5)*10;grid.style.translate=`${x}px 0`}});
addEventListener("scroll",()=>{const topo=q(".zem .edition-art");if(topo)topo.style.marginTop=`${scrollY*.035}px`},{passive:true});

import{a as f,i as g}from"./assets/vendor-71eeac18.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();async function l(t,a){const o=`https://pixabay.com/api/?${new URLSearchParams({key:"43027041-c13525989a1527b0b019a35b5",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:3})}`;return(await f.get(o)).data}function y(t){const{largeImageURL:a,webformatURL:i,tags:o,likes:e,views:r,comments:s,downloads:d}=t;return`<li class="image-items">
        <a class="image-link" href="${a}">
          <img
            src="${i}"
            alt="${o}"
            class="photo-image"
          />
        </a>
        <div class="image-info">
          <p><span class="accent">Likes:</span> ${e}</p>
          <p><span class="accent">Views:</span> ${r}</p>
          <p><span class="accent">Comments:</span> ${s}</p>
          <p><span class="accent">Downloads:</span> ${d}</p>
        </div>
      </li>`}function h(t){return t.map(y).join("")}function u(t){const a=h(t);n.gallery.insertAdjacentHTML("beforeend",a)}const n={searchForm:document.querySelector(".search-form"),inputSearch:document.querySelector(".input-search"),gallery:document.querySelector(".gallery"),btnLoadMore:document.querySelector(".btn-load-more")};function m(){n.btnLoadMore.classList.remove("hidden")}let c,p=1;function L(t){g.error({title:"Error",message:t,position:"topRight"})}n.searchForm.addEventListener("submit",b);async function b(t){if(t.preventDefault(),c=t.target.elements.name.value.trim(),n.gallery.innerHTML="",!c){L("Sorry, there are no images matching your search query. Please try again!");return}const a=await l(c,p);u(a.hits),m()}n.btnLoadMore.addEventListener("click",w);async function w(){const t=await l(c,p+=1);u(t.hits),m()}
//# sourceMappingURL=commonHelpers.js.map

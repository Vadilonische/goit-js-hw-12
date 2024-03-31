import{S as p,i as f}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();function d(e){const r=`https://pixabay.com/api/?${new URLSearchParams({key:"43027041-c13525989a1527b0b019a35b5",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(r)}function h(e){return`<li class="image-items">
        <a class="image-link" href="${e.largeImageURL}">
          <img
            src="${e.webformatURL}"
            alt="${e.tags}"
            class="photo-image"
          />
        </a>
        <div class="image-info">
          <p><span class="accent">Likes:</span> ${e.likes}</p>
          <p><span class="accent">Views:</span> ${e.views}</p>
          <p><span class="accent">Comments:</span> ${e.comments}</p>
          <p><span class="accent">Downloads:</span> ${e.downloads}</p>
        </div>
      </li>`}function y(e){const s=document.querySelector("#search-results");s.innerHTML=e.map(h).join(""),new p(".image-link",{captionsData:"alt",captionDelay:250}).refresh()}function l(){const e=document.querySelector(".loader");e.style.display="flex"}function u(){const e=document.querySelector(".loader");e.style.display="none"}const m={searchForm:document.querySelector(".search-form"),inputSearch:document.querySelector(".input-search"),gallery:document.querySelector(".gallery")};function i(e){f.error({title:"Error",message:e,position:"topRight"})}function n(){m.gallery.innerHTML=""}u();m.searchForm.addEventListener("submit",g);function g(e){e.preventDefault();const s=e.target.elements.name.value.trim();s===""?(i("Sorry, there are no images matching your search query. Please try again!"),n()):(n(),l(),d(s).then(r=>(r.ok||i("Request failed. try again later"),n(),r.json())).then(r=>{r.hits.length==0?(l(),i("Sorry, there are no images matching your search query. Please try again!"),n()):y(r.hits)}).catch(r=>{console.log(r)}).finally(()=>{u()})),e.target.elements.name.value=""}
//# sourceMappingURL=commonHelpers.js.map

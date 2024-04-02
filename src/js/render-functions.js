import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { refs } from '../main';

function imageTemplate(image) {
  const {
    largeImageURL,
    webformatURL,
    tags,
    likes,
    views,
    comments,
    downloads,
  } = image;
  return `<li class="image-items">
        <a class="image-link" href="${largeImageURL}">
          <img
            src="${webformatURL}"
            alt="${tags}"
            class="photo-image"
          />
        </a>
        <div class="image-info">
          <p><span class="accent">Likes:</span> ${likes}</p>
          <p><span class="accent">Views:</span> ${views}</p>
          <p><span class="accent">Comments:</span> ${comments}</p>
          <p><span class="accent">Downloads:</span> ${downloads}</p>
        </div>
      </li>`;
}

function imagesTemplate(arr) {
  return arr.map(imageTemplate).join('');
}

export function renderImages(arr) {
  const markup = imagesTemplate(arr);

  refs.gallery.insertAdjacentHTML('beforeend', markup);

  const lightbox = new SimpleLightbox('.image-link', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightbox.refresh();
}

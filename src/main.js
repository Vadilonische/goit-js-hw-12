import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

function showLoader() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'flex';
}

function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
}

export const refs = {
  searchForm: document.querySelector('.search-form'),
  inputSearch: document.querySelector('.input-search'),
  gallery: document.querySelector('.gallery'),
};

function showError(message) {
  iziToast.error({
    title: 'Error',
    message,
    position: 'topRight',
  });
}

function clearGallery() {
  refs.gallery.innerHTML = '';
}

hideLoader();

refs.searchForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const nameId = event.target.elements.name.value.trim();
  if (nameId === '') {
    showError(
      'Sorry, there are no images matching your search query. Please try again!'
    );
    clearGallery();
  } else {
    clearGallery();
    showLoader();
    getImages(nameId)
      .then(res => {
        if (!res.ok) {
          showError('Request failed. try again later');
        }
        clearGallery();
        return res.json();
      })
      .then(data => {
        if (data.hits.length == 0) {
          showLoader();
          showError(
            'Sorry, there are no images matching your search query. Please try again!'
          );
          clearGallery();
        } else {
          renderImages(data.hits);
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        hideLoader();
      });
  }
  event.target.elements.name.value = '';
}

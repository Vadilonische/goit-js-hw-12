import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

//================================

export const refs = {
  searchForm: document.querySelector('.search-form'),
  inputSearch: document.querySelector('.input-search'),
  gallery: document.querySelector('.gallery'),
  btnLoadMore: document.querySelector('.btn-load-more'),
  loader: document.querySelector('.loader'),
};

//================================

function showLoadMore() {
  refs.btnLoadMore.classList.remove('hidden');
}

function hideLoadMore() {
  refs.btnLoadMore.classList.add('hidden');
}

//================================

let query;
let pageNumber;
let maxPage = 0;
const perPage = 15;

//================================

function showError(message) {
  iziToast.error({
    title: 'Error',
    message,
    position: 'topRight',
  });
}

function showErrorEndSearch(message) {
  iziToast.error({
    title: 'Error',
    message,
    position: 'bottomRight',
  });
}
//================================

function checkBtnStatus() {
  if (pageNumber >= maxPage) {
    hideLoadMore();
    showErrorEndSearch(
      "We're sorry, but you've reached the end of search results."
    );
  } else {
    showLoadMore();
  }
}

//================================

function showLoader() {
  refs.loader.classList.remove('hidden');
}

//================================

function hideLoader(params) {
  refs.loader.classList.add('hidden');
}

//================================
function myScroll() {
  const height = refs.gallery.firstElementChild.getBoundingClientRect().height;
  scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}

//================================

refs.searchForm.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();

  query = e.target.elements.name.value.trim();
  pageNumber = 1;
  refs.gallery.innerHTML = '';

  if (!query) {
    showError(
      'Sorry, there are no images matching your search query. Please try again!'
    );
    return;
  }

  showLoader();
  try {
    const data = await getImages(query, pageNumber);
    maxPage = Math.ceil(data.totalHits / perPage);
    renderImages(data.hits);
  } catch (error) {
    showError(
      'Sorry, there are no images matching your search query. Please try again!'
    );
  }

  hideLoader();
  checkBtnStatus();
  e.target.reset();
}

//=================================

refs.btnLoadMore.addEventListener('click', onLoadMoreClick);
async function onLoadMoreClick() {
  showLoader();

  try {
    const data = await getImages(query, (pageNumber += 1));
    renderImages(data.hits);
  } catch (error) {
    showError(
      'Sorry, there are no images matching your search query. Please try again!'
    );
  }

  myScroll();
  hideLoader();
  checkBtnStatus();
}

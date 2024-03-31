// export function getImages(query) {
//   const params = new URLSearchParams({
//     key: '43027041-c13525989a1527b0b019a35b5',
//     q: query,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//   });
//   const url = `https://pixabay.com/api/?${params}`;

//   return fetch(url);
// }

import axios from 'axios';

export async function getImages(query, pageNumber) {
  const params = new URLSearchParams({
    key: '43027041-c13525989a1527b0b019a35b5',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: pageNumber,
    per_page: 3,
  });

  const url = `https://pixabay.com/api/?${params}`;

  const res = await axios.get(url);
  return res.data;
}

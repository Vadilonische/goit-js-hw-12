export function getImages(query) {
  const params = new URLSearchParams({
    key: '43027041-c13525989a1527b0b019a35b5',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `https://pixabay.com/api/?${params}`;

  return fetch(url);
}

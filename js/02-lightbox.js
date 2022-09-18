import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
addMarkup(galleryRef, galleryItems);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function makeImageMarkup({ preview, original, description }) {
  return `
<div class="gallery__item">
      <a href="${original}" class="gallery__link">
        <img
        src="${preview}"
        alt="${description}"
        data-source="${original}"
        class="gallery__image">
      </a>
    </div>
    `;
}

function makeGalleryMarkup(images) {
  return images.map(image => makeImageMarkup(image)).join('');
}

function addMarkup(placeRefForMarkup, galleryItems) {
  placeRefForMarkup.insertAdjacentHTML('beforeend', makeGalleryMarkup(galleryItems));
}
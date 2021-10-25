'use strict';

import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
let markup = createMarkup(galleryItems);
galleryEl.innerHTML = markup;

function createMarkup(galleryData) {
  return galleryData.map(({preview, original, description}) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
  }).join('');  
};

const modal = new SimpleLightbox('.gallery a', { captions: true, captionsData: 'alt', captionDelay: 250 });
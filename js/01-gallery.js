'use strict';

import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
let markup = '';
let instance = {};

markup = createMarkup(galleryItems);
galleryEl.innerHTML = markup;

galleryEl.addEventListener('click', onClickEvent);

function createMarkup(galleryData) {
  return galleryData.map(({preview, original, description}) => {
    return `
          <div class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </div>
          `
  }).join('');  
};

function onClickEvent(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return
      }
  
  createBasicLightbox(event.target);
  modalOpen(instance);
};

function createBasicLightbox(img) {
    instance = basicLightbox.create(`
      <img src="${img.dataset.source}" width="800" height="600">
      `);
};

function modalOpen() {
  instance.show();

  window.addEventListener('keydown', closeOnEscPress)  
};

function closeOnEscPress(event) {
  if (event.code !== 'Escape') {
    return;
  }

  instance.close();

  window.removeEventListener('keydown', closeOnEscPress);
};
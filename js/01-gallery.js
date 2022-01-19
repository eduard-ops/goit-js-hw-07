import { galleryItems } from "./gallery-items.js";

let instance;
const galleryEl = document.querySelector(".gallery");
galleryEl.addEventListener("click", onPictureCardClick);

const pictureItemsMarkup = CreatMarkupPicturesCards(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", pictureItemsMarkup);

function CreatMarkupPicturesCards(images) {
  return images
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      
    />
  </a>
</div>`
    )
    .join("");
}

function onPictureCardClick(evt) {
  evt.preventDefault();
  const { target } = evt;
  const isRef = target.classList.contains("gallery__image");
  if (!isRef) return;
  OnOpenModal(evt);

  window.addEventListener("keydown", OnCloseModalEsc);
}

function OnOpenModal(evt) {
  const swatchEl = evt.target.dataset.source;
  instance = basicLightbox.create(`
    <img src="${swatchEl}">
`);
  instance.show();
}

function OnCloseModalEsc(evt) {
  if (evt.code === "Escape") {
    instance.close();
    window.removeEventListener("keydown", OnCloseModalEsc);

    // console.log(evt);
  }
}

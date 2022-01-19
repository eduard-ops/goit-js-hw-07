import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const pictureItemsMarkup = CreatMarkupPicturesCards(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", pictureItemsMarkup);

galleryEl.addEventListener("click", onGalleryCardClick);

function CreatMarkupPicturesCards(images) {
  return images
    .map(
      ({
        preview,
        original,
        description,
      }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join("");
}

function onGalleryCardClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  // console.log(evt);

  openLightbox();
}

function openLightbox() {
  let lightbox = new SimpleLightbox(".gallery a", {
    captionSelector: "img",
    captionType: "attr",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
    enableKeyboard: true,
  });
  lightbox.open();
  galleryEl.removeEventListener("click", onGalleryCardClick);
}

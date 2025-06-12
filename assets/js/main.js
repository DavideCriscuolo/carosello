// Come creare  un carosello dinamico
//  Creaiamo un array di oggetti con proprità: img, title, desc

const images = [
  {
    image: "1.avif",
    title: "Expedition 33",
    description: "Lorem game 123",
  },
  {
    image: "2.jpg",
    title: "Lies  of P",
    description: "Lorem game P",
  },
  {
    image: "3.webp",
    title: "Sekiro",
    description: "Lorem game Sekiro",
  },
  {
    image: "4.avif",
    title: "Jedi Survivor",
    description: "Lorem game jedi",
  },
  {
    image: "5.jpeg",
    title: "Street Fighter",
    description: "Lorem game street",
  },
];

//Prendiamo gli elementi della dom : freccia prev, freccia next, img, thumbnails

const backwardEL = document.querySelector(".backward");
const forwardEl = document.querySelector(".forward");
const imageEL = document.querySelector(".image");
const thumbnailsEL = document.querySelector(".thumbnails");

let activeImage = 0;
// renderizzare la prima immagine nella dom

function renderPreviewImage(index, arr, nodeEl) {
  nodeEl.innerHTML = `<img class="img-fluid" src="./assets/img/${arr[index].image}" alt="${arr[index].title}">`;
}
renderPreviewImage(activeImage, images, imageEL);
// aggiungere un eventListner alla freccie

forwardEl.addEventListener("click", function () {
  console.log("clicked next");
  activeImage++;

  if (activeImage === images.length) {
    activeImage = 0;
  }
  console.log(activeImage);
  renderPreviewImage(activeImage, images, imageEL);
});

backwardEL.addEventListener("click", function () {
  console.log("clicked prev");
  activeImage--;

  if (activeImage < 0) {
    activeImage = images.length - 1;
  }
  console.log(activeImage);
  renderPreviewImage(activeImage, images, imageEL);
});
// generare  il markup thumbnails

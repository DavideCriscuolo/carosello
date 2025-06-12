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

//Facciamo un cliclo all interno delle immagini e ci prendiamo l oggetto imagine

for (let i = 0; i < images.length; i++) {
  const thumbnail = images[i];

  //estraiamo dall oggetto immagine  il titolo e l img e poi  generiamo il markup

  const { image, title } = thumbnail;
  console.log(image, title);

  //creare un elemento div
  // -aggiungere una clase ,
  // -creamo l elmento image con classe img-fluid,
  // -aggiungere il percorso e alt,
  // -appendere img all interno di col

  const divEl = document.createElement("div");

  divEl.classList.add("col");
  const imgEl = document.createElement("img");
  imgEl.classList.add("img-fluid");
  imgEl.src = `./assets/img/${image}`;
  imgEl.alt = title;
  imgEl.id = i;
  imgEl.setAttribute("data-thumb-id", i);
  imgEl.style.objectFit = "cover";
  imgEl.style.aspectRatio = "16/9";

  divEl.appendChild(imgEl);
  console.log(divEl);

  imgEl.addEventListener("click", function () {
    const thumbId = Number(imgEl.getAttribute("data-thumb-id"));
    activeImage = thumbId;
    renderPreviewImage(activeImage, images, imageEL);
    console.log(thumbId);
  });

  thumbnailsEL.appendChild(divEl);
}

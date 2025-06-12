// crate an array of objects with the following properties: image, title, description
const images = [
  {
    image: "1.avif",
    title: "Expedition 33",
    desciption: "Lorem game 123",
  },
  {
    image: "2.jpg",
    title: "Lies of P",
    desciption: "Lorem game P",
  },
  {
    image: "3.webp",
    title: "Sekiro",
    desciption: "Lorem game Sekiro",
  },
  {
    image: "4.avif",
    title: "Jedi survivor",
    desciption: "Lorem game Jedi",
  },
  {
    image: "5.jpeg",
    title: "Street fighter",
    desciption: "Lorem game street f",
  },
];

// select the required dom elements: prev, next, image, thumbnails
const backwardEl = document.querySelector(".backward");
const forwardEl = document.querySelector(".forward");
const imageEl = document.querySelector(".image");
const thumbnailsEl = document.querySelector(".thumbnails");
const carouselEl = document.querySelector(".carosello");

let activeImage = 0;

// render the first image to the dom
renderPreviewImage(activeImage, images, imageEl);

// add an event listener to the forward element
forwardEl.addEventListener("click", next);

// add an event listener to the backward element

backwardEl.addEventListener("click", prev);

// 📌 thumbnails

// loop over the array of image
for (let i = 0; i < images.length; i++) {
  // get the current image object
  const thumbnail = images[i];
  // destructure the image object to get title and image values
  const { image, title } = thumbnail;
  console.log(image, title);
  // generate the thumbnails markup (DOM API)

  // create a div element
  const divEl = document.createElement("div");
  // add a col class
  divEl.classList.add("col");

  // create the image element
  const imgEl = document.createElement("img");
  // add the img-fluid
  imgEl.classList.add("img-fluid", "w-100");
  imgEl.style.objectFit = "cover";
  imgEl.style.aspectRatio = "16 / 9";

  // add the src attribute with the image path
  imgEl.src = `./assets/img/${image}`;
  // add the alt attribute
  imgEl.alt = title;
  // data attribute
  imgEl.setAttribute("data-thumb-id", i);

  // append the image to the col using appendChild
  divEl.appendChild(imgEl);
  console.log(divEl);

  // attach an event listener to the dom element
  imgEl.addEventListener("click", () => {
    console.log("You clicked a thumb");
    const thumbId = Number(imgEl.getAttribute("data-thumb-id"));
    console.log(thumbId);
    activeImage = thumbId;
    renderPreviewImage(activeImage, images, imageEl);
  });

  // Insert the generated markup to the thumbnails dom element
  thumbnailsEl.appendChild(divEl);
}

let intervalId = setInterval(next, 1500);

carouselEl.addEventListener("mouseenter", () => {
  console.log("your entered into the carousel");
  clearInterval(intervalId);
});

carouselEl.addEventListener("mouseleave", () => {
  console.log("your left the carousel");

  intervalId = setInterval(next, 1500);
});

/* Functions */
function renderPreviewImage(index, arr, nodeEl) {
  nodeEl.innerHTML = `<img class="img-fluid w-100 object-fit-cover ratio ratio-16x9" src="./assets/img/${arr[index].image}" alt="${arr[index].title}">`;
}

function next() {
  console.log("Clicked next");
  activeImage++;
  if (activeImage === images.length) {
    activeImage = 0;
  }
  console.log(activeImage);
  renderPreviewImage(activeImage, images, imageEl);
}

function prev() {
  console.log("clicked backward");
  activeImage--;

  if (activeImage < 0) {
    activeImage = images.length - 1;
  }
  renderPreviewImage(activeImage, images, imageEl);
}

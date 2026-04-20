const photos = [
  { id: 1, src: "./images/Sophia-1 (1).jpg", name: "Sophia" },
  { id: 2, src: "./images/Sophia-1 (2).jpg", name: "Sophia" },
  { id: 3, src: "./images/Sophia-1 (3).jpg", name: "Sophia" },
  { id: 4, src: "./images/Sophia-1 (4).jpg", name: "Sophia" },
  { id: 5, src: "./images/Sophia-1 (5).jpg", name: "Sophia" },
  { id: 6, src: "./images/Sophia-1.jpg", name: "Sophia" },
  { id: 7, src: "./images/Sophia-1 (7).jpg", name: "Sophia" },
  { id: 8, src: "./images/Sophia-1 (8).jpg", name: "Sophia" },
  { id: 9, src: "./images/Sophia-1 (9).jpg", name: "Sophia" },
  { id: 10, src: "./images/Sophia-1 (10).jpg", name: "Sophia" },

  { id: 11, src: "./images/Spike-1 (1).jpg", name: "Spike" },
  { id: 12, src: "./images/Spike-1 (2).jpg", name: "Spike" },
  { id: 13, src: "./images/Spike-1 (3).jpg", name: "Spike" },
  { id: 14, src: "./images/Spike-1 (4).jpg", name: "Spike" },
  { id: 15, src: "./images/Spike-1 (5).jpg", name: "Spike" },
  { id: 16, src: "./images/Spike-1 (6).jpg", name: "Spike" },
  { id: 17, src: "./images/Spike-1 (7).jpg", name: "Spike" },
  { id: 18, src: "./images/Spike-1 (8).jpg", name: "Spike" },
  { id: 19, src: "./images/Spike-1 (9).jpg", name: "Spike" },
  { id: 20, src: "./images/Spike-1 (10).jpg", name: "Spike" },

  { id: 21, src: "./images/Zhenya-1 (1).jpg", name: "Zhenya" },
  { id: 22, src: "./images/Zhenya-1 (2).jpg", name: "Zhenya" },
  { id: 23, src: "./images/Zhenya-1 (3).jpg", name: "Zhenya" },
  { id: 24, src: "./images/Zhenya-1 (4).jpg", name: "Zhenya" },
  { id: 25, src: "./images/Zhenya-1 (5).jpg", name: "Zhenya" },
  { id: 26, src: "./images/Zhenya-1 (6).jpg", name: "Zhenya" },
  { id: 27, src: "./images/Zhenya-1 (7).jpg", name: "Zhenya" },
  { id: 28, src: "./images/Zhenya-1 (8).jpg", name: "Zhenya" },
  { id: 29, src: "./images/Zhenya-1 (9).jpg", name: "Zhenya" },
  { id: 30, src: "./images/Zhenya-1 (10).jpg", name: "Zhenya" },
];

const btn = document.querySelector("button");
const girlBox = document.querySelector(".girl");
const dogBox = document.querySelector(".dog");
const boyBox = document.querySelector(".boy");

function getRandomPhotoByName(name) {
  const filtered = photos.filter((obj) => obj.name === name);
  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex];
}

btn.addEventListener("click", () => {
  const sophia = getRandomPhotoByName("Sophia");
  const spike = getRandomPhotoByName("Spike");
  const zhenya = getRandomPhotoByName("Zhenya");

  renderPhoto(girlBox, sophia);
  renderPhoto(dogBox, spike);
  renderPhoto(boyBox, zhenya);
});

function renderPhoto(container, photo) {
  container.innerHTML = "";

  container.insertAdjacentHTML(
    "beforeend",
    `<img src="${photo.src}" alt="${photo.name}" width="122" heigth="300">`
  );
}

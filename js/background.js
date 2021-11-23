const images = ["america.jpg", "bada.jpg", "samak.jpg", "snow.jpg", "water.jpg"];


const choseImage = images[Math.floor(Math.random() * images.length)];

const html = document.querySelector("html");

html.style.background = `url('img/${choseImage}') center / cover no-repeat`;

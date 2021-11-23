const IMAGE_CATEGORY = ["nasa", "water", "aviation", "tech", "food"];
const IMAGE_BASE_URL = "https://source.unsplash.com/daily";


const html = document.querySelector("html")

fetch(`${IMAGE_BASE_URL}?${IMAGE_CATEGORY[Math.floor(Math.random() * IMAGE_CATEGORY.length)]}`)
.then((response) => {
  if (response.ok) {
    return response.blob();
  } else {
    throw new Error("Image Download Error");
  }
})
.then((blob) => {
  html.style.background = `URL('${URL.createObjectURL(blob)}') center / cover no-repeat`;
  html.classList.add("white");
  document.querySelector("#login-form input").classList.add("white");
})
.catch((error) => {
  console.log(error);
})
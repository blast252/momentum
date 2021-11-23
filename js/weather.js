const API_KEY = "3fbda53a0abea6db8c941c78c49ba82e";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:nth-child(2)");
            const temp = document.querySelector("#weather span:last-child")
            const city = document.querySelector("#weather span:first-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main}`;
            temp.innerText = `${data.main.temp}°`
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
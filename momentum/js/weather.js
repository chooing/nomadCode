const API_KEY = "12ce7f94b42afc2e57f36a3568c868ca";
const weatherIcon = {
  "01n": "wb_sunny",
  "02n": "brightness_medium",
  "03n": "π€",
  "04n": "π§",
  "09n": "π¦",
  "10n": "β",
  "13n": "thunderstorm",
  "50n": "water",
};

function onGeoOk(position) {
  const lat = position.coords.latitude; //μλ
  const lon = position.coords.longitude; //κ²½λ

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const icon = data.weather[0].icon;

      const city = document.querySelector("#weather span:last-child");
      city.innerText = `${data.weather[0].main} / ${data.main.temp}ΒΊ `;

      const weather = document.querySelector("#weather span:first-child");
      weather.innerText = weatherIcon[icon];
      // /${data.name}
    });
}
function onGeoError() {
  alert("Can't find you. No weather for youπ₯");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

const API_KEY = "12ce7f94b42afc2e57f36a3568c868ca";
const weatherIcon = {
  "01n": "wb_sunny",
  "02n": "brightness_medium",
  "03n": "๐ค",
  "04n": "๐ง",
  "09n": "๐ฆ",
  "10n": "โ",
  "13n": "thunderstorm",
  "50n": "water",
};

//byul91oh.tistory.com/31 [๊ฐ๊ผฌ [: ๊ฐ๋ฐํ๋ ๊ผฌ๋ฐ๋ฆฌ]]

์ถ์ฒ: https: function onGeoOk(position) {
  const lat = position.coords.latitude; //์๋
  const lon = position.coords.longitude; //๊ฒฝ๋

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const icon = data.weather[0].icon;

      const city = document.querySelector("#weather span:last-child");
      city.innerText = `${data.weather[0].main} / ${data.main.temp}ยบ `;

      const weather = document.querySelector("#weather span:first-child");
      weather.innerText = weatherIcon[icon];
      // /${data.name}
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you๐ฅ");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

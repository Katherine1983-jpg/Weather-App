//Date & Time
let now = new Date();

let h2 = document.querySelector("h2");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let date = now.getDate();

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
h2.innerHTML = `${day} ${date}, ${hours}:${minutes}`;

//Show Temperature
function displayWeatherCondition(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

//Show Searched City
function showSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");
  let apiKey = "ed78e9e9d2bbacbabebfb473b1d10634";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeatherCondition);
  h1.innerHTML = searchInput.value;
}

let searchCity = document.querySelector("#search-city");
searchCity.addEventListener("submit", showSearch);

//button Current Location
function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "ed78e9e9d2bbacbabebfb473b1d10634";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentLocation = document.querySelector("#current-location");
currentLocation.addEventListener("click", getPosition);

//Temp Change - celsuis & fahrenheit
function celsiusChange(event) {
  event.preventDefault();
  let celsiusTemp = document.querySelector("#temperature");
  celsiusTemp.innerHTML = "19";
}

let tempChangeCelsius = document.querySelector("#celsius-link");
tempChangeCelsius.addEventListener("click", celsiusChange);

function fahrenheitChange(event) {
  event.preventDefault();
  let fahrenheitTemp = document.querySelector("#temperature");
  fahrenheitTemp.innerHTML = "66";
}

let tempChangeFahren = document.querySelector("#fahrenheit-link");
tempChangeFahren.addEventListener("click", fahrenheitChange);

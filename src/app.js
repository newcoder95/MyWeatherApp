// let weather = {
//   paris: {
//     temperature: 19.7,
//     humidity: 80,
//   },
//   tokyo: {
//     temperature: 17.3,
//     humidity: 50,
//   },
//   lisbon: {
//     temperature: 30.2,
//     humidity: 20,
//   },
//   "san francisco": {
//     temperature: 20.9,
//     humidity: 100,
//   },
//   kyiv: {
//     temperature: -5,
//     humidity: 20,
//   },
// };

// let city = prompt("Enter a city?");
// city = city.toLowerCase();
// if (weather[city] !== undefined) {
//   let temperature = weather[city].temp;
//   let humidity = weather[city].humidity;
//   let celsiusTemperature = Math.round(temperature);
//   let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

//   alert(
//     `It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
//   );
// } else {
//   alert(
//     `Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
//   );
// }



// Правильный вариант:


// let city = prompt("Enter a city?");
// city = city.toLowerCase();

// if (weather[city] !== undefined) { 
//   let temperature = Math.round(weather[city].temperature);
//   let humidity = weather[city].humidity;
//   alert(
//     `It is currently ${temperature}°C in ${city} with a humidity of ${humidity}%`
//   );
// } 

// else {
//      alert (`Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`);}





// let city = prompt("Enter a city?");

// if (city !== weather[0].name || city === null)
// if (city !== weather[1].name || city === null)
// if (city !== weather[2].name || city === null)
// if (city !== weather[3].name || city === null)
// if (city !== weather[4].name || city === null) {
//    alert(
// `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
//    );
// }

// if (city === weather[0].name) {
//   let temperature = Math.round(weather[0].temp);

//   alert(
//     `It is currently ${temperature}°C in ${weather[0].name} with a humidity of ${weather[0].humidity}%`
//   );
// }

// if (city === weather[1].name) {
//   let temperature = Math.round(weather[1].temp);
//   alert(
//     `It is currently ${temperature}°C in ${weather[1].name} with a humidity of ${weather[1].humidity}%`
//   );
// }
// if (city === weather[2].name) {
//   let temperature = Math.round(weather[2].temp);
//   alert(
//     `It is currently ${temperature}°C in ${weather[2].name} with a humidity of ${weather[2].humidity}%`
//   );
// }

// if (city === weather[3].name) {
//   let temperature = Math.round(weather[3].temp);
//   alert(
//     `It is currently ${temperature}°C in ${weather[3].name} with a humidity of ${weather[3].humidity}%`
//   );
// }
// if (city === weather[4].name) {
//   let temperature = Math.round(weather[4].temp);
//   alert(
//     `It is currently ${temperature}°C in ${weather[4].name} with a humidity of ${weather[4].humidity}%`
//   );
// }

let now = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let day = days[now.getDay()];

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (hours < 10) {
  hours = `0${hours}`;
}

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

let time = document.querySelector("#current-time");
time.innerHTML = `${hours}:${minutes}`;

let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = `${day}, ${month} ${date}`;

let currentDateCard = document.querySelector("#current-date-card");
currentDateCard.innerHTML = `${day}, ${month} ${date}`;

// function showCity(event) {
//   event.preventDefault();
//   let searchInput = document.querySelector("#city-input");
//   let cityElement = document.querySelector(".location");
//   cityElement.innerHTML = searchInput.value;
// }
// let form = document.querySelector("#location-form");
// form.addEventListener("submit", showCity);

// function convertToFahrenheit(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector(".current__temperature_day");
//   temperatureElement.innerHTML = 66;
// }

// function convertToCelsius(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector(".current__temperature_day");
//   temperatureElement.innerHTML = 19;
// }

// let fahrenheitLink = document.querySelector("#fahrenheit-link");
// fahrenheitLink.addEventListener("click", convertToFahrenheit);

// let celsiusLink = document.querySelector("#celsius-link");
// celsiusLink.addEventListener("click", convertToCelsius);



function displayWeatherCondition(response) {
  let city = document.querySelector(".location");
  city.innerHTML = `${response.data.name}, ${response.data.sys.country}`;

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);

  let description = document.querySelector(".temperature-description");
  description.innerHTML = response.data.weather[0].description;

  let humidity = document.querySelector("#humidity-day-1");
  humidity.innerHTML = `Humidity: ${Math.round(response.data.main.humidity)}%`;

  let wind = document.querySelector("#wind-day-1");
  wind.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} km/h`;
}

function searchCity(city) {
  let apiKey = "d408beb6fdb204fdf27972516e99f835";
  let units = "metric";
  let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndPoint}?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeatherCondition);
  console.log(apiUrl);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let city = cityInput.value;
  // это можно записать одной строкой:
  // let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "d408beb6fdb204fdf27972516e99f835";
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndPoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}


let searchForm = document.querySelector("#location-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Kyiv");
//Init Weather class
const weather = new Weather('Pune', 'India');

//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather
    .getWeather()
    .then(result => console.log(result))
    .catch(err => console.log(err));
}

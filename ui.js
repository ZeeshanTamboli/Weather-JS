class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.clouds = document.getElementById('w-clouds');
    this.elevationAngle = document.getElementById('w-elevation-angle');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = `${weather.city_name}, ${weather.country_code}`;
    this.desc.textContent = weather.weather.description;
    this.string.textContent = weather.temp;
    this.icon.setAttribute('src', weather.weather.icon);
    this.clouds.textContent = `Clouds: ${weather.clouds}`;
    this.dewpoint.textContent = `DewPoint: ${weather.dewpt}`;
    this.elevationAngle.textContent = `Elevation Angle: ${weather.elev_angle}`;
    this.wind.textContent = `Wind: ${weather.wind_spd}`;
  }
}

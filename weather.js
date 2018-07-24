class Weather {
  constructor(city, country) {
    this.apikey = '488dfb3328404c7cb3f0999fd95097f7';
    this.city = city;
    this.country = country;
  }

  async getWeather() {
    const response = await fetch(
      `https://api.weatherbit.io/v2.0/current?city=${this.city},${
        this.country
      }&key=${this.apikey}`
    );
    const responseData = await response.json();
    return responseData.data[0];
  }

  //Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}

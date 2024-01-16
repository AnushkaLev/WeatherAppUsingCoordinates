import { iconMap } from './iconMap.js';
const apiUrl = "https://api.open-meteo.com/v1/forecast?&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=America%2FNew_York"
  const searchBox = document.querySelector(".search input");
  const searchBtn = document.querySelector(".search button");


  async function checkWeather(latitude, longitude) {
  try {
    const response = await fetch(`${apiUrl}&latitude=${latitude}&longitude=${longitude}`);      var data = await response.json();
      console.log(data);
      document.querySelector(".temp").innerHTML = Math.round(data.current.temperature_2m) + "&deg;F";
      document.querySelector(".city").innerHTML = data.latitude + ", " + data.longitude;
      document.querySelector(".humidty").innerHTML = data.current.relative_humidity_2m + "%";
      document.querySelector(".wind").innerHTML = data.current.wind_speed_10m + " mph";
      const iconName = iconMap.get(data.current.weather_code);
      document.querySelector(".weather-icon").src = `/icons/${iconName}.png`;

    } catch (error) {
      console.error('Error:', error);
    }
  }
  searchBtn.addEventListener("click", () => {
    const [latitude, longitude] = searchBox.value.split(',');
    checkWeather(latitude.trim(), longitude.trim());
  });

window.addEventListener("load", () => {
  const degree = document.querySelector(".degree");
  const description = document.querySelector(".description");
  const icon = document.querySelector("#ic");
  const search = document.querySelector(".search");
  search.addEventListener("click", () => {
    const location = document.querySelector(".location").value;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=c223feae1b8fd93e1059408e14013f05`
    )
      .then((response) => response.json())
      .then((data) => {
        var { temp } = data.main;
        var desc = data["weather"][0]["description"];
        degree.innerHTML = temp;
        description.innerHTML = desc;
        if (
          desc === "thunderstorm with light rain" ||
          desc === "thunderstorm with rain" ||
          desc === "thunderstorm with heavy rain" ||
          desc === "thunderstorm" ||
          desc === "heavy thunderstorm" ||
          desc === "ragged thunderstorm" ||
          desc === "thunderstorm with light drizzle" ||
          desc === "thunderstorm with drizzle" ||
          desc === "thunderstorm with heavy drizzle"
        ) {
          icon.className = "wi wi-thunderstorm";
        } else if (
          desc === "light intensity drizzle" ||
          desc === "drizzle" ||
          desc === "heavy intensity drizzle" ||
          desc === "light intensity drizzle rain" ||
          desc === "drizzle rain" ||
          desc === "heavy intensity drizzle rain" ||
          desc === "shower rain and drizzle" ||
          desc === "heavy shower rain and drizzle" ||
          desc === "shower drizzle"
        ) {
          icon.className = "wi wi-showers";
        } else if (
          desc === "light rain" ||
          desc === "moderate rain" ||
          desc === "heavy intensity rain" ||
          desc === "very heavy rain" ||
          desc === "extreme rain"
        ) {
          icon.className = "wi wi-day-rain";
        } else if (
          desc === "light intensity shower rain" ||
          desc === "shower rain" ||
          desc === "heavy intensity shower rain" ||
          desc === "ragged shower rain"
        ) {
          icon.className = "wi wi-rain";
        } else if (desc === "freezing rain") {
          icon.className = "wi wi-snow";
        } else if (
          desc === "light snow" ||
          desc === "Snow" ||
          desc === "Heavy snow" ||
          desc === "Sleet" ||
          desc === "Light shower sleet" ||
          desc === "Shower sleet" ||
          desc === "Light rain and snow" ||
          desc === "Rain and snow" ||
          desc === "Light shower snow" ||
          desc === "Shower snow" ||
          desc === "Heavy shower snow"
        ) {
          icon.className = "wi wi-snowflake-cold";
        } else if (desc === "clear sky") {
          icon.className = "wi wi-day-sunny";
        } else if (desc === "few clouds" || desc === "broken clouds") {
          icon.className = "wi wi-day-cloudy";
        } else if (desc === "scattered clouds") {
          icon.className = "wi wi-cloud";
        } else if (desc === "broken clouds" || desc === "overcast clouds") {
          icon.className = "wi wi-cloudy";
        } else if (desc === "mist" || desc === "Haze") {
          icon.className = "wi wi-windy";
        } else if (desc === "Smoke") {
          icon.className = "wi wi-smoke";
        } else if (desc === "sand/ dust whirls" || desc === "dust") {
          icon.className = "wi wi-dust";
        } else if (desc === "fog" || desc === "sand") {
          icon.className = "wi wi-fog";
        } else if (desc === "volcanic ash") {
          icon.className = "wi wi-volcano";
        } else if (desc === "squalls") {
          icon.className = "wi wi-strong-wind";
        } else if (desc === "tornado") {
          icon.className = "wi wi-tornado";
        }
      })
      .catch((err) => alert("wrong city name"));
  });
});

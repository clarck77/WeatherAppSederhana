async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `https://wttr.in/${city}?format=j1`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();

    const weatherInfo = `
            <h2>${city}</h2>
            <p>Temperature: ${data.current_condition[0].temp_C}°C</p>
            <p>Weather: ${data.current_condition[0].weatherDesc[0].value}</p>
            <p>Humidity: ${data.current_condition[0].humidity}%</p>
            <p>Wind Speed: ${data.current_condition[0].windspeedKmph} km/h</p>
        `;
    document.getElementById("weatherResult").innerHTML = weatherInfo;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML =
      "<p>City not found. Please try again.</p>";
  }
}

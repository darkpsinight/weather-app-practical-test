document.querySelector("button").addEventListener("click", async () => {
  const city = document.getElementById('city-data').value;
  const apiKey = "fe824cb856a37281c8c13e7a5fbbd488";
  const units = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  try {
    const response = await fetch(url);

    if (!response.ok) throw Error("City not found !");

    const data = await response.json();

    console.log(data);

    document.querySelector(
      "#weather-container img"
    ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.querySelector("#weather-container h1").textContent = data.name;
    document.querySelector("#weather-container h2").textContent =
      `${data.main.temp} °c`;
    document.querySelector("#weather-container .description").textContent =
      data.weather[0].description;
  } catch (error) {
    alert(error.message);
  }
});

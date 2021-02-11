export async function fetchWeather(city) {
  const apiKey = "c3b0d5ba5102bb46715bd2a20c3c2a55";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pl`;
  try {
    const response = await fetch(url);
    // eslint-disable-next-line no-shadow
    const city = await response.json();
    return city;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

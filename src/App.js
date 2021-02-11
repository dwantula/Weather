import "./App.css";
import React, { useState } from "react";
import { fetchWeather } from "./services/weather";

function App() {
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [pressure, setPressure] = useState(0);
  const [temp, setTemp] = useState(0);
  const [sunrise, setSunrise] = useState(0);
  const [sunset, setSunset] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [currentDate] = useState(new Date().toLocaleString());

  async function getWeather() {
    const date = await fetchWeather(city);
    const { name } = date;
    const { temp, pressure } = date.main;
    const { sunrise, sunset } = date.sys;
    const { speed } = date.wind;
    setPressure(pressure);
    setTemp(Math.floor(temp));
    setName(name);
    setSpeed(speed);
    setSunrise(new Date(sunrise * 1000).toLocaleTimeString());
    setSunset(new Date(sunset * 1000).toLocaleTimeString());
  }

  function handelInputChange(event) {
    setCity(event.target.value);
  }
  return (
    <div className="App">
      <img src="cloud.png" alt="cloud" />
      <main className="main">
        <header className="header">Weather forecast</header>
        <div className="form">
          <input
            className="input"
            onChange={handelInputChange}
            placeholder="Write city name"
          />
          <button type="button" className="button" onClick={getWeather}>
            Search city
          </button>
        </div>
        {name && (
          <div key={city}>
            <h3 className="text">City: {name}</h3>
            <h4 className="text">Date: {currentDate}</h4>
            <h4 className="text">Temperature: {temp} degrees Celsius</h4>
            <h4 className="text">Sunrise: {sunrise}</h4>
            <h4 className="text">Sunset: {sunset}</h4>
            <h4 className="text">Wind: {speed} m/s</h4>
            <h4 className="text">Pressure: {pressure} hPa</h4>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;

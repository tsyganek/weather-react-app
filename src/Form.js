import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  let api = `3861b1b0b27ee4c7422194339793d60e`;

  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [picture, setPicture] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
    axios.get(url).then(showData);

    function showData(response) {
      setTemperature(`Temperature: ${Math.round(response.data.main.temp)}°C`);
      setDescription(`Description: ${response.data.weather[0].description}`);
      setHumidity(`Humidity: ${response.data.main.humidity}%`);
      setWind(`Wind: ${response.data.wind.speed}km/h`);
      setPicture(
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );
    }
  }

  function handleCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="type your city"
          onChange={handleCity}
        />
        <input type="submit" value="search" className="button" />
      </form>
      <ul>
        <li>{temperature}</li>
        <li>{description}</li>
        <li>{humidity}</li>
        <li>{wind}</li>
        <li>
          <img src={picture} alt={description} />
        </li>
      </ul>
    </div>
  );
}

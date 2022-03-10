import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  
  function search() {
    let apiKey = "88d4eb2daf123ed03c1fcc34e85f4ce9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  let form = (
    <div className="col-sm-12 col-md-12 col-lg-12">
        <form onSubmit={handleSubmit}>
           <i className="fas fa-search icon-search"></i>
           <input 
            type="search" 
            className="form-control opacity-50" 
            placeholder="Enter a city..." 
            onChange={handleCityChange} 
            autoFocus={false} 
            autoComplete="false"/>
        </form>
    </div>
);

if (weatherData.ready) { 
  return (
    <div className="container">
          <div className="search-container">
              <h2>The only weather forecast you need</h2>
              {form}
              <div className="line-break"></div>
          </div>
          <WeatherInfo data={weatherData} />
          <small className="github">This was coded by <a href="https://www.linkedin.com/in/michellehtran/" target="_blank" rel="noreferrer">Michelle Tran</a> and is open-source on <a href="https://github.com/misiucodes/weatherapp-react" target="_blank" rel="noreferrer">Github <strong>♡</strong></a></small>
      </div>
  );
} else {
   search();
   return form;
}
}
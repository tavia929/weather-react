import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function weatherIcon() {
    let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    return `${icon}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

 return (
    <div className="forecast-day-container">
        <div className="row">
          <div className="col">
            <div className="daily-forecast-weekday"><strong>{day()}</strong></div>
              <img src={weatherIcon()} alt="weather-icon" className="daily-icons"/>
                <div className="daily-temps">
                  <span className="daily-forecast-max"><strong>{maxTemperature()} </strong></span>
                  <span className="daily-forecast-min">{minTemperature()}</span>    
                </div>
              <div className="description">{props.data.weather[0].description}</div>
          </div>
      </div>
    </div>
  );
}
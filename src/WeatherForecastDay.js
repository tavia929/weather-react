import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function maxTemp() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°C`;
    }

    function minTemp() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°C`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

    return (
        <div>
            <div className="WeatherForecast-day">{day()}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
            <div className="WeatherForecast-temp">
                <span className="WeatherForecast-temp-max">{maxTemp}°C </span>
                <span className="WeatherForecast-temp-min">{minTemp}°C </span>
            </div>
        </div>
    );
}
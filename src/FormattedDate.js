import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[props.date.getDay()];
  let date = props.date.getDate();
  let hours = props.date.getHours();
  if (hours < 10) {
    return `0${hours}`;
  }
  
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let month = months[props.date.getMonth()];
    let year = props.date.getFullYear();

    return (
        <div className="date-time">
            <div>{day}, {month} {date}, {year}</div>
            <div>{hours}:{minutes}</div>
        </div>
  );
}
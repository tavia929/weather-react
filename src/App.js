import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a href="https://www.shecodes.io/students/353-octavia-brown" 
          target="_blank"
          rel="noopener noreferrer">
            Octavia Brown
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/tavia929/weather-react"
            target="_blank"
            rel="noopener noreferrer"
            >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://objective-elion-e8b66d.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

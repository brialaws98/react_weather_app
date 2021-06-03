import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Paris",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    humidity: "80",
    wind: "15"
  };
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Search city..."></input>
        <input type="submit" value="Search" className="btn btn-primary"></input>
      </form>

      <div className="weather-app">
        <br />
        <div className="row">
          <div className="col-6">
            <h5>Tuesday</h5>
            <h1>{weatherData.city}</h1>
            <img src={weatherData.imgUrl} />
            <h5> cloudy</h5>
          </div>

          <div className="col-6">
            <h2>25°C </h2>

            <ul>
              <li> Humidity:{weatherData.humidity}%</li>
              <br />
              <li> Wind:{weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

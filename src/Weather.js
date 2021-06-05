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
      <input type="submit" value="Search" className="btn btn-primary" ></input>
    </form>

    <div className="weather-app">
      <br />
      <div className="row">
        <div className="col-6">
          <h5>Tuesday</h5>
          <h1>{weatherData.city}</h1>
          <img src={weatherData.imgUrl} alt="weather icon" />
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
        <hr />
        
  <div className="col-3">
    <li>
      Tue
    </li>
    <br />
    <li>
      40°
    </li>
  </div>
  <div className="col-3">
    <li>
      Wed
    </li>
    <br />
    <li>
      40°
    </li>
  </div>
  <div className="col-3">
    <li>
      Thur
    </li>
    <br />
    <li>
      40°
    </li>
  </div>
  <div className="col-3">
    <li>
      Fri
    </li>
    <br />
    <li>
      40°
    </li>
  </div>
    </div>
    </div>
    <p>
      <a href="https://github.com/brialaws98/react_weather_app">
        Open Source</a> by <em>Briana Laws</em></p>
  </div>

);
}

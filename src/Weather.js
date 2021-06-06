import React, {useState} from "react";
import axios from "axios"
import "./Weather.css";

export default function Weather() {
  const [ready, setReady]= useState(false);
  const [weatherData, setWeatherData] =useState({ });

   function handleCity (response) {
     console.log(response.data);
     setWeatherData({
       temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      iconUrl: `https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
      description: response.data.weather[0].description
     
     });
      
     setReady(true);
    
   } 
   
if (ready) {
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
           <img src={weatherData.iconUrl} alt=" " />
          <h5 className="text-capitalize"> {weatherData.description}</h5>
        </div>
        

        <div className="col-6">
          <h2>{weatherData.temperature}°F </h2>

          <ul>
            <li> Humidity: {weatherData.humidity}%</li>
            <br />
            <li> Wind: {weatherData.wind} km/h</li>
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
}else{
   const apiKey="403e83c9784e50465590eacdafddc6e7";
  let city= "Baltimore";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleCity);

    return"Loading...";
  }
}

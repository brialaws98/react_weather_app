import React, {useState} from "react";
import axios from "axios"
import "./Weather.css";

export default function Weather() {
 
  const [ready, setReady]= useState(false);
  const [weatherData, setWeatherData]= useState({});

   function handleCity(response){
    console.log(response.data);
    
   
    
    setWeatherData({
     temperture: response.data.main.temp,
     wind:response.data.wind.speed,
     city:response.data.name,
     humidity:response.data.main.humidity
   });
    
   setReady(true);
     
   }
  

   


if(ready) {
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
         
          <h5> cloudy</h5>
        </div>
        

        <div className="col-6">
          <h2>{weatherData.temperature}°C </h2>

          <ul>
            <li> Humidity: {weatherData.humidity}%</li>
            <br />
            <li> Wind:{weatherData.wind} km/h</li>
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
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleCity);
}

  }



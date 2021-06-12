import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weather() {
 
 
  const [weatherData, setWeatherData] =useState({ ready:false });
 
  function handleCity (response) {
     console.log(response.data);

     setWeatherData({
       ready: true,
       temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      iconUrl: `https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt *1000)
     });
      
    
    
   } 
   
if (weatherData.ready) {
  return (
     
    <div className="Weather">
    <form>
      <input type="search" placeholder="Search city..."></input>
      <input type="submit" value="Search" className="btn btn-primary" ></input>
    </form>

  
      
      <WeatherInfo data={weatherData} />
   <p>
      <a href="https://github.com/brialaws98/react_weather_app">
        Open Source</a> by <em>Briana Laws</em>
   </p>
   
      
 
    
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

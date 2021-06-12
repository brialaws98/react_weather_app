import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
 
  const [city,setCity]= useState(props.defaultCity);
  const [weatherData, setWeatherData] =useState({ ready:false });
 
  function handleResponse (response) {
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
   
   function search(){
    const apiKey="403e83c9784e50465590eacdafddc6e7";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
      axios.get(apiUrl).then(handleResponse);
   }

   function handleSubmit(event){
     event.preventDefault();
      search();
   }

   function handleChangeCity(event){
     setCity(event.target.value);
   }
   
if (weatherData.ready) {
  return (
     
    <div className="Weather">
    <form onSubmit={handleSubmit}>
      <input 
        type="search"
         placeholder="Search city..." 
         onChange={handleChangeCity} />
      <input 
        type="submit" 
        value="Search" 
        className="btn btn-primary" />
    </form>

  
      
      <WeatherInfo data={weatherData} />
      
      
 
    
    </div>
);

}else{
    search();
    return "Loading...";
  }
}

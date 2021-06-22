import React, {useState} from "react";
import WeatherForcastDay from "./WeatherForcastDay";
import axios from "axios";

 export default function WeatherForecast(props){
   let [loaded, setLoaded]= useState(false);
   let [forecast, setForecast]= useState(null);
function handleResponse (response){
  setForecast(response.data.daily);
  setLoaded(true);
}

if (loaded){
return  <div classNameName="WeatherForecast">
         <div className="row">
  <div className="col-3">
    <WeatherForcastDay data={forecast[0]} />
  </div>
 
  
  
  </div>
</div>;
}else{
  let apiKey="403e83c9784e50465590eacdafddc6e7";
let latitude= props.coordinates.lon;
let longitude= props.coordinates.lat;
let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return null;
}

 }
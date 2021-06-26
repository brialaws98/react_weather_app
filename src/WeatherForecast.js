import React, {useState} from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

 export default function WeatherForecast(props){
   let [loaded, setLoaded]= useState(false);
   let [forecast, setForecast]= useState(null);
function handleResponse (response){
  setForecast(response.data.daily);
  setLoaded(true);
}

if (loaded){
  console.log(forecast);
return  <div classNameName="WeatherForecast">
         <div className="row">
           {forecast.map(function(dailyforecast, index){
             if (index < 4){
                 return(
            <div className="col-3" key={index}>
               <WeatherForecastDay data={dailyforecast} />
            </div> 
            );
              }
            })}
             
  
 
  
  
  </div>
</div>;
}else{
  let apiKey="403e83c9784e50465590eacdafddc6e7";
let longitude= props.coordinates.lon;
let latitude= props.coordinates.lat;
let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

  return null;
}

 }
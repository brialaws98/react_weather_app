import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

 export default function WeatherForcast(props){
function handleResponse (response){
  console.log(response.data);
}


let apiKey="403e83c9784e50465590eacdafddc6e7";
let latitude= props.coordinates.lon;
let longitude= props.coordinates.lat;
let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

     return  <div classNameName="WeatherForcast">
         <div className="row">
  <div className="col-3">
    <li>
      Fri
    <br/>
    <WeatherIcon code="01d" size={36}/>
    <br/>
    <span className="ForcastTemp-max">50 |</span>
     <span className="ForcastTemp-min">10</span>
    </li>
  </div>
   
  <div className="col-3">
    <li>
      Sat
      <br/>
      <WeatherIcon code="01d" size={36}/>
    <br/>
     <span className="ForcastTemp-max">50 |</span>
     <span className="ForcastTemp-min">10</span>
    </li>
  </div>
 
  <div className="col-3">
    <li>
      Sun
      <br/>
      <WeatherIcon code="01d" size={36} />
    <br/>
     <span className="ForcastTemp-max">50 |</span>
     <span className="ForcastTemp-min">10</span>
    </li>
  </div>

  <div className="col-3">
    <li>
      Mon
      <br/>
      <WeatherIcon code="01d" size={36}/>
      <br/>
     <span className="ForcastTemp-max">50 |</span>
     <span className="ForcastTemp-min">10</span>
    </li>
  </div>
</div>
</div>;
 }
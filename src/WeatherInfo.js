import React from "react";
import FormattedDate from "./FormattedDate";


  export default function WeatherInfo (props){
      return (
        
        <div className="weather-app">
          <div className="WeatherInfo">
        <div className="row">
        <div className="col-6">
        <h5>  
            <FormattedDate date={props.data.date} />
          </h5>
          <h1>{props.data.city}</h1>
           <img src={props.data.iconUrl} alt=" " />
          <h5 className="text-capitalize"> {props.data.description}</h5>
        </div>
        

        <div className="col-6">
          <h2>{props.data.temperature}°F </h2>

          <ul>
            <li> Humidity: {props.data.humidity}%</li>
            <br />
            <li> Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
          </div>
          </div>
          </div>
      );
  }
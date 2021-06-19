import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Weather from "./Weather";





  export default function WeatherInfo (props){
      return (
        
        
          <div className="WeatherInfo">
        <div className="row">
        <div className="col-6">
        <h5>  
            <FormattedDate date={props.data.date} />
          </h5>
          <h1>{props.data.city}</h1>
          <WeatherIcon code= {props.data.icon} 
                    size={80} />
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
      );
  }
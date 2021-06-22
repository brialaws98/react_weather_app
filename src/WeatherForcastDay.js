import React from "react";
import WeatherIcon from "./WeatherIcon";

  export default function WeatherForcastDay(props){
    
      function maxTemperature(){
         let temperature= Math.round(props.data.temp.max);
         return `${temperature}`
      }

      function minTemperature(response){
          console.log(response.data);
          let temperature= Math.round(props.data.temp.min);
          return `${temperature}`
      }

      function day(){
          
          let date= new Date(props.data.dt*1000);
          let day= date.getDay();
          let days= [
              "Sun",
              "Mon",
              "Tue",
              "Wed",
              "Thur",
              "Fri",
              "Sat"    
          ]
           
          return days[day];
      }

      return (
          <div>
              <li>
      {day()}
    <br/>
    <WeatherIcon code={props.data.weather[0].icon} size={36}/>
    <br/>
    <span className="ForecastTemp-max">
      {maxTemperature()}° |</span>
     <span className="ForecastTemp-min">
       {minTemperature()}°</span>
    </li>
          </div>
      );
  }
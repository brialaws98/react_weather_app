import React from "react";
import "./index.css";
import Weather from "./Weather";

export default function App() {
    return (
    <div className="App">
        
           <Weather defaultCity="Baltimore" />
           <footer>
           <p>
      <a href="https://github.com/brialaws98/react_weather_app">
        Open Source</a> by <em>Briana Laws</em>
   </p>
   </footer>
  
        
    </div>
    );
      
    }

import React from "react";
import "./App.css";

import Weathercard from "./components/weathercard/components";

function App() {
  return (
    <div className="App">
      <Weathercard temp={30} condition="Clear" city="Dhaka" country="BAN" />
      <Weathercard temp={-20} condition="Cloud" city="Dhaka" country="BAN" />
      <Weathercard
        temp={40}
        condition="Thunderstorm"
        city="Dhaka"
        country="BAN"
      />
    </div>
  );
}

export default App;

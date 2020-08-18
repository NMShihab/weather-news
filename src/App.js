import React from "react";
import "./App.css";

import Weathercard from "./components/weathercard/components";

function App() {
  const data = async () => {
    const apiRes = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=Dhaka,ban&units=celsius&APPID=a6338b6dcaaf984c48833bda656ad993"
    );
    const resJson = await apiRes.json();
    return resJson;
  };
  data().then((res) => console.log(res));
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

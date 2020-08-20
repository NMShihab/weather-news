import React, { useState, useEffect } from "react";
import "./App.css";

import Weathercard from "./components/weathercard/components";

function App() {
  const [query, setQuery] = useState("Dhaka");
  // const [temp, setTemp] = useState("");
  // const [condition, setCondition] = useState("");
  // const [country, setCountry] = useState("");
  const [weather, setWeather] = useState({
    temp: null,
    condition: null,
    country: null,
    city: null,
  });
  const data = async (q) => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=a6338b6dcaaf984c48833bda656ad993`
    );
    const resJson = await apiRes.json();
    return resJson;
  };

  const handleSearch = (e) => {
    e.preventDefault();

    data(query).then((res) => {
      // setTemp(res.main.temp);
      // setCondition(res.weather[0].main);
      // setCountry(res.sys.country);

      setWeather({
        temp: res.main.temp,
        condition: res.weather[0].main,
        country: res.sys.country,
        city: res.name,
      });
    });
  };

  useEffect(() => {
    data(query).then((res) => {
      // setTemp(res.main.temp);
      // setCondition(res.weather[0].main);
      // setCountry(res.sys.country);

      setWeather({
        temp: res.main.temp,
        condition: res.weather[0].main,
        country: res.sys.country,
        city: res.name,
      });
    });
  }, []);
  return (
    <div className="App">
      <Weathercard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
      />

      <form>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
}

export default App;

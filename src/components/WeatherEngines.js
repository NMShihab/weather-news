import React, { useState, useEffect } from "react";

import Weathercard from "./weathercard/components";
import SyncLoader from "react-spinners/SyncLoader";

function WeatherEngines() {
  const location = "Dhaka";
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [weather, setWeather] = useState({
    temp: null,
    condition: null,
    country: null,
    city: null,
  });
  const getWeather = async (q) => {
    setQuery("");
    setLoading(true);
    try {
      const apiRes = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=a6338b6dcaaf984c48833bda656ad993`
      );
      const resJson = await apiRes.json();

      setWeather({
        temp: resJson.main.temp,
        condition: resJson.weather[0].main,
        country: resJson.sys.country,
        city: resJson.name,
      });
    } catch (error) {
      setError(true);
    }
    //return resJson;
    setLoading(false);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  if (error) {
    return (
      <div style={{ color: "red" }}>
        There has been an error!
        <br />
        <button onClick={() => setError(false)}>Reset</button>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          width: "200px",
          height: "240px",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SyncLoader size={10} color="Red" />
      </div>
    );
  }

  return (
    <Weathercard
      temp={weather.temp}
      condition={weather.condition}
      city={weather.city}
      country={weather.country}
      getWeather={getWeather}
    />
  );
}

export default WeatherEngines;

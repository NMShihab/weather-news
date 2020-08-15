import React from "react";
import "./App.css";

import Weathercard from "./components/weathercard/components";

function App() {
  return (
    <div className="App">
      <Weathercard temp="30" />
      <Weathercard temp="12" />
      <Weathercard temp="40" />
    </div>
  );
}

export default App;

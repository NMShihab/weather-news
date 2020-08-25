import React from "react";
import styled from "@emotion/styled";
import Location from "./Location";
import Icon from "./Icon";
import Condition from "./Condition";
import { motion } from "framer-motion";

const Weathercard = ({ temp, condition, city, country, getWeather }) => {
  let highcolor = 0;
  let lowcolor = 0;
  let rgb = null;
  if (temp > 12) {
    highcolor = (1 - (temp - 12) / 28) * 255;
    lowcolor = highcolor - 200;
    rgb = `linear-gradient(
      to top,
      rgba(255, ${highcolor}, 0),
      rgba(255, ${Math.abs(lowcolor)}, 0)
    )`;
  } else if (temp <= 12) {
    highcolor = (1 - (temp + 20) / 32) * 255;
    lowcolor = highcolor - 200;
    rgb = `linear-gradient(
      to top,
      rgba(0, ${highcolor}, 255),
      rgba(0, ${Math.abs(lowcolor)}, 255)
    )`;
  }

  const Card = styled.div`
    margin: 0 auto;
    background: ${rgb};
    width: 200px;
    height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 20px;
  `;
  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <Card>
        <Location getWeather={getWeather} city={city} country={country} />
        <Icon condition={condition} />
        <Condition temp={temp} condition={condition} />
      </Card>
    </motion.div>
  );
};

export default Weathercard;

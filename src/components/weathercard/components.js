import React from "react";
import styled from "@emotion/styled";
import Location from "./Location";
import Icon from "./Icon";
import Condition from "./Condition";

const Weathercard = ({ temp, condition, city, country }) => {
  let highcolor = 0;
  let lowcolor = 0;
  let rgb = null;
  if (temp > 12) {
    highcolor = (1 - (temp - 12) / 28) * 255;
    lowcolor = highcolor - 150;
    rgb = `linear-gradient(
      to top,
      rgba(255, ${highcolor}, 0),
      rgba(255, ${lowcolor}, 0)
    )`;
  } else if (temp <= 12) {
    highcolor = (1 - (temp + 20) / 32) * 255;
    lowcolor = highcolor - 150;
    rgb = `linear-gradient(
      to top,
      rgba(0, ${highcolor}, 255),
      rgba(0, ${lowcolor}, 255)
    )`;
  }

  const Card = styled.div`
    margin: 0 auto;
    background: ${rgb};
    width: 200px;
    height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 20px;
  `;
  return (
    <Card>
      <Location city={city} country={country} />
      <Icon condition={condition} />
      <Condition temp={temp} condition={condition} />
    </Card>
  );
};

export default Weathercard;

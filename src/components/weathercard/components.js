import React from "react";
import styled from "@emotion/styled";
import Location from "./Location";
import Icon from "./Icon";
import Condition from "./Condition";

const Weathercard = (props) => {
  let highcolor = 0;
  let lowcolor = 0;
  let rgb = null;
  if (props.temp > 12) {
    highcolor = (1 - (props.temp - 12) / 28) * 255;
    lowcolor = highcolor - 150;
    rgb = `linear-gradient(
      to top,
      rgba(255, ${highcolor}, 0),
      rgba(255, ${lowcolor}, 0)
    )`;
  } else if (props.temp <= 12) {
    highcolor = (1 - (props.temp + 20) / 32) * 255;
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
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 20px;
  `;
  return (
    <Card>
      <Location />
      <Icon />
      <Condition />
    </Card>
  );
};

export default Weathercard;

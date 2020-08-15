import React from "react";
import styled from "@emotion/styled";
import Location from "./Location";
import Icon from "./Icon";
import Condition from "./Condition";

const Weathercard = (props) => {
  let highcolor = (1 - (props.temp - 12) / 28) * 255;
  let lowcolor = highcolor - 150;
  const Card = styled.div`
    margin: 0 auto;
    background: linear-gradient(
      to top,
      rgba(255, ${highcolor}, 0),
      rgba(255, ${lowcolor}, 0)
    );
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

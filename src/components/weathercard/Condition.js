import React from "react";
import styled from "@emotion/styled";

const Condition = (props) => {
  const Temp = styled.h1`
    font-family: "Fira Sans", sans-serif;
    font-size: 2.5rem;
    font-weight: 200;
  `;

  const Condition = styled.h3`
    font-family: "Merriweather", serif;
    font-size: 1.6rem;
  `;
  return (
    <>
      <Temp>20 °C</Temp>
      <Condition>clouds</Condition>
    </>
  );
};

export default Condition;

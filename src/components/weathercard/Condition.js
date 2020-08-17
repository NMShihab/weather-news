import React from "react";
import styled from "@emotion/styled";

const Condition = ({ temp, condition, city, country }) => {
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
      <Temp>{temp}</Temp>
      <Condition>{condition}</Condition>
    </>
  );
};

export default Condition;

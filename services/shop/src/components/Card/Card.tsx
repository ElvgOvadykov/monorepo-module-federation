import React from "react";
import styled from "styled-components";

const CardWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  border: 1px solid green;
  border-radius: 15px;
  padding: 10px;
`;

export type CardProps = {
  name: string;
  price: number;
  description: string;
};

export const Card: React.FC<CardProps> = ({ name, price, description }) => {
  return (
    <CardWrapper>
      <h4>{name}</h4>
      <p>{description}</p>
      <i>{price}$</i>
    </CardWrapper>
  );
};

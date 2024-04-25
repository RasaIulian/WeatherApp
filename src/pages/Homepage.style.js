import styled, { keyframes } from "styled-components";

const moveLeftRight = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(10px); /* Adjust the distance to move */
  }
`;

export const AnimatedIcon = styled.img`
  animation: ${moveLeftRight} 6s infinite alternate ease-in-out; /* Adjust animation duration as needed */
  padding-top: 0;
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.05);
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: 1px solid #eaeaea;
  border-radius: 3px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color, box-shadow 0.3s ease;
  &:hover {
    background-color: #eaeaea;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const Map = styled.img`
  border-radius: 5px;
  max-width: 350px;
  width: 100%;
`;

export const Square = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-left: 5px;
  border-radius: 3px;
`;

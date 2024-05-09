import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  padding: 5px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  p {
    margin: 5px 0;
  }
  h3 {
    margin-bottom: 0;
  }
`;

export const ErrorMessage = styled.div`
  background-color: #ffcdd2;
  color: #c63737;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin: 10px 0;
`;

const moveLeftRight = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(10px); /* Adjust the distance to move */
  }
`;

export const AnimatedIcon = styled.img`
  animation: ${moveLeftRight} 6s infinite alternate ease-in-out;
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

export const Select = styled.select`
  padding: 5px;
  border: 1px solid #eaeaea;
  border-radius: 3px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  background-color: #eaeaea;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  }
  &:focus {
    border: none;
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
  }

  /* Styles for active (selected) option */
  option:checked {
    border: none;
    font-weight: bold;
  }

  /* Styles for inactive (unselected) options */
  option:not(:checked) {
    border: none;
    outline: none;
  }
`;

export const Map = styled.img`
  border-radius: 5px;
  max-width: 400px;
  width: 100%;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Square = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-left: 5px;
  border-radius: 3px;
`;

export const Alert = styled.div`
  color: #d32f2f;
`;

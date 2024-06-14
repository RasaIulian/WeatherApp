import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  padding: 5px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 470px;
  p {
    margin: 5px 0;
    display: inline-flex;
  }
  h3 {
    margin-bottom: 0;
  }
  li {
    margin: 5px 0;
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

const moveLeftRightZoom = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: translateX(5px);
  }
`;

export const AnimatedIcon = styled.img`
  animation: ${moveLeftRightZoom} 6s infinite alternate ease-in-out;

  padding-top: 0;
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.05);
`;

export const Button = styled.button`
  padding: 10px;
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
  max-width: 470px;
  width: 100%;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Square = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  margin: 0 5px;
  border-radius: 3px;
  border: 1px solid rgba(170, 170, 170, 0.5); // Equivalent RGBA color for #aaaaaa
`;

export const Alert = styled.div`
  color: #d32f2f;
`;

const rotateAnimation = ($deg) => keyframes`
  from {
    transform: rotate(${$deg + 180 - 10}deg);
  }
  to {
    transform: rotate(${$deg + 180 + 10}deg);
  }
`;

export const WindArrow = styled.span.attrs((props) => ({
  $deg: props.$deg, // Use $deg as transient prop
}))`
  margin-left: 10px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 20px solid #aaaaaa;
  border-radius: 6px;
  transform-origin: center;
  animation: ${(props) => rotateAnimation(props.$deg)} 2s infinite alternate
    ease-in-out;

  &::after {
    content: "";
    position: absolute;
    left: -2.5px;
    top: 12px;
    width: 5px;
    height: 5px;
    background: linear-gradient(
      ${(props) => props.$deg + 180}deg,
      #ffff00,
      #ff0000,
      #800080
    );
    border-radius: 50%;
  }
`;

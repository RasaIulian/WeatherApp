import styled, { keyframes } from "styled-components";

export const ContainerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 960px;
`;

export const Container = styled.div`
  background-color: #fafafa;
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  width: 47%; 
  margin: 20px 20px 0 0 ; 
  overflow: auto;
  p {
    margin: 5px 0;
    display: inline-flex;
    flex-wrap: wrap;
    font-size: 1.1rem;
  
  }
 
  ul {
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  li {
    margin: 5px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 0 0.2rem;
    width: 10em;
    text-align: center;
    justify-content: center;
    line-height: 1.5rem;
    flex-wrap: wrap;
  }
  @media (max-width: 980px) {
    width: 100%;
    margin-bottom: 10px;
    margin-right: 0;
    padding: 5px;
  }
`;
export const Header = styled.h2`
  line-height: 1.5rem;
`;

export const ErrorMessage = styled.div`
  // background-color: #ffcdd2;
  color: #c63737;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  max-width: 950px;
  @media (max-width: 980px) {
    max-width: 460px;
  }
`;

// Define the opacity animation
const textOpacityAnimation = keyframes`
  0% {
    opacity: 0.5; // 50% opacity
  }
  100% {
    opacity: 1; // 100% opacity
  }
`;

export const LoadingMessage = styled.div`
  color: #f88700;
  margin-bottom: 20px;
  max-width: 950px;
  @media (max-width: 980px) {
    max-width: 460px;
  }

  // Apply the animation to text elements
  span {
    animation: ${textOpacityAnimation} 1s infinite alternate;
  }
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
  animation: ${moveLeftRightZoom} 3s infinite alternate ease-in-out;
  padding-top: 0;
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.05);
`;

export const Button = styled.button`
  padding: 10px;
  margin: 10px 0;
  font-size: 1.1rem;
  border: 1px solid #eaeaea;
  border-radius: 3px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:disabled {
  opacity: 0;
  cursor: default;
  pointer-events: none;
}
  &:hover {
    background-color: #eaeaea;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const ListWithArrowsWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;
export const ArrowsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  min-width: 100%;
  & * {
    border: none;
    background-color: rgba(250, 250, 250, 0.5);
    box-shadow: none;
    padding: 3px;
    border-radius: 50%;
  }
  & *:hover {
    background-color: rgba(250, 250, 250, 1);

    box-shadow: none;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 73%;

  @media (max-width: 980px) {
    width: 100%;
  }
  @media (max-width: 515px) {
    margin-bottom: 10px;
  }
`;

export const Select = styled.select`
  width: 15rem;
  height: 2.5rem;
  font-size: 1.2rem;
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
  &:focus, &:active {
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

// Linear interpolation (lerp) function
const lerp = (start, end, t) => start * (1 - t) + end * t;

// Function to generate animation speed based on wind speed
const getAnimationDuration = (windSpeedKmH) => {
  const minSpeed = 0; // Km/h
  const maxSpeed = 100; // Km/h
  const minDuration = 1.5; // seconds (slowest)
  const maxDuration = 0.05; // seconds (fastest)

  // Clamp the wind speed to the defined range
  const clampedSpeed = Math.max(minSpeed, Math.min(windSpeedKmH, maxSpeed));

  // Normalize the clamped speed to a 0-1 range
  const normalizedSpeed = (clampedSpeed - minSpeed) / (maxSpeed - minSpeed);

  // Use lerp for linear interpolation of the duration
  const duration = lerp(minDuration, maxDuration, normalizedSpeed);

  return `${duration}s`;
};

export const WindArrow = styled.span.attrs((props) => ({
  $deg: props.$deg, // Use $deg as transient prop
   $windspeed: props.$windspeed, // Add wind speed as a transient prop
}))`
  margin-left: 10px;
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  border-bottom: 18px solid #aaaaaa;
  border-radius: 50%;
  transform-origin: center;
  animation: ${(props) => rotateAnimation(props.$deg)} ${(props) => getAnimationDuration(props.$windspeed)} infinite alternate
    ease-in-out;

  &::after {
    content: "";
    position: absolute;
    left: -3px;
    top: 7px;
    width: 6px;
    height: 6px;
    background: linear-gradient(
      ${(props) => props.$deg + 180}deg,
      #ffff00,
      #ff0000,
      #800080
    );
    border-radius: 50%;
  }
`;

// Keyframes for the icon animation (single icon, infinite animation)
const iconAnimation = keyframes`
0% {
    opacity: 0;
    transform: scale(0.8);
  }
  25% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  75% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
`;

export const EmojiContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

 export const Emoji = styled.span`
  font-size: 2rem;
  
  &.changing {
    animation: highlight 1.5s ease-in-out;
  }
  
  @keyframes highlight {
    0% { transform: scale(1); opacity: 0.5; }
    20% { transform: scale(1.2); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }
`;

export const EmojiWrapper = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
`;
// Map.style.js
import styled from "styled-components";

export const MapContainer = styled.div`
  width: 100%;
  height: 330px;
  border-radius: 5px;
`;

export const MapControlsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ControlRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const OpacityInput = styled.input`
  /* styles for the range input here */
`;

export const OpacityValue = styled.span`
  /* styles for the opacity value display here */
`;

export const ForecastTime = styled.p`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

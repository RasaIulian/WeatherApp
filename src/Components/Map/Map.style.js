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
export const Label = styled.label`
  font-size: 1.1rem;
`;
export const ControlRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & @media (max-width: 980px) {
    margin-bottom: 0;
  }
`;

export const ForecastTime = styled.p`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

export const PlaybackControls = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  border-radius: 5px;
  font-size: 1rem;
`;

export const PlayButton = styled.button`
  width: 45px;
  height: 35px;
  padding: 0;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const SpeedContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SpeedInput = styled.input`
  width: 230px;
  cursor: pointer;
`;

export const SpeedLabel = styled.span`
  font-size: 1rem;
  min-width: 50px;
`;

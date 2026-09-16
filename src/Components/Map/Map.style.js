import styled from "styled-components";

export const MapContainer = styled.div`
  width: 100%;
  height: 330px;
  border-radius: 5px;
`;

export const MapControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  gap: 10px;
  flex-wrap: wrap;
  border-radius: 5px;
  font-size: 1rem;
  margin: 5px 10px;
  @media (max-width: 515px) {
    align-items: stretch;
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
  min-width: 105px;
`;

export const RainViewerLink = styled.a`
  color: inherit;
  vertical-align: top;
`;

import styled from "styled-components";

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
  width: 100%;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #b9bcc1;
  border: 1px solid #b9bcc1;
  transition: all 0.2s ease-in-out;

  &.active {
    background-color: #000000;
    border: 1px solid #000000;
  }
`;

export const ScrollDots = ({ totalPages, currentPage }) => {
  const dots = [];
  for (let i = 0; i < totalPages; i++) {
    dots.push(
      <Dot key={i} className={`dot ${i === currentPage ? "active" : ""}`} />
    );
  }
  return <DotsContainer className="scroll-dots">{dots}</DotsContainer>;
};

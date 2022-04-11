import styled from "styled-components";

export const Container = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 4px;

  background-color: ${({ whiteMode }) => (whiteMode ? "#CDE7FF" : "#283349")};
  color: ${({ whiteMode }) => (whiteMode ? "#283349" : "#CDE7FF")};
  border: 2px solid;
  border-color: ${({ whiteMode }) => (whiteMode ? "#CDE7FF" : "#283349")};

  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 2px;

  :hover {
    background-color: ${({ whiteMode }) => (whiteMode ? "#283349" : "#CDE7FF")};
    color: ${({ whiteMode }) => (whiteMode ? "#CDE7FF" : "#283349")};
    border-color: ${({ whiteMode }) => (whiteMode ? "#CDE7FF" : "#283349")};
  }

  :focus-within {
    background-color: ${({ whiteMode }) => (whiteMode ? "#283349" : "#CDE7FF")};
    color: ${({ whiteMode }) => (whiteMode ? "#CDE7FF" : "#283349")};
    border-color: ${({ whiteMode }) => (whiteMode ? "#CDE7FF" : "#283349")};
  }
`;

import styled from "styled-components";

export const Container = styled.input`
  min-width: 80%;
  max-width: 90%;
  height: 30px;
  padding: 0 10px;

  border: 2px solid var(--blue);
  color: var(--blue);
  border-radius: 4px;

  background-color: var(--dark_blues);

  ::placeholder {
    color: var(--blue);
    opacity: 0.5;
  }

  :focus-within {
    border-color: var(--white);
  }
`;

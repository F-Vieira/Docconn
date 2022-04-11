import styled from "styled-components";

export const Container = styled.header`
  height: 70px;
  background-color: var(--light_blue);
  box-shadow: 2px 5px 15px 2px var(--dark_blue_transparent);

  padding: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  width: 100%;
  z-index: 2;
`;

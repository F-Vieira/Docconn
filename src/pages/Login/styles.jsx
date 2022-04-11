import styled from "styled-components";

export const Container = styled.main`
  height: calc(100vh - 100px);
  background-color: var(--light_blue);
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 3rem;
  }

  .login_greeting {
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--light_blue);
  }
`;

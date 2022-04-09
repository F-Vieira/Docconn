import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  padding: 5% 20%;
  display: flex;
  flex-direction: column;
`;

export const Indicators = styled.section`
  display: flex;
  justify-content: space-around;
`;

export const Calls = styled.section`
  h2 {
    font-size: 2rem;
    margin: 15px 0;
    margin-left: 20px;
  }

  ul {
    li {
      width: 100%;
      height: 30px;
      line-height: 30px;
      padding: 0 15px;

      background-color: var(--white);
      border-radius: 10px;
      margin-bottom: 10px;
    }
  }
`;

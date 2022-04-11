import styled from "styled-components";

export const Container = styled.main`
  min-height: calc(100vh - 100px);
  padding: 80px 20%;
  display: flex;
  flex-direction: column;

  background-color: var(--light_blue);
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

      background-color: var(--dark_blue);
      color: var(--white);
      box-shadow: 0px 1px 3px 1px var(--dark_blue_transparent);

      border-radius: 10px;
      margin-bottom: 10px;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 120px;

  margin: 10px;

  background-color: var(--white);
  color: var(--dark_green);
  box-shadow: 2px 5px 15px 2px rgba(39, 45, 45, 0.4);

  text-align: center;

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 70px;
    border-bottom: 2px solid var(--gray);
    padding: 0 10px;

    font-size: 18px;
    font-weight: bold;
  }

  p {
    height: calc(120px - 70px);
    line-height: 50px;

    font-size: 18px;
    font-weight: bold;
  }
`;

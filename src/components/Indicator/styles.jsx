import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 120px;
  border-radius: 4px;

  margin: 10px;

  background-color: var(--dark_blue);
  color: var(--white);
  box-shadow: 2px 5px 15px 2px var(--dark_blue_transparent);

  text-align: center;

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 70px;
    border-bottom: 2px solid var(--light_blue);
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

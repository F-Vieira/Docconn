import styled from "styled-components";

export const Container = styled.section`
  h1 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;

    padding: 20px 0;
  }
`;

export const PatientsList = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

export const Patient = styled.li`
  width: 170px;
  height: 80px;

  margin: 10px;
  padding: 10px;

  border-radius: 4px;

  background-color: var(--dark_blue);
  color: var(--white);
  box-shadow: 2px 5px 15px 2px var(--dark_blue_transparent);
  border: 4px double var(--white);

  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  position: relative;

  h2 {
    font-size: 1rem;
    font-weight: bold;
  }

  svg {
    position: absolute;
    width: 80px;
    height: 80px;
    right: 50%;
    transform: translateX(50%);
    opacity: 0.2;
  }
`;

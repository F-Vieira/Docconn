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
  width: 150px;
  height: 80px;

  margin: 10px;

  background-color: var(--white);
  box-shadow: 2px 5px 15px 2px rgba(39, 45, 45, 0.4);

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 1.5.rem;
    font-weight: bold;
  }
`;

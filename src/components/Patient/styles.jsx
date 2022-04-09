import styled from "styled-components";

export const Container = styled.section`
  h1 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;

    padding: 20px 0;
  }
`;

export const PatientData = styled.div`
  width: 400px;
  border: 4px double var(--gray);
  margin: 15px auto;
  padding: 15px;

  line-height: 1.25;

  p {
    display: flex;
    justify-content: space-between;
  }
`;

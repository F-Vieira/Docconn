import styled from "styled-components";
import landingPageImg from "../../assets/img/landingPage.svg";

export const Container = styled.main`
  min-height: calc(100vh - 100px);
  max-height: 100%;
  padding: 80px 20% 0;
  background-color: var(--light_blue);
`;

export const Intro = styled.section`
  min-height: 100%;
  padding-top: 60px;
  display: flex;
  justify-content: space-between;

  .text_intro {
    width: 45%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.25rem;
      text-align: left;
      line-height: 1.25;
    }
  }
  .image_intro {
    width: 45%;
    min-height: 350px;
    background-image: url(${landingPageImg});
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

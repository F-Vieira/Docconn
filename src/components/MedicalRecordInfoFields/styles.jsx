import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 200px;

  background-color: var(--white);
  box-shadow: 2px 5px 15px 2px rgba(39, 45, 45, 0.4);

  margin: 15px 0;
  padding: 0 15px 15px;

  display: grid;
  grid-template-rows: 60px 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0 20px;

  position: relative;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;

    grid-column: 1/3;
    align-self: center;
    justify-self: center;
  }
`;

export const Problems = styled.div`
  grid-column: 1/1;
  padding: 15px;

  box-shadow: inset 0px 0px 5px 0px #000000;
  overflow: auto;
  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;

    width: 100%;
  }

  ul {
    li {
      height: 35px;
      line-height: 35px;

      padding: 0 10px;
      margin: 10px 0;

      border-radius: 10px;
      background-color: var(--gray);
      box-shadow: 0px 1px 3px 1px #000000;

      position: relative;
    }

    .add_problem {
      height: 35px;
      line-height: 35px;

      padding: 0 10px;
      margin: 10px 0;

      border-radius: 10px;
      background-color: var(--white);
      box-shadow: 0px 1px 3px 1px #000000;

      border: 2px dashed var(--gray);

      display: flex;
      align-items: center;
      justify-content: space-between;

      input {
        width: calc(100% - 25px);
        background-color: var(--white);
      }

      button {
        width: 22px;
        height: 22px;

        svg {
          width: inherit;
          height: inherit;
          color: var(--blue);
          cursor: pointer;
        }
      }
    }

    .remove_problem {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);

      width: 22px;
      height: 22px;

      color: var(--white);
      cursor: pointer;
    }
  }
`;

export const MoreInfo = styled.div`
  grid-column: 2/2;

  .situation {
    position: absolute;
    top: 10px;
    right: 15px;

    width: 30px;
    height: 30px;

    color: ${({ active }) => (active ? "green" : "red")};
  }

  .detail_situation {
    position: absolute;
    top: -10px;
    right: -15px;
    width: 70px;
    text-align: center;

    border-radius: 4px;
    box-shadow: 0px 0px 5px 0px #000000;
    background-color: var(--gray);
  }

  .observation {
    resize: none;
    width: 100%;
    height: 100%;
    padding: 15px;
    box-shadow: inset 0px 0px 5px 0px #000000;
  }
`;

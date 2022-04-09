import * as I from "./styles";

const Indicator = ({ title, amount }) => {
  return (
    <I.Container>
      <h2>{title}</h2>
      <p>{amount}</p>
    </I.Container>
  );
};

export default Indicator;

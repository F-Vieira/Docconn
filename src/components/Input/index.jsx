import * as I from "./styles";

const Input = ({ placeholder, type = "text" }) => {
  return <I.Container placeholder={placeholder} type={type} />;
};

export default Input;

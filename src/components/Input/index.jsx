import * as I from "./styles";

const Input = ({ placeholder, type = "text", name }) => {
  return <I.Container name={name} placeholder={placeholder} type={type} />;
};

export default Input;

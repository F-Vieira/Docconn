import * as F from "./styles";

const Form = ({ children, handleSubmit }) => {
  return <F.Container onSubmit={handleSubmit}>{children}</F.Container>;
};

export default Form;

import * as F from "./styles";

const Form = ({ children }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return <F.Container onSubmit={handleSubmit}>{children}</F.Container>;
};

export default Form;

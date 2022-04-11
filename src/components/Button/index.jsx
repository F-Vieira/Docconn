import * as B from "./styles";

const Button = ({ children, whiteMode, ...rest }) => {
  return (
    <B.Container {...rest} whiteMode={whiteMode}>
      {children}
    </B.Container>
  );
};

export default Button;

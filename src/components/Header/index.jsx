import Logo from "../Logo";
import * as H from "./styles";

const Header = ({ children }) => {
  return (
    <H.Container>
      <Logo />
      {children}
    </H.Container>
  );
};

export default Header;

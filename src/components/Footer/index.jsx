import * as F from "./styles";
import Logo from "../Logo";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <F.Container>
      <Logo />
      <h2>Todos os direitos reservados</h2>
      <BiCopyright />
      <span>2022</span>
    </F.Container>
  );
};

export default Footer;

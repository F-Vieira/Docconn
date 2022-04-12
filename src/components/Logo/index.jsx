import { useNavigate } from "react-router-dom";
import * as L from "./styles";

const Logo = () => {
  const navigate = useNavigate();

  return <L.Container onClick={() => navigate("/")}>Docconn</L.Container>;
};

export default Logo;

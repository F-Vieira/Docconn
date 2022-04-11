import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import * as LP from "./styles";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <LP.Container>
      <Header>
        <Button onClick={() => navigate("/login")}>Login</Button>
      </Header>
    </LP.Container>
  );
};

export default LandingPage;

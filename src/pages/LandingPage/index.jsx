import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <Button onClick={() => navigate("/login")}>Login</Button>
      </Header>
    </>
  );
};

export default LandingPage;

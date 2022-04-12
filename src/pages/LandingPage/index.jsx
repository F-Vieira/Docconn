import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import * as LP from "./styles";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <Button onClick={() => navigate("/login")}>Login</Button>
      </Header>
      <LP.Container>
        <LP.Intro>
          <div className="text_intro">
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="image_intro"></div>
        </LP.Intro>
      </LP.Container>
    </>
  );
};

export default LandingPage;

import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import * as L from "./styles";
import Logo from "../../components/Logo";
import { DOCTORS } from "../../database/database";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const findDoctor = DOCTORS.find(
      (doctor) =>
        doctor.email === data.email && doctor.password === data.password
    );

    if (findDoctor) {
      setTimeout(() => {
        localStorage.setItem("@docconn:doctor", JSON.stringify(findDoctor));
        navigate("/dashboard");
      }, 3000);
    }
  };

  return (
    <>
      <L.Container>
        <Logo />
        <Form handleSubmit={handleSubmit}>
          <h2 className="login_greeting">Seja Bem Vindo!</h2>
          <Input name="email" placeholder="E-mail" />
          <Input name="password" placeholder="Senha" type="password" />
          <Button type="submit" whiteMode>
            Entrar
          </Button>
        </Form>
      </L.Container>
    </>
  );
};

export default Login;

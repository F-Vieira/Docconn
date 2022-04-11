import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import * as L from "./styles";
import Logo from "../../components/Logo";

const Login = () => {
  return (
    <>
      <L.Container>
        <Logo />
        <Form>
          <h2 className="login_greeting">Seja Bem Vindo!</h2>
          <Input placeholder="E-mail" />
          <Input placeholder="Senha" type="password" />
          <Button whiteMode>Entrar</Button>
        </Form>
      </L.Container>
    </>
  );
};

export default Login;

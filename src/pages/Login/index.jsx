import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import * as L from "./styles";

const Login = () => {
  return (
    <L.Container>
      <Form>
        <h2>Docconn</h2>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" type="password" />
        <Button>Entrar</Button>
      </Form>
    </L.Container>
  );
};

export default Login;

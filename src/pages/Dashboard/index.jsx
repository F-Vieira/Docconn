import Indicator from "../../components/Indicator";
import * as D from "./styles";

const Dashboard = () => {
  return (
    <D.Container>
      <D.Indicators>
        <Indicator title="Atendimentos do Dia" amount="12" />
        <Indicator title="Retornos" amount="12" />
        <Indicator title="Pacientes atendidos hoje" amount="12" />
      </D.Indicators>
    </D.Container>
  );
};

export default Dashboard;

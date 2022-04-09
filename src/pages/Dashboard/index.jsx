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
      <D.Calls>
        <h2>Atendimentos de Hoje</h2>
        <ul>
          <li>paciente 1</li>
          <li>paciente 2</li>
          <li>paciente 3</li>
          <li>paciente 4</li>
        </ul>
      </D.Calls>
    </D.Container>
  );
};

export default Dashboard;

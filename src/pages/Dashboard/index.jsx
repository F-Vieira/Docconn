import Indicator from "../../components/Indicator";
import * as D from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { DOCTORS } from "../../database/database";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleMedicalRecord = () => {
    navigate("/medicalRecords");
  };

  const handleShowPatientMedicalRecord = (patient) => {
    console.log(patient);
    //ver como mandar direto pro prontuário do paciente
  };

  const loggedDoctor = JSON.parse(localStorage.getItem("@docconn:doctor"));

  const findDoctor = DOCTORS.find((doctor) => doctor.id === loggedDoctor.id);

  const { patients } = findDoctor;

  return (
    <>
      <Header>
        <Button onClick={handleMedicalRecord}>Prontuários</Button>
        <Button onClick={handleLogout}>Sair</Button>
      </Header>
      <D.Container>
        <D.Indicators>
          <Indicator title="Atendimentos do Dia" amount={patients.length} />
          <Indicator title="Retornos" amount="12" />
          <Indicator title="Pacientes atendidos hoje" amount="12" />
        </D.Indicators>
        <D.Calls>
          <h2>Atendimentos de Hoje</h2>
          <ul>
            {patients.map((patient) => (
              <li key={patient.id}>
                Paciente:{" "}
                <span onClick={() => handleShowPatientMedicalRecord(patient)}>
                  {patient.name}
                </span>{" "}
                | Horário: <span>11:00</span>
              </li>
            ))}
          </ul>
        </D.Calls>
      </D.Container>
    </>
  );
};

export default Dashboard;

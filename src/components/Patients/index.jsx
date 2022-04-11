import * as P from "./styles";
import { PATIENTS } from "../../database/database";
import { BsPersonFill } from "react-icons/bs";

const Patients = ({ onClick }) => {
  return (
    <P.Container>
      <h1>Prontuários</h1>

      <P.PatientsList>
        {PATIENTS.map((patient) => (
          <P.Patient key={patient.id} onClick={() => onClick(patient)}>
            <h2>Paciente: {patient.name}</h2>
            <p>Idade: {patient.age}</p>
            <p>Sexo: {patient.sex}</p>
            <BsPersonFill />
          </P.Patient>
        ))}
      </P.PatientsList>
    </P.Container>
  );
};

export default Patients;

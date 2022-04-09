import * as P from "./styles";
import { PATIENTS } from "../../database/database";

const Patients = ({ onClick }) => {
  return (
    <P.Container>
      <h1>Prontuários</h1>

      <P.PatientsList>
        {PATIENTS.map((patient) => (
          <P.Patient key={patient.id} onClick={() => onClick(patient)}>
            <h2>{patient.name}</h2>
          </P.Patient>
        ))}
      </P.PatientsList>
    </P.Container>
  );
};

export default Patients;

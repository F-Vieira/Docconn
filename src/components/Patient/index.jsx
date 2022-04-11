import MedicalRecordInfoFields from "../MedicalRecordInfoFields";
import * as P from "./styles";

const Patient = ({ patient }) => {
  return (
    <P.Container>
      <h1>Prontuário</h1>

      <P.PatientData>
        <p>
          <span>Paciente:</span>
          <span>{patient.name}</span>
        </p>

        <p>
          <span>Idade:</span>
          <span>{patient.age}</span>
        </p>

        <p>
          <span>Sexo:</span>
          <span>{patient.sex}</span>
        </p>
        <p>
          <span>Médico:</span>
          <span>Nome do médico</span>
        </p>
      </P.PatientData>

      {patient.medicalRecords.map((medicalRecord) => (
        <MedicalRecordInfoFields
          key={medicalRecord.title}
          title={medicalRecord.title}
          reportedProblems={medicalRecord.problems}
          situation={medicalRecord.situation}
          observation={medicalRecord.observation}
        />
      ))}
    </P.Container>
  );
};

export default Patient;

import { useState } from "react";
import MedicalRecordInfoFields from "../../components/MedicalRecordInfoFields";
import * as MR from "./styles";
import { PATIENTS } from "../../database/database";

const MedicalRecords = () => {
  const [showPatientChart, setShowPatientChart] = useState(false);
  const [patient, setPatient] = useState({});

  const handleShowPatient = (patient) => {
    setPatient(patient);
    setShowPatientChart(true);
  };

  return (
    <MR.Container>
      {showPatientChart ? (
        <>
          <h1>Prontuário</h1>
          <p>Paciente: {patient.name}</p>
          <p>Idade: {patient.age}</p>
          <p>Sexo: {patient.sex}</p>

          {patient.medicalRecords.map((medicalRecord) => (
            <MedicalRecordInfoFields
              key={medicalRecord.title}
              title={medicalRecord.title}
              problems={medicalRecord.problems}
              situation={medicalRecord.situation}
              observation={medicalRecord.observation}
            />
          ))}
        </>
      ) : (
        <>
          <h1>Prontuários</h1>

          <ul>
            {PATIENTS.map((patient) => (
              <li key={patient.id} onClick={() => handleShowPatient(patient)}>
                <h2>{patient.name}</h2>
              </li>
            ))}
          </ul>
        </>
      )}
    </MR.Container>
  );
};

export default MedicalRecords;

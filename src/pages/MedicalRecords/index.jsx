import { useState } from "react";
import Patient from "../../components/Patient";
import Patients from "../../components/Patients";
import * as MR from "./styles";

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
        <Patient patient={patient} />
      ) : (
        <Patients onClick={handleShowPatient} />
      )}
    </MR.Container>
  );
};

export default MedicalRecords;

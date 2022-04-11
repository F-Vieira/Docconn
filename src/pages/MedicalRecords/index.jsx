import { useState } from "react";
import Patient from "../../components/Patient";
import Patients from "../../components/Patients";
import * as MR from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const MedicalRecords = () => {
  const [showPatientChart, setShowPatientChart] = useState(false);
  const [patient, setPatient] = useState({});
  const navigate = useNavigate();

  const handleShowPatient = (patient) => {
    setPatient(patient);
    setShowPatientChart(true);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <Header>
        <Button onClick={handleDashboard}>Dashboard</Button>
        <Button onClick={handleLogout}>Sair</Button>
      </Header>
      <MR.Container>
        {showPatientChart ? (
          <Patient patient={patient} />
        ) : (
          <Patients onClick={handleShowPatient} />
        )}
      </MR.Container>
    </>
  );
};

export default MedicalRecords;

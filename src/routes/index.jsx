import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import MedicalRecords from "../pages/MedicalRecords";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/medicalRecord" element={<MedicalRecords />} />
    </Routes>
  );
};

export default AppRoutes;

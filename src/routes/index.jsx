import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import MedicalRecords from "../pages/MedicalRecords";

const PrivateRoute = ({ children, redirectTo }) => {
  const isAuthenticated = localStorage.getItem("@docconn:doctor") !== null;

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute redirectTo="/login">
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/medicalRecords"
        element={
          <PrivateRoute redirectTo="/login">
            <MedicalRecords />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;

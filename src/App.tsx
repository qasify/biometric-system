import React from "react";
import Login from "./pages/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full overflow-y-auto bg-background-light">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
};

export default App;

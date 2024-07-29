import React from "react";
import Login from "./pages/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-y-auto">
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate to="login" replace />} />
      </Routes>
    </div>
  );
};

export default App;

import React, { useEffect, useRef } from "react";
import Login from "./pages/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
// import { Button } from "./components";
import useInstallPrompt from "./hooks/useInstallPrompt";

const App: React.FC = () => {
  const promptInstall = useInstallPrompt();
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // // Show install prompt on first load or after a certain event
    // setTimeout(() => { promptInstall(); }, 2000)
    if(buttonRef?.current){
      // setTimeout(() => { buttonRef?.current?.click() }, 2000)
    }
  }, [promptInstall]);

  return (
    <div className="flex min-h-screen w-full overflow-y-auto bg-background-light">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
      {/* <Button onClick={()=>promptInstall()} className="fixed top-2 right-2 h-10">Install</Button> */}
    </div>
  );
};

export default App;

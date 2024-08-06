import React from "react";
import { Routes, Route } from "react-router-dom";
import RegisterStepTwo from "./pages/register/RegisterStepTwo";
import RegisterStepOne from "./pages/register/RegisterStepOne";

function App() {
  return (
    <Routes>
      <Route path="/register-step-one" element={<RegisterStepOne />} />
      <Route path="/register-step-two" element={<RegisterStepTwo />} />
    </Routes>
  );
}

export default App;

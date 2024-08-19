import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import SignUp from "./Components/SignUp";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div className=" font-mono capitalize bg-cPrimary text-tPrimary">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./components/login/Login";
import SignUp from "./components/signUp/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;

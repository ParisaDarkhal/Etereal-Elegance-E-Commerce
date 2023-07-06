import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./components/login/Login";
import SignUp from "./components/signUp/Signup";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/home/Home";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;

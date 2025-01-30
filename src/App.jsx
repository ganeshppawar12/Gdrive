import React from "react";
import { useAuth } from "./AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";


function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/login" element={<LoginPage />}></Route>
      <Route path='/' element={ <Dashboard />}></Route>


    </Routes>
          
    </BrowserRouter>
  );
}

export default App;

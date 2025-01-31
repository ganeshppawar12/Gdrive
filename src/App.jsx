import React from "react";
import { useAuth } from "./AuthProvider";
import { HashRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";


function App() {
  return (
    <HashRouter>
    <Routes>

      <Route path="/" element={<LoginPage />}></Route>
      <Route path='/dashboard' element={ <Dashboard />}></Route>


    </Routes>
          
    </HashRouter>
  );
}

export default App;

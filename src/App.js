import React from "react";
import './app.css'
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </div>
  );
};

export default App;

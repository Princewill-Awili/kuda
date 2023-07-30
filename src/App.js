import React,{useState, createContext} from "react";
import './app.css'
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";


export const KudaContexts = createContext();

const App = () => {
  const [showFilm,setShowFilm] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  return (
    <KudaContexts.Provider value={{showFilm,setShowFilm, activeLink,setActiveLink}}>
      <div className='app'>
        {
          showFilm && <div className='film' onClick={()=>{
            setShowFilm(false);
            setActiveLink('');
          }}
          >
          </div>
        }
        <Navbar />
        <Routes>
          <Route exact path='/' element={<LandingPage/>} />
        </Routes>
      </div>
    </KudaContexts.Provider>
  );
};

export default App;

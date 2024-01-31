import React,{Component} from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import Contact from "./Screens/Contact";
import Inicio from "./Screens/Inicio";
import Funcion from "./Screens/Funcion";
import Quienes from "./Screens/Quienes";

function App() {
  return (
    <div>
      <div>
      <h1>Software ganadero</h1>
      <button onClick={alert}>Iniciar sesion </button>
      <button>Registrarse </button>
      </div>
      

      <h3>LLeva la mejor solución para el manejo de tú ganaderia</h3>
<Router>
      <NavBar/>
      
      <Routes>
        
        <Route path="/home" element={<Inicio/>}/>
        
        <Route path="funcion" element={< Funcion/>}/>

        <Route path="/quienes" element={<Quienes/>}/>
        
        <Route path="/contact" element={< Contact/>}/>

      </Routes>
      </Router>
    </div>
      
      
   


  );
}

export default App;

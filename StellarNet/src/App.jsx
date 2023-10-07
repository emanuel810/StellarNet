import React from 'react';
import './App.css'
import { BarraNavegacion } from './componentes/BarraNavegacion.jsX';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './componentes/Banner';
import { Projects } from './componentes/Projects';
import { Footer } from './componentes/Footer';

function App() {
  
  return (
    <>
      <div>  
      <BarraNavegacion/>
      <Banner/>
      <Projects/>
      <Footer/>
      </div>
    </>
  )
}

export default App

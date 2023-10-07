import React from 'react';
import './App.css'
import { BarraNavegacion } from './componentes/BarraNavegacion.jsX';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './componentes/Banner';

function App() {
  
  return (
    <>
      <div>  
      <BarraNavegacion/>
      <Banner/>
      </div>
    </>
  )
}

export default App

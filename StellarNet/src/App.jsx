import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { PaginaPrincipal } from './paginas/PaginaPrincipal';
import {IniciarSesion} from './paginas/IniciarSesion'
import {Registrar} from './paginas/Registrar'

function App() {
  
  return (
   <>
   <div>
   <Router>
      <Routes>
        <Route path="/" element={<IniciarSesion />} />
        <Route path="/home" element={<PaginaPrincipal />} />
        <Route path="/registro" element={<Registrar />} />
        <Route path="*" element={<div>
          <h1>no funciona</h1>
        </div>} />
      </Routes>
    </Router>
   </div>
   </>
  )
}

export default App

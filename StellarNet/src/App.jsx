import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { PaginaPrincipal } from './paginas/PaginaPrincipal';
import {IniciarSesion} from './paginas/IniciarSesion'
import {Registrar} from './paginas/Registrar'
import { PaginaSoporte } from './paginas/PaginaSoporte';
import { PaginaOpcionSoporte } from './paginas/PaginaOpcionSoporte';
import { PaginaError } from './paginas/PaginaError';

function App() {
  
  return (
   <>
   <div>
   <Router>
      <Routes>
        <Route path="/" element={<IniciarSesion />} />
        <Route path="/inicio" element={<PaginaPrincipal />} />
        <Route path="/registro" element={<Registrar />} />
        <Route path="/soporte" element={<PaginaOpcionSoporte />} />
        <Route path="/soporte/generacionTicket" element={<PaginaSoporte />} />
        <Route path="*" element={<PaginaError/>} />
      </Routes>
    </Router>
   </div>
   </>
  )
}

export default App

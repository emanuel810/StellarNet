import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { PaginaLogin } from './Paginas/PaginaLogin.jsx';
import { PaginaRegistro } from './Paginas/PaginaRegistro.jsx';
import { PaginaInicio } from './Paginas/PaginaInicio.jsx';
import { PaginaDashboard } from './Paginas/PaginaDashboard.jsx';
import { PaginaTareas } from './Paginas/PaginaTareas.jsx';
import { PaginaError } from './Paginas/PaginaError.jsx';
import { PaginaTicket } from './Paginas/PaginaTicket.jsx';
function App() {

  return (
    <>
      <div>
      <Router>
      <Routes>
        <Route path="/" element={<PaginaLogin />} />
        <Route path="/registro" element={<PaginaRegistro />} />
        <Route path="/inicio" element={<PaginaInicio />} />
        <Route path="/dashboard" element={<PaginaDashboard />} />
        <Route path="/tareas" element={<PaginaTareas />} />
        <Route path="/ticket" element={<PaginaTicket />} />
        <Route path="*" element={<PaginaError />} />
      </Routes>
    </Router>
      </div>
    </>
  )
}

export default App

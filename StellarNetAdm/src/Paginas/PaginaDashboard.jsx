import React from 'react'
import '../Estilos/Inicio.css'
import '../Estilos/Dashboard.css'

import { Dashboard } from '../Componentes/Dashboard.jsx';
import { BarraNavegacion } from '../Componentes/BarraNavegacion.jsx';
export const PaginaDashboard = () => {
  return (
    <div>
        <BarraNavegacion/>
        <Dashboard/>
    </div>
  )
}
 
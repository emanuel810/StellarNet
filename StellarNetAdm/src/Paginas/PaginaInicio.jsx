import React from 'react'
import '../Estilos/Inicio.css'
import '../Estilos/BarraNavegacion.css'

import { Inicio } from '../Componentes/Inicio.jsx';
import { BarraNavegacion } from '../Componentes/BarraNavegacion.jsx';

export const PaginaInicio = () => {
  return (
    <div>
        <BarraNavegacion/>
        <Inicio/>
    </div>
  )
}

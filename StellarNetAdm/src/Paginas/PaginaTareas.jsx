import React from 'react'
import '../Estilos/Inicio.css'
import '../Estilos/Tareas.css'

import { BarraNavegacion } from '../Componentes/BarraNavegacion.jsx';
import { Tareas } from '../Componentes/Tareas.jsx';

export const PaginaTareas = () => {
  return (
    <div>
        <BarraNavegacion/>
        <Tareas/>
    </div>
  )
}

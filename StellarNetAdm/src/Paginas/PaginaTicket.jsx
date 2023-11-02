import React from 'react'
import '../Estilos/Inicio.css'
import '../Estilos/Ticket.css'

import { BarraNavegacion } from '../Componentes/BarraNavegacion.jsx';
import { Ticket } from '../Componentes/Ticket.jsx';

export const PaginaTicket = () => {
  return (   
    <div>
        <BarraNavegacion/>
        <Ticket/>
    </div>
  )
}

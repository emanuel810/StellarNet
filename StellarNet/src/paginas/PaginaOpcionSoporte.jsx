import React from 'react'


import '../css/BarraNavegacion.css'
import '../css/OpcionSoporte.css'
import '../css/Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BarraNavegacion } from '../componentes/Principal/BarraNavegacion.jsx';
import { OpcionSoporte } from '../componentes/Principal/OpcionSoporte.jsx';
import { Footer } from '../componentes/Principal/Footer.jsx';

export const PaginaOpcionSoporte = () => {
  return (
    <>
    <div>  
    <BarraNavegacion/>
    <OpcionSoporte/>
    <Footer/>
    </div>
    </>
  )
}
 
import React from 'react'

import '../css/BarraNavegacion.css'
import '../css/Soporte.css'
import '../css/Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BarraNavegacion } from '../componentes/Principal/BarraNavegacion.jsx';
import { Soporte } from '../componentes/Principal/Soporte.jsx';
import { Footer } from '../componentes/Principal/Footer.jsx';

export const PaginaSoporte = () => {
  return (
    <>
    <div>  
    <BarraNavegacion/>
    <Soporte/>
    <Footer/>
    </div>
    </>
  )
}

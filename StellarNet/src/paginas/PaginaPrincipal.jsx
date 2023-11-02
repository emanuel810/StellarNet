import React from 'react'

import '../App.css'
import '../css/BarraNavegacion.css'
import '../css/Banner.css'
import '../css/Servicios.css'
import '../css/Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BarraNavegacion } from '../componentes/Principal/BarraNavegacion.jsx';
import { Banner } from '../componentes/Principal/Banner';
import { Projects } from '../componentes/Principal/Servicios.jsx';
import { Footer } from '../componentes/Principal/Footer.jsx';

export const PaginaPrincipal = (props) => {

  return (
    <>
    <div>  
    <BarraNavegacion/>
    <Banner/>
    <Projects/>
    <Footer/>
    </div>
  </>
  )
}

import React from 'react'
import Nave from "../../assets/img/NaveReparada.png";
import { Link } from 'react-router-dom';
export const OpcionSoporte = () => {
  return (
    <div className='opcionSoporte'>
      <header className='TituloSoporte'>
        <h1>Bienvenido al Soporte Técnico</h1>
      </header>

      <main className='principal'>
        <p className='parrafo'>Somos una empresa comprometida en brindar soluciones tecnológicas de alta calidad. Nuestro objetivo es mantener a nuestros clientes conectados de manera confiable y eficiente. Ofrecemos una amplia gama de servicios, desde Internet de alta velocidad hasta llamadas y mensajes de calidad. Estamos aquí para atender todas tus necesidades de comunicación.</p>

        <p className='parrafo'>Nuestro equipo de soporte técnico está compuesto por expertos altamente capacitados y dispuestos a ayudarte en cualquier momento. Entendemos que los problemas técnicos pueden surgir en cualquier momento, y estamos comprometidos en resolverlos de manera oportuna. Queremos que tengas la mejor experiencia con nuestros servicios, por lo que estamos disponibles para asistirte en cualquier pregunta, consulta o problema que puedas tener. Además, para brindarte un servicio más eficiente, te ofrecemos dos opciones:</p>

        <ul className='lista'>
          <Link to={'/soporte/generacionTicket'}><li className='listaOrdenada'><a href="">Reportar un Error</a></li></Link>
          <Link to={'/soporte/rastreoTicket'}><li className='listaOrdenada'><a href="">Rastreo</a></li></Link>
        </ul>
      </main>

      <img className='NaveReparada' src={Nave} alt="Nave Reparada" />
    </div>
  )
}

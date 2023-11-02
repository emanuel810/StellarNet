import React from 'react'
import imagen from '../assets/img/helpDesk.png';

export const Inicio = () => {
  return (
    <div className='inicio'>
    <div className='header'>
        <h1>Bienvenido al Help Desk</h1>
    </div>

    <div class="mission-vision">
        <img src={imagen} alt="Imagen de Help Desk"/>
        <p><strong>Misión:</strong> Nuestra misión es proporcionar un soporte eficiente y oportuno a nuestros clientes, ayudándoles a resolver sus problemas y desafíos tecnológicos.</p>
        <p><strong>Visión:</strong> Queremos ser líderes en el servicio de atención al cliente, brindando soluciones innovadoras y manteniendo la satisfacción de nuestros usuarios.</p>
    </div>
    </div>
  )
}

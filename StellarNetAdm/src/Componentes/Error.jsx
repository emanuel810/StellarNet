import React from 'react'
import imagen from '../assets/img/Logotipo.png';
import { Link } from 'react-router-dom';
export const Error = () => {
  return (
    <div className="error">
        <div className="container">
        <img className="image" src={imagen} alt="Imagen personalizada"/>
        <h1>404</h1>
        <h1>Página no encontrada</h1>
        <p>Lo sentimos, la página que estás buscando no se encuentra disponible.</p>
        <Link to={"/"}><a className="btn">Regresar al inicio de sesión</a></Link>
    </div>
    </div>
  )
}

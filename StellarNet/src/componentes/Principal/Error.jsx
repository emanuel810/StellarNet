import React from 'react'
import { Link } from 'react-router-dom';
import Nave from "../../assets/img/ImagenRectangularSinFondo.png";
export const Error = () => {
  return (
    <div className='error'>
    <div class="container">
    <img className="image" src={Nave} alt="Imagen personalizada"/>
    <h1>404</h1>
    <h1>Página no encontrada</h1>
    <p>Lo sentimos, la página que estás buscando no se encuentra disponible.</p>
    <Link to={"/"}><a class="btn">Regresar al inicio de sesión</a></Link>
    </div>
    </div>
  )
}

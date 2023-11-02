import React from 'react'
import { Link } from 'react-router-dom';

export const BarraNavegacion = () => {
  return (
    <div className="navbar">
        <Link to={"/inicio"}><p >Inicio</p></Link>
        <Link to={"/dashboard"}><p >Dashboard</p></Link>
        <Link to={"/tareas"}><p >Tareas</p></Link>
        <Link to={"/"}><p className="logout-button">Cerrar Sesión</p></Link>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom';

export const Registrarse = () => {
 
  return (
    <div className='sesion'>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
    <div className="wrapper">
      <form action="">
        <h1>Registrate</h1>
        <div className="input-box">
          <input type="text" placeholder="Nombre" required />
          <i className='bx bxs-lock-alt'></i>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Apellido" required />
          <i className='bx bxs-lock-alt'></i>
        </div>
        <div className="input-box">
          <input type="number" placeholder="Telefono" required />
          <i className='bx bxs-lock-alt'></i>
        </div>
        <div className="input-box">
          <input type="email" placeholder="Correo Electronico" required />
          <i className='bx bxs-lock-alt'></i>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Contraseña" required />
          <i className='bx bxs-user'></i>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Confirmacion de contraseña" required />
          <i className='bx bxs-user'></i>
        </div>
        <Link to="/home"><button type="submit" className="btn">Registrarse</button></Link>

        <div className="registrer-link">
        <Link to="/"><a className="link" >Regresar</a></Link>
        </div>
      </form>
    </div>
    </div>
  )
}

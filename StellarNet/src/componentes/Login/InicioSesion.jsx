import React from 'react'
import { Link } from 'react-router-dom';

export const InicioSesion = () => {

  return (
    <div className='sesion'>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <div className="wrapper">
        <form action="">
          <h1>Iniciar Sesion</h1>
          <div className="input-box">
            <input type="text" placeholder="Nombre" required />
            <i className='bx bxs-lock-alt'></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Contraseña" required />
            <i className='bx bxs-user'></i>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />Recuerdame
            </label>
            <a href="#">Se te olvidó la contraseña</a>
          </div>
          <Link to="/home"><button type="submit" className="btn">Iniciar Sesion</button></Link>

          <div className="registrer-link">
            <p>No tienes cuenta?</p>
            <Link to="/registro"><a className="link">Registrate</a></Link>
          </div>
        </form>
      </div>
    </div>
  )
}

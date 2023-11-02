import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const InicioSesion = () => {

  const ENDPOINT = "http://localhost:4000/usuario";
  const [urlDestino, setUrlDestino] = useState('/');
  const [inputValue, setInputValue] = useState('');
  const [currentUser, setCurrentUser] = useState({
    Usuario: "",
    Contrasena: ""
  })

  const validar = async () => {
    try {
      if (
        currentUser.Usuario === '' ||
        currentUser.Contrasena === ''
      ) {
        alert('Por favor, complete todos los campos.');
        return;
      } else {
        let fetchResp = await fetch(ENDPOINT + "/" + currentUser.Usuario + "/" + currentUser.Contrasena + "/")
        let dataJson = await fetchResp.json()
        if (fetchResp != null) {
          setCookie('usuario', currentUser.Usuario, 1)
          setUrlDestino('/inicio');
        }
      }
    } catch {
      alert("no se encontro")
    }
  }

  const valueHasChanged = (e) => {
    setCurrentUser({
      ...currentUser,
      [e.target.name]: e.target.value,
    })
  }

  const inicioSesion = () => {
    validar()
  }

  const setCookie = (name, value, days) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    const cookieValue = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = cookieValue;
  };

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
            <input type="text" value={currentUser.Usuario} onChange={valueHasChanged} id='Usuario' name='Usuario' placeholder="Usuario" required />
            <i className='bx bxs-lock-alt'></i>
          </div>
          <div className="input-box">
            <input type="password" value={currentUser.Contrasena} onChange={valueHasChanged} id='Contrasena' name='Contrasena' placeholder="Contraseña" required />
            <i className='bx bxs-user'></i>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />Recuerdame
            </label>
            <a href="">Se te olvidó la contraseña</a>
          </div>
          <Link to={urlDestino}><button type="submit" onClick={inicioSesion} className="btn">Iniciar Sesion</button></Link>

          <div className="registrer-link">
            <p>No tienes cuenta?</p>
            <Link to="/registro"><a className="link">Registrate</a></Link>
          </div>
        </form>
      </div>
    </div>
  )
}

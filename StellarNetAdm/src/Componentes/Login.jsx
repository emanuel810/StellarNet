import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Logotipo from "../assets/img/Logotipo.png";

export const Login = () => {

  const ENDPOINT = "http://localhost:4000/soporte";
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
    <div className='login'>
      <div id="login-container">
        <img id="logo" src={Logotipo} alt="Logotipo" />
        <form id="login-form">
          <input type="text" value={currentUser.Usuario} onChange={valueHasChanged} id='Usuario' name='Usuario' placeholder="Correo" required />
          <input type="password" value={currentUser.Contrasena} onChange={valueHasChanged} id='Contrasena' name='Contrasena' placeholder="Contraseña" required />
          <Link to={urlDestino}><input onClick={inicioSesion} type="submit" value="Iniciar Sesión" /></Link>
        </form>
        <div className="registro">
          <Link to={"/registro"}><input type="submit" value="Regístrate" /></Link>
        </div>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logotipo from "../assets/img/Logotipo.png";
export const Registro = () => {

  const ENDPOINT = "http://localhost:4000/soporte/"
  const [currentUser, setCurrentUser] = useState({
    Nombre: "",
    Correo: "",
    Contrasena: ""
  })

  const validar = async () => {
    try {
      let fetchResp = await fetch(ENDPOINT + "/" + currentUser.Correo + "/")
      let dataJson = await fetchResp.json()
      if (fetchResp != null) {
        alert("usuario repetido")
      }
    } catch {
      if (
        currentUser.Nombre === '' ||
        currentUser.Correo === '' ||
        currentUser.Contrasena === ''
      ) {
        alert('Por favor, complete todos los campos.');
        return;
      }else{
        fetch(ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(currentUser)
        })
        alert("Usuario Agregado")
      }
    }
  }

  const valueHasChanged=(e)=>{
    setCurrentUser({
      ...currentUser,
      [e.target.name]: e.target.value,
    })
  }
  
  const formSubmit = (e)=>{
    validar();
    e.preventDefault()
  }

  return (
   <div className='login'>
    <div id="login-container">
      <img id="logo" src={Logotipo} alt="Logotipo" />

      <form id="login-form">
        <input type="text" value={currentUser.Nombre} onChange={valueHasChanged} id='Nombre' name='Nombre' placeholder="Nombre de usuario" required />
        <input type="email" value={currentUser.Correo} onChange={valueHasChanged} id='Correo' name='Correo' placeholder="Correo Electronico" required />
        <input type="password" value={currentUser.Contrasena} onChange={valueHasChanged} id='Contrasena' name='Contrasena' placeholder="Contraseña" required />
        <Link className='boton'><input type="submit" onClick={formSubmit} value="Registrarse" /></Link>
      </form>
      <div className="registro">
      <Link to={"/"}><input type="submit" value="Volver al Inicio" /></Link>
      </div>
    </div>
   </div>
  )
}

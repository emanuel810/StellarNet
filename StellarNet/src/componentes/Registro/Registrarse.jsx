import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Registrarse = () => {

  const ENDPOINT = "http://localhost:4000/usuario/"
  const [currentUser, setCurrentUser] = useState({
    Nombre: "",
    Apellido: "",
    Correo: "",
    Usuario: "",
    Contrasena: "", 
    Habilitado: "S"
  })

  const validar = async () => {
    try {
      let fetchResp = await fetch(ENDPOINT + "/" + currentUser.Usuario + "/")
      let dataJson = await fetchResp.json()
      if (fetchResp != null) {
        alert("usuario repetido")
      }
    } catch {
      if (
        currentUser.Nombre === '' ||
        currentUser.Apellido === '' ||
        currentUser.Correo === '' ||
        currentUser.Usuario === '' ||
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
        alert("usuario agregado")
      }
    }
  }

  const valueHasChanged = (e) => {
    setCurrentUser({
      ...currentUser,
      [e.target.name]: e.target.value,
    })
  }

  const formSubmit = (e) => {
    validar();
    e.preventDefault()
  }

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
            <input type="text" value={currentUser.Nombre} onChange={valueHasChanged} id='Nombre' name='Nombre' placeholder="Nombre" required />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input type="text" value={currentUser.Apellido} onChange={valueHasChanged} id='Apellido' name='Apellido' placeholder="Apellido" required />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input type="email" value={currentUser.Correo} onChange={valueHasChanged} id='Correo' name='Correo' placeholder="Correo Electronico" required />
            <i className='bx bx-envelope'></i>
          </div>
          <div className="input-box">
            <input type="text" value={currentUser.Usuario} onChange={valueHasChanged} id='Usuario' name='Usuario' placeholder="Usuario" required />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input type="password" value={currentUser.Contrasena} onChange={valueHasChanged} id='Contrasena' name='Contrasena' placeholder="Contraseña" required />
            <i className='bx bxs-lock-alt'></i>
          </div>
          <Link onClick={formSubmit} ><button type="submit" className="btn">Registrarse</button></Link>

          <div className="registrer-link">
            <Link to="/"><a className="link" >Regresar</a></Link>
          </div>
        </form>
      </div>
    </div>
  )
}

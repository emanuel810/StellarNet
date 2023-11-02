import React, { useState } from 'react'
import { Display } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
export const Soporte = (props) => {

  const setCookie = (name, value, days) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    const cookieValue = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = cookieValue;
  };
  const getCookie = (name) => {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName.trim() === name) {
        return cookieValue;
      }
    }
    return null;
  }
  const cookie = getCookie('usuario')
  
  const [inputValue, setInputValue] = useState();
  const validar = async () => {
    try {
      let fetchResp = await fetch("http://localhost:4000/usuario" + "/" + cookie + "/")
      let dataJson = await fetchResp.json()
      if (fetchResp != null) {
        setCookie('usuarioNumero', dataJson.UsuarioNumero, 1)
      }
    } catch {
      console.log("no tiene usuario")
    }
  }
  validar()
  console.log("es una cokie" + getCookie('usuarioNumero'))
  const handleFileSelect = (event) => {
    const files = event.target.files;
    const imageList = document.getElementById('imageList');
    const errorMessage = document.getElementById('error-message');
    const existingImages = document.querySelectorAll('.image-list-item').length;

    if (existingImages + files.length > 3) {
      errorMessage.innerText = 'Máximo 3 imágenes permitidas en total.';
      event.target.value = null;
      return;
    }

    errorMessage.innerText = '';

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      const listItem = document.createElement('li');
      listItem.classList.add('image-list-item');

      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);
      img.alt = 'Imagen adjunta';

      const fileName = document.createElement('span');
      fileName.classList.add('file-name');
      fileName.innerText = file.name;

      const removeButton = document.createElement('span');
      removeButton.classList.add('remove-image-button');
      removeButton.innerHTML = '×';  // '×' symbol

      removeButton.addEventListener('click', () => {
        listItem.remove();
      });

      listItem.appendChild(img);
      listItem.appendChild(fileName);
      listItem.appendChild(removeButton);
      imageList.appendChild(listItem);
    }
  };
  const ENDPOINT = "http://localhost:4000/ticket/"


  const [currentUser, setCurrentUser] = useState({
    Direccion: "",
    Telefono: "",
    Problema: "",
    Detalles: "",
    Estado: "Pendiente",
    UsuarioNumero: Number(getCookie('usuarioNumero')),
    UsuarioSoporteNumero: 1
  })

  const valueHasChanged = (e) => {
    setCurrentUser({
      ...currentUser,
      [e.target.name]: e.target.value,
    })
  }

  const formSubmit = (e) => {
    console.log(currentUser);
    e.preventDefault()
    if (
      currentUser.Direccion === '' ||
      currentUser.Telefono === '' ||
      currentUser.Problema === '' ||
      currentUser.Detalles === '' 
    ) {
      alert('Por favor, complete todos los campos.');
      return;
    } else {
      fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(currentUser)
      })
      console.alert("Ticket Enviado")
    }
  }



  return (
    <div className='soporte'>
      <div className="form-container">
        <h2>Servicio de Asistencia</h2>
        <form action="" method="post" encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="direccion">Dirección</label>
            <input type="text" value={currentUser.Direccion} onChange={valueHasChanged} id="Direccion" name="Direccion" required />
          </div>
          <div className="form-group">
            <label htmlFor="Telefono">Teléfono</label>
            <input type="tel" value={currentUser.Nombre} onChange={valueHasChanged} id="Telefono" name="Telefono" />
          </div>
          <div className="form-group">
            <label htmlFor="problema">Cual es el problema?</label>
            <input type="text" value={currentUser.Problema} onChange={valueHasChanged} id="Problema" name="Problema" required />
          </div>
          <div className="form-group">
            <label htmlFor="detalles">Detalles adicionales</label>
            <textarea value={currentUser.Detalles} onChange={valueHasChanged} id="Detalles" name="Detalles"></textarea>
          </div>
          <br />
          <div className="form-group">
            <label>Adjunto evidencias (máximo 3 imágenes):</label>
            <label htmlFor="adjunto" className="custom-file-button">
              Elegir imágenes
            </label>
            <input
              type="file"
              id="adjunto"
              name="adjunto[]"
              className="file-input"
              accept="image/*"
              multiple
              onChange={handleFileSelect}
            />
            <p id="error-message" className="error-message"></p>
          </div>
          <ul id="imageList" className="image-list"></ul>
          <Link to={'/'}><button className='botones' onClick={formSubmit} type="submit">Enviar</button></Link>
          <Link to={'/'}><button className='botones' type="submit">Regresar</button></Link>
        </form>
      </div>
    </div>
  )
}

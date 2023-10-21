import React from 'react'
import { Link } from 'react-router-dom';
export const Soporte = () => {
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

  return (
    <div className='soporte'>
      <div className="form-container">
        <h2>Servicio de Asistencia</h2>
        <form action="#" method="post" encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="direccion">Dirección:</label>
            <input type="text" id="direccion" name="direccion" required />
          </div>
          <div className="form-group">
            <label htmlFor="telefono_adicional">Teléfono adicional:</label>
            <input type="tel" id="telefono_adicional" name="telefono_adicional" />
          </div>
          <div className="form-group">
            <label htmlFor="problema">Cual es el problema?</label>
            <input type="text" id="problema" name="problema" required />
          </div>
          <div className="form-group">
            <label htmlFor="detalles">Detalles adicionales:</label>
            <textarea id="detalles" name="detalles"></textarea>
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
          <Link to={'/inicio'}><button className='botones' type="submit">Enviar</button></Link>
          <Link to={'/soporte'}><button className='botones' type="submit">Regresar</button></Link>
        </form>
      </div>
    </div>
  )
}

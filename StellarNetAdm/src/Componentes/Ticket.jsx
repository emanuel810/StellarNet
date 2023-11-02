import React, {useEffect, useState } from 'react'

export const Ticket = () => {

  const [nuevoComentario, setNuevoComentario] = useState('');
  const [comentarios, setComentarios] = useState([]);
  const [usuario, setUsuario] = useState('');

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
  const cookieTicket = getCookie('Ticket')
  const cookieUsuario = getCookie('usuario')

  const [users, setUsers] = useState([{
    TicketNumero:1,
    Usuario:'',
    Nombre:'',
    Apellido:'',
    Correo:'',
    Direccion:'',
    Telefono:'',
    Problema:'',
    Detalles:'',
    Estado:'',
    Habilitado:''
  }])

  useEffect(()=>{
    (async()=>{
      let fetchResp = await fetch("http://localhost:4000/ticket/"+getCookie('Ticket')+"/"+getCookie('usuario')+"/")
      let dataJson = await fetchResp.json()
      setUsers(dataJson)
    })()
  },[])

  useEffect(() => {
    console.log(users); // Esto mostrará el valor actualizado de users cuando cambie
  }, [users]);

  const agregarComentario = () => {
    if (nuevoComentario !== '') {
      const nuevoComentarioItem = `${getCookie('usuario')}: ${nuevoComentario}`;
      setComentarios([...comentarios, nuevoComentarioItem]);
      setNuevoComentario('');
    }
  }

  return (
    <div className="informacion">
      {users.map((row)=>(
       <div className="container" key={"ticket"+row.TicketNumero}>
       <h1>Información de Confirmación</h1>
       <div className="row">
         <div className="col">
           <p><strong>Usuario:</strong> {row.Usuario}</p>
           <p><strong>Nombre:</strong> {row.Nombre}</p>
           <p><strong>Apellido:</strong> {row.Apellido}</p>
           <p><strong>Correo:</strong> {row.Correo}</p>
         </div>
         <div className="col">
           <p><strong>Direccion:</strong> {row.Direccion}</p>
           <p><strong>Telefono:</strong> {row.Telefono}</p>
           <p><strong>Problema:</strong> {row.Problema}</p>
           <p><strong>Detalles:</strong> {row.Detalles}</p>
         </div>
       </div>

       <div className="form-group">
         <label for="deshabilitar-usuario">Deshabilitar Usuario:</label>
         <select id="deshabilitar-usuario" name="deshabilitar-usuario">
           <option value="si">Sí</option>
           <option value="no">No</option>
         </select>
       </div>

       <div className="form-group">
         <label for="estado">Estado:</label>
         <select id="estado" name="estado">
           <option value="nuevos">Pendiente</option>
           <option value="asignados">En proceso</option>
           <option value="sin_asignar">Resuelto</option>
         </select>
       </div>

       <h2>Comentarios:</h2>
       <div className="comment-container">
         <ul className="comment-list" id="comment-list">
           {comentarios.map((comentario, index) => (
             <li key={index}>
               <p><strong>{comentario}</strong></p>
             </li>
           ))}
         </ul>
       </div>

       <div className="comment-form">
         <h3>Agregar Comentario:</h3>
         <div className="form-group">
           <label for="nuevo-comentario">Comentario:</label>
           <textarea id="nuevo-comentario" name="nuevo-comentario" rows="4" value={nuevoComentario} onChange={(e) => setNuevoComentario(e.target.value)} />
         </div>
         <button className="btn" type="button" id="agregar-comentario" onClick={agregarComentario}>Agregar Comentario</button>
       </div>
       <div className="center-button">
         <button className="btn" id="guardar" type="button">Guardar</button>
       </div>
     </div>
      ))}
       
    </div>
  )
}

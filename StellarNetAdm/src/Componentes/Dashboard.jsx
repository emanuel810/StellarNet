import React, { useEffect, useState } from 'react'
import socketIOClient from 'socket.io-client';

const socket = socketIOClient("http://localhost:4000"); // Asegúrate de usar la URL correcta de tu servidor Socket.io

export const Dashboard = () => {

  const [users, setUsers] = useState([])
  const [valorSeleccionado, setValorSeleccionado] = useState([]);
  useEffect(()=>{
    (async()=>{
      let fetchResp = await fetch("http://localhost:4000/ticket/")
      let dataJson = await fetchResp.json()
      setUsers(dataJson)
    })()
  },[])

  useEffect(()=>{
    (async()=>{
      let fetchResp = await fetch("http://localhost:4000/soporte/")
      let dataJson = await fetchResp.json()
      setValorSeleccionado(dataJson)
    })()
  },[])

  useEffect(() => {
    socket.on('nuevoDato', (data) => {
      setNuevoDato(data);
    });
  }, []);

  const enviarNuevoDato = () => {
    socket.emit('nuevoDato', "¡Este es un nuevo dato!");
  };

  return (
    <div className='dashboard'>
      <div className='header'>
        <h1>Dashboard en tiempo real</h1>
      </div>
      <table className="tabla">
        <thead>
          <tr>
            <th>No.</th>
            <th>Usuario</th>
            <th>Problema</th>
            <th>Estado</th>
            <th>Habilitado</th>
            <th>Encargado</th>
          </tr>
          </thead>
          <tbody>
          {users.map((row)=>(
            <tr data-estado={row.Estado} key={"ticket"+row.TicketNumero}>
              <td>{row.TicketNumero}</td>
              <td>{row.Usuario}</td>
              <td>{row.Problema}</td>
              <td>{row.Estado}</td>
              <td>{row.Habilitado}</td>
              <td>
              <select id="opciones">
              <option value="opciones">Sin asignacion</option>
              {valorSeleccionado.map((row)=>(
                <option key={"Corp"+row.Nombre} value={row.Nombre}>{row.Nombre}</option>
              ))}
              </select>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
    </div>
  )
}

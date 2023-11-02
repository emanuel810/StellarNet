import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Tareas = () => {


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
  const [users, setUsers] = useState([])

  console.log(cookie)

  useEffect(() => {
    (async () => {
      let fetchResp = await fetch("http://localhost:4000/ticket" + "/" + cookie + "/")
      let dataJson = await fetchResp.json()
      setUsers(dataJson)
    })()
  }, [])

  const setCookie = (name, value, days) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    const cookieValue = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = cookieValue;
  };

  function imprimirTicketNumero(ticketNumero) {
    console.log("TicketNumero: " + ticketNumero);
    setCookie("Ticket",ticketNumero,1)
  }

  return (
    <div>
      <div className='header'>
        <h1>Tareas Asignadas</h1>
      </div>
      <table className='tabla'>
        <thead>
          <tr>
            <th>No.</th>
            <th>Usuario</th>
            <th>Problema</th>
            <th>Estado</th>
            <th>Habilitado</th>
            <th>Mas</th>
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
              <td onClick={() => imprimirTicketNumero(row.TicketNumero)} ><Link to="/ticket">Detalles</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

import React,{useState} from 'react'
import '../css/InicioSesion.css'
import { InicioSesion } from '../componentes/Login/InicioSesion.jsx';

export const IniciarSesion = (props) => {

  const [usuario, setUsuario] = useState(''); 

  const handleDataChange = (newData) => {
    setUsuario(newData);
  }

  const dataToSend = usuario;
  if (dataToSend) {
    props.onDataChange(dataToSend); 
  }

  return (
    <>
    <div>
        <InicioSesion onDataChange={handleDataChange}/>
    </div>
    </>
  )
}
 
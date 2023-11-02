import React, { useState } from 'react'
import imagen from '../assets/logotipo.png';

export const Rastreo = () => {
    const [trackingCode, setTrackingCode] = useState('');
    const [trackingPhases, setTrackingPhases] = useState([]);

    const trackTicket = () => {
        // Simulación: aquí deberías consultar un servicio o base de datos para obtener el estado del ticket
        var bloque = document.getElementById("bloque");
        // Fases de rastreo (simulación)
        const phases = [
            { name: "Creación del Ticket", completed: true },
            { name: "Asignación y Priorización", completed: true },
            { name: "Investigación y Diagnóstico", completed: false },
            { name: "Comunicación con el Cliente", completed: false },
            { name: "Resolución del Problema", completed: false },
            { name: "Verificación y Prueba", completed: false },
            { name: "Cierre del Ticket", completed: false }
        ];
        bloque.style.display="block";
        // Actualiza el estado de las fases
        setTrackingPhases(phases);
    }

    return (
        <div className="rastreoTicket">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" crossorigin="anonymous"/>
            <header className="rastreoTitulo">
                <img src={imagen} alt="" />
                <h1>Rastreo de Ticket</h1>
            </header>

            <main className="rastreoMain">
                <p>Para rastrear el estado de tu ticket, ingresa el código de rastreo proporcionado y haz clic en el botón "Rastrear". A continuación, te mostraremos el estado actual de tu ticket y cualquier actualización relevante.</p>

                <input
                    className="rastreoinput"
                    type="text"
                    id="trackingCode"
                    placeholder="Ingresa el código de rastreo"
                    value={trackingCode}
                    onChange={(e) => setTrackingCode(e.target.value)}
                />
                <button className="rastreoBoton" onClick={trackTicket}>Rastrear</button>
            </main>

            <div className="bloque" id="bloque">
                <div className="tracking-block">
                    <ul className="rastreoLista" id="trackingList">
                        {trackingPhases.map((phase, index) => (
                            <li key={index}>
                                <span className="phase-text">{phase.name}</span>
                                {phase.completed ? (
                                    <i className="fas fa-check-circle checkmark"></i>
                                ) : (
                                    <i className="fas fa-times-circle crossmark"></i>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <hr />
                <div className="additional-info">
                    <div className="additional-info-left">
                        <div className="info-section">
                            <span className="info-title">Número de guía:</span>
                            <span>1w239338530</span>
                        </div>
                        <div className="info-section">
                            <span className="info-title">Estado:</span>
                            <span>ENTREGADO</span>
                        </div>
                        <div className="info-section">
                            <span className="info-title">Remitente:</span>
                            <span>KEMIK</span>
                        </div>
                        <div className="info-section">
                            <span className="info-title">Destinatario:</span>
                            <span>JOSUÉ EMANUEL DIONICIO ORELLANA</span>
                        </div>
                    </div>
                    <div className="additional-info-right">
                    <p>
                        <span className="info-title">Creación del Ticket:</span><br/>
                        El agente de soporte técnico registra los detalles del problema en un ticket, que incluye información relevante como la descripción del problema, la fecha y hora de reporte y los datos de contacto del cliente.
                    </p>
                    <p>
                        <span className="info-title">Asignación y Priorización:</span><br/>
                        El ticket se asigna a un agente o técnico de soporte específico o a un grupo de soporte.
                    </p>
                    <p>
                        <span className="info-title">Investigación y Diagnóstico:</span><br/>
                        El agente asignado comienza a investigar y diagnosticar el problema reportado.
                    </p>
                    <p>
                        <span className="info-title">Comunicación con el Cliente:</span><br/>
                        El agente se comunica con el cliente para proporcionar actualizaciones sobre el progreso de la resolución del problema.
                    </p>
                    <p>
                        <span className="info-title">Verificación y Prueba:</span><br/>
                        Después de realizar los cambios, se verifica y prueba el sistema para asegurarse de que el problema se haya resuelto de manera efectiva.
                    </p>
                    <p>
                        <span className="info-title">Cierre del Ticket:</span><br/>
                        Cuando el problema se resuelve de manera satisfactoria y se confirma que el cliente está satisfecho, el ticket se marca como cerrado.
                    </p>
                </div>
                </div>
            </div>
        </div>
    );
}

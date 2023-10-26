import { useState, useEffect } from "react";
import {Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';

import React from 'react'
import logo from '../../assets/img/ImagenRectangularSinFondo.png';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';

export const BarraNavegacion = () => {
  const [activarLink, setActivarLink]= useState('home');
  const [scrolear, setScrolear] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolear(true);
      } else {
        setScrolear(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const actualizarEstadoLink = (value) => {
    setActivarLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolear ? "scrolear":""}>
      <Container>
        <Navbar.Brand href="/inicio">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/inicio" className={activarLink == 'inicio'? 'active-navbar-link':'navbar-link'}  onClick={()=> actualizarEstadoLink('inicio')} >Inicio</Nav.Link>
            <Nav.Link href="/inicio" className={activarLink == 'servicio'? 'active-navbar-link':'navbar-link'}  onClick={()=> actualizarEstadoLink('servicio')} >Servicio</Nav.Link>
            <Nav.Link href="/soporte" className={activarLink == 'soporte'? 'active-navbar-link':'navbar-link'}  onClick={()=> actualizarEstadoLink('soporte')} >Soporte</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="" /></a>
              <a href="#"><img src={navIcon2} alt="" /></a>
              <a href="#"><img src={navIcon3} alt="" /></a>
            </div>
            <Link to={"/"}><button className="usuario">Cerrar Sesion</button></Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}



import { useState, useEffect } from "react";
import {Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import React from 'react'
import logo from '../assets/img/LogoLado.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

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
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activarLink == 'Inicio'? 'active-navbar-link':'navbar-link'}  onClick={()=> actualizarEstadoLink('Inicio')} >Inicio</Nav.Link>
            <Nav.Link href="#skills" className={activarLink == 'Soporte'? 'active-navbar-link':'navbar-link'}  onClick={()=> actualizarEstadoLink('Soporte')} >Soporte</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="" /></a>
              <a href="#"><img src={navIcon2} alt="" /></a>
              <a href="#"><img src={navIcon3} alt="" /></a>
            </div>
            <button className="vvd" onClick={()=> console.log('connect')}><span>Iniciar Sesion</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}



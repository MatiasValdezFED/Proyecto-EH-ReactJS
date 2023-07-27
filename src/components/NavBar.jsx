import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import '../index.css'

function ColorSchemesExample() {
  return (
    <>
      <Navbar className="nav">
        <Container>
          <Navbar.Brand href="#home"><img className="imgLogo" src="src/assets/images/logo/logo.jpg"
          alt="Entre Hilos Logo"/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#articulos">Articulos</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <Nav.Link href="#FAQ">FAQ</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
      
    </>
  );
}

export default ColorSchemesExample;
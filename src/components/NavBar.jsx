import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";
import "../index.css";
import { Link } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <Navbar className="nav">
        <Container>
          <Link to={"/"}>
            <Navbar.Brand>
              <img
                className="imgLogo"
                src="src/assets/images/logo/logo.jpg"
                alt="Entre Hilos Logo"
              />
            </Navbar.Brand>
          </Link>

          <Nav className="me-auto">
            <Nav.Link href="#home">Hilos</Nav.Link>
            <Nav.Link href="#nosotros">Tejidos</Nav.Link>
            <Nav.Link href="#articulos">Cierres</Nav.Link>
            <Nav.Link href="#contacto">Elásticos</Nav.Link>
            <Nav.Link href="#FAQ">Lanas</Nav.Link>
          </Nav>
          <Link to={"/cart"}>
            <CartWidget />
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;

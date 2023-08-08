import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "../index.css";

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
            <Link className="linkNav" to={`/category/Hilos`}>
              Hilos
            </Link>
            <Link className="linkNav" to={`/category/Tejido`}>
              Tejidos
            </Link>
            <Link className="linkNav" to={`/category/Cierres`}>
              Cierres
            </Link>
            <Link className="linkNav" to={`/category/Elasticos`}>
              Elásticos
            </Link>
            <Link className="linkNav" to={`/category/Lanas`}>
              Lanas
            </Link>
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

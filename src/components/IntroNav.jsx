import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function IntroNav() {
  return (
    <div>
      <Navbar fixed="top" collapseOnSelect expand="md" bg="color-base" variant="dark">
        <Container className="ms-4">
          <Navbar.Brand href="#Inicio">David Segura</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#SobreMi">
                  Sobre Mi
                </Nav.Link>
                <Nav.Link href="#Habilidades">
                  Habilidades
                </Nav.Link>
                <Nav.Link href="#Proyectos">
                  Proyectos
                </Nav.Link>
                <Nav.Link href="#Contacto">
                  Contactame
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default IntroNav;

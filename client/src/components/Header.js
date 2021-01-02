import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar
        style={{ color: "white" }}
        bg="dark"
        varient="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand style={{ color: "white" }} href="/">
            PROSHOP
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link style={{ color: "white" }} href="/cart">
                <i className="fas fa-shopping-cart"></i>
                Cart
              </Nav.Link>
              <Nav.Link style={{ color: "white" }} href="/login">
                {" "}
                <i className="fas fa-user"></i>
                Signin
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

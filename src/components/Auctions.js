import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const Auctions = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src="/logo.png"
          alt="Logo"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Your Logo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <Nav>
          <Button variant="outline-primary" className="mr-2">
            Sign In
          </Button>
          <Button variant="primary">Sign Up</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Auctions;

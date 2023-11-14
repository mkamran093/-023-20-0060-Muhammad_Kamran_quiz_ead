import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const Navbarr = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src="../assets/FasTech.png"
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
          <Nav.Link href="#profile">My Profile</Nav.Link>
          <Nav.Link href="#activity">Activity</Nav.Link>
          <Nav.Link href="#works">How it works</Nav.Link>
        </Nav>
        <Nav>
          <Button variant="outline-primary" className="mr-2">
            Create
          </Button>
          <Button variant="primary">Sign In</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbarr;

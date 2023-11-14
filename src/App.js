import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Welcome from "./components/Welcome";
import Navbarr from "./components/Navbar";
import Auctions from "./components/Auctions";
import Discover from "./components/Discover";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbarr />
      <Welcome />
      <Auctions />
      <Discover />
      <Footer />
    </div>
  );
}

export default App;

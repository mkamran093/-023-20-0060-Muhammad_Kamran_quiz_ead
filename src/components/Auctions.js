// src/components/Auction.js
import React from "react";
import { Card, Button } from "react-bootstrap";

const Auction = ({ imageSrc, name, endTime }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageSrc} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Ending Time: {endTime}</Card.Text>
        <Button variant="primary">Bid Now</Button>
      </Card.Body>
    </Card>
  );
};

export default Auction;

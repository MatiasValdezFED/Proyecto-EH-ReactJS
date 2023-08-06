import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../index.css";

function Item({ producto }) {
  const { id, title, price, description, stock } = producto;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to={`/item/${id}`}>
          <Button variant="primary">Ver</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;

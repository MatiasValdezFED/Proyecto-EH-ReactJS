import React from "react";
import ItemCount from "./ItemCount";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useParams } from "react-router-dom";
import "../index.css";

const ItemDetail = ({ productos }) => {
  const { id } = useParams();

  console.log(productos);

  const filteredProducts = productos.filter((producto) => producto.id == id);

  console.log(productos);

  return (
    <div>
      {filteredProducts.map((p) => {
        return (
          <div key={p.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <Card.Text>{p.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Stock: {p.stock}</ListGroup.Item>
                <ListGroup.Item>${p.price}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <ItemCount p={p} />
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default ItemDetail;

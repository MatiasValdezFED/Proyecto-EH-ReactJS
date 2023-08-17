import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../context/ShoppingCartContext";
import "../index.css";

const ItemDetail = ({ productos }) => {
  const { id } = useParams();
  const { addItem } = useContext(CartContext);

  const selectedProduct = productos.find((producto) => producto.id == id);

  const [cantidadAñadida, setCantidad] = useState([0]);

  const agregarCantidad = (cantidad) => {
    setCantidad(cantidad);
    addItem(selectedProduct, cantidad);
  };

  return (
    <div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>{selectedProduct.title}</Card.Title>
            <Card.Text>{selectedProduct.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Stock: {selectedProduct.stock}</ListGroup.Item>
            <ListGroup.Item>${selectedProduct.price}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            {cantidadAñadida > 0 ? (
              <Link to={"/cart"}>Finalizar</Link>
            ) : (
              <ItemCount producto={selectedProduct} onAdd={agregarCantidad} />
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ItemDetail;

import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { CartContext } from "../context/ShoppingCartContext";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import "../index.css";

const ItemDetail = ({ producto }) => {
  const { addItem } = useContext(CartContext);

  const [cantidadAñadida, setCantidad] = useState([0]);

  const agregarCantidad = (cantidad) => {
    setCantidad(cantidad);
    addItem(producto, cantidad);
    Toastify({
      text: "Producto Añadido",
      className: "info",
      position: "center bottom",
      style: {
        background: "linear-gradient(to right, #72002eff, #70566dff)",
      },
    }).showToast();
  };

  if (!producto) return <Loading />;

  return (
    <div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>{producto.title}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{producto.description}</ListGroup.Item>
            <ListGroup.Item>Stock: {producto.stock}</ListGroup.Item>
            <ListGroup.Item>${producto.price}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            {cantidadAñadida > 0 ? (
              <Link to={"/cart"}>Finalizar</Link>
            ) : (
              <ItemCount producto={producto} onAdd={agregarCantidad} />
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ItemDetail;

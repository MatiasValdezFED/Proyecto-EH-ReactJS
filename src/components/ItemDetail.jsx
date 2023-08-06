import React from "react";
import Item from "./Item";
import "../index.css";
import { useParams } from "react-router-dom";

const ItemDetail = ({ listaProductos }) => {
  const { id } = useParams;

  return (
    <div>
      <h1>ItemDetail</h1>
      {listaProductos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemDetail;

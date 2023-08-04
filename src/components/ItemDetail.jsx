import React from "react";
import Item from "./Item";
import "../index.css";

const ItemDetail = ({ listaProductos }) => {
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

import React from "react";
import "../index.css";
import ItemCount from "./ItemCount";

const ItemDetail = ({ productos, id }) => {
  const filteredProduct = productos.filter((producto) => producto.id === id);

  if (!filteredProduct) {
    return <p>Producto no encontrado</p>;
  }

  console.log(filteredProduct);

  return (
    <div>
      <h1>Detalle del Producto</h1>
      <div key={productos.id}>
        <h2>{filteredProduct.title}</h2>
        <ItemCount />
      </div>
    </div>
  );
};

export default ItemDetail;

import React from "react";
import Item from "./Item";
import "../index.css";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemList;

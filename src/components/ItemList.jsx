import React from "react";
import Item from "./Item";
import "../index.css";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <Item key={product.id} id={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;

import React from "react";
import ItemCount from "./ItemCount";
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
            <h2>{p.title}</h2>
            <ItemCount />
          </div>
        );
      })}
    </div>
  );
};

export default ItemDetail;

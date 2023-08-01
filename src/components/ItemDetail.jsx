import React from "react";

const ItemDetail = () => {
  console.log(productos);

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

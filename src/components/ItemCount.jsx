import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const ItemCount = ({ producto, onAdd }) => {
  const [cantidad, setCount] = useState(0);

  const restar = () => {
    if (cantidad > 0) {
      setCount((cantidad) => cantidad - 1);
    }
  };

  const sumar = () => {
    if (cantidad < producto.stock) {
      setCount((cantidad) => cantidad + 1);
    }
  };

  return (
    <>
      <Button
        className="counterButton"
        as="input"
        type="button"
        onClick={restar}
        value="-"
      />{" "}
      <p className="count">{cantidad}</p>
      <Button
        className="counterButton"
        as="input"
        type="button"
        onClick={sumar}
        value="+"
      />{" "}
      <Button
        className="counterButton"
        as="input"
        type="button"
        onClick={() => onAdd(cantidad)}
        value="Agregar al carrito"
      />
    </>
  );
};

export default ItemCount;

import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const ItemCount = ({ p }) => {
  const [count, setCount] = useState(0);

  const restar = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  const sumar = () => {
    if (count < p.stock) {
      setCount((count) => count + 1);
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
      <p className="count">{count}</p>
      <Button
        className="counterButton"
        as="input"
        type="button"
        onClick={sumar}
        value="+"
      />{" "}
    </>
  );
};

export default ItemCount;

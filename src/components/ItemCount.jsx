import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const ItemCount = () => {
  const [count, setCount] = useState(0);

  const restar = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  const sumar = () => {
    // if (count < stock) {
    setCount((count) => count + 1);
    //}
  };

  return (
    <>
      <Button as="input" type="button" onClick={restar} value="Restar" />{" "}
      <p>{count}</p>
      <Button as="input" type="button" onClick={sumar} value="Sumar" />{" "}
    </>
  );
};

export default ItemCount;

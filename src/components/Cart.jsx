import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";
import "../index.css";

const Cart = () => {
  const { cart, eliminarItem, limpiarCart } = useContext(CartContext);

  console.log(cart);

  const cantidadTotal = cart.length;

  console.log(cantidadTotal);

  return (
    <div>
      {cantidadTotal < 1 ? <p>no hay un pingo</p> : <p>Hay elementos</p>}
    </div>
  );
};
export default Cart;

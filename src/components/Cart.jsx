import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  return (
    <div>
      <p>{cart}</p>
      <button onClick={() => setCart("Nuevo valor")}>Cambiar Valor</button>
    </div>
  );
};
export default Cart;

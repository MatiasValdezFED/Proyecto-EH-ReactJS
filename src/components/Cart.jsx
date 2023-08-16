import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const Cart = () => {
  const { cart, setCart, longitud } = useContext(CartContext);
  return (
    <div>
      <p>{cart}</p>
      <button onClick={() => setCart("Nuevo valor")}>Cambiar Valor</button>
      <p>{longitud}</p>
    </div>
  );
};
export default Cart;

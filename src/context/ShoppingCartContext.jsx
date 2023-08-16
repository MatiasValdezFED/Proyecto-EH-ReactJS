import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cantidad) => {
    if (!inCart(item.id)) {
      setCart((prev) => [...prev, { ...item, cantidad }]);
    } else {
      console.log("Error, el producto ya fue agregado");
    }
  };

  const eliminarItem = (itemId) => {
    const cartActualizado = cart.filter((producto) => producto.id !== itemId);
    setCart(cartActualizado);
  };

  const limpiarCart = () => {
    setCart([]);
  };

  const inCart = (itemId) => {
    return cart.some((producto) => producto.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addItem, eliminarItem, limpiarCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCartProvider;

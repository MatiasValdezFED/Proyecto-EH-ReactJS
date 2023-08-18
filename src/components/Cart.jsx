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
      {cantidadTotal < 1 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <div>
          <h2>Carrito</h2>
          <p className="carrito__vacio">El carrito está vacío</p>

          <div className="articulos__carrito">
            <div className="articulo__carrito"></div>
          </div>

          <div className="carrito__acciones">
            <button className="carrito__acciones__vaciar">
              Vaciar Carrito
            </button>
            <div className="carrito__total">
              <p className="precio__total">Total:</p>
              <p className="precio__total" id="total">
                {/* Agrega aquí la lógica para mostrar el total */}
              </p>
            </div>
            <button className="carrito__acciones__comprar">
              Finalizar compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

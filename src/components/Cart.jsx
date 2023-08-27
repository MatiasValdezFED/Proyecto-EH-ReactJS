import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";
import "../index.css";

const Cart = () => {
  const { cart, eliminarItem, limpiarCart } = useContext(CartContext);

  console.log(cart);

  const cantidadTotal = cart.length;

  console.log(cantidadTotal);

  if (cantidadTotal < 1) {
    return (
      <div>
        <h1>No hay productos en el carrito</h1>
        <Link to={"/"}>Ver productos</Link>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h2 className="tituloCarrito">Carrito</h2>

        <div className="articulosCarrito">
          {cart.map((productoEnCarrito) => (
            <div key={productoEnCarrito.id} className="articuloCarrito">
              <img src={productoEnCarrito.imagen} className="carritoImagen" />
              <h3 className="artTitulo">{productoEnCarrito.title}</h3>
              <p>Cantidad: {productoEnCarrito.cantidad}</p>
              <p>Precio por unidad: ${productoEnCarrito.price}</p>
              <p>
                Subtotal: $
                {productoEnCarrito.cantidad * productoEnCarrito.price}
              </p>
              <button onClick={() => eliminarItem(productoEnCarrito.id)}>
                Eliminar
              </button>
            </div>
          ))}
        </div>

        <button className="carritoFinalizar">Finalizar compra</button>
      </div>
    </div>
  );
};
export default Cart;

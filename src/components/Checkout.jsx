import { useState, useContext } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { CartContext } from "../context/ShoppingCartContext";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const Checkout = () => {
  const [apellido, setApellido] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState(null);
  const { cart, precioTotal } = useContext(CartContext);

  const db = getFirestore();

  const emailValidation = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailValidation.test(email)) {
      Toastify({
        text: "¡El correo electrónico no es válido!",
        className: "info",
        position: "center bottom",
        style: {
          background: "linear-gradient(to right, red, red)",
        },
      }).showToast();
      return;
    }

    try {
      const docRef = await addDoc(ordersCollection, order);
      setOrderId(docRef.id);
      setCart([]);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    Toastify({
      text: "¡Carrito Enviado!",
      className: "info",
      position: "center bottom",
      style: {
        background: "linear-gradient(to right, green, green)",
      },
    }).showToast();
  };

  const order = {
    apellido,
    name,
    phone,
    email,
    Carrito: cart,
    Total: precioTotal(),
  };

  console.log(order);

  const ordersCollection = collection(db, "ordenes");

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text>Apellido y Nombre</InputGroup.Text>
          <Form.Control
            aria-label="Apellido"
            onChange={(e) => setApellido(e.target.value)}
          />
          <Form.Control
            aria-label="Nombre"
            onChange={(e) => setName(e.target.value)}
          />
          <InputGroup.Text>Teléfono</InputGroup.Text>
          <Form.Control
            aria-label="Teléfono"
            onChange={(e) => setPhone(e.target.value)}
          />
          <InputGroup.Text>Email</InputGroup.Text>
          <Form.Control
            aria-label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Enviar información</button>
        </InputGroup>
      </form>
      <p>Número de orden: {orderId} </p>
    </div>
  );
};

export default Checkout;

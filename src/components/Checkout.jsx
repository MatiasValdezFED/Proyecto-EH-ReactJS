import { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Checkout = () => {
  const [apellido, setApellido] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState(null);

  const db = getFirestore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(ordersCollection, order);
      setOrderId(docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const order = {
    apellido,
    name,
    phone,
    email,
  };

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

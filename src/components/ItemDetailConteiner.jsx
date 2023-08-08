import React from "react";
import ItemDetail from "./ItemDetail";
import "../index.css";

const ItemDetailConteiner = () => {
  const productos = [
    {
      id: 1,
      title: "Hilo Encerado",
      price: 380,
      category: "Hilos",
      // "pictureUrl": "../assets/Productos/Hilo Encerado.jpg",
      description: "Hilo reforzado con cera",
      stock: 10,
    },
    {
      id: 2,
      title: "Totora",
      price: 800,
      category: "Tejidos",
      // "pictureUrl": "../assets/Productos/Totoras.jpg",
      description: "Totora x kg",
      stock: 3,
    },
    {
      id: 3,
      title: "Cierre Reforzado",
      price: 320,
      category: "Cierres",
      // "pictureUrl": "../assets/Productos/Cierres reforzados.jpg",
      description: "Cierre antidesgaste resitente",
      stock: 25,
    },
  ];

  const getProducts = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      resolve(productos);
    } else {
      reject(new error("Products not found"));
    }
  });

  getProducts
    .then((res) => console.log(res))
    .catch((error) => console.log(error));

  return (
    <>
      <ItemDetail productos={productos} />
    </>
  );
};

export default ItemDetailConteiner;

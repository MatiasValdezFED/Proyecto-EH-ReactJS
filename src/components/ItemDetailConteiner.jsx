import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailConteiner = () => {
  const productos = [
    {
      id: 1,
      title: "Hilo Encerado",
      price: 380,
      category: "Hilos",
      // "pictureUrl": "../assets/Productos/Hilo Encerado.jpg",
      description: "Hilo reforzado con cera",
      stock: 5,
    },
    {
      id: 2,
      title: "Totora",
      price: 800,
      category: "Tejido",
      // "pictureUrl": "../assets/Productos/Totoras.jpg",
      description: "Totora x kg",
      stock: 5,
    },
    {
      id: 3,
      title: "Cierre Reforzado",
      price: 320,
      category: "Cierres",
      // "pictureUrl": "../assets/Productos/Cierres reforzados.jpg",
      description: "Cierre antidesgaste resitente",
      stock: 5,
    },
  ];

  const getProducts = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      resolve(productos);
    } else {
      reject(new error("Products not found"));
    }
  });

  const [listaProductos, setListaProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProducts
      .then((res) => setListaProductos(res))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ItemDetail productos={listaProductos} id={id} />
    </>
  );
};

export default ItemDetailConteiner;

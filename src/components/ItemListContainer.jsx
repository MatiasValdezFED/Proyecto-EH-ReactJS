import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import "../index.css";

function ItemListContainer({ greeting }) {
  const { category } = useParams();

  const products = [
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
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      reject(new error("Products not found"));
    }
  });

  const [listaProductos, setListaProductos] = useState([]);

  useEffect(() => {
    getProducts
      .then((res) => setListaProductos(res))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (category) {
      setListaProductos(
        products.filter((product) => product.category === category)
      );
    } else {
      setListaProductos(products);
    }
  }, [category]);

  return (
    <>
      <div className="greetingContainer">
        <p className="greeting">{greeting}</p>
        <video className="video" muted autoPlay loop>
          <source src="src/assets/images/fondos/lanas2.mp4" />
        </video>
        <div className="pageCover"></div>
      </div>
      <ItemList products={listaProductos} />
    </>
  );
}

export default ItemListContainer;

import React from "react";
import NavBar from "./components/navBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetailConteiner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a Entre Hilos!" />
      <ItemDetailConteiner />
    </BrowserRouter>
  );
}

export default App;

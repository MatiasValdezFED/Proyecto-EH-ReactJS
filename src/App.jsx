import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailConteiner from "./components/ItemDetailConteiner";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route
          exact
          path="/"
          element={<ItemListContainer greeting="Bienvenidos a Entre Hilos!" />}
        />
        <Route
          exact
          path="/category/:category"
          element={<ItemListContainer />}
        />
        <Route exact path="/item/:id" element={<ItemDetailConteiner />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

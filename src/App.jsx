import React from 'react'
import NavBar from './components/navBar'
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer
      greeting="Bienvenidos a Entre Hilos!"
      />
    </>
  )
}

export default App
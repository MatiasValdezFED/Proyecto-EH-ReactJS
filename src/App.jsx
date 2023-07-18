import React from 'react'
import NavBar from './components/navBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer
      greeting="Bienvenidos a Entre Hilos" 
      />
    </>
  )
}

export default App
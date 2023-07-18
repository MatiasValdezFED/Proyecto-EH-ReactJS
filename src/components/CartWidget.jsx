import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import './cartWidget.css'

const CartWidget = () => {
  return (
    <div class="cart">
        <button class="carritoLogo"><FaCartShopping size={25}/></button>
        <span class="contadorCarrito">3</span>
    </div>
  )
}

export default CartWidget
import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import '../index.css'

const CartWidget = () => {
  return (
    <div className="cart">
        <button className="carritoLogo"><FaCartShopping size={28}/></button>
        <span className="contadorCarrito">3</span>
    </div>
  )
}

export default CartWidget
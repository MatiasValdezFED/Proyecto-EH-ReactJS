import React from 'react'
import '../index.css'

function ItemListContainer({greeting}) {
  return (
    <div className="greetingContainer">
        <p className="greeting">{greeting}</p>
        <video className="video" muted autoPlay loop>
         <source src="src/assets/images/fondos/lanas2.mp4"/>
        </video>
        <div className="pageCover"></div>
    </div>
  )
}

export default ItemListContainer
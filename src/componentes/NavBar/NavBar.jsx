import "./navbar.scss"
import CartWidget from './CartWidget'
import React from 'react'


const NavBar = () => {
  return (
   <nav className="navbar">
    <div className="brand">
        <img src="https://img.freepik.com/fotos-premium/deliciosa-taza-cafe-al-aire-libre-vista-naturaleza-generada-ia_1012755-6.jpg" alt="" />

    </div>
    <ul className="categorias">
        <li>Cafes</li>
        <li>Infusiones</li>
        <li>Yerbas</li>
    </ul>
    <CartWidget/>
   </nav>
  )
}

export default NavBar

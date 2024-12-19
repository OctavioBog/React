import { Link } from "react-router-dom"
import "./navbar.css"
import CartWidget from './CartWidget'
import React from 'react'
import { FiBatteryCharging } from "react-icons/fi";


const NavBar = () => {
  return (
    <nav className="navbar">
    <Link to="/" className="logo">
        <FiBatteryCharging className="icon" />
        <p>wordl charge</p>
    </Link>
    <ul className="categorias">
        <Link to="/category/cargadores" className="category">Cargadores</Link>
        <Link to="/category/celulares" className="category">Celulares</Link>
        <Link to="/category/auriculares" className="category">Auriculares</Link>
    </ul>
    <CartWidget />
</nav>

  )
}

export default NavBar

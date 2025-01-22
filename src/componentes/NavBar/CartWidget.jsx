import { useContext } from 'react';
import { CartContext } from '../cartcontext/CartContext';
import React from 'react'
import { ImCart } from "react-icons/im";
import { Link } from 'react-router-dom';




const CartWidget = () => {
const {totalQuantity} = useContext (CartContext)

let quantity = totalQuantity()





  return (
    <Link to="/cart" className='cartwidget'>
      <ImCart className='cart'/>
      <p>{quantity !== 0 && quantity }</p>
    </Link>
  )
}

export default CartWidget

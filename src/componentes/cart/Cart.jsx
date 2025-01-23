import { useContext } from 'react'
import { CartContext } from '../cartcontext/CartContext'
import { Link } from 'react-router-dom'
import React from 'react'
import "./cart.css"

const Cart = () => {
  const {cart,totalPrice,deleteproductByid,deletecart} = useContext (CartContext)
if(cart.length === 0){
  return (
    <div className='carritovacio'>
      <h2> Parece que olvidaste agregar algo increíble a tu carrito. ¡No te preocupes, aún tienes tiempo para encontrar tus favoritos!
      🤷‍♂️</h2>
      <Link to="/">Volver al inicio</Link>
    </div>
  )
}

  return (
    <div >
      <ul className='carrito'>

        {
          cart.map((productCart)=> 
          <li key={productCart.id}>
            <img src={productCart.image} alt="" />
            <p>{productCart.name}</p>
            <p>cantidad: {productCart.quantity}</p>
            <p>Precio unitario: €{productCart.price}</p>
            <button onClick={() => deleteproductByid(productCart.id)}>Quitar</button>
            
          </li>
          )
        }

      </ul>
      
      <div className='total'>
      <h3>Precio total: € {totalPrice()}</h3>
      <button onClick={deletecart}>Vaciar carrito</button>
      </div>
      
    </div>
  )
}

export default Cart

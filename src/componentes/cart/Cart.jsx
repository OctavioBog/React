import { useContext } from 'react'
import { CartContext } from '../cartcontext/CartContext'
import { Link } from 'react-router-dom'
import React from 'react'

const Cart = () => {
  const {cart,totalPrice,deleteproductByid,deletecart} = useContext (CartContext)
if(cart.length === 0){
  return (
    <div>
      <h2>Parece que olvidaste agregar algo increíble a tu carrito. ¡No te preocupes, aún tienes tiempo para encontrar tus favoritos! </h2>
      <Link to="/">Volver al inicio</Link>
    </div>
  )
}

  return (
    <div>
      <ul>

        {
          cart.map((productCart)=> 
          <li key={productCart.id}>
            <img src={productCart.image} alt="" />
            <p>{productCart.name}</p>
            <p>cantidad: {productCart.quantity}</p>
            <p>Precio unitario: €{productCart.price}</p>
            <button onClick={() => deleteproductByid(productCart.id)}>❌</button>
            
          </li>
          )
        }

      </ul>
      <h3>precio total:€{totalPrice()}</h3>
      <button onClick={deletecart}>Vaciar carrito</button>
    </div>
  )
}

export default Cart

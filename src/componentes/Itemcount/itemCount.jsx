import React from 'react'
import { useState } from 'react'

const itemCount = ({stock,addProductInCart}) => {
  const [count, setcount] = useState(1)
  
  const handleClickRemove = () => {
    if (count > 1){
    setcount ( count - 1)
  }
}
  const handleClickAdd = () => {
    if (count < stock){
    setcount ( count + 1)
  }
}



  return (
    <div>
      <button onClick={handleClickRemove}>-</button>
      <p>{count}</p>
      <button onClick={handleClickAdd}>+</button>
      <button onClick={ () => addProductInCart(count)}>Agregar al carrito</button>
    </div>  
  )
}

export default itemCount

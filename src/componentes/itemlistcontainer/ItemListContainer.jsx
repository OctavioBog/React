import "./itemliscontainer.scss"
import React from 'react'

const ItemListContainer = ({saludo}) => {
  return (
    <div className='saludo'>
     <h1>{saludo}</h1>
    </div>
  )
}

export default ItemListContainer

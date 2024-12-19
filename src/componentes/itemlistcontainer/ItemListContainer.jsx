import { useState, useEffect } from "react"
import React from "react"
import "./itemliscontainer.css"
import {getProducts} from "../data/data.js"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList.jsx"

const ItemListContainer = ({saludo}) => {
  const [products, setProducts] = useState([])

  const {idcategory} = useParams()

  useEffect(() => {
    getProducts ()
    .then ((data) => {
      if (idcategory){
        const filterproducts = data.filter((product) => product.category === idcategory )
        setProducts(filterproducts)

      }else{
        setProducts(data)
      }
      
    })
    .catch((error) => {
      console.error(error)
    })
    .finally(() => {
      console.log("Termino la promesa")
    })
  },[idcategory])

  return (
    <div >
     <h1 className='saludo'>{saludo} </h1 >
     <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer

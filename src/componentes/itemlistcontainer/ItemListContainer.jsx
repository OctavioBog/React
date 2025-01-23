import { useState, useEffect } from "react"
import React from "react"
import "./itemliscontainer.css"
import { useParams } from "react-router-dom"
import { collection,getDocs,query,where } from "firebase/firestore"
import db from "../../db/db.js"
import ItemList from "./ItemList.jsx"

const ItemListContainer = ({saludo}) => {
  const [products, setProducts] = useState([])

  const {idcategory} = useParams()
  
  const collectionName = collection(db,"products")

    const getProducts = async () => {
    try {
      const dataDb = await getDocs(collectionName)
      
      const data = dataDb.docs.map((productDb) => {
        return { id:productDb.id, ...productDb.data() }
      })
  
      setProducts(data)
      } 
      catch (error) {
      console.log(error);
      
    }

  }
  
  const getProductsByCategory = async () => {
    try {
      const q = query (collectionName , where("category","==" ,idcategory))
      const dataDb = await getDocs(q)
      
      const data = dataDb.docs.map((productsdb) => {
        return { id:productsdb.id, ...productsdb.data() }
      })
  
      setProducts(data)
      
    } catch (error) {
      console.log(error);
     
    }
    
  }  
  
  
  useEffect(() => {
    if(idcategory){
      getProductsByCategory ()
    }else {
      getProducts ()
    }
  },[idcategory])

  return (
    <div >
     <h1 className='saludo'>{saludo} </h1 >
     <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer

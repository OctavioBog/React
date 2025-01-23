import { useState, useEffect } from 'react'
import { doc,getDoc } from 'firebase/firestore'
import db from '../../db/db'
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({})

    const {idproduct} = useParams()

    const getProduct = async () => {
        try {
            const docRef = doc(db,"products",idproduct)
            const dataDb = await getDoc(docRef)

            const data = {id:dataDb.id, ...dataDb.data()}
            setProduct(data)


        } catch (error) {
            console.log(Error);
            
        }
    }
   
    useEffect(()=> {

        getProduct()

    },[idproduct])

    return (
    <ItemDetail product={product}/>
    )
    }

export default ItemDetailContainer

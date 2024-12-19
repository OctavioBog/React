import { useState, useEffect } from 'react'
import { getProducts } from"../../componentes/data/data.js"
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({})

    const {idproduct} = useParams()
    useEffect(()=> {

        getProducts()
        .then ((data) => {
            const productFind = data.find( (dataproduct) => dataproduct.id === parseInt(idproduct) )
            setProduct(productFind)
        })

    },[idproduct])

    return (
    <ItemDetail product={product}/>
    )
    }

export default ItemDetailContainer

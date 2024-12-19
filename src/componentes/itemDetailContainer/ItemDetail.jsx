import React from "react"
import "./item.css"

const ItemDetail = ({ product }) => {
    return (
        <div className="container">
        <div className="itemdetail">
            <img src={product.image} alt={product.name} />
            <div className="text-content">
                <h2>{product.name}</h2>
                <p>{product.descripcion}</p>
            </div>
        </div>
    </div>
    
    
    )
    }

export default ItemDetail

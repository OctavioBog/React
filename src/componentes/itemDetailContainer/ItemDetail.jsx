import { useContext,useState } from "react"
import { CartContext } from "../cartcontext/CartContext"
import ItemCount from "../itemcount/ItemCount"
import "./item.css"
import { Link } from "react-router-dom"

const ItemDetail = ({ product }) => {
    const [showitemCount, setshowitemCount] = useState(true)
    const {addProduct} = useContext(CartContext)

 const addProductInCart = (count) => {
    const productCart = {...product, quantity: count} 
    
    addProduct(productCart)
    setshowitemCount(false)
 }
 

    return (
        <div className="itemdetail">
            <img src={product.image} alt={product.name} />
            <div className="text-content">
                <h2>{product.name}</h2>
                <p>{product.descripcion}</p>
                <p>Precio: €{product.price}</p>
                
                {
                    showitemCount === true ? ( <ItemCount stock={product.stock} addProductInCart={addProductInCart}/>) :
                    ( <Link to="/cart"> Terminar mi compra</Link> )
                }
            </div>
        </div>
    
    
    )   
    }

export default ItemDetail

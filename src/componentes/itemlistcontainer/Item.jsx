import { Link } from "react-router-dom"

const Item = ({product}) => {
  return (
    <div className="tarjeta">
      <img src={product.image} alt=""/>
      <p>{product.name}</p>
      <p>Precio: {product.price}</p>
      <Link to={"/detail/"+product.id}>Ver Detalle</Link>
    </div>
  )
}

export default Item

import Item from './Item'


const Itemlist = ({products}) => {
  return (
    <div className=' tarjeta-contenedor'>
        {
            products.map ((product) =>(
                <Item product={product} key={product.id}/>

            ))
        }
      
    </div>
  )
}

export default Itemlist

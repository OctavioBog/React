import { createContext, useState,useEffect } from "react"; 


const CartContext = createContext ();

const CartProvider = ( {children} ) => {
    const cartlocalstorage = JSON.parse(localStorage.getItem("cart-local"))
    const [cart, setCart] = useState (cartlocalstorage ? cartlocalstorage : [])
    useEffect(() =>{
        localStorage.setItem("cart-local", JSON.stringify(cart))
    },[cart])

    const addProduct = (newProduct) => {
     const index = cart.findIndex((productcart) => productcart.id === newProduct.id )
        if (index === -1){
            setCart( [ ...cart, newProduct])
        }else{
            const newcart = [...cart]
            newcart[index].quantity = newcart[index].quantity + newProduct.quantity
            setCart(newcart)
        }
    }
    const totalQuantity = () => {
        const quantity = cart.reduce ((total,productCart) => total + productCart.quantity, 0)
        return quantity
        
    }
    const totalPrice = () => {
        const price = cart.reduce((total,productCart) => total + (productCart.quantity * productCart.price),0)
        return price
        
    }
    const deleteproductByid = (idproduct) => {
        const filterproducts = cart.filter( (productcart) => productcart.id !== idproduct)
        setCart(filterproducts)
    }
    const deletecart = () => {
        setCart([])
    }

    
    


    return (
        <CartContext.Provider value={ { cart,addProduct,totalQuantity,totalPrice,deleteproductByid,deletecart } } >
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}

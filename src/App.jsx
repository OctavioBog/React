import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from "./componentes/itemlistcontainer/ItemListContainer"
import ItemDetailContainer from './componentes/itemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './componentes/cartcontext/CartContext'
import { useState,useEffect } from 'react'
import Cart from './componentes/cart/Cart'
import "./App.css"


function App() {
    // // Estado inicial, intentamos leer desde Local Storage
    // const [name, setName] = useState(() => {
    //   return localStorage.getItem("name") || ""; // Si no existe, usa un string vacío
    // });
  
    // // Sincronizar el estado con Local Storage
    // useEffect(() => {
    //   localStorage.setItem("name", name);
    // }, [name]); // Esto se ejecuta cada vez que `name` cambia
  

  return (
      <div>
        <BrowserRouter>
          <CartProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer saludo={"Bienvenidos a mi ecommerce"}/>} />
            <Route path="/category/:idcategory"  element={<ItemListContainer saludo={"Bienvenidos a mi ecommerce"}/>} />
            <Route path='/detail/:idproduct' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
          </CartProvider>
        </BrowserRouter>
      </div>
    )
}

export default App

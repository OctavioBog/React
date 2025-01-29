import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from "./componentes/itemlistcontainer/ItemListContainer"
import ItemDetailContainer from './componentes/itemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './componentes/cartcontext/CartContext'
import Cart from './componentes/cart/Cart'
import Checkout from './componentes/checkout/checkout'
import "./App.css"


function App() {

  
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
            <Route path='/checkout' element={<Checkout/>}  />
          </Routes>
          </CartProvider>
        </BrowserRouter>
      </div>
    )
}

export default App

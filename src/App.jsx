import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from "./componentes/itemlistcontainer/ItemListContainer"
import ItemDetailContainer from './componentes/itemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"


function App() {
  

  return (
      <div>
        <BrowserRouter>
          
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer saludo={"Bienvenidos a mi ecommerce"}/>} />
            <Route path="/category/:idcategory"  element={<ItemListContainer saludo={"Bienvenidos a mi ecommerce"}/>} />
            <Route path='/detail/:idproduct' element={<ItemDetailContainer/>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App

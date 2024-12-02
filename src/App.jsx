import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/itemlistcontainer/ItemListContainer'
import './App.css'

function App() {
 

  return (
      <div>
        <NavBar/>
        <ItemListContainer saludo={"Bienvenidos a mi ecommerce"}/>
      </div>
    )
}

export default App

// src/App.jsx
import Saludo from "./Saludo"
import Contador from "./Contador"
import Espejo from "./Espejo"
import Convertidor from "./Convertidor"
import ListaMaterias from "../ListaMaterias"

function App() {
  return (
    <div style={{ textAlign: 'center', color: 'white', fontFamily: 'Arial' }}>
      <h1>Muro de Samantha</h1>
      
      <Saludo nombre="Samantha" />
      
      <Contador/>
      <Espejo/>
      <Convertidor/>
      <ListaMaterias/>
    </div>
  )
}

export default App
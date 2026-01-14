// src/App.jsx
import Saludo from "./Saludo"
import Contador from "./Contador"
import Espejo from "./Espejo"
import Convertidor from "./Convertidor"

function App() {
  return (
    <div style={{ textAlign: 'center', color: 'white', fontFamily: 'Arial' }}>
      <h1>Muro de Samantha</h1>
      
      <Saludo nombre="Samantha" />
      
      <Contador/>
      <Espejo/>
      <Convertidor/>
    </div>
  )
}

export default App
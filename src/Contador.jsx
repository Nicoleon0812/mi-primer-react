// src/Contador.jsx
import { useState } from 'react' // 1. Importamos el gancho (hook) de memoria

function Contador() {
  // 2. Declaramos la memoria. 
  // "cuenta" es el valor actual (empieza en 0).
  // "setCuenta" es la función para cambiar ese valor.
  const [cuenta, setCuenta] = useState(0)

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h3>Contador de Likes: {cuenta} ❤️</h3>
      
      {/* 3. Al hacer clic, usamos setCuenta para actualizar */}
      <button onClick={() => setCuenta(cuenta + 1)}>
        ¡Dale Like!
      </button>
    </div>
  )
}

export default Contador
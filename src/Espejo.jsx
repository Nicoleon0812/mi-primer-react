// src/Espejo.jsx
import { useState } from 'react'

function Espejo() {
  // 1. Estado para guardar lo que escribe el usuario
  const [texto, setTexto] = useState('')

  return (
    <div style={{ border: '1px solid gray', padding: '20px', margin: '20px', borderRadius: '10px' }}>
      <h3>El Espejo Mágico 🔮</h3>
      
      {/* 2. El Input */}
      {/* value={texto} -> El input muestra lo que dice la memoria */}
      {/* onChange -> Cuando escribes, actualizas la memoria */}
      <input 
        type="text" 
        placeholder="Escribe algo aquí..."
        value={texto}
        onChange={ (e) => setTexto(e.target.value) } 
        style={{ padding: '10px', width: '80%' }}
      />

      {/* 3. El Reflejo */}
      <p style={{ color: 'yellow', fontSize: '20px' }}>
        Reflejo: {texto}
      </p>
      
      {/* Condicional simple: Si escribes "Samantha", sale un mensaje especial */}
      {texto === "Samantha" && <h3>¡Hola jefa! 👋</h3>}
      
    </div>
  )
}

export default Espejo
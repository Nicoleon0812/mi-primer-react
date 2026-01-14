// src/ListaMaterias.jsx

function ListaMaterias() {
  
  // 1. LA BASE DE DATOS (Array de objetos)
  // Imagina que esto viene de un Excel o una API
  const materias = [
    { id: 1, nombre: "Cálculo I", profesor: "Samantha", dia: "Lunes", hora: "08:30"},
    { id: 2, nombre: "Programación Web", profesor: "Nicolás", dia: "Lunes", hora: "10:30" },
    { id: 3, nombre: "Base de Datos", profesor: "Pedro", dia: "Martes", hora: "08:30" },
    { id: 4, nombre: "Inglés Técnico", profesor: "Ana", dia: "Jueves", hora: "14:30" },
  ]

  return (
    <div style={{ border: '2px solid purple', padding: '20px', margin: '20px', borderRadius: '15px' }}>
      <h3>📚 Mis Materias (Generadas Dinámicamente)</h3>
      
      {/* 2. EL MAPA (La máquina clonadora) */}
      {/* "Para cada materia (m), devuélveme un div..." */}
      
      {materias.map( (materia) => (
        
        <div key={materia.id} style={{border: materia.profesor === "Samantha" ? '2px solid gold' : '1px solid gray', backgroundColor: '#2d3748', margin: '10px', padding: '10px', borderRadius: '5px'  }}>
            <h4 style={{ color: '#63b3ed', margin: 0 }}>{materia.nombre}</h4>
            <p style={{ color: 'white', margin: 0 }}>Profe: {materia.profesor}</p>
            <p style={{ color: 'green', margin: 0 }}>Día: {materia.dia}</p>
            <p style={{ color: 'yellow', margin: 0 }}>Hora: {materia.hora}</p>
        </div>

      ))}

    </div>
  )
}

export default ListaMaterias
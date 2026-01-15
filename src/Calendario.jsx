import { useState, useEffect } from "react"
import './Calendario.css' // Asegúrate de importar el CSS

function Calendario() {
  
  // 1. ESTADO DE MATERIAS (Con carga perezosa desde localStorage)
  const [materias, setMaterias] = useState(() => {
    const guardado = localStorage.getItem("horario")
    if (guardado) {
        return JSON.parse(guardado)
    } else {
        return [
          { id: 1, nombre: "Cálculo I", profesor: "Samantha", dia: "Lunes", hora: "08:30" },
          { id: 6, nombre: "Teoría de Números", profesor: "Hector", dia: "Lunes", hora: "09:00"},
          { id: 2, nombre: "Prog. Web", profesor: "Nicolás", dia: "Lunes", hora: "10:30" },
          { id: 3, nombre: "Base de Datos", profesor: "Pedro", dia: "Martes", hora: "08:30" },
          { id: 4, nombre: "Inglés", profesor: "Ana", dia: "Jueves", hora: "14:30" },
          { id: 5, nombre: "Física", profesor: "Samantha", dia: "Viernes", hora: "10:00" },
        ]
    }
  })

  // 2. EFECTO: Guardar en localStorage cada vez que cambien las materias
  useEffect(() => {
    localStorage.setItem("horario", JSON.stringify(materias))
  }, [materias])

  // 3. ESTADOS DEL FORMULARIO
  const [nuevoNombre, setNuevoNombre] = useState("")
  const [nuevoProfe, setNuevoProfe] = useState("")
  const [nuevoDia, setNuevoDia] = useState("Lunes")
  const [nuevaHora, setNuevaHora] = useState("")

  const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]

  // --- FUNCIONES ---

  const eliminarMateria = (idParaBorrar) => {
    const nuevasMaterias = materias.filter( materia => materia.id !== idParaBorrar )
    setMaterias(nuevasMaterias)
  }

  const agregarMateria = () => {
    if (!nuevoNombre || !nuevaHora) return alert("Falta nombre u hora")

    const nuevaMateria = {
      id: Date.now(),
      nombre: nuevoNombre,
      profesor: nuevoProfe,
      dia: nuevoDia,
      hora: nuevaHora
    }

    setMaterias([...materias, nuevaMateria])

    // Limpiar formulario
    setNuevoNombre("")
    setNuevoProfe("")
    setNuevaHora("")
  }

  // --- RENDERIZADO (Aquí estaba el error) ---
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      
      <h2 style={{ textAlign: 'center', color: 'white' }}>📅 Mi Horario Académico</h2>
      
      {/* 1. FORMULARIO */}
      <div className="formulario-container">
        
        <input 
          className="input-form"
          placeholder="Materia (ej: Historia)" 
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
        />

        <input 
          className="input-form"
          placeholder="Profesor" 
          value={nuevoProfe}
          onChange={(e) => setNuevoProfe(e.target.value)}
        />

        {/* CORRECCIÓN: Quitamos el closing tag /> y dejamos > */}
        <select 
          className="input-form"
          value={nuevoDia} 
          onChange={(e) => setNuevoDia(e.target.value)}
        >
          {diasSemana.map(dia => <option key={dia} value={dia}>{dia}</option>)}
        </select>

        <input 
          type="time" 
          className="input-form"
          placeholder="Hora"
          value={nuevaHora}
          onChange={(e) => setNuevaHora(e.target.value)}
        />

        <button 
          className="btn-agregar"
          onClick={agregarMateria}
        >
          + Agregar Clase
        </button>

      </div>

      {/* 2. LA GRILLA (Ahora sí está dentro del return) */}
      <div className="grilla-calendario">
        
        {diasSemana.map((dia) => { 

          // Filtros y Ordenamiento
          const clasesDelDia = materias.filter(materia => materia.dia === dia)
          
          clasesDelDia.sort((a, b) => {
            return a.hora.padStart(5,'0').localeCompare(b.hora.padStart(5, '0'))
          })

          return (
            <div key={dia} className="columna-dia">
              
              <h3 className="titulo-dia">{dia}</h3>

              {clasesDelDia.length > 0 ? (
                
                clasesDelDia.map((materia) => (
                    <div key={materia.id} className="tarjeta-materia">
                      <h4 style={{ color: '#fff', margin: 0 }}>{materia.nombre}</h4>
                      
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginTop: '5px', color: '#cbd5e0' }}>
                          <span>⏰ {materia.hora}</span>
                          <span>👤 {materia.profesor}</span>
                      </div>
                      
                      <button 
                          className="btn-eliminar"
                          onClick={ () => eliminarMateria(materia.id) }>
                          Eliminar
                      </button>
                    </div>
                ))

              ) : (
                <div style={{ textAlign: 'center', color: 'gray', marginTop: '20px', fontStyle: 'italic' }}>
                   💤 Día Libre
                </div>
              )}

            </div>
          )
        })}

      </div> {/* Fin de la grilla */}

    </div> // Fin del contenedor principal
  )
}

export default Calendario
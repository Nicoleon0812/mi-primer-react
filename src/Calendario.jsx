import { useState, useEffect } from "react"
import './Calendario.css'

function Calendario() {
  
  // 1. ESTADO DE MATERIAS
  const [materias, setMaterias] = useState(() => {
    const guardado = localStorage.getItem("horario")
    if (guardado) {
        return JSON.parse(guardado)
    } else {
        return [
          { id: 1, nombre: "Cálculo I", profesor: "Samantha", dia: "Lunes", hora: "08:30" },
          { id: 6, nombre: "Teoría de Números", profesor: "Hetor", dia: "Lunes", hora: "09:00"},
          { id: 2, nombre: "Prog. Web", profesor: "Nicolás", dia: "Lunes", hora: "10:30" },
          { id: 3, nombre: "Base de Datos", profesor: "Pedro", dia: "Martes", hora: "08:30" },
          { id: 4, nombre: "Inglés", profesor: "Ana", dia: "Jueves", hora: "14:30" },
          { id: 5, nombre: "Física", profesor: "Samantha", dia: "Viernes", hora: "10:00" },
        ]
    }
  })

  // 2. EFECTO: Guardar en localStorage
  useEffect(() => {
    localStorage.setItem("horario", JSON.stringify(materias))
  }, [materias])

  // 3. ESTADOS DEL FORMULARIO
  const [nuevoNombre, setNuevoNombre] = useState("")
  const [nuevoProfe, setNuevoProfe] = useState("")
  const [nuevoDia, setNuevoDia] = useState("Lunes")
  const [nuevaHora, setNuevaHora] = useState("")

  const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]

  // --- FUNCIONES LÓGICAS ---

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
    
    // Limpiar campos
    setNuevoNombre("")
    setNuevoProfe("")
    setNuevaHora("")
  }

  // --- NUEVO: LÓGICA DE COLORES INTELIGENTES ---
  const obtenerColor = (nombreMateria) => {
    if (!nombreMateria) return "#a0aec0" // Protección por si viene vacío
    const nombre = nombreMateria.toLowerCase()

    if (nombre.includes("cálculo") || nombre.includes("matemática")) return "#63b3ed" // Azul
    if (nombre.includes("prog") || nombre.includes("web") || nombre.includes("computación")) return "#48bb78" // Verde
    if (nombre.includes("base de datos") || nombre.includes("datos")) return "#ed8936" // Naranja
    if (nombre.includes("inglés") || nombre.includes("idioma")) return "#f56565" // Rojo
    if (nombre.includes("física") || nombre.includes("ciencia")) return "#9f7aea" // Morado
    
    return "#a0aec0" // Gris por defecto
  }

  // --- RENDERIZADO ---
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      
      <h2 style={{ textAlign: 'center', color: 'white' }}>📅 Mi Horario Académico</h2>
      
      {/* FORMULARIO */}
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

        <select 
          className="input-form"
          value={nuevoDia} 
          onChange={(e) => setNuevoDia(e.target.value)}
        >
          {diasSemana.map(dia => <option key={dia} value={dia}>{dia}</option>)}
        </select>

        {/* Input de Hora Blindado */}
        <div className="input-wrapper">
          <input 
            type="time" 
            className="input-form"
            style={{ width: '100%', height: '100%' }}
            value={nuevaHora}
            onChange={(e) => setNuevaHora(e.target.value)}
          />
          {!nuevaHora && (
            <span className="placeholder-fantasma">Hora de clase</span>
          )}
        </div>

        <button className="btn-agregar" onClick={agregarMateria}>
          + Agregar Clase
        </button>

      </div>

      {/* GRILLA CALENDARIO */}
      <div className="grilla-calendario">
        
        {diasSemana.map((dia) => { 
          // Filtrar y Ordenar
          const clasesDelDia = materias.filter(materia => materia.dia === dia)
          clasesDelDia.sort((a, b) => a.hora.padStart(5,'0').localeCompare(b.hora.padStart(5, '0')))

          return (
            <div key={dia} className="columna-dia">
              <h3 className="titulo-dia">{dia}</h3>

              {clasesDelDia.length > 0 ? (
                clasesDelDia.map((materia) => (
                    
                    // AQUI ESTÁ EL CAMBIO DE COLOR
                    <div 
                      key={materia.id} 
                      className="tarjeta-materia"
                      style={{ borderLeft: `5px solid ${obtenerColor(materia.nombre)}` }}
                    >
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

      </div>
    </div>
  )
}

export default Calendario
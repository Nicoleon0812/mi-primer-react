// src/Calendario.jsx

function Calendario() {
  
  // 1. Tus Datos (Agregué más para probar)
  const materias = [
    { id: 1, nombre: "Cálculo I", profesor: "Samantha", dia: "Lunes", hora: "08:30" },
    { id: 6, nombre: "Teoría de Números", profesor: "Hetor", dia: "Lunes", hora: "09:00"},
    { id: 2, nombre: "Prog. Web", profesor: "Nicolás", dia: "Lunes", hora: "10:30" },
    { id: 3, nombre: "Base de Datos", profesor: "Pedro", dia: "Martes", hora: "08:30" },
    { id: 4, nombre: "Inglés", profesor: "Ana", dia: "Jueves", hora: "14:30" },
    { id: 5, nombre: "Física", profesor: "Samantha", dia: "Viernes", hora: "10:00" },
  ]

  const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', color: 'white' }}>📅 Mi Horario Académico</h2>
      
      {/* 2. EL CONTENEDOR GRID */}
      {/* display: grid -> Activa el modo cuadrícula */}
      {/* gridTemplateColumns: repeat(5, 1fr) -> Crea 5 columnas de igual tamaño */}
      {/* gap: 10px -> Espacio entre columnas */}
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
        
        {/* 3. Primer Bucle: Crear las COLUMNAS (Los Días) */}
        

{diasSemana.map((dia) => { // <--- OJO: Agregué llaves { } aquí para escribir código antes del return

  // 1. FILTRADO: Buscamos las clases de este día
  const clasesDelDia = materias.filter(materia => materia.dia === dia)

  // 2. ORDENAMIENTO: Las ordenamos por hora (de más temprano a más tarde)
  // .sort() compara dos elementos (a y b). 
  // localeCompare es una función de JS para ordenar textos/horas correctamente.
  clasesDelDia.sort((a, b) => {
    return a.hora.padStart(5,'0').localeCompare(b.hora.padStart(5, '0'))
})

  // 3. RENDERIZADO (Lo que se ve en pantalla)
  return (
    <div key={dia} style={{ backgroundColor: '#1a202c', padding: '10px', borderRadius: '10px', minHeight: '300px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      
      {/* Título del Día */}
      <h3 style={{ color: 'orange', textAlign: 'center', borderBottom: '1px solid gray', paddingBottom: '5px' }}>
        {dia}
      </h3>

      {/* 4. CONDICIONAL: ¿Hay clases o es día libre? */}
      {clasesDelDia.length > 0 ? (
        
        // OPCIÓN A: Si hay clases, las mostramos (usando la lista ya ordenada)
        clasesDelDia.map((materia) => (
            <div key={materia.id} style={{ backgroundColor: '#2d3748', padding: '10px', borderRadius: '5px', borderLeft: '4px solid #63b3ed' }}>
              <h4 style={{ color: '#fff', margin: 0 }}>{materia.nombre}</h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginTop: '5px', color: '#cbd5e0' }}>
                 <span>⏰ {materia.hora}</span>
                 <span>👤 {materia.profesor}</span>
              </div>
            </div>
        ))

      ) : (
        
        // OPCIÓN B: Si NO hay clases (Array vacío)
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
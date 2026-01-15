// src/AppAcademico.jsx
import Calendario from './Calendario'
import './Calendario.css' // Importamos los estilos aquí para que apliquen a todo

function AppAcademico() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#2d3748', padding: '20px' }}>
      
      {/* Aquí solo vive el Calendario, sin calculadoras ni espejos */}
      <Calendario />
      
      <footer style={{ textAlign: 'center', color: '#718096', marginTop: '50px', fontSize: '14px' }}>
        &copy; 2026 Sistema Académico Personal - Creado con React
      </footer>

    </div>
  )
}

export default AppAcademico
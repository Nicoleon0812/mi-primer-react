// src/Saludo.jsx

// "props" es el paquete de información que recibe el componente
function Saludo(props) {
  return (
    <div style={{ border: '2px solid white', padding: '10px', margin: '10px', borderRadius: '10px' }}>
      <h3>¡Hola, {props.nombre}! 👋</h3>
      <p>Bienvenido a React.</p>
    </div>
  )
}

export default Saludo
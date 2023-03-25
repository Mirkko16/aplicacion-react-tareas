import './App.css';
import logoReact from './Images/logo-React.png';
import ListaDeTareas from './Componentes/ListaDeTareas.js';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='contenedor-logo-react'>
        <img
        src={logoReact}
        className = 'logo-react'
        alt='logo react'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;

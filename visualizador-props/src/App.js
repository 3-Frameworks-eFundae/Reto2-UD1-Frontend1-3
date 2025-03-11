import './App.css';
import VisualizadorProps from './componentes/Visualizador-Props';

function App() {
  const listaTareas = [ "Crear listado", "Añadir elementos al listado", "Borrar elementos del listado" ];

  return (
    <div>
      <VisualizadorProps listaTareas={listaTareas} />
    </div>
  );
}

export default App;

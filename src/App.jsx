import { useState } from 'react'
import './App.css'

function App() {

  var [tareas, setTareas] = useState([]);
const [textoInput, setTextoInput] = useState('');

   const agregarTarea = () => {

if (textoInput.trim() === '') return;

    var tarea = {texto: textoInput, completada: false};

    // Agregamos la tarea a la lista y limpiamos el input a través del estado
    setTareas([...tareas, tarea]);
    setTextoInput('');
  }


  const eliminarTarea = (indexParaBorrar) => {
    // Filtramos el array dejando afuera al elemento que tenga ese índice
    const tareasFiltradas = tareas.filter((_, index) => index !== indexParaBorrar);
    setTareas(tareasFiltradas);
  }

  const completarTarea = (indexParaCompletar) => {
    // Creamos un nuevo array con las tareas, pero cambiando la propiedad "completada" de la tarea que queremos marcar como completada
    const tareasActualizadas = tareas.map((tarea, index) => {
      if (index === indexParaCompletar) {
        return { ...tarea, completada: true };
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }

  return (
<section className="task-container">
   <label for="task">Tarea</label>


<input
  type="text"
  id="task"
  name="task"
  required
  minlength="4"
  value={textoInput}
  onChange={(e) => setTextoInput(e.target.value)}/>


<div className="button-group">
  <button type="button" onClick={agregarTarea}>Agregar</button>
  <button type="button" onClick={() => setTareas([])}>Borrar</button>
</div>

<ol className="task-list">
  {tareas.map((tarea, index) => (
    <li key={index} className={`task-item ${tarea.completada ? "completed" : ""}`}>
      <span className="texto-tarea">{tarea.texto}</span> {/* <-- ¡Acá faltaba la clase! */}
      <div className="task-actions">
        <button type="button" onClick={() => completarTarea(index)}>
          ✅
        </button>
        <button type="button" onClick={() => eliminarTarea(index)}>
          ❌
        </button>
      </div>
    </li>
  ))}
</ol>

</section>

  )
}

export default App

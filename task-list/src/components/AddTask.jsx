import React, {useState,useEffect} from 'react'
import CustomSelect from './CustomSelect'


const AddTask = (props) => {

  const [task, setTask] = useState('')
  const [priority,setPriority] = useState('')
  const [sequencer, setSequencer] = useState(1)

  const addTask = ()=>{
      // Ejecuto la función pasada por propiedad
      props.addTask({task: task, priority: priority, id: sequencer}) 
      // Actualizo el secuenciador (dispara el useEffect)
      setSequencer(sequencer+1) 
  }

  useEffect(()=>{
    // Asigno un string vacio a la tarea
    setTask('') 
    // Asigno un string vacio a la prioridad
    setPriority('') 
  },[sequencer]) // Este metodo se ejecuta cuando cambio el estado del sequencer

    return (
        <form>
            <input
                id="tarea"
                type="text"
                name="tarea"
                placeholder="Descripción de la tarea"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <CustomSelect
                value={priority}
                setter={setPriority}
                options={
                    [{value:'prioridad-baja',label:'Baja'},
                    {value:'prioridad-media',label:'Media'},
                    {value:'prioridad-alta',label:'Alta'}]
                }
                default='Prioridad'
            ></CustomSelect>
            <button id="agregar" onClick={addTask} type="button">
                Agregar!
            </button>
      </form>
    )
}
export default AddTask
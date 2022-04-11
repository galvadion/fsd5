import React, {useState,useEffect} from 'react'

const AddTask = (props) => {

    const [taskDescription, setTaskDescription] = useState('')
    const [priority, setPriority] = useState('')
    
    const [errorMessage, setErrorMessage] = useState('')

    const addTask = () =>{
        if(taskDescription != '' && priority != ''){
            props.addTask({task:taskDescription,priority: priority})
            cleanForm()
        }else{
            setErrorMessage('Ninguno de los campos debe quedar vacio')
        }
    }

    const cleanForm = ()=>{
        setTaskDescription('')
        setPriority('')
        setErrorMessage('')
    }

    return (
        <React.Fragment>
            <form>
                <input
                    id="tarea"
                    type="text"
                    name="tarea"
                    value={taskDescription}
                    onChange={(event) => setTaskDescription(event.target.value)}
                    placeholder="Descripción de la tarea"
                />
                <select name="prioridad" id="prioridad" value={priority} onChange={(e)=> setPriority(e.target.value)}>
                    <option value="" disabled>Prioridad</option>
                    <option value="priority-low">baja</option>
                    <option value="priority-medium">media</option>
                    <option value="priority-high">alta</option>
                </select>
                <button id="agregar" type="button" onClick={addTask}>Agregar!</button>
                { /* <button id="agregar" type="button" onClick={() => addTask()}>Agregar!</button> */}
            </form>
            <span id="error-message">{errorMessage} </span>
        </React.Fragment>
    )
}

export default AddTask
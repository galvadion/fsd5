import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {

  /* Declaración de una variable de estado 
     taskList, con su asignador y el valor por defecto vacio */
  const [taskList, setTaskList] = useState([])

  /* Función que pasamos hacia abajo que recibe
      una tarea y la agrega a nuestro estado de tareas  */
  const addTask = (task) =>{
    setTaskList(taskList.concat(task))
  }
  /* Función que pasamos hacia abajo que recibe
      el id de la tarea a eliminar y la elimina de nuestro estado de tareas  */
  const removeElement = (id) => {
    setTaskList(taskList.filter(task => task.id != id))
  }

  return (
    <main>
      <h1>Lista de tareas!</h1>
    
        <AddTask  // Invocación de componente AddTask
          addTask={addTask} //Pasaje de función como propiedad
        >
        </AddTask>
      <span id="error-message"> </span>
      <h3>Tareas</h3>
      <BrowserRouter>
        <Route exact path="/" render={(props)=> <TaskList // Invocación de componente TaskList
        taskList={taskList} // Pasaje de listado de tareas 
        removeElement={removeElement} // Pasaje de función de eliminar
        {...props}
        ></TaskList>}/>
        <Route exact path="/task/:id" >
          Soy una tarea
        </Route>
      </BrowserRouter>
      
      <p>
        Para agregar tareas vamos a tener que hablar de eventos, el DOM y cómo
        interactuar con él
      </p>
    </main>
  );
}

export default App;

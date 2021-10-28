import './App.css';
import './assets/styles/style.css';
import { useEffect, useState } from 'react';
import AddTask from './components/AddTask';
import TaskList, {Task} from './components/TaskList';
import PacmanLoader from "react-spinners/PacmanLoader";
import { Route, Switch } from 'react-router-dom';


function App() {

  // Variables de estado (Globales) de la aplicación 
  const [taskList, setTaskList] = useState([])
  const [loading, setLoading] = useState(true); 
  const [errorMessage, setErrorMessage] = useState('');
  const [hasError, setHasError] = useState(false);

  useEffect(()=>{
    fetch('http://localhost:4000/tareas')
      .then((data) => data.json())
      .then(data => {
        setTaskList(data);
        setLoading(false);
        setHasError(false);
      }
      )
      .catch(e=> {
        setErrorMessage(e);
        setHasError(true)
      }
      )
  },[]) // Arreglo sin dependencias indica que la página acaba de ser cargada/inicializada.


  const addTask = (task) =>{ // {task:'description', priority: 'priority' }
    setLoading(true)
    fetch('http://localhost:4000/tareas',
    {
      method:'POST',
      headers:{ 
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({...task})
    })
      .then((data) => data.json())
      .then(data => {
        setTaskList(taskList.concat(data))
        setLoading(false)
      })
      .catch(e=> console.log(e))
     // Se queda con el objeto tal como viene y agregale una propiedad más
  }

  const removeElement = (id) =>{
    setTaskList(taskList.filter(it => parseInt(it.id) !== parseInt(id)))
  }

  const getTaskById = (id) =>{
    console.log(id)
    console.log(taskList)
    return taskList.find(it => it.id ==id)
  }

  return (
    <main>
      <h1>Lista de tareas!</h1>
      <AddTask 
        addTask={addTask}
        >
      </AddTask>
      <PacmanLoader loading={loading}></PacmanLoader>
      <h3>Tareas</h3>
      {
        hasError && 
        (
          <p>{errorMessage}</p>
        )
      }
      <Switch>
        <Route exact path="/" render={(props) => <TaskList 
          tasks={taskList}
          removeElement={removeElement}
          {...props}
        >
        </TaskList> } />
        <Route exact path="/task/:id" render={(props) => 
          taskList.length> 0 &&
          <Task task={getTaskById(props.match.params.id)} removeElement={removeElement} ></Task>
        } /> 
        <Route path="/">
          No existo
        </Route>
      </Switch>
      

    <p>
      Para agregar tareas vamos a tener que hablar de eventos, el DOM y cómo
      interactuar con él
    </p>
  </main>
  );
}

export default App;

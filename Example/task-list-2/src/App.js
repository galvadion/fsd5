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
    fetch('http://localhost:8020/task')
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
    fetch('http://localhost:8020/task',
    {
      method:'POST',
      headers:{ 
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify({...task})
    })
      .then((data) => data.json())
      .then((data) => {
          setTaskList(taskList.concat(data.task));
          setLoading(false)
          console.log(data)
      }).catch(e=> console.log(e))
  }

  const removeElement = (id) =>{
    setLoading(true)
    fetch('http://localhost:8020/task/'+id,
    {
      method:'delete'
    })
      .then((data) => data.json())
      .then((data) => {
          setTaskList(data.tasks);
          setLoading(false)
      }).catch(e=> console.log(e))
  }

  return (
    <main>
      <h1>Lista de tareas!</h1>
      <AddTask 
        addTask={addTask}
        >
      </AddTask>
      <form action="http://localhost:8020/task" method="post" enctype="multipart/form-data">
  <input type="file" name="avatar" />
  <button>CLICKEAME!!</button>
</form>
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
          <Task removeElement={removeElement} id={props.match.params.id}></Task>
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

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const TaskList = ({tasks, removeElement}) =>{
    
    const priorityOrder = (priority) => map.get(priority)
    /*const priorityOrder = (priority) => {
       return map.get(priority)
    }*/
      
    const map = new Map()
    
      map.set('priority-low',1)
      map.set('priority-medium',2)
      map.set('priority-high',3)

      const byPriority = (a,b) => priorityOrder(b.priority) - priorityOrder(a.priority)
    
    return (
        <ul id="lista-tareas">
            {
                tasks.sort(byPriority).map(task => 
                    <Task task={task} removeElement={removeElement}></Task>    
                )
            }
        </ul>
    )
}

export const Task = ({id, removeElement}) =>{

    const [task,setTask] = useState({})

    useEffect(()=>{
        fetch('http://localhost:8020/task/'+id)
        .then(data => data.json())
        .then(data => {
            setTask(data)
        }).catch(e => console.error(e))
    },[])

    return (
        
        <li key={task.id} 
            className={task.priority}>{task.task}
            <span 
                className="feather" 
                onClick={()=> removeElement(task.id)}>
                X
            </span> 
            <Link to={`/task/${task.id}`}>Go</Link>
        </li>
    )
}
    

export default TaskList
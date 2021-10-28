import React from 'react'

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

export const Task = ({task, removeElement}) =>
        <li key={task.id} 
            className={task.priority}>{task.task}
            <span 
                className="feather" 
                onClick={()=> removeElement(task.id)}>
                X
            </span> 
        </li>
    

export default TaskList
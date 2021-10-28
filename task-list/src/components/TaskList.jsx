import React from 'react'

const TaskList = (props) => {
    return (
        <ul id="lista-tareas">
            {
            props.taskList.map( task => 
                <Task 
                    task={task} 
                    removeElement={props.removeElement}
                >
                </Task>
                )
            }
        </ul>
    )
}

const Task = ({task,removeElement}) => {
    return (
        <li key={task.id} 
            className={task.priority}>
            {task.task}
            <span 
                className='feather' 
                onClick={() =>removeElement(task.id)}>
                X
            </span>
        </li>
    )
}

export default TaskList;
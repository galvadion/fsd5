
const descriptionField = document.getElementById('tarea')
const priorityField = document.getElementById('prioridad')
const button = document.getElementById('agregar')
const taskList = document.getElementById('lista-tareas')
const errorHolder = document.getElementById('error-message')

let tasks = []

const createNewTask = (description, priority) => {

    const newTask = document.createElement('li')

    newTask.textContent = description

    newTask.classList.add(priority)

    taskList.appendChild(newTask)

}

button.addEventListener('click',() => {
        if(descriptionField.value.length > 0 && priorityField.value !== ''){
            taskList.innerHTML = ''
            tasks.push(new Task(descriptionField.value,priorityField.value))
            tasks = tasks.sort((a,b)=> b.priorityOrder() - a.priorityOrder())
            tasks.forEach(task => createNewTask(task.task,task.priority) )
            descriptionField.value = ''
            priorityField.value = ''
            errorHolder.innerHTML = ''
        }else{
            errorHolder.innerHTML = 'Falto o escribir descripción o seleccionar prioridad'
        }
    }
)

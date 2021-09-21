const descriptionField = document.getElementById('tarea')
const priorityField = document.getElementById('prioridad')
const button = document.getElementById('agregar')
const taskList = document.getElementById('lista-tareas')
const errorHolder = document.getElementById('error-message')

let tasks = []

const createNewTask = (task) => {

    const newTask = document.createElement('li')

    const icon = document.createElement('span')
    icon.innerHTML = 'X'
    icon.classList.add('feather')
    icon.addEventListener('click',() => removeElement(newTask,task.id))

    newTask.textContent = task.description

    newTask.appendChild(icon)

    newTask.classList.add(task.priority)

    taskList.appendChild(newTask)
}

const cleanFields = () => {
    descriptionField.value = ''
    priorityField.value = ''
    errorHolder.innerHTML = ''
}

button.addEventListener('click',() => {
        if(descriptionField.value.length > 0 && priorityField.value !== ''){
            taskList.innerHTML = ''
            tasks.push(new Task(descriptionField.value,priorityField.value))
            tasks = tasks.sort((a,b)=> b.priorityOrder() - a.priorityOrder())
            tasks.forEach(task => createNewTask(task) )
            cleanFields()
        }else{
            errorHolder.innerHTML = 'Falto o escribir descripción o seleccionar prioridad'
        }
    }
)

function removeElement(element,id){
    element.remove();
    tasks = tasks.filter(task => task.id != id)
}

window.resize = event => {
    console.log(event)
  };

function myFunction() {
    console.log('func')
}
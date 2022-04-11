const Task = require('../domain/tasks/task')

function migrate() {
    console.log("i'm running")
    tasks.forEach(element => {
        console.log(element)
        Task.create(element)
    });
}


let tasks = [
    {
      "task": "Pasear al toby",
      "priority": "priority-high"
    },
    {
      "task": "Hacer preguntas en Slack",
      "priority": "priority-low"
    },
    {
      "task": "Limpiar el cuarto",
      "priority": "priority-medium"
    },
    {
      "task": "asdsada",
      "priority": "priority-low"
    },
    {
      "task": "Agregar un elemento",
      "priority": "priority-medium"
    },
    {
      "task": "sadasdas",
      "priority": "priority-low"
    }
  ]

  module.exports = migrate;
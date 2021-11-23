
function addTask() {
    return (req, res) => {
      console.log(req.body);
      let task = req.body;
      task.id = maxExistingId + 1;
      tasks.push(task);
      res.send({ message: 'La tarea se ha agregado con éxito', task: task });
    };
  }

function deleteTask() {
    return (req, res) => {
      tasks = tasks.filter(task => task.id != req.params.id);
      res.send({ message: 'Se ha eliminado exitosamente', tasks: tasks });
    };
  }

function getTask() {
    return (req, res) => {
      res.send(tasks);
    };
  }

function getTaskById() {
    return (req, res) => {
      res.send(getById(req));
    };
  }


let tasks = [
    {
      "task": "Pasear al toby",
      "priority": "priority-high",
      "id": 0
    },
    {
      "task": "Hacer preguntas en Slack",
      "priority": "priority-low",
      "id": 1
    },
    {
      "task": "Limpiar el cuarto",
      "priority": "priority-medium",
      "id": 2
    },
    {
      "task": "asdsada",
      "priority": "priority-low",
      "id": 6
    },
    {
      "task": "Agregar un elemento",
      "priority": "priority-medium",
      "id": 7
    },
    {
      "task": "sadasdas",
      "priority": "priority-low",
      "id": 8
    }
  ]


  const maxExistingId = tasks.sort((a, b) => b.id - a.id)[0].id;



  function getById(req) {
    return tasks.find(value => value.id == req.params.id);
}

  

module.exports = {
    addTask,
    deleteTask,
    getTask,
    getTaskById
}


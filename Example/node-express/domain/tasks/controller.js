const Task = require('./task')


async function addTask(req, res) {
  console.log(req.body)
  let task = req.body;
  task.img = req.file.buffer;
      res.send({ message: 'La tarea se ha agregado con éxito', task:  await Task.create(task) });
  }

async function deleteTask(req, res) {
  await Task.destroy({where: {id:req.params.id}})
      res.send({ message: 'Se ha eliminado exitosamente', tasks: await Task.findAll() });
    };

async function getTask(req, res){
      res.send(await Task.findAll());
  }

async function getTaskById(req, res){
      res.send(await Task.findByPk(req.params.id));
    };  

module.exports = {
    addTask,
    deleteTask,
    getTask,
    getTaskById
}


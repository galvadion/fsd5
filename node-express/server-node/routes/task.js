const express = require('express')
const router = express.Router();


router.get('/',(req,res)=>{
    res.send(tasks)
})

router.post('/',(req,res)=>{
    let aux = req.body;
    aux.id = tasks.sort((a,b)=> b.id - a.id)[0].id +1;
    tasks.push(aux)
})


module.exports = router;

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

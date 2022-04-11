const express = require('express');
const router = express.Router()
const TaskController = require('./controller')

router.get('/',TaskController.getTask)

router.post('/',TaskController.addTask)

router.delete('/:id',TaskController.deleteTask) 

router.get('/:id',TaskController.getTaskById)

module.exports = router;


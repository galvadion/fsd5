// En routes/user.js 
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Devolvemos la lista de usuarios
  res.send({ success: true, users: users });
});

router.post('/', (req, res) => {
  const newUser = req.body;

  if (newUser.id && newUser.name && newUser.age) {
    users.push(newUser);
    res.send({ success: true, users });
  }
  else {
    res.send({ success: false, error: 'Faltan datos' });
  }
});

// Acceder a un usuario por ID
router.get('/:id', function(req, res) {
  const idParam = parseInt(req.params.id);
  const user = users.find(u => u.id === idParam);
  if (user) {
    return res.send({ success: true, user: user });
  }
  else {
    return res.send(
      { 
        success: false, 
        message: `Usuario con Id ${idParam} no encontrado` 
      }
    );
  }
});

// Actualizar a un usuario por ID
router.put('/:id', (req, res) => {
  const idParam = parseInt(req.params.id);
  const newName = req.body.name;
  const newAge = req.body.age;

  const userIndex = users.findIndex(u => u.id === idParam);
  if (userIndex >= 0) {

    users[userIndex].name = newName;
    users[userIndex].age = newAge;

    return res.send({ success: true, user: users[userIndex] });
  }
  else {
    return res.send(
      { 
        success: false, 
        message: `Usuario con Id ${req.params.id} no encontrado` 
      }
    );
  }
});

// Borrar a un usuario por ID
router.delete('/:id', (req, res) => {
  const idParam = parseInt(req.params.id);
 
  const userIndex = users.findIndex(u => u.id === idParam);
  if (userIndex >= 0) {

    // users.splice(userIndex, 1);
    users[userIndex].delete = true;

    return res.send({ success: true, users: users });
  }
  else {
    return res.send(
      { 
        success: false, 
        message: `Usuario con Id ${req.params.id} no encontrado` 
      }
    );
  }
});

module.exports = router;

const users = [
  {
    id: 1,
    name: 'Juan Perez',
    age: 30
  },
  {
    id: 2,
    name: 'Matias Gonzalez',
    age: 27
  },
  {
    id: 3,
    name: 'Pedro Corso',
    age: 23
  },
  {
    id: 4,
    name: 'Pablo Ventura',
    age: 33
  }
];


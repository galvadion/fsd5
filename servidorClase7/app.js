// En index.js => Punto de entrada a nuestro servidor
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const userRoutes =  require('./routes/user');
const productsRoutes =  require('./routes/products');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, "public")));

//Este middleware se llama cada vez que la app recibe un request
app.use(function (req, res, next) {
  console.log('Hora:', Date.now());
  next();
});

app.use('/user', userRoutes);
app.use('/product', productsRoutes);

app.listen(3000, function () {
  console.log('App corriendo en el puerto 3000');
});


// app.get('/user/:id', function(req, res) {   
//   res.send('Usuario con Id ' + req.params.id);
// });


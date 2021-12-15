const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const taskRoutes = require('./routes/task')

app.use(cors())

//middlewares  -- metodo que se ejecuta antes de que llegue a un controlador 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); //Cuando reciba algun tipo de dato en un peticion la convierto en json, en cada petion

app.use('/task',taskRoutes)

app.listen(8030, ()=>{
    console.log("My app is running")
})
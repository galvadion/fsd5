 const express = require('express')
 const bodyParser = require('body-parser')
 const sequelize = require('./infrastructure/db')

 const app = express();

 const taskRoutes = require('./domain/tasks/routes');
const Task = require('./domain/tasks/task');
const execute = require('./infrastructure/initialize');

function cors(req, res, next){
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        next();
    
} 

//middlewares  -- metodo que se ejecuta antes de que llegue a un controlador 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); //Cuando reciba algun tipo de dato en un peticion la convierto en json, en cada petion

//cors, configurar cabeceras http
app.use(cors);

app.get('/health',async(req,res)=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        res.sendStatus(200)

      } catch (error) {
        console.error('Unable to connect to the database:', error);
        res.sendStatus(510)
      }
})

 app.use('/task',taskRoutes)

 app.listen(8020,async ()=> {
     await sequelize.sync({force:true})
     execute();
     console.log("App is listening in port 8020")
 })


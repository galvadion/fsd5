const express = require('express')
const bodyParser = require('body-parser')

const app = express();

const taskRoutes = require('./routes/task')
const productRoutes = require('./routes/product')



function cors(req, res, next) {
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

app.get('/health',(req,res)=>{
    res.sendStatus(200)
})

app.use('/task',taskRoutes)
app.use('/product',productRoutes)


app.listen(8080,()=>{
    console.log("Esta app esta flama")
})
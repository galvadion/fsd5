 const express = require('express')

 const app = express();

 app.get('/', (req,res) => {
     console.log(req.hostname)
     console.log(req.ip)
     console.log(req.body)
     console.log(req.cookies)
     res.send('Hello world')
 })

 app.get('/catch', (req,res) => {
    variable.x = 200
    res.send('Termine sin fallar')
})
// Analogo al document.addEventListener('click', ()=> function )
// libreria express . metodo, ruta (relativa al origen), funcion callback)
// express().get ( path, Funct callback(req,res,next) )
app.get('/timeout', (req,res,next) => {

    setTimeout(()=>{

        try{
            variable.x = 200
            res.send('Llego a una pagina X')
        }catch(err){
            next(err)
        }
    },10)
    
})

 app.get('/try', (req,res)=>{
     let variable = 0;
     try{
        console.log("Inicio try");
        variable = 200;
     }catch(err){
        console.log("Soy un error");
        console.error(err);
     }finally{
         console.log("Finally");
         res.send('Final :' + variable)
     }
 })

 app.listen(8020,()=> {
     console.log("App is listening in port 8020")
 })
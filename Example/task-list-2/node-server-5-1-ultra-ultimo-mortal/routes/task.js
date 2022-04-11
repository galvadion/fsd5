const express = require('express')
const router = express.Router()


router.get('/',(req,res)=>{
    console.log("Llegue acá")
    res.send([{id:1,name:'pepe'}])
})


module.exports = router;
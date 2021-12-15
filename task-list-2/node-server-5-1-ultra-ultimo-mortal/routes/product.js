const express = require('express')
const router = express.Router()


router.get('/',(req,res)=>{
    console.log("res")
    res.send([{id:1,name:'Desodorante',brand:'AXE'}])
})


module.exports = router;
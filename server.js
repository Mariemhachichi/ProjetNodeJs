const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('heloooooo')
})

app.listen(9000,()=>{
    console.log('server listening on port 9000 !!')
})
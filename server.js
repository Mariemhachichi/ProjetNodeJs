const express = require('express')
const todoRoutes = require('./routes/todo')

const app = express()

app.use(express.json())
app.use('/test',todoRoutes)

// app.get('/',(req,res)=>{
//     res.send('heloooooo')
// })

app.listen(9000,()=>{
    console.log('server listening on port 9000 !!')
})
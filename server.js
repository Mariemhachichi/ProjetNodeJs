const express = require('express')
const todoRoutes = require('./routes/todo')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.use('/test',todoRoutes)


mongoose.connect(process.env.mongo_url).then(()=>{
console.log("conntect to BD")
}).catch(err=>{
    console.log('error connecting to BD')
})


const PORT = process.env.PORT 
// app.get('/',(req,res)=>{
//     res.send('heloooooo')
// })

app.listen(PORT,()=>{
    console.log('server listening on port 9000 !!')
})
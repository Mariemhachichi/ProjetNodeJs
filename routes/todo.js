
const express = require('express')
const router = express.Router()

const todoController = require("../controllers/TodoController")

router.get('/all',todoController.getAllTodo)

router.put('/update/:id',todoController.UpdateTodo)

router.delete('/delete/:id',todoController.DeleteTodo)

router.post('/add',todoController.AddTodo)




module.exports = router
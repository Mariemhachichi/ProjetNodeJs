const todos = [{id:1,task:"Foot",done:false},{id:2,task:"home",done:true}]

//get all
exports.getAllTodo = (req,res) => {
    res.send(todos)
}

//create new

exports.AddTodo = (req,res) => {
    const {tsk} = req.body
    const newTodo = {id:todos.length+1,tsk,done:false}
    todos.push(newTodo)
    res.send(todos)
}


//Update

exports.UpdateTodo = (req,res) => {
    const id = Number(req.params.id)
    const todo = todos.find(t => t.id === id)
    if (!todo){
        res.status(404).send('todo not found')
    }
    todo.task = req.body.task
    todo.done = req.body.done

    res.send(todos)
}

//delete

exports.DeleteTodo = (req,res) =>{
    const id = Number(req.params.id)
    const indx = todos.findIndex(t=>t.id === id)
    if (indx === -1){
        res.status(404).send('todo not found !!')
    }
    todos.splice(indx,1)
    res.send(todos)
}
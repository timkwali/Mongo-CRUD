const Todo = require('../models/Todo')

const addTodo = (req, res) => {
    const { id, title, description, timestamp } = req.body
    if(!id || !title || !description || !timestamp) {
        console.log("Fill empty fields!")
    }

    Todo.findOne({id: id})
        .then((todo) => {
            if(todo) {
                res.status(403).json({
                    status: 403,
                    message: "Todo already exists!"
                })
            } else {
                const newTodo = new Todo({id, title, description, timestamp})
                newTodo
                    .save()
                    .then(res.status(200).json({
                        status: 200,
                        message: "Todo added successfully"
                    }))
                    .catch((err) => {
                        res.status(500).json({
                            status: 500,
                            message: err.message,
                        })
                    })
            }
        })
}

const getAllTodo = (req, res) => {
    Todo.find({type: this.type})
        .then((todoList) => res.status(200).json({
            status: 200,
            message: "Operation Successful",
            data: todoList
        }))
        .catch((err) => {
            res.status(500).json({
                status: 500,
                message: err.message,
            })
        })
}

const updateTodo = (req, res) => {
    const id = req.params.id
    const newTodo = req.body

    Todo.replaceOne({id: id}, newTodo)
        .then((result) => res.status(200).json({
            status: 200,
            message: "Todo updated successfully"
        }))
        .catch((err) => {
            res.status(500).json({
                status: 500,
                message: err.message,
            })
        })
}

const deleteTodo = (req, res) => {
    const id = req.params.id

    Todo.deleteOne({id: id})
        .then((result) => res.status(200).json({
            status: 200,
            message: "Todo deleted successfully"
        }))
        .catch((err) => {
            res.status(500).json({
                status: 500,
                message: err.message,
            })
        })
}

module.exports = {
    getAllTodo,
    addTodo,
    updateTodo,
    deleteTodo
}
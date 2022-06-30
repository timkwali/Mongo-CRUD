const express = require('express')
const { getAllTodo, addTodo, updateTodo, deleteTodo } = require('../controllers/todoController')
const router = express.Router()
// router.get('/todos', getAllTodo)
// router.post('/todo', addTodo)
// router.put('/todo/:id', updateTodo)
// router.delete('/todo/:id', deleteTodo)

module.exports = router
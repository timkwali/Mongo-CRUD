const express = require('express')
const router = express.Router()
const { getAllTodo, addTodo, updateTodo, deleteTodo, todoHome } = require('../controllers/todoController')

router.get('/', todoHome)
router.post('/todo', addTodo)
router.get('/todos', getAllTodo)
router.put('/todo/:id', updateTodo)
router.delete('/todo/:id', deleteTodo)

module.exports = router
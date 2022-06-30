const express = require('express');
const connectDb = require('./db/db');
require('dotenv').config() //allows us to use the environment variables in .env file
const { PORT } = process.env
const { getAllTodo, addTodo, updateTodo, deleteTodo } = require('./controllers/todoController')

//File system
const fs = require('fs')

//Mock data for requests
// const users = require('./db/data/users.json')

//Connect to db
connectDb()

//Initialise express
const app = express();

//Initialise express middleware
app.use('/', require('./routes/todo'))
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

//Create basic express route
app.get('/', (req, res) => res.json({ message: "Welcome to Mongo CRUD app!" }))
app.post('/todo', addTodo)
app.get('/todos', getAllTodo)
app.put('/todo/:id', updateTodo)
app.delete('/todo/:id', deleteTodo)

//PORT 
const port = process.env.PORT || PORT;

//Listen to connection
app.listen(port, () => console.log(`app running on port ${port}`));
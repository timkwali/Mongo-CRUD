const express = require('express');
const connectDb = require('./db/todoDb');
require('dotenv').config() //allows us to use the environment variables in .env file
const { PORT } = process.env
const routes = require('./routes/todo')

//Connect to db
connectDb()

//Initialise express
const app = express();

//Initialise express middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use('/', routes)

//PORT 
const port = process.env.PORT || PORT;

//Listen to connection
app.listen(port, () => console.log(`app running on port ${port}`));
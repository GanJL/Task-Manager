const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes')
const taskRoutes = require('./routes/taskRoutes')

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000; 
 
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri);

const connection = mongoose.connection;

connection.once('open', () => {

  console.log("MongoDB database connection established successfully");

})

app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

app.listen(port, ()=>{
    console.log('Server running on 5000');
})
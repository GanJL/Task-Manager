const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

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


const Task = require('./models/tasks')

app.get('/tasks', async (req, res) => {
    const tasks = await Task.find()

    res.json(tasks)
})

app.post('/tasks/new', async (req, res)=>{

    const tasks = new Task({
  
      title: req.body.title,
      description: req.body.description,
      urgency: req.body.urgency,
      status: req.body.status,
      
    });
  
    tasks.save();
  
    res.json(tasks)
  
})
  
app.delete('/tasks/delete/:id', async (req, res)=>{
  
    const result = await Task.findByIdAndDelete(req.params.id);
  
    res.json({result})
  
});  
  
app.post('/tasks/update/:id', async (req, res)=>{
  
    Task.findById(req.params.id)
    .then(task => {
        task.title = req.body.title;
        task.description = req.body.description;
        task.urgency = req.body.urgency;
        task.status = req.body.status;
  
        task.save()
        .then(()=> res.json("Task updated!"))
        .catch(err=> res.status(400).json('Error:' + err))
    })
    .catch(err=> res.status(400).json('Error:' + err))
});  
    
app.delete('/tasks/delete/:id', async (req, res)=>{

const result = await Tasks.findByIdAndDelete(req.params.id);

res.json(result)

});  

app.listen(port, ()=>{
    console.log('Server running on 5000');
})
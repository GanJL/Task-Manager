const asyncHandler = require('express-async-handler')
const Task = require('../models/tasks');

const getTasks = asyncHandler(async (req, res) => {

  const task = await Task.find({ user: req.user._id });

  res.json(task);

});

const getTaskById = asyncHandler(async (req, res) => {

  const task = await Task.findById(req.params.id);

  if (task) {

    res.json(task);

  } else {

    res.status(404).json({ message: "Task not found" });

  }
});


const createTask = asyncHandler(async (req, res) => {

  const { title, description, urgency, status } = req.body;

  if (!title || !description || !urgency || !status) {

    res.status(400);
    throw new Error("Please fill all the fields");

  } else {

    const tasks = new Task({
  
        user: req.user._id,
        title,
        description,
        urgency,
        status,
        
      });

    const createdTask = await tasks.save();

    res.status(201).json(createdTask);
  }
});

const deleteTask = asyncHandler(async (req, res) => {

  const task = await Task.findById(req.params.id);

  if (task.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (task) {

    await task.remove();

    res.json({ message: "Task Removed" });

  } else {

    res.status(404);
    throw new Error("Task not Found");
  }
});

const updateTask = asyncHandler(async (req, res) => {

  const { title, description, urgency, status } = req.body;

  const task = await Task.findById(req.params.id);

  if (task.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (task) {

    task.title = title;
    task.description = description; 
    task.urgency = urgency;
    task.status = status;

    const updatedTask = await task.save();

    res.json(updatedTask);

  } else {

    res.status(404);
    throw new Error("Task not found");
  }
});

module.exports = { getTaskById, getTasks, createTask, deleteTask, updateTask };


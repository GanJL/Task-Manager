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
    res.status(400).json({
        "errors": [
            {
                "msg": "Error in task creation",
            }
        ]
    })
  } else {

    const tasks = new Task({
  
        user: req.user._id,
        title: title,
        description: description,
        urgency: urgency,
        status: status,
        
      });

    const createdTask = await tasks.save();

    res.status(201).json(createdTask);
  }
});

const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (task.user.toString() !== req.user._id.toString()) {
    res.status(401).json({
        "errors": [
            {
                "msg": "You can't perform this action",
            }
        ]
    })

  }

  if (task) {
    await task.remove();
    res.json({ message: "Task Removed" });
  } else {
    res.status(404).json({
        "errors": [
            {
                "msg": "Task not found",
            }
        ]
    })
  }
});

const updateTask = asyncHandler(async (req, res) => {
    const { title, description, urgency, status } = req.body;

  const task = await Task.findById(req.params.id);

  if (task.user.toString() !== req.user._id.toString()) {
    res.status(401).json({
        "errors": [
            {
                "msg": "You can't perform this action",
            }
        ]
    })

  }

  if (task) {
    task.title = title;
    task.description = description;
    task.urgency = urgency;
    task.status = status;

    const updatedTask = await task.save();

    res.json(updatedTask);

  } else {
    res.status(404).json({
        "errors": [
            {
                "msg": "Task not found",
            }
        ]
    })
  }
});

module.exports = { getTaskById, getTasks, createTask, deleteTask, updateTask };


const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')
const {
    getTaskById,
    getTasks,
    createTask,
    deleteTask,
    updateTask,
  } = require("../controllers/taskController.js");

router.route('/').get( protect, getTasks )
router.route('/create').post(protect, createTask)
router
    .route('/:id')
    .get(getTaskById)
    .delete(protect, deleteTask)
    .put(protect, updateTask);


module.exports = router
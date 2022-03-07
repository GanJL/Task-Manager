const mongoose = require('mongoose');
// a schema based solution to model data 


const Schema = mongoose.Schema;

const taskSchema = new Schema({
  
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  urgency: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    trim: true,
    required: true,
  }, 
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },

}, {
  timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
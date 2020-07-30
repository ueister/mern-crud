const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  todo_description: String,
  todo_responsible: String,
  todo_priority: String,
  todo_completed: Boolean,
}, { timestamps: true });

// export our module to use in server.js
module.exports =  mongoose.model('Todo', TodoSchema);
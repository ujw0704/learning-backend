// const mongoose = require("mongoose")
import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  tittle: {
    type: String,
    maxLength: 50,
    required: true
  },

  discripition: {
    type: String,
    maxLength: 50,
    required: true
  },

  createdAt: {
    type: Date,
    required: true,
    default: Date.now()
  },
  updateAT: {
    type: Date,
    required: true,
    default: Date.now()
  },
});

// module.exports = mongoose.model("Todo", todoschema);

const Todo = mongoose.model("Todo", todoSchema)
export default Todo

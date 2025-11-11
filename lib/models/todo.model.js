import  mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true }
}, { timestamps: true });

export const todoModel = mongoose.models.todo || mongoose.model('todo', todoSchema);

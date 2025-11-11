"use server"

import { redirect } from "next/navigation";
import { todoModel } from "./models/todo.model.js"

export async function addTodo(formDat) {

    const name = formDat.get("name")
    const author = formDat.get("author")
    console.log(name);
    
    await todoModel.create({ name, author })
    redirect("/todos/allTodos")

}


export async function updateTodo(formDat) {

    const id = formDat.get("id")
    const name = formDat.get("name")
    const author = formDat.get("author")
    console.log(name);
    
    await todoModel.findByIdAndUpdate(id, { name, author })
    redirect("/todos/allTodos")
    
}

export async function deleteTodo(formData) {
  const id = formData.get("id"); 
  await todoModel.findByIdAndDelete(id);
  redirect("/todos/allTodos");
}
import { NextResponse } from "next/server.js";
import { todoModel } from "../../../../lib/models/todo.model.js";
import connectDB from "../../../../lib/db.conection.js";

export async function GetById(id) {
    try {
        await connectDB();
        const data = await todoModel.findById(id);
        return NextResponse.json(data);
      } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
}
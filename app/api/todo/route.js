
import { NextResponse } from "next/server.js";
import connectDB from "../../../lib/db.conection.js";
import { todoModel } from "../../../lib/models/todo.model.js";

export async function GET() {
  try {
    await connectDB();
    const data = await todoModel.find();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


import React from "react";
import Link from "next/link";
import { GET } from "../../../api/todo/route.js";
import { deleteTodo } from "../../../../lib/action.js";

export default async function Page() {
  const req = await GET();
  const data = await req.json();

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5 text-center">Todos List</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.map((todo) => (
          <div
            key={todo._id}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-5 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              {todo.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Author: {todo.author}
            </p>

            <div className="flex gap-2">
              <form action={deleteTodo} method="post">
                <input type="hidden" name="id" value={todo._id} />
                <button
                  type="submit"
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition"
                >
                  Delete
                </button>
              </form>

              <Link
                className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded transition flex items-center justify-center"
                href={`/todos/update/${todo._id}`}
              >
                Update
              </Link>

              <Link
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition flex items-center justify-center"
                href={`/todos/${todo._id}`}
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

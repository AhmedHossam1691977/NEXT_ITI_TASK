import React from 'react'
import { GetById } from '../../../api/todo/[id]/routes.js';

export default async function page({params}) {

  const {id} =await params;
  
const req = await GetById(id)
const data = await req.json()
console.log(data);

  

  return <>

     <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
        Todo Details
      </h1>

      {data ? (
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 space-y-4">
          <div>
            <span className="font-semibold text-gray-700 dark:text-gray-300">Name: </span>
            <span className="text-gray-900 dark:text-gray-100">{data.name}</span>
          </div>

          <div>
            <span className="font-semibold text-gray-700 dark:text-gray-300">Author: </span>
            <span className="text-gray-900 dark:text-gray-100">{data.author}</span>
          </div>

          <div>
            <span className="font-semibold text-gray-700 dark:text-gray-300">Created At: </span>
            <span className="text-gray-500 dark:text-gray-400">{new Date(data.createdAt).toLocaleString()}</span>
          </div>

          <div>
            <span className="font-semibold text-gray-700 dark:text-gray-300">Updated At: </span>
            <span className="text-gray-500 dark:text-gray-400">{new Date(data.updatedAt).toLocaleString()}</span>
          </div>

          <div className="flex gap-3 mt-4">
            <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition">
              Update
            </button>
            <button className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition">
              Delete
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">Todo not found</p>
      )}
    </div>

  </>
}

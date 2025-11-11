import React from 'react'
import { updateTodo } from '../../../../../lib/action.js';
import { GetById } from '../../../../api/todo/[id]/routes.js';

export default async function page({params}) {

    const {id} =await params;
    console.log(id);

    const req= await GetById(id)
    const data = await req.json()
    console.log(data);


    
  return <>
  
    <form className="max-w-sm mx-auto" action={updateTodo} method="post">
        <div className="mb-5">

  <input type="hidden" name="id" value={data._id} />

          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter name"
            required
            defaultValue={data.name}
          />
        </div>
  
        <div className="mb-5">
          <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter author"
            required
            defaultValue={data.author}
          />
        </div>
  
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          
        >
          Submit
        </button>
      </form>


  </>
}

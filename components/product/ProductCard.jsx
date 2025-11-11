import Link from 'next/link.js';
import React from 'react'

export default function ProductCard({elm}) {    
  return <>
  
  

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src={elm.imageCover} alt="" />
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{elm.title.slice(0,15)}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{elm.description.slice(0,50)}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{elm.price}</p>

        <Link href ={`/product/${elm._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
        </Link>
    </div>
</div>

  
  </>
}

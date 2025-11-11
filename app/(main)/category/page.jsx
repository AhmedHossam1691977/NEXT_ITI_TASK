import React from 'react'
const baseUrl = "https://ecommerce.routemisr.com";

async function allCategory() {
    const res = await fetch(`${baseUrl}/api/v1/categories`,{
        next: {
            revalidate: 10,
        },
    });
    const data = await res.json();
    return data;
}
  
export default async function page() {
    const categories =await allCategory();
    console.log(categories);
  return <>
  

  <div className='grid grid-cols-4 m-10'>
      {categories?.data.map((elm) => {
        return<div key={elm._id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-[50]">
    <a href="#">
        <img className="rounded-t-lg w-100 h-[200px]" src={elm.image} alt="" />
    </a>
    <div className="p-5">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{elm.name}</p>
        
    </div>
</div>
      }) }
  </div>

  </>
}

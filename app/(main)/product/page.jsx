import React from 'react'
import ProductCard from '../../../components/product/ProductCard.jsx'


const baseUrl = "https://ecommerce.routemisr.com";

async function allProduct() {
    const res = await fetch(`${baseUrl}/api/v1/products`);
    const {data} = await res.json();
    return data;
}

export default async function page() {

    const products = await allProduct();
    
  return <>


    <div className='grid grid-cols-4 m-10'>
        {products.map((elm) => <ProductCard elm={elm} key={elm._id} className='m-5'/>) }
    </div>

  </>
}

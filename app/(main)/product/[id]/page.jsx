import React from "react";
import ProductDetails from "../../../../components/product/productDetails.jsx";
const baseUrl = "https://ecommerce.routemisr.com";




  async function allProduct() {
      const res = await fetch(`${baseUrl}/api/v1/products`);
  const {data} = await res.json();
return data;
  }


  async function getProduct(id) {
    const res = await fetch(`${baseUrl}/api/v1/products/${id}`);
    const {data} = await res.json();
    console.log(data);
    
    return data;
  }

  // generateStaticParams for SSG and caching
  export async function generateStaticParams() {
    const products = await allProduct();
    const ids = products.map((product) => ({
      id: product._id,
    }));

    return ids;
  }

  // generateMetadata for SEO and page title
  export async function generateMetadata({ params }) {
    const {id} =await params;
    const product = await getProduct(id);
    return {
      title: product.title,
      description: product.description,
    };
  }



export default async function ProductDetailsPage({ params }) {
  console.log("Params:", params);

  const {id} =await params;

  const product = await getProduct(id);

  return <>
      <div>
        <ProductDetails product={product}/>
      </div>
  </>
}

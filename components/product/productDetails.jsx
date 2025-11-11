import React from 'react'

export default function ProductDetails({product}) {
    console.log(product);
    
  return <>
  
  <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">

        <div className="p-6">
          <img
            src={product.imageCover}
            alt={product.title}
            width={500}
            height={500}
            className="w-full h-[400px] object-cover rounded-xl mb-4"
          />

    
          {/* <div className="flex gap-3 overflow-x-auto">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Product ${idx}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 transition-all ${
                  mainImage === img
                    ? "border-blue-500 scale-105"
                    : "border-gray-200 hover:border-blue-300"
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div> */}
        </div>


        <div className="p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.title}
            </h1>

            <p className="text-gray-500 mb-4">
              {product.subcategory[0].name} • {product.category.name}
            </p>

            <div className="flex items-center mb-6">
              <span className="text-3xl font-semibold text-blue-600">
                ${product.price}
              </span>
              <span className="ml-4 text-sm text-gray-500">
                Stock: {product.quantity}
              </span>
            </div>


            <div className="flex items-center mb-4">
              <span className="text-yellow-400 text-lg">★</span>
              <span className="ml-1 text-gray-700">
                {product.ratingsAverage} / 5
              </span>
              <span className="ml-2 text-gray-500 text-sm">
                ({product.ratingsQuantity} reviews)
              </span>
            </div>

    
            <p className="text-gray-700 whitespace-pre-line mb-6 leading-relaxed">
              {product.description}
            </p>
          </div>

    
          <div className="flex items-center justify-between border-t pt-4">
            <div className="flex items-center gap-3">
              <img
                src={product.brand.image}
                alt={product.brand.name}
                className="w-10 h-10 object-contain"
              />
              <span className="font-medium text-gray-800">
                {product.brand.name}
              </span>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-6 py-2 transition-all">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>

  
  </>
}

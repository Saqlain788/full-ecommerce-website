import React from 'react'
import ProductCard from '@/component/ProductCard'


import { Products } from '@/utils/mock'


function ProductList() {    
  const ProductChanks=Products.slice(0,3)
 

  return (
    <div>
        <div className=''>
        <h1 className='text-center text-lg font-bold text-blue-600 mt-32 pb-2'> PRODUCTS</h1>
        <p className=' text-center text-4xl font-bold'>Check What We Have</p>
        </div>
    <div className=' flex justify-between flex-wrap  mt-6  '>
      { ProductChanks.map((product)=>(
         <ProductCard  key={product.id}
          title={product.name}
           price={product.price}
            img={product.image}
            category ={product.category } />
        
      ))}

    </div>
    </div>
  )
}

export default ProductList

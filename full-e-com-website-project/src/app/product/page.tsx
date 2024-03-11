 

 import ProductCard from '@/component/ProductCard'
import { Products } from '@/utils/mock'
import React from 'react'
 
 const AllProducts = () => {
   return (
    <div className=' flex flex-wrap justify-evenly mt-16 py-10  '>
    { Products.map((product)=>(
       <ProductCard  key={product.id}
        title={product.name}
         price={product.price}
          img={product.image}
          category ={product.category } />
      
    ))}

  </div>
   )
 }
 
 export default AllProducts
 
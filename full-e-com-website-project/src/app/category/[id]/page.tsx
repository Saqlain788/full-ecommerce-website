
import { Products } from "@/utils/mock"
import ProductCard from "@/component/ProductCard"
import { StaticImageData } from "next/image"


const getProductsByCategory=(category : string)=>{
   return Products.filter((product)=> product.category===category)

}

 export default function Page({ params }: { params: { id: string } }) {
  const result=getProductsByCategory(params.id)

    return ( <div><div className=' flex flex-wrap justify-evenly mt-16 py-10  '>
 
    {
    
    result.length>0 ? result.map((product)=>(
           <ProductCard  key={product.id}
            title={product.name}
             price={product.price}
              img={product.image}
              category ={product.category} />
          
        )) : 
        <p> No Products Found </p> }


  </div>: {params.id}</div> )
  }
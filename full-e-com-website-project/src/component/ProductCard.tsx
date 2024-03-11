import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Button } from '@/components/ui/button'


function ProductCard(props :{ title:string, price :number , img:StaticImageData , category :string}) {
  return (
       

    <div className=' mt-10'>

         <Image src={props.img} alt='P1' />
        <h3 className='font-bold text-xl mt-4'>{props.title}</h3>
        <p className='font-semibold text-xl'>  <span className='text-base font-normal'> {props.category } </span></p>
        <p className='font-semibold text-xl'> ${props.price}</p>
      
        <Button className='font-bold '> Add to Card</Button>
   
   
    </div> 
    

  )
}

export default ProductCard

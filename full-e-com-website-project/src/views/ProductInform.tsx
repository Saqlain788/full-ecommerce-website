import React from 'react'
import p14 from "/public/p14.webp"
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function ProductInform() {
  return (
    <section>

        <div>
        <h2 className= 'py-2 p-28 flex justify-end  items-end text-5xl font-bold  mt-32'>
            Unique and <br/> Authentic  Vintage <br /> Designer Jewellery</h2>
     </div> 
    <div className='grid grid-cols-2 lg:flex-row gap-10  mt-2 '>
   
     {/* left div */}
     <div className='grid grid:lg md:grid-cols-2 gap-20 mt-20'>
      
        <div className='  flex flex-col  '>

          <h2 className='font-bold text-xl '>Using Good Quality Material</h2>
          <p className='mt-4 '>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
        </div>
        <div className='flex flex-col '>
          <h2 className='font-bold text-xl'> 100% Handmade Products</h2>
          <p className='mt-4 '>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
        </div>
        <div className='flex flex-col '>
          <h2 className='font-bold text-xl'>Modern Fashion Design</h2>
          <p  className='mt-4 '>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
        </div>
        <div className='flex flex-col '>
          <h2 className='font-bold text-xl'> Discount for Bulk Orders</h2>
          <p className='mt-4 '>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
        </div>
    </div>

      
          {/* {rigt div} */}
          <div className='grid grid-col mt-10'>
            <div  className='flex  gap-20 '>
              
              <Image className=''  src={p14} alt="p14"/>
              <p className='flex justify-end text-lg mt-6'>This piece is ethically  crafted <br /> in our small family-owned workshop
                 in Peru <br /> with unmatched  attention <br /> to detail and care. 
                 The <br /> Natural color is the actual <br /> natural color of the fiber, <br />
                 undyed and 100% traceable.
                 
                  </p>
              
                  </div>

                  <div>
                
                  </div>
               
        </div>
      
    </div>
   
    </section>
  )
}

export default ProductInform

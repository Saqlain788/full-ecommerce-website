import React from 'react'
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Button} from "@/components/ui/button"
import { Mail, ShoppingCart } from 'lucide-react'
import { StaticImageData } from 'next/image'
import Featured1 from "/public/Featured1.webp"
import Featured2 from "/public/Featured2.webp"
import Featured3 from "/public/Featured3.webp"
import Featured4 from "/public/Featured4.webp"
import heroImage from "/public/heroImage.webp"



function Hero() {
  return (
    <section className='flex flex-col lg:flex-row gap-y-6 py-6 '>
       {/* {left div} */}
            <div className='flex-1'>
            <Badge className=' mt-12 py-2 px-5 gap-x-3 rounded-md bg-blue-100 font-bold text-sm text-blue-700'> Sale 70%</Badge>
            <h1 className=" mt-10 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            An Industrial Take on Streetwear
           </h1>
              <p className=" mt-2 leading-7 [&:not(:first-child)]:mt-6">
              Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
              </p>
              <Button className='  mt-8 bg-black py-6 px-8 text-md' > 
                <ShoppingCart className="mr-3 h-6 w-6 " />
                 Start Shopping 
             </Button>
             <div className=' py-32 gap-x-10 flex'>
             <Image src={Featured1} alt="Featured"/>
             <Image src={Featured2} alt="Featured"/>
             <Image src={Featured3} alt="Featured"/>
             <Image src={Featured4} alt="Featured"/>
             </div>
    </div>
         
          {/* {rigt div} */}
        <div className='flex  h-90 w-90 rounded-full bg-red-100'>
              <Image src={heroImage} alt="hero"/>
         
        </div>
    
    </section>
  )
}

export default Hero

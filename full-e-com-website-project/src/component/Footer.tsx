import Link from 'next/link'
import React from 'react'
import Logo from "/public/Logo.webp"
import Image from 'next/image'
import { Facebook, Github, Linkedin, Twitter } from 'lucide-react'




function Footer() {
  return (
    <footer className=' mt-52 '> 
        <div className='absolute top-0 left-0 w-full overflow-hidden'>   </div>
      {/* <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="relative block fill-red-400"></path>
    </svg> */}
    <div className='grid lg:grid md:grid-cols-4 gap-x-24 pb-32 '>
        <div className='flex flex-col gap-5'>
            <Image className='mt-3 ' src={Logo} alt=' Logo'/>

            <p> Small, artisan label that offers 
              a thoughtfully  curated collection  of high quality everyday essentials made.
            </p>
            <div>  <div className='flex space-x-4 mt-4 '>
           <Link className='hover:bg-pink-300  transform hover:scale-150 transition-all duration-150 ease-in-out ' href="">
            <Github/>

           </Link>
           <Link className='text-blue-800  hover:bg-pink-300 transform hover:scale-150 transition-all duration-150 ease-in-out' href="">
            <Facebook/>

           </Link>
           <Link className=' text-blue-800 hover:bg-pink-300 transform hover:scale-150 duration-150 ease-in-out'  href="">
            <Linkedin/>

           </Link>

           <Link className=' text-blue-800 hover:bg-pink-300 transform hover:scale-150 duration-150 ease-in-out' href="">
            <Twitter/>

           </Link>

           </div> </div>

        </div>
        <div className='flex flex-col gap-5'>
        <ul>
            <li className='text[22px] list-none font-semibold text-gray-500 py-2 text-xl'>Company</li>
            <li  className='my-4 list-none'>About </li>
            <li className='my-4 list-none'>Terms of use </li>     
            <li className='my-4 list-none'>Privacy Policy</li>
            <li className='my-4 list-none'>How it Works </li>
            <li className='my-4 list-none'>Contact Us</li>
           </ul>

        </div>
        <div className='flex flex-col gap-4'>
           <ul>
            <li className='text[22px] list-none font-semibold text-gray-500 py-2 text-xl'>Support</li>
            <li  className='my-4 list-none'> Support Carrer</li>
            <li className='my-4 list-none'>24h Service</li>     
            <li className='my-4 list-none'>Quick Chat</li>
           </ul>

        </div>
       <div className='flex flex-col gap-4'>
       <ul>
            <li className='text[22px] list-none font-semibold text-gray-500 py-2 text-xl'>Contact</li>
            <li  className='my-4 list-none'> Whatsapp</li>
            <li className='my-4 list-none'>Support 24h</li>     
            
           </ul>
       
        </div>
    
    </div>

    <hr className='' />
    <div className='copyright  flex flex-col lg:flex-row gap-y-6 py-6  justify-between items-center mt-10 pb-10 '>
        <p>Copyright © 2022 Dine Market</p>
        <p>Design by. <span className='font-semibold'>TenTA Design Studio</span></p>
        <p>Code by. <span  className='font-semibold'>muhammad-zafar47 on github</span></p>
      </div>
    </footer>
  )
}

export default Footer

import Image from 'next/image'
import Link from 'next/link'
import Logo from "/public/Logo.webp"
import { Input } from "@/components/ui/input"
import {ShoppingCart} from "lucide-react"


function Header() {
  return (
    <div className=' mt-5 flex justify-between items-center px-24 py-6'>
    <Image src={Logo} alt="image" />
    <ul className='flex gap-x-12'>
    <li className='text-lg'>  <Link href={'/'}> Home  </Link>  </li>
        <li className='text-lg'> <Link href={'/category/female'}> Female  </Link>  </li>
        <li className='text-lg' > <Link href={'/category/male'}> Male  </Link> </li>
        <li className='text-lg'><Link href={'/category/kids'}> Kids  </Link> </li>
        <li className='text-lg'> <Link href={'/product'}> All Products  </Link> </li>
    </ul>

  
   
   <div ><Input placeholder='Search prouduct ' className='h-6'/></div>
   <div> 
    <div className=' w-10 h-10 rounded-full bg-slate-200 flex justify-center items-center relative'> 
    <div className='w-4 h-4 rounded-full flex justify-center items-center bg-red-600 absolute right-1 top-0'>
        <p className='text-white text-xs'> 0 </p>
    </div>
    <ShoppingCart/></div>
   </div>
    </div>
  )
}

export default Header

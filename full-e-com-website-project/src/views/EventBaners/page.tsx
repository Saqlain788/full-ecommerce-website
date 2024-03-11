import React from 'react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'


const EventBaners = () => {
  return (
    <div className='container  '>
      <div className='text-center font-bold'>
        <div className='text-lg mt-16 pb-2 text-blue-600'>PROMOTIONS</div>
        <h2 className='text-5xl text-bold mt-5 pb-6'>Our Promotions Events</h2>
      </div>

      <div className='  grid grid-cols-1 md:grid-cols-2 gap-12 mt-10'>
        <div>
          <div className=' flex flex-col lg:flex-row gap-y-6 py-6  justify-between p-4 bg-gray-300 mb-5'>
            <div className='flex items-center pl-2 md:pl-8'>
              <div>
                <h2 className='font-bold text-5xl'>GET UP TO 60%</h2>
                <p className='text-2xl'>For the summer season</p>
              </div>
            </div>
            <div>
              <Image  src='/event1.webp' alt='Image' width={260} height={200} className='h-auto' />
            </div>
          </div>
          <div className=' flex flex-col lg:flex-row gap-y-6 py-6 justify-between p-4 bg-black'>
            <div className='flex items-center pl-2 md:pl-8 text-white'>
              <div>
                <h2 className=' text-center font-bold text-5xl pb-3'>GET 30% Off</h2>
                <p className='text-xl text-center'>USE PROMO CODE</p>
                <Button className='text-xl px-10 py-3 text-center mt-3'> DINEWEEKENDSALE</Button>
              </div>
            </div>
            <div>
              <Image src='/event1.webp' alt='Image' width={260} height={200} className='h-auto' />
            </div>
          </div>
        </div>

        <div className='flex gap-6 '>
            
          <Image src='/event2.webp' alt='Image' width={200} height={0}  className=' w-full h-auto  bg-orange-100' />
          <Image src='/event3.webp' alt='Image' width={200} height={0} className='w-full h-auto bg-gray-300' />
        </div>
      </div>
    </div>
  )
}

export default EventBaners;



// const EventBaners = () => {
//   return (
//     <div className='container py-20'>
//         <div className='text-center font-bold'>
//             <div className='text-sm text-blue-600'>PROMOTIONS</div>
//             <h2 className='text-3xl mt-5'>Our Promotions Events</h2>
//         </div>
//         <div className='grid grid-cols-1 md:grid-col-2 gap-5 mt-10'>
//             <div>
//                 <div className='flex justify-between bg-gray-200 mb-5'>
//                     <div className='flex items-center pl-2 md:pl-8'>
//                         <div>
//                         <h2 className='font-semibold txet-xl md:2xl'> GET UP TO 60%    </h2>
//                         <p className='text-lg'> For The Summer Season</p>
//                         </div>
//                     </div>
//                     <div>
//                     <Image src='/event1.webp' alt='Image' width={260} height={200} className='h-auto' />
//                     </div>
//                 </div>
//                 <div className=' flex justify-between bg-gray-800'>
//                     <div className='flex items-center pl-2 md:pl-8 text-white '>
//                         <div>
//                             <h2 className='font-semibold text-2xl'> GET 30% Off </h2>
//                             <p className='text-lg '> USE PROMO CODE</p>
//                         </div>
//                     </div>
//                     <div>
//                     <Image src='/event1.webp' alt='Image' width={260} height={200} className='h-auto' />
//                     </div>
//                 </div>
//             </div>
//             <div className='flex gap-4'>
//             <Image src='/event2.webp' alt='Image' width={200} height={0} className='w-full h-auto bg-orange-100' />
//            <Image src='/event3.webp' alt='Image' width={200} height={0} className='w-full h-auto bg-gray-200' />
                

//             </div>

//         </div>
//     </div>
//   )
// }

// export default EventBaners

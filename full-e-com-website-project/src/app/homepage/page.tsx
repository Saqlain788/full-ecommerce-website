import React from 'react'
import Image from 'next/image'
import Logo from '/public/Logo.webp'

function HomePage() {
  return (
    <div>
       <Image src={Logo} alt="image"/>
    </div>
  )
}

export default HomePage

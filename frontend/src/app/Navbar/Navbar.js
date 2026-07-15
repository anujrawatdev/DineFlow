import React from 'react'
import Link from 'next/link.js';

const Navbar = () => {
  return (
    <div  >
      
        <nav className="fixed top-5 left-1/2 -translate-x-1/2
                w-[55%]
                h-[8%]
                flex 
                
                justify-between
                rounded-full
                bg-amber-900/55
                backdrop-blur-xl
                border border-white/14
                px-15 py-4" >
        <div className='font-bold text-xl'>Dine<span className='text-amber-500' >Flow</span></div>
        <div className='flex gap-5' >
            <Link href="/home" className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full" >Home</Link>
            <Link className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full" href="/AboutUs" >AboutUs</Link>
            <Link className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full" href="/ContactUs" >ContactUs</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
function About() {
  return (
    <div className='  container mx-auto px-4 py-20'>
      <div className='flex justify-between items-center'>
    <div className=' lg:w-[480px] md:w-[400px] py-10'>
      <p className='text-5xl '>About</p>
   <p className='text-[12px] leading-normal py-10 text-[rgb(181,171,161)]'>UBBS is vastly experienced at working across sectors – Residential, Hospitality and Commercial, and across disciplines – Architecture and Interior Design. We offer a multifaceted, entirely bespoke design service, focussed around achieving the best possible end result. Energy efficiency and sustainability issues are given serious consideration at the outset of the design process, in particular on new-build projects</p>
   <Link href={'/abouts'} className='border-b-[1px] pb-[2px] hover:border-red-500 duration-1000 border-[#c0b8b0] text-[#615b55]  text-sm tracking-widest '>MEET THE TEAM</Link>
    </div>
    <div className='md:w-[600px] lg:w-[600px]'>
    <img className='hover:scale-90 cursor-pointer duration-1000 h-[400px]' src='/images/about.jpg' alt='img'/>
    </div>
    </div>
    </div>
    
  )
}

export default About
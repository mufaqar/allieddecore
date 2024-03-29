import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
function Footer() {
  return (
    <section className=''>
    <div className='relative h-[35rem] w-full bg-cover bg-center border-b-[2px] border-black pb-4' style={{backgroundImage:`url('footerbg.webp')`}}>
   <div className='absolute inset-0 bg-black opacity-50'></div>
<div className=' absolute top-1/2 mx-auto container px-4 flex items-center md:space-x-96'>
<h1  className='leading-normal text-white font-normal text-6xl font-sans max-w-[700px]'>Delivering on a mission to create <strong className='font-normal text-white/60'>better spaces.</strong></h1>
<div className='flex items-center group'> 
<p className='border-t-white/30 border-r-white/30 border-b-white/30 border-l-black/5  relative ml-20  border-[1px] rounded-full px-12 py-12'></p>
<Link href={''} className='text-white/60 pr-4 font-sans absolute text-sm whitespace-nowrap flex items-center'>SCHEDULE A CALL <li className='list-none pl-2'><IoIosArrowForward /></li></Link>
</div>
</div>

    </div>

    <div className='container px-4 mx-auto'>
<div className='flex justify-between items-center'>
  <div>
    <div>
    <h1>London</h1>
    <p>London, United Kingdom</p>
    </div>
    <div>
    <h1>Vilnius</h1>
    <p>Kalinausko 24-7
Vilnius 03107</p>
    </div>
    <div>
    <h1>Contact</h1>
    <p>info@ubbs.uk</p>
    </div>
  </div>
  <div>
    <h1>Request a call</h1>
    <div className='flex md:w-[400px]'>
    <input type='text' className='border-b-[2px] md:w-[300px] border-black focus:outline-none placeholder-gray-400' placeholder='Enter Your Email'/>
      <button className=' rounded-full border-black border-[2px] px-4 py-2 '>Submit</button>
    </div>
    <p className='md:w-[400px] text-[10px]'>UBBS London is an architecture and interior design firm based in London. Our services include Architecture, Interior Design, Construction and Administration and Specification.</p>
  </div>
</div>
    </div>
    </section>
  )
}

export default Footer
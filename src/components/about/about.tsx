'use client'
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion'
import Link from 'next/link';
function About() {
  return (
    <div className='  container mx-auto px-4 py-20'>
      <div className='md:flex lg:flex justify-between items-center'>
    <div className=' lg:w-[480px] md:w-[400px] py-10'>
      <motion.p
          initial={{ x: '-100%', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{
            stiffness: 100,
            damping: 15,
            duration: 1,
            ease: "easeIn",
          }}  className='md:text-5xl lg:text-5xl text-4xl'>About</motion.p>
   <motion.p
          initial={{ y: '-100%', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{
            stiffness: 100,
            damping: 15,
            duration: 1,
            ease: "easeIn",
          }} className='text-[12px] leading-normal py-10 text-[rgb(181,171,161)]'>UBBS is vastly experienced at working across sectors – Residential, Hospitality and Commercial, and across disciplines – Architecture and Interior Design. We offer a multifaceted, entirely bespoke design service, focussed around achieving the best possible end result. Energy efficiency and sustainability issues are given serious consideration at the outset of the design process, in particular on new-build projects</motion.p>
   <Link href={'/abouts'} className='border-b-[1px] pb-[2px] hover:border-red-500 duration-1000 border-[#c0b8b0] text-[#615b55]  text-sm tracking-widest '>MEET THE TEAM</Link>
    </div>
    <div className='md:w-[600px] lg:w-[600px]'>
    <motion.img
          initial={{ y: '100%', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{
            stiffness: 100,
            damping: 15,
            duration: 1,
            ease: "easeIn",
          }} className='hover:scale-90 cursor-pointer duration-1000 lg:h-[400px] h-[300px] md:h-[400px]' src='/images/about.jpg' alt='img'/>
    </div>
    </div>
    </div>
    
  )
}

export default About

'use client'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { IoIosArrowForward } from "react-icons/io";
import { TiSocialFacebook, TiSocialPinterest, TiSocialLinkedin } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
function Footer() {
  const icons = [
    {
      icon: <IoLogoInstagram />,
      link: 'www.instagram.com'
    },
    {
      icon: <TiSocialFacebook />,
      link: "www.faceebook.com"
    },
    {
      icon: <TiSocialPinterest />,
      link: "www.pinterest.com"
    },
    {
      icon: <TiSocialLinkedin />,
      link: "www.linkdein.com"
    }
  ]
  return (
    <section className=''>
      <div className='relative md:h-[35rem] h-[15rem] lg:h-[35rem]  w-full bg-cover bg-center ' style={{ backgroundImage: `url('footerbg.webp')` }}>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className=' absolute py-10 lg:py-0 md:py-0 md:top-1/2 lg:top-1/2 mx-auto container px-4 md:flex lg:flex items-center lg:space-x-96 md:space-x-96'>
          <motion.h1
            initial={{ x: '-100%', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{
              stiffness: 100,
              damping: 15,
              duration: 1,
              ease: "easeIn",
            }}
          className='leading-normal text-white font-normal lg:text-6xl text-xl md:text-6xl font-sans lg:max-w-[700px] md:max-w-[700px]'>Delivering on a mission to create <strong className='font-normal text-white/60'>better spaces.</strong></motion.h1>
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{
              stiffness: 100,
              damping: 15,
              duration: 1,
              ease: "easeIn",
            }}
          className='flex items-center group'>
            <p className='border-t-white/30 border-r-white/30 border-b-white/30 border-l-black/5  relative ml-20  border-[1px] rounded-full px-12 py-12 group-hover:border-t-white group-hover:border-r-white group-hover:border-b-white duration-1000'></p>
            <Link href={'/contact'} className='text-white/60 pr-4 font-sans absolute text-sm whitespace-nowrap flex items-center'>SCHEDULE A CALL <li className='list-none pl-2'><IoIosArrowForward /></li></Link>
          </motion.div>
        </div>

      </div>
  
      <div className='container px-4 mx-auto'>
      <hr className="h-px mt-16 mb-8 px-4 bg-gray-200 border-0 dark:bg-gray-700"/>
        <motion.div 
           initial={{ x: '-100%', opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           exit={{ x: '100%', opacity: 0 }}
           transition={{
             stiffness: 100,
             damping: 15,
             duration: 1,
             ease: "easeIn",
           }}
        className='md:flex lg:flex justify-between lg:space-y-0 md:space-y-0  space-y-4  border-b-[1px] border-black/30 pb-16'>
          <div className=''>
            <div className='md:flex justify-between md:w-[450px]'>
              <div>
                <h1 className='font-sans text-xl font-normal'>London</h1>
                <p className='text-[13px] text-black/50 font-sans'>London, United Kingdom</p>
              </div>
              <div>
                <h1 className='font-sans text-xl font-normal'>Vilnius</h1>
                <p className='text-[13px] text-black/50 font-sans'>Kalinausko 24-7<br />
                  Vilnius 03107</p>
              </div>
              <div>
                <h1 className='font-sans text-xl font-normal'>Contact</h1>
                <p className='text-[13px] text-black/50 font-sans'>info@ubbs.uk</p>
              </div>

            </div>
            <div className='icons flex space-x-2 md:mt-36 mt-8 lg:mt-36'>
              {icons.map((item: any) => {
                return (
                  <div className=''>
                    <Link href={item.link}><li className='p-[3px] rounded-full text-2xl border-[1px] border-black/50 list-none '>{item.icon}</li></Link>
                  </div>
                )
              })}
            </div>
          </div>
          <div className=''>
            <h1 className='font-sans text-2xl font-normal'>Request a call</h1>
            <div className='md:w-[350px] lg:w-[350px]'>
              <div className='flex  justify-between pt-4 lg:pt-0 md:pt-0'>
                <input type='text' className='border-b-[1px] md:w-[250px] text-sm text-black/50 font-sans font-thin border-black/30 focus:outline-none placeholder-gray-400' placeholder='Enter Your Email' />
                <button className=' rounded-full border-black/50 border-[1px] px-4 py-1 text-sm text-black/50'>Submit</button>
              </div>
              <p className='pt-12 text-black/50 text-[11px]'>UBBS London is an architecture and interior design firm based in London. Our services include Architecture, Interior Design, Construction and Administration and Specification.</p>
            </div>
          </div>
        </motion.div>
        <motion.div
           initial={{ y: '-100%', opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           exit={{ y: '100%', opacity: 0 }}
           transition={{
             stiffness: 100,
             damping: 15,
             duration: 1,
             ease: "easeIn",
           }}
        
        className='md:flex lg:flex justify-between py-8'>
          <div className='md:flex md:w-[650px] lg:w-[650px] justify-between'>
            <p className='text-black/50 text-sm font-sans font-semibold'>@ Copyright UBBS London</p>
            <div>
            <Link href={''} className='text-black/50 text-sm font-sans font-semibold'>
              Privacy Policy</Link></div>
              <div>
            <Link href={''} className='text-black/50 text-sm font-sans font-semibold'>
              Terms and Conditions</Link></div>
          </div>
          <div>
            <Link href={''} className='text-black/50 text-sm font-sans font-semibold'>Website by Rattlesnake Group</Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Footer
"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from "react-icons/fa";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { TiSocialFacebook, TiSocialPinterest, TiSocialLinkedin } from "react-icons/ti";
import { FaWhatsappSquare } from "react-icons/fa";
function Navbar() {
  const [nav, setNav] = useState(false);
  const icons = [
    {
      icon: <FaWhatsappSquare />,
      link: 'https://api.whatsapp.com/send?phone=923460912630&text=Physiotherapy%20Clinic%20Innovation,%20Integration,%20Accessibility'
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
    <nav className="absolute top-0 w-full bg-gradient-to-b from-black/40 to-white/0 sticky-nav z-50" >
      <div className="container mx-auto flex items-center justify-between py-5 px-4 relative z-10">
        <div className=' flex space-x-4'>
          <Link href="/about" className="font-thin font-sans text-sm text-white axiformaRegular hover:text-[#0E9CD9]">PROJECT</Link>
          <Link href="/contact" className="font-thin font-sans text-sm text-white axiformaRegular hover:text-[#0E9CD9]">CONTACT</Link>

        </div>
        <div className="md:block hidden   justify-center">
          <Link href="/">
            <Image src="/logo.png" alt="Rehab Fit" width={280} height={0} className='md:w-80 w-56' />
          </Link>

        </div>
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer  text-white "
        >
          {nav ? <FaTimes size={30} /> : <RiMenuUnfoldLine size={30} />}
        </div>
      </div>
      {nav && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{
            stiffness: 100,
            damping: 15,
            duration: 1,
            ease: "easeIn",
          }} className=" bg-black/90  md:w-full duration-1000 lg:w-full md:h-screen absolute top-0 left-0 pt-36 right-0 py-10 px-4  ">
          <Link href="/featureprojects" className=""><li className=' hover:text-[#F28123]  py-4 px-4 text-[18px] cursor-pointer list-none capitalize  text-white hover:scale-95 duration-200 link-underline'>Projects</li></Link>
          <Link href="/contact" className=""><li className=' hover:text-[#F28123]  py-4 px-4 text-[18px] cursor-pointer list-none capitalize  text-white hover:scale-95 duration-200 link-underline'>CONTACT</li></Link>
          <Link href="/about" className=""><li className='l hover:text-[#F28123]  py-4 px-4 text-[18px] cursor-pointer list-none capitalize  text-white hover:scale-95 duration-200 link-underline'>About</li></Link>
          <Link href="/load-market" className="flex items-center  hover:text-[#F28123] overflow-hidden py-4 px-4 text-[18px] cursor-pointer list-none capitalize  text-white hover:scale-95  duration-200 link-underline">
            <Image src="/images/whatapp.svg" alt="Rehab Fit" width={450} height={650} className='w-7 pr-2' />
            +92 346 0912630
          </Link>
          <Link href="/contact" className="flex items-center space-x-2 hover:text-[#F28123] overflow-hidden py-4 px-4 text-[18px] cursor-pointer list-none capitalize  text-white hover:scale-95  duration-200 link-underline">
            Consult now <BsArrowRight />
          </Link>
          <div className='px-4 md:flex lg:flex justify-between items-center space-y-4 md:space-y-0 lg:space-y-0'>
            <div>
              <p className='text-white text-sm font-sans py-6 '>CONTACT DETAILS</p>
              <p className='text-white text-[12px] font-thin font-sans '>EMAIL ADDRESS — INFO@UBBS.UK</p>
              <p className='text-white text-[12px] font-thin text-sm font-sans pt-2'>PHONE NUMBER — +44 (0) 7519614140</p>
            </div>
            <div className=' flex space-x-4   '>
              {
                icons.map((item, idx) => {
                  return (
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
                      key={idx}>
                      <Link href={item.link}
                        className="group relative inline-block overflow-hidden rounded-full p-2 border-gray-100 hover:border-none  border-[1px] font-bold text-2xl  text-white  focus:outline-none focus:ring active:bg-indigo-600 active:text-white"
                      >
                        <span className="ease absolute left-0 top-0 h-0 w-0 border-t-4 border-red-600 transition-all duration-1000 group-hover:w-full" />
                        <span className="ease absolute right-0 top-0 h-0 w-0 border-r-4 border-red-600 transition-all duration-1000 group-hover:h-full" />
                        <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-4 border-red-600 transition-all duration-1000 group-hover:w-full" />
                        <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-4 border-red-600 transition-all duration-1000 group-hover:h-full" />
                        {item.icon}
                      </Link>
                    </motion.div>
                  )
                })
              }
            </div>
          </div>
        </motion.div>
      )}




    </nav>
  );
}

export default Navbar;

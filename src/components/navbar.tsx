"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="absolute top-0 w-full bg-gradient-to-b from-black/40 to-white/10 sticky-nav z-50" >
      <div className="container mx-auto flex items-center justify-between py-5 px-4 relative z-10">
        <div className=' flex space-x-4'>
        <Link href="/about" className="font-thin font-sans text-sm text-white axiformaRegular hover:text-[#0E9CD9]">PROJECT</Link>
          <Link href="/services" className="font-thin font-sans text-sm text-white axiformaRegular hover:text-[#0E9CD9]">CONTACT</Link>
         
        </div>
        <div className="md:block hidden md:flex  justify-center">
        <Link href="/">
            <Image src="/images/logo.svg" alt="Rehab Fit" width={280} height={56} className='md:w-auto w-56' />
          </Link>
          
        </div>
        <div className=" flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
  

      {isOpen && (
        <div className=" bg-white w-full absolute top-14 left-0 right-0 py-10 px-4 grid gap-3">
          <Link href="/" className="hover:opacity-70 text-lg axiformaRegular hover:text-[#0E9CD9]">Home</Link>
          <Link href="/about" className="hover:opacity-70 text-lg axiformaRegular hover:text-[#0E9CD9]">About Us</Link>
          <Link href="/services" className="hover:opacity-70 text-lg axiformaRegular hover:text-[#0E9CD9]">Our Offerings</Link>
          <Link href="/load-market" className="text-[#0B577E] font-semibold AxiformaMedium flex items-center gap-1.5">
            <Image src="/images/whatapp.svg" alt="Rehab Fit" width={450} height={650} className='w-7' />
            +92 320 3588468
          </Link>
          <Link href="/contact" className="bg-[#0E9CD9] hover:bg-[#0B577E] px-4 py-3.5 rounded-[10px] rounded-br-[20px] text-white text-lg flex items-center gap-2 justify-center md:w-[198px] mt-3">
            Consult now <BsArrowRight />
          </Link>
        </div>
      )}

     
  

    </nav>
  );
}

export default Navbar;

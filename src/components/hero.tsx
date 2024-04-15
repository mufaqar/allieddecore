"use client"
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { TiSocialFacebook, TiSocialPinterest, TiSocialLinkedin } from "react-icons/ti";
import { FaWhatsappSquare } from "react-icons/fa";

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 
    return () => clearTimeout(timeoutId);
  }, [currentImageIndex]);

  const images = [
    { src: '/home/home1.jpg', des: 'Leading architecture & interior design studio in Islamabad.', text: 'Our Company' },
    { src: '/home/home2.jpg', des: 'Beautifully crafted global homes and retreats.', text: 'Residential' },
    { src: '/home/home3.webp', des: 'Commercial focused design led environments', text: 'Commercial' },
    { src: '/home/home4.jpg', des: 'The future of how we live, work and play.', text: 'Hospitality' },
  ];
  const icons = [
    {
      icon: <FaWhatsappSquare />,
      link: 'https://api.whatsapp.com/send?phone=923203588468&text=Physiotherapy%20Clinic%20Innovation,%20Integration,%20Accessibility'
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

  const handleButtonClick = (index: any) => {
    setCurrentImageIndex(index);
  }
  return (
    <div className=' -mt-24'>
      <section className="bg-center bg-cover bg-no-repeat relative h-screen " style={{ backgroundImage: `url(${images[currentImageIndex].src})` }}>
        <div className='absolute inset-0 bg-black opacity-70'></div>
        <div className="absolute top-1/2 container left-1/2   px-4 mx-auto transform -translate-x-1/2 -translate-y-1/2 ">
          <motion.p
            initial={{ x: '-100%', opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{
              stiffness: 100,
              damping: 15,
              duration: 1,
              ease: "easeIn",
            }} className="md:text-4xl w-[250px] text-2xl lg:text-4xl lg:w-[600px] md:w-[600px] font-sans font-normal text-white lg:leading-[60px] pb-10">{images[currentImageIndex].des}</motion.p>
          <Link href={'/featureprojects'} className=' hover:bg-white/60 duration-1000 hover:text-black font-light font-sans py-2 hover:border-black rounded-full bg-black/20 text-white px-10  border-[1px] border-white/30 tracking-[2px]'>View Projects</Link>
        </div>
        <motion.div
          initial={{ y: '-100%', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{
            stiffness: 100,
            damping: 15,
            duration: 1,
            ease: "easeIn",
          }} className='md:block lg:block hidden   absolute mx-auto conatiner px-4 top-1/2 right-0 transform -translate-y-1/2  '>
          {
            icons.map((item, idx) => {
              return (
                <div key={idx}>
                  <Link href={item.link}
                    className="group relative inline-block overflow-hidden rounded-full p-2 border-gray-100 hover:border-none  border-[1px] font-bold text-2xl  text-white  focus:outline-none focus:ring active:bg-indigo-600 active:text-white"
                  >
                    <span className="ease absolute left-0 top-0 h-0 w-0 border-t-4 border-red-600 transition-all duration-1000 group-hover:w-full" />
                    <span className="ease absolute right-0 top-0 h-0 w-0 border-r-4 border-red-600 transition-all duration-1000 group-hover:h-full" />
                    <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-4 border-red-600 transition-all duration-1000 group-hover:w-full" />
                    <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-4 border-red-600 transition-all duration-1000 group-hover:h-full" />
                    {item.icon}
                  </Link>
                </div>
              )
            })
          }
        </motion.div>


        <div className='flex  absolute bottom-8 lg:space-x-36 items-center space-x-4 xl:space-x-48 md:space-x-36 px-4 mx-auto container justify-center w-full'>
          {images.map((item, index) => (
            <div key={index}>
              <motion.button
                initial={{ x: '-100%', opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{
                  stiffness: 100,
                  damping: 15,
                  duration: 1,
                  ease: "easeIn",
                }} onClick={() => handleButtonClick(index)} className='text-white text-[10px] xl:tracking-widest lg:tracking-widest md:tracking-widest lg:text-sm md:text-sm cursor-pointer hover:text-teal-400 border-red-500 border-b-[4px] lg:font-bold md:font-bold pb-[2px] hover:border-white whitespace-nowrap'>{item.text}</motion.button>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
}

export default Hero;

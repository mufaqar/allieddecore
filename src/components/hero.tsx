"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { TiSocialFacebook,TiSocialPinterest,TiSocialLinkedin } from "react-icons/ti";
import { FaWhatsappSquare } from "react-icons/fa";

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    { src: '/home/home1.jpg', des: 'Leading architecture & interior design studio in London.' , text:'Our Company'},
    { src: '/home/home2.jpg', des: 'Beautifully crafted global homes and retreats.', text:'Residential' },
    { src: '/home/home3.webp', des: 'Commercial focused design led environments', text:'Commercial' },
    { src: '/home/home4.jpg', des: 'The future of how we live, work and play.' , text:'Hospitality' },
  ];
const icons=[
  {
    icon:<FaWhatsappSquare />,
    link:'https://api.whatsapp.com/send?phone=923203588468&text=Physiotherapy%20Clinic%20Innovation,%20Integration,%20Accessibility'
      },
  {
icon:<TiSocialFacebook />,
link:"www.faceebook.com"
  },
  {
    icon:<TiSocialPinterest />,
    link:"www.pinterest.com"
      },
      {
        icon:<TiSocialLinkedin />,
        link:"www.linkdein.com"
      }
]
//  const handlePrev = ()=>{
//    setCurrentImageIndex((previmg)=>(previmg === images.length -1 ? 0 : previmg+1) );
//  }
 
//  const handleNext =()=>{
//    setCurrentImageIndex((previmg)=>(previmg === 0 ? images.length -1  : previmg-1) );
//  }
 const handleButtonClick = (index:any) => {
   setCurrentImageIndex(index);
 }
  return (
    <div className=' -mt-24'>
    <section className="bg-center bg-cover bg-no-repeat relative h-screen " style={{ backgroundImage: `url(${images[currentImageIndex].src})` }}>
    <div className='absolute inset-0 bg-black opacity-60'></div>

      {/* Text over image */}
      <div className="absolute top-1/2 container left-1/2   px-4 mx-auto transform -translate-x-1/2 -translate-y-1/2 ">
        <p className="text-4xl max-w-[600px] font-bold text-white leading-normal pb-10">{images[currentImageIndex].des}</p>
        <Link href={'/projects'} className=' hover:bg-white/60 duration-1000 hover:text-black font-bold py-3 hover:border-black rounded-full bg-black/20 text-white px-16  border-[1px] border-slate-200'>Projects</Link>
      </div>
{/*       
      Previous and Next buttons
      <button onClick={handlePrev} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full text-blue-500">
        <BsArrowLeft />
      </button>
      <button onClick={handleNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full text-blue-500">
        <BsArrowRight />
      </button> */}
      <div className='absolute mx-auto conatiner px-4 top-1/2 right-0 transform -translate-y-1/2  '>
{
  icons.map((item,idx)=>{
    return(
      <div key={idx}>
  <Link  href={item.link} 
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
</div>
    
      
        <div className='flex justify-between absolute bottom-4 px-4 mx-auto container w-full'>
        {images.map((item, index) => (
          <div key={index}>
            <button onClick={() => handleButtonClick(index)} className='text-yellow-400 cursor-pointer hover:text-white hover:border-red-500 border-b-[4px] font-bold pb-[2px] border-yellow-400'>{item.text}</button>
          </div>
        ))}
    
      </div>
    </section>
    </div>
  );
}

export default Hero;

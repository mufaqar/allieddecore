import React from 'react';
import data from '@/blogs.json'
import Link from "next/link";
import Slider from "react-slick";
import Blog_sec from '@/components/blog'
const  Home=()=> {
  
  
  return (
    <>
    <div className='-mt-24'>
    <div className="h-96 w-full bg-cover bg-center relative" style={{ backgroundImage: `url('/blogs/blog1.jpeg')` }}> 
          <div className="absolute h-full w-full inset-0 bg-black opacity-70"></div>
          <div className='px-4 mx-auto container opacity-95'>
            <p className='pt-28 text-sm font-normal font-sans text-white'>--------    <span className='pl-4 tracking-[2px]'>INSIGHTS</span></p>
            <h1 className='top-1/2 text-6xl md:w-[750px] font-thin leading-[70px] font-sans text-white'>Recent News</h1>

          </div>
        </div>
      </div>
    <section className='container px-4 mx-auto py-10'>
  

<Blog_sec data = {data}/>
     
      
     
   
     
    </section>
    </>
  )
}
export default Home
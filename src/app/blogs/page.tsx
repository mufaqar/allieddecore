'use client'
import React,{useState} from 'react';
import data from '@/blogs.json'
import Link from "next/link";
import Slider from "react-slick";
import Blog_sec from '@/components/blog'
const  Home=()=> {

  const Categories=["Residential", "Hospitality" , "Commercial" , "Retail"]
  const [activeCategory, setactiveCategory] = useState(null)
  const handleCategoryChange =(category:any)=>{
  setactiveCategory(category)
  }
  const AllCategory =()=>{
    setactiveCategory(null)
  }

  
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
    <div>
    <div className='md:flex lg:flex xl:flex  justify-between pb-10 border-b-[1px] border-black/20 items-center space-y-4 lg:space-y-0 md:space-y-0'>
        <div className='grid md:grid-cols-5 lg:grid-cols-5 grid-cols-2 gap-4'>
          {Categories.map((category:any,idx:number)=>{
            return(
              <div key={idx}>
                 <button
            className={`rounded-full py-[1px] hover:bg-stone-300 duration-500 px-4 text-[15px] font-thin font-sans border-black/50 border-[1px] ${activeCategory === 'Residential' ? 'bg-stone-300' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
              </div>
            )
          })}
          <div>
                 <button
            className={`rounded-full py-[1px] hover:bg-stone-300 duration-500 px-4 text-[15px] font-thin font-sans border-black/50 border-[1px] ${activeCategory === 'Residential' ? 'bg-stone-300' : ''}`}
            onClick={AllCategory}
          >
            All
          </button>
              </div>
        </div>
        <p className='text-sm'>Request more information<br/>
          info@alliedcore.pk</p>
      </div>
    </div>

    <Blog_sec data={activeCategory ? data.filter(blog => blog.category === activeCategory) : data} />
    </section>
    </>
  )
}
export default Home
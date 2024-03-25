'use client'
import React, { useState } from 'react';
import data from '@/data';
import Link from 'next/link';

function Projects() {
  const [activeCategory, setActiveCategory] = useState('Residential'); 

  const handleCategoryChange = (category:string) => {
    setActiveCategory(category);
  };

  return (
    <section className='container mx-auto px-4 py-16'>
      <h1 className='text-5xl font-sans py-10'>Featured projects</h1>
      <div className='flex justify-between pb-10 border-b-[1px] border-black/20 items-center'>
        <div className='flex space-x-4 '>
          <button
            className={`rounded-full py-[1px] hover:bg-stone-300 duration-500 px-4 text-[15px] font-thin font-sans border-black/50 border-[1px] ${activeCategory === 'Residential' ? 'bg-stone-300' : ''}`}
            onClick={() => handleCategoryChange('Residential')}
          >
            Residential
          </button>
          <button
            className={`rounded-full py-[1px] hover:bg-stone-300 duration-500 px-4 text-[15px] font-thin font-sans border-black/50 border-[1px] ${activeCategory === 'Hospitality' ? 'bg-stone-300' : ''}`}
            onClick={() => handleCategoryChange('Hospitality')}
          >
            Hospitality
          </button>
          <button
            className={`rounded-full py-[1px] hover:bg-stone-300 duration-500 px-4 text-[15px]  font-thin font-sans border-black/50 border-[1px] ${activeCategory === 'Commercial' ? 'bg-stone-300' : ''}`}
            onClick={() => handleCategoryChange('Commercial')}
          >
            Commercial
          </button>
          <button
            className={`rounded-full py-[1px] hover:bg-stone-300 duration-500 px-4 text-[15px]  font-thin font-sans border-black/50 border-[1px] ${activeCategory === 'Retail' ? 'bg-stone-300' : ''}`}
            onClick={() => handleCategoryChange('Retail')}
          >
            Retail
          </button>
        </div>
        <p className='text-sm'>Request more information<br/>
          info@ubbs.uk</p>
      </div>
      <div className='lg:grid md:grid md:grid-cols-2 lg:grid-cols-2 gap-2 py-10  space-y-4 md:space-y-0 lg:space-y-0'>
        {data
          .filter((item) => item.category === activeCategory) 
          .map((item, idx) => (
            <div key={idx}>
              <div className='relative h-96 hover:scale-90 cursor-pointer duration-1000' style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='absolute inset-0 bg-black opacity-40'></div>
                <div className='flex lg:px-8 px-4 md:px-8 bottom-8 w-full absolute justify-between'>
                  <Link href={item.slug} className='text-white font-sans font-medium md:text-[15px] text-[10px] md:text-medium'>{item.title}</Link>
                  <p className='text-white font-sans whitespace-nowrap md:text-[15px] lg:text-[15px] text-[10px] font-thin border-[1px] rounded-full px-4 '>{item.location}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
export default Projects;

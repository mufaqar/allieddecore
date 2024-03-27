'use client'
import React, { useState } from 'react';
import Link from 'next/link';
function Projects({ data }: any) {
  const [activeCategory, setActiveCategory] = useState(null);
  const handleCategoryChange = (category: any) => {
    setActiveCategory(category);
  };
  const categories = [...new Set(data?.map((item: any) => item.category))];
  const AllCategory = () => {
    setActiveCategory(null)
  }
  return (
    <section className='container mx-auto px-4 py-16'>
      <h1 className='text-5xl font-sans py-10'>Featured projects</h1>
      <div className='flex justify-between pb-10 border-b-[1px] border-black/20 items-center'>
        <div className='flex space-x-4 '>
          {categories?.map((category: any, idx: number) => {
            return (
              <div key={idx}>
                <button
                  className={`rounded-full py-[1px] hover:bg-stone-300 duration-500 px-4 text-[15px] font-thin font-sans border-black/50 border-[1px] ${activeCategory === category ? 'bg-stone-300' : ''}`}
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
        <p className='text-sm'>Request more information<br />
          info@ubbs.uk</p>
      </div>
      <Link href='/featureprojects' className=' text-[12px] border-b-[1px] border-black pb-[2px] tracking-[3px] text-blacl/40'>VIEW Features</Link>
      <div className='lg:grid md:grid md:grid-cols-2 lg:grid-cols-2 gap-2 py-10  space-y-4 md:space-y-0 lg:space-y-0'>
        {data?.filter((item: any) => activeCategory ? item.category === activeCategory : data)
          .map((item: any, idx: number) => (
            <Link href={`/featureprojects/${item.id}`} key={idx}>
              <div className='relative h-96 hover:scale-90 cursor-pointer duration-1000' style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='absolute inset-0 bg-black opacity-40'></div>
                <div className='flex lg:px-8 px-4 md:px-8 bottom-8 w-full absolute justify-between'>
                  <Link href={''} className='text-white font-sans font-medium md:text-[15px] text-[10px] md:text-medium'>{item.title}</Link>
                  <p className='text-white font-sans whitespace-nowrap md:text-[15px] lg:text-[15px] text-[10px] font-thin border-[1px] rounded-full px-4 '>{item.location}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
export default Projects;

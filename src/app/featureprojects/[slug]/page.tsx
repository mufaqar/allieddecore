'use client'
import React, { useState } from 'react';
import data from '@/data';
import Link from 'next/link';
import { spec } from 'node:test/reporters';
interface ProjectData {
  img: string;
  images: string[];
}
export default function Slug({ params: { slug } }: { params: { slug: string } }) {
  const Data = data?.find(item => item.id.toString() === slug);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  // const handlemodel = () => {
  //   setModalOpen(true)
  //   //  setopnenmodel(false)
  // }
  const handlemodel = (idx: number) => {
    setSelectedImageIndex(idx);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handlePrevClick = () => {
    setSelectedImageIndex(prevIndex => {
      if (Data && Data.images && Data.images.length) {
        return prevIndex === 0 ? Data.images.length - 1 : prevIndex - 1;
      } else {
        return prevIndex;
      }
    });
  };
  
  const handleNextClick = () => {
    setSelectedImageIndex(prevIndex => {
      if (Data && Data.images && Data.images.length) {
        return prevIndex === Data.images.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex;
      }
    });
  };
  
  return (
    <>
      <div className='-mt-24'>
        <div className="h-screen w-full bg-cover bg-center relative" style={{ backgroundImage: `url(${Data?.img})` }}>
          <div className="absolute h-full w-full inset-0 bg-black opacity-70"></div>
          <div className='pl-12 mx-auto absolute top-1/2  container opacity-95'>
            <p className='text-sm font-normal font-sans text-white'>--------    <span className='pl-4 tracking-[2px]'>Overview</span></p>
            <h1 className=' text-6xl md:w-[750px] font-thin leading-[70px] font-sans text-white'>{Data?.title}</h1>
          </div>
          <div className='text-white px-12 flex md:w-[800px]  absolute bottom-16 justify-between'>
            <label className='font-semibold font-sans text-[15px] tracking-[3px]  text-white/60'>Location
              <p className='pt-2 text-white font-sans font-normal text-[22px] tracking-normal' >{Data?.location}</p>
            </label>
            <label className='font-semibold font-sans text-[15px] tracking-[3px] text-white/60' >Project Size
              <p className='pt-2 text-white font-sans font-normal text-[22px] tracking-normal'>{Data?.size}</p>
            </label>
            <label className='font-semibold font-sans text-[15px] tracking-[3px] text-white/60'>Project Date
              <p className='pt-2 text-white font-sans font-normal text-[22px] tracking-normal'>{Data?.date}</p>
            </label>
          </div>
        </div>
      </div>
      <section className='container mx-auto px-4'>
        <div>
          <div className='md:w-[550px] py-24'>
            <h1 className='text-5xl font-sans font-normal py-16'>About Project</h1>
            <p className='text-sm text-black/50 text-[12px] pb-24'>{Data?.about}</p>
            <Link className='text-black/70 tracking-[2px] border-b-[1px] text-[10px] border-black/60 hover:border-red-500 duration-1000 pb-2' href={'/contact'}>REQUEST MORE DETAILS</Link>
          </div>
          <div className='border-b-[1px] pb-8 border-black/30'><img className='h-screen w-full' src='/cover.webp' /></div>
          <h1 className=' text-5xl  font-normal py-12 font-sans text-black'>Project Gallery</h1>
          <div className='grid grid-cols-2 gap-4'>
            {Data?.images.map((image, idx) => (
              <div key={idx} className='relative cursor-pointer' onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>
                <img className='h-96 w-full' src={image} alt={`Image ${idx}`} />
                <div className="absolute h-full w-full inset-0 bg-black opacity-50"></div>
                {hoveredIndex === idx && (
                  <button onClick={()=>handlemodel(idx)} className='top-1/2 absolute rounded-full px-8 left-1/2  py-9 text-white font-normal text-lg duration-1000 border-white border-[1px] hover:bg-white hover:text-black'>View</button>
                )}
              </div>
            ))}
          </div>
          <div>
         

      {/* Modal */}
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
           <div className='absolute inset-0 bg-black opacity-40'></div>
          <div className="bg-white p-4 rounded-lg">
            <button onClick={handleModalClose} className="absolute top-8 right-4 text-white hover:text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className='relative'>
              <img className='h-[500px] w-[800px]' src={Data?.images[selectedImageIndex]} alt={`Image ${selectedImageIndex}`} />
              <button onClick={handlePrevClick} className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 rounded-full p-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button onClick={handleNextClick} className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 rounded-full p-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
          </div>
        </div>
      </section>
    </>
  );
}

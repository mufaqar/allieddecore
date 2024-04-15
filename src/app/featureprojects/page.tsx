'use client'
import React, { useState } from 'react';
import data from '@/data'
import Link from 'next/link';
import Projects from '@/components/project/project';

function Features() {
  return (
    <>
      <div className='-mt-24'>
        <div className="h-96 w-full bg-cover bg-center relative" style={{ backgroundImage: `url('/features/f12.webp')` }}>
          <div className="absolute h-full w-full inset-0 bg-black opacity-70"></div>
          <div className='px-4 mx-auto container opacity-95'>
            <p className='pt-28 text-sm font-normal font-sans text-white'>--------    <span className='pl-4 tracking-[2px]'>INSIGHTS</span></p>
            <h1 className='pt-16 text-6xl md:w-[750px] font-thin leading-[70px] font-sans text-white'>All Features</h1>

          </div>
        </div>
      </div>
      <section className='container mx-auto px-4 py-16'>


        <Projects data={data} />

      </section>
    </>
  );
}

export default Features;

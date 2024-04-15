'use client'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
function Blog_sec({data}:any) {
  return (
    <section className='container px-4 mx-auto'>
        <motion.h1
        initial={{ x: '-100%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{
          stiffness: 100,
          damping: 15,
          duration: 1,
          ease: "easeIn",
        }}
        className='md:text-5xl lg:text-5xl text-3xl font-normal font-sans mb-6 '>Latest insights</motion.h1>
        <Link href='/blogs' className=' text-[12px] border-b-[1px] border-black pb-[2px] tracking-[3px] text-blacl/40'>VIEW BLOG</Link>
        <div
        className='grid lg:grid md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4  grid-cols-1 gap-4 py-10'>
       {data?.map((item:any,idx:number)=>{return(
       
       <Link key={idx} href={`/blogs/${item.id}`} >
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{
            stiffness: 100,
            damping: 15,
            duration: 1,
            ease: "easeIn",
          }}
        className='bg-center bg-cover h-80 relative hover:scale-95 duration-700' style={{backgroundImage: `url(${item.img})`}}>
        <div className='absolute inset-0 bg-black opacity-60'></div>
        <div className='px-4'>
        <h1 className='absolute bottom-12 text-white font-sans font-semibold text-[12px]'>{item.title}</h1>
        <p className='absolute bottom-4 text-white font-sans font-normal text-[12px]'>{item.date}</p>
        </div>
        </motion.div>
        </Link>
    
      )})}
      </div>
    </section>
  )
}

export default Blog_sec
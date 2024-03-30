'use client'
import data from '@/blogs.json'
import Link from 'next/link';
import { motion } from 'framer-motion'

export default function UniquePage({ params: { uniquepage } }: { params: { uniquepage: string } }) {
  const Data = data.find(p => p.id.toString() === uniquepage);
  const otherBlogs = data.filter(blog => blog.id.toString() !== uniquepage);

  return (
    <>
      <div className='-mt-24'>
        <div className='h-96 w-full bg-cover bg-center relative' style={{ backgroundImage: `url(${Data?.img})` }}>
          <div className="absolute h-full w-full inset-0 bg-black opacity-70"></div>
          <div className='px-4 mx-auto container opacity-95'>
            <p className='pt-28 text-sm font-normal font-sans text-white'>--------   <span className='pl-4'>{Data?.date}</span></p>
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
            className='top-1/2 md:text-6xl lg:text-6xl text-4xl w-[250px] lg:w-[750px] md:w-[750px] font-thin lg:leading-[70px] md:leading-[70px] font-sans text-white'>{Data?.title}</motion.h1>
            <motion.p
            initial={{ y: '-100%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{
              stiffness: 100,
              damping: 15,
              duration: 1,
              ease: "easeIn",
            }}
            className='text-white pt-8 text-sm'>{Data?.author}</motion.p>
          </div>
        </div>
      </div>
      <section className='container md:px-60 lg:px-60 px-4 mx-auto '>
        <div className='py-16'>
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
          className='text-3xl font-sans font-sm text-black/70 pb-8'>{Data?.h1}</motion.h1>
          <motion.p
          initial={{ y: '100%', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{
            stiffness: 100,
            damping: 15,
            duration: 1,
            ease: "easeIn",
          }}
          className='text-[#817a73] text-md font-sans font-thin pb-8'>{Data?.des1}</motion.p>
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
          className='text-3xl font-sans font-sm text-black/70 pb-8'>{Data?.h2}</motion.h1>
          <motion.p
          initial={{ y: '100%', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{
            stiffness: 100,
            damping: 15,
            duration: 1,
            ease: "easeIn",
          }}
          className='text-[#817a73] text-md font-sans font-thin pb-8'>{Data?.des2}</motion.p>
           <motion.h1
          initial={{ x: '-100%', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{
            stiffness: 100,
            damping: 15,
            duration: 1,
            ease: "easeIn",
          }} className='text-3xl font-sans font-sm text-black/70 pb-8'>{Data?.h3}</motion.h1>
          <motion.p
          initial={{ x: '-100%', opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{
            stiffness: 100,
            damping: 15,
            duration: 1,
            ease: "easeIn",
          }}
          className='text-[#817a73] text-md font-sans font-thin'>{Data?.des3}</motion.p>
        </div>

        
      </section>
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
          className='lg:text-5xl md:text-5xl text-3xl font-normal font-sans mb-6 '>Other Articles</motion.h1>
          <Link href='/blogs' className=' text-[12px] border-b-[1px] border-black pb-[2px] tracking-[3px] text-blacl/40'>VIEW BLOG</Link>
          <div className='grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-4 py-10'>
            {otherBlogs.map((item: any) => (
              <Link key={item.id} href={`/blogs/${item.id}`}>
              <motion.div  
              initial={{ y: '-100%', opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{
                stiffness: 100,
                damping: 15,
                duration: 1,
                ease: "easeIn",
              }}
               className='bg-center bg-cover h-80 relative' style={{ backgroundImage: `url(${item.img})` }}>
                <div className='absolute inset-0 bg-black opacity-30'></div>
                <div className='px-4'>
                  <h1 className='absolute bottom-12 text-white font-sans font-normal text-[12px]'>{item.title}</h1>
                  <p className='absolute bottom-4 text-white font-sans font-normal text-[12px]'>{item.date}</p>
                </div>
              </motion.div>
               </Link>
            ))}
          </div>
        </section>
    </>
  )
}

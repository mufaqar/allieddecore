import Link from 'next/link'
import React from 'react'
function Blog_sec({data}:any) {
  return (
    <section className='container px-4 mx-auto'>
        <h1 className='text-5xl font-normal font-sans mb-6 '>Latest insights</h1>
        <Link href='/blogs' className=' text-[12px] border-b-[1px] border-black pb-[2px] tracking-[3px] text-blacl/40'>VIEW BLOG</Link>
        <div className='grid grid-cols-4 gap-4 py-10'>
       {data?.map((item:any)=>{return(
       <Link href={`/blogs/${item.id}`} className='bg-center bg-cover h-80 relative' style={{backgroundImage: `url(${item.img})`}}>
        <div className='absolute inset-0 bg-black opacity-30'></div>
        <div className='px-4'>
        <h1 className='absolute bottom-12 text-white font-sans font-normal text-[12px]'>{item.title}</h1>
        <p className='absolute bottom-4 text-white font-sans font-normal text-[12px]'>{item.date}</p>
        </div>
        </Link>
      )})}
      </div>
    </section>
  )
}

export default Blog_sec
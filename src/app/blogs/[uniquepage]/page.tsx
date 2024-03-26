import data from '@/blogs.json'
import Link from 'next/link';
import { notFound } from "next/navigation";

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
            <h1 className='top-1/2 text-6xl md:w-[750px] font-thin leading-[70px] font-sans text-white'>{Data?.title}</h1>
            <p className='text-white pt-8 text-sm'>{Data?.author}</p>
          </div>
        </div>
      </div>
      <section className='container px-60 mx-auto '>
        <div className='py-16'>
          <h1 className='text-3xl font-sans font-sm text-black/70 pb-8'>{Data?.h1}</h1>
          <p className='text-[#817a73] text-md font-sans font-thin pb-8'>{Data?.des1}</p>
          <h1 className='text-3xl font-sans font-sm text-black/70 pb-8'>{Data?.h2}</h1>
          <p className='text-[#817a73] text-md font-sans font-thin pb-8'>{Data?.des2}</p>
          <h1 className='text-3xl font-sans font-sm text-black/70 pb-8'>{Data?.h3}</h1>
          <p className='text-[#817a73] text-md font-sans font-thin'>{Data?.des3}</p>
        </div>

        
      </section>
      <section className='container px-4 mx-auto'>
          <h1 className='text-5xl font-normal font-sans mb-6 '>Other Articles</h1>
          <Link href='/blogs' className=' text-[12px] border-b-[1px] border-black pb-[2px] tracking-[3px] text-blacl/40'>VIEW BLOG</Link>
          <div className='grid grid-cols-3 gap-4 py-10'>
            {otherBlogs.map((item: any) => (
              <Link key={item.id} href={`/blogs/${item.id}`} className='bg-center bg-cover h-80 relative' style={{ backgroundImage: `url(${item.img})` }}>
                <div className='absolute inset-0 bg-black opacity-30'></div>
                <div className='px-4'>
                  <h1 className='absolute bottom-12 text-white font-sans font-normal text-[12px]'>{item.title}</h1>
                  <p className='absolute bottom-4 text-white font-sans font-normal text-[12px]'>{item.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
    </>
  )
}

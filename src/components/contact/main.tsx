import React, { useState } from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaLocationArrow } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { useFormik } from "formik";
import { useForm, SubmitHandler } from "react-hook-form";
// import { contactform } from '@/schemas/contactform';
function Main() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<any>()

  const [sending, setSending] = useState(false)

  const onSubmit: SubmitHandler<any> = (data: any) => {
    setSending(true)
    fetch('/api/email', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received', res);
      if (res.status === 200) {
        console.log('Response succeeded!');
        alert('Message Successfully send.!');
        reset();
        setSending(false)
      }
    });
  }
  return (
    <>
      <main className='-mt-24'>
        <div className="h-96 w-full bg-cover bg-center relative" style={{ backgroundImage: `url('contact.webp')` }}>
          <div className="absolute h-full w-full inset-0 bg-black opacity-70"></div>
          <div className='px-4 mx-auto container opacity-95'>
            <p className='pt-28 text-sm font-normal font-sans text-white pb-4'>--------    <span className='pl-4 tracking-[2px]'>BASED IN LONDON</span></p>
            <h1 className='top-1/2 text-7xl md:w-[750px] font-light leading-[70px] font-sans text-white'>Get in touch</h1>

          </div>
        </div>
      </main>

      <section className=' w-full h-auto md:pt-14 lg:pt-14 pt-6'>
        <div className=' px-10  w-full pb-28'>
        <hr className="h-px mt-16 mb-16 px-4 bg-gray-200 border-0 dark:bg-gray-700"/>
          <motion.div
           initial={{ x: '-100%', opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           exit={{ x: '100%', opacity: 0 }}
           transition={{
             stiffness: 100,
             damping: 15,
             duration: 1,
             ease: "easeIn",
           }}
          className='grid grid-cols-2  md:w-[1200px]'>
            
            <p>General</p>
            <Link href={''} className='text-[14px]  text-black/50'>info@ubbs.uk</Link>
          </motion.div>
          <hr className="h-px mt-16 mb-8 px-4 bg-gray-200 border-0 dark:bg-gray-700"/>
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
          
          className='grid grid-cols-2  md:w-[1200px]  lg:w-[1200px]'>
            <p>Social</p>
            <div className=''>
              <Link href={''}><li className='list-none hover:underline font-sans text-[15px] text-black/60'>Instagram</li></Link>
              <Link href={''}><li className='list-none hover:underline font-sans text-[15px] text-black/60'>Linkedin</li></Link>
              <Link href={''}><li className='list-none  hover:underline font-sans text-[15px] text-black/60'>Faceebook</li></Link>
              <Link href={''}><li className='list-none hover:underline font-sans text-[15px] text-black/60'>Pinterest</li></Link>
            </div>
          </motion.div>
          <hr className="h-px mt-16 mb-8 px-4 bg-gray-200 border-0 dark:bg-gray-700"/>
          <motion.div
           initial={{ x: '-100%', opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           exit={{ x: '100%', opacity: 0 }}
           transition={{
             stiffness: 100,
             damping: 15,
             duration: 1,
             ease: "easeIn",
           }}
          className='grid grid-cols-2 lg:w-[1200px] md:w-[1200px]'>
            <p>Studio</p>
            <div className='md:flex lg:flex md:space-x-36 lg:space-x-36 space-y-4 md:space-y-0 lg:space-y-0'>
              <label>London
                <p className='list-none font-sans text-[15px] text-black/60'>London, United Kingdom</p>
              </label>
              <label>Vilnius
                <p className='list-none font-sans text-[15px] text-black/60'>Kalinausko 24-7<br />
                  Vilnius 03107</p>
              </label>
            </div>
          </motion.div>
          <hr className="h-px mt-16 mb-8 px-4 bg-gray-200 border-0 dark:bg-gray-700"/>
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
          className='grid grid-cols-2 lg:w-[1200px] md:w-[1200px]'>
            <p>Career</p>
            <div >
              <p className='list-none font-sans md:w-[500px] pb-4 text-[14px] text-black/60'>We are constantly seeking talented professionals to join our team and create innovative and inspiring designs. If you're passionate about design and want to make a meaningful impact — you are welcome to get in touch.</p>
              <Link href={''} className='text-black/60 font-sans text-[15px] '>info@ubbs.uk</Link>
            </div>
          </motion.div>
        </div>
        <div className='container mx-auto px-4'>
        </div>
        <div className='bg-purple-100 py-24'>
          <motion.form
            initial={{ y: '-100%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{
              stiffness: 100,
              damping: 15,
              duration: 1,
              ease: "easeIn",
            }}
          className='lg:w-[500px] md:w-[500px] px-4  m-auto' onSubmit={handleSubmit(onSubmit)}>
            <div className='w-full '>
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
              className='font-serif font-light text-3xl lg:text-5xl md:text-5xl pb-4'>Contact form</motion.h1>
              <input
                type='text'
                id='name'
                placeholder='Your Name'
                className=' border-black/30 border-b-[1px] bg-purple-100 focus:outline-none focus:border-black text-sm font-normal font-sans py-2 w-full'
                {...register("name", { required: true })}
              />
              {errors.name && <span className='text-xs text-red-500'>This field is required</span>}
            </div>
            <div className='w-full py-4'>

              <input
                type='email'
                id='email'
                placeholder='Email'
                className='border-black/30 border-b-[1px] bg-purple-100 focus:outline-none focus:border-black text-sm font-normal font-sans py-2 w-full'
                {...register("email")}
              />
              {errors.email && <span className='text-xs text-red-500'>This field is required</span>}
            </div>
            <div className='w-full '>

              <input
                type='tel'
                id='phone'
                placeholder='Your Phone'
                className='border-black/30 border-b-[1px] bg-purple-100 focus:outline-none focus:border-black text-sm font-normal font-sans py-2 w-full'
                {...register("phone", { required: true })}
              />
              {errors.name && <span className='text-xs text-red-500'>This field is required</span>}
            </div>
            
            <div className='w-full  py-4'>

              <textarea
                id='message'
                placeholder='Type Your Message'
                rows={4}
                className='border-black/30 border-b-[1px] bg-purple-100 focus:outline-none focus:border-black text-sm font-normal font-sans py-2 w-full'
                {...register("massage", { required: true })}></textarea>
            </div>
            <div className=' w-full md:col-span-2'>
              <button
                className='bg-[#b5aba1] py-2 rounded-full text-white text-lg   justify-center w-full'
                type='submit'
              >
                Submit
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </>
  )
}

export default Main
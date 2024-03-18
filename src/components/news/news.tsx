import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
function news() {
  return (
    <div className='container mx-auto px-4 py-14'>
      <div className='text-center mb-10'>
        <h2 className='text-3xl md:text-5xl text-[#363853] font-semibold axiformaRegular mb-4 md:mb-6'>
          News & Upcoming Events
        </h2>
        <p className='text-lg md:text-xl text-[#363853] axiformaRegular mx-auto md:w-[80%] xl:w-[90%] mb-6'>
          Latest Happenings & hot topics in the field of physiotherapy along with updates from CB Physiotherapy
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        <div className='border border-none '>
          <Link href="/">
            <Image src="/images/2.png" alt="Rehab Fit" width={450} height={650} className='w-full' />
          </Link>
          <div className='text-center mt-4'>
            <h3 className='font-semibold text-xl md:text-2xl axiformaRegular text-[#363853]'>
              An Introduction to Therapy
            </h3>
            <p className='w-64 mx-auto md:w-auto text-base text-[#363853] axiformaRegular'>
              Join us for an exciting and inspiring event - "An Introduction to Memoir Writing"! Whether you're a budding writer
            </p>
          </div>
        </div>

        <div className='border border-none'>
          <Link href="/">
            <Image src="/images/3.png" alt="Rehab Fit" width={450} height={650} className='w-full' />
          </Link>
          <div className='text-center mt-4'>
            <h3 className='font-semibold text-xl md:text-2xl axiformaRegular text-[#363853]'>
              Unlocking Relief Physiotherapy
            </h3>
            <p className='w-64 mx-auto md:w-auto text-base text-[#363853] axiformaRegular'>
              The human knee is a marvel of engineering, allowing us to perform a wide range of activities from
            </p>
          </div>
        </div>

        <div className='border border-none '>
          <Link href="/">
            <Image src="/images/1.png" alt="Rehab Fit" width={450} height={650} className='w-full' />
          </Link>
          <div className='text-center mt-4'>
            <h3 className='font-semibold text-xl md:text-2xl axiformaRegular text-[#363853]'>
              World Osteoporosis Day 2023
            </h3>
            <p className='w-64 mx-auto md:w-auto text-base text-[#363853] axiformaRegular'>
              Osteoporosis Day on October 20th, 2023, brings with it an opportunity to highlight the importance of...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default news
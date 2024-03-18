import React from 'react'
import Image from 'next/image';
function meet() {
  return (
    <div className='bg-[#F3F9FD]'>
      <div className='container mx-auto px-4 py-20'>
        <div className='text-center'>
          <h3 className='text-[50px] text-[#001740] font-bold'>Meet Our Doctors</h3>
          <p>Curabitur vitae nunc sed velit dignissim sodales</p>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10 gap-5 mx-auto'>
            <div className='border border-none '>
            <Image src="/images/Mask.png" alt="Rehab Fit" width={300} height={350} className='mx-auto' />
            <div className='text-center mt-6'>
            <h4 className='text-2xl font-semibold'>Dr Darkhshan Nausheen</h4>
            <p>Specialist in Physiotherapist</p>
            </div>
            </div>
            <div className='border border-none '>
            <Image src="/images/Mask.png" alt="Rehab Fit" width={300} height={350} className='mx-auto' />
            <div className='text-center mt-6'>
            <h4 className='text-2xl font-semibold'>Dr Darkhshan Nausheen</h4>
            <p>Specialist in Physiotherapist</p>
            </div>
            </div>
            <div className='border border-none '>
            <Image src="/images/Mask.png" alt="Rehab Fit" width={300} height={350} className='mx-auto' />
            <div className='text-center mt-6'>
            <h4 className='text-2xl font-semibold'>Dr Darkhshan Nausheen</h4>
            <p>Specialist in Physiotherapist</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default meet
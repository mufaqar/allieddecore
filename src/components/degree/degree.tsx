import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Degree() {
  return (
    <div className='container mx-auto px-4 mt-20'>
      <div className='text-center mb-10'>
        <h2 className='text-3xl md:text-5xl text-[#363853] font-semibold axiformaRegular mb-4 md:mb-6'>
          360 Degree Physio Care
        </h2>
        <p className='text-lg md:text-xl text-[#363853] axiformaRegular mx-auto md:w-[80%] xl:w-[90%] mb-6'>
          We Are Committed To Ensuring That Our Clients Have Easy Access To Our Physiotherapy Services, Whether It's At Any Of Our Clinics Or Through Scheduling A Convenient Home Visit.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        <div className='border border-none '>
          <Link href="/">
            <Image src="/images/2.png" alt="Rehab Fit" width={450} height={650} className='w-full' />
          </Link>
          <div className='text-center mt-4'>
            <h3 className='font-semibold text-xl md:text-2xl axiformaRegular text-[#363853]'>Clinic Treatments</h3>
            <p className='w-64 mx-auto md:w-auto text-base text-[#363853] axiformaRegular'>
              High-Quality Physiotherapy Care At Our Physiotherapy Centre Near You. Best Treatment For Ortho / Neuro Issues
            </p>
          </div>
        </div>

        <div className='border border-none'>
          <Link href="/">
            <Image src="/images/3.png" alt="Rehab Fit" width={450} height={650} className='w-full' />
          </Link>
          <div className='text-center mt-4'>
           <h3 className='font-semibold text-xl md:text-2xl axiformaRegular text-[#363853]'>Physiotherapy At Home</h3>
           <p className='w-64 mx-auto md:w-auto text-base text-[#363853] axiformaRegular'>
              Home Visits By Certified CB physiotherapists For Patients With Mobility Issues and for Patients Looking For Convenience
            </p>
          </div>
        </div>

        <div className='border border-none '>
          <Link href="/">
            <Image src="/images/1.png" alt="Rehab Fit" width={450} height={650} className='w-full' />
          </Link>
          <div className='text-center mt-4'>
           <h3 className='font-semibold text-xl md:text-2xl axiformaRegular text-[#363853]'>Online Physiotherapy</h3>
           <p className='w-64 mx-auto md:w-auto text-base text-[#363853] axiformaRegular'>
              Digital Physio Assistant For Personalized PT Exercises At Home. Enables Affordable & Long-term Care
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Degree;

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
function about() {
  return (
    <div className='bg-[#F3F9FD]'>
    <div className='container mx-auto px-4'>
       <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 py-14'>
       <div className='mx-auto'>
           <Image src="/images/Mask.png" alt="Rehab Fit" width={450} height={650} className='w-[400px] h-[500px]' />
        </div>
        <div className='mx-auto mt-8'>
            <h2 className='lg:text-[50px] md:text-[40px] text-[30px] axiformaRegular font-bold py-5 lg:leading-[10vh] text-[#0B577E]'>Dr Darkhshan Nausheen Physiotherapist</h2>
            <p className='text-[#363853] text-[22px] axiformaRegular'>Welcome to Rehab Fit by Physio Connect largest Integrative and most accessible rehabilitation provider. Our clinicians pride themselves ensuring the highest quality of care is accessible to every member . With our Innovative, Integrative, Accessible Rehabilitative care, you can rest assured that you will recover as quickly as possible with evidence-based gold standard treatment.</p>
        </div>
       </div>
    </div>
    </div>
  )
}

export default about
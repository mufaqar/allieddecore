import React from 'react'
import Image from 'next/image';
function clinic() {
  return (
    <div className='bg-[#F3F9FD]'>
      <div className='container mx-auto px-4 pt-8 '>
        <div>
          <h2 className='text-[69px] text-[#52575D] font-bold '>Our Clinic</h2>
          <p className='text-[18px] text-[#52575D] lg:w-[90vh] md:w-[80vh] w-full'>n its new 2,500 square feet premises with state of the art equipment and the most progressive treatment techniques and practices, our highly trained team of professionals is committed to providing the utmost level of service.</p>
        </div>
        <div className='grid grid-cols-2 mt-10 gap-5'>
          <div>
            <Image src="/images/Mask1.png" alt="Rehab Fit" width={450} height={650} className=' mx-auto w-full ' />
          </div>
          <div className='pt-10'>
            <Image src="/images/Mask2.png" alt="Rehab Fit" width={450} height={650} className=' mx-auto w-full' />
          </div>
          <div>
            <Image src="/images/Mask3.png" alt="Rehab Fit" width={450} height={650} className=' mx-auto w-full' />
          </div>
          <div className='pt-10'>
            <Image src="/images/Mask4.png" alt="Rehab Fit" width={450} height={650} className=' mx-auto w-full ' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default clinic
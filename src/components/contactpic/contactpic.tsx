import React from 'react'
import Image from 'next/image';
function contactpic() {
  return (
    <div className='bg-[#F3F9FD]'>
      <div className='container mx-auto px-4 py-10'>
        <div className="bg-cover bg-center h-[546px] rounded-xl rounded-tl-[15vh] rounded-br-[15vh]  py-5 w-full" style={{ backgroundImage: `url('/images/Mask1.png')`, }}>
          <div className='py-52'>
            <Image src="/images/Group 4088.png" alt="Rehab Fit" width={450} height={650} className='w-32 mx-auto ' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default contactpic
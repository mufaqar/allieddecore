import React from 'react'
import Image from 'next/image';

function testimonials() {
  return (
    <div className='bg-[#0B577E] h-auto'>
      <div className='container mx-auto px-4 py-20 mt-14'>
        <div>
          <h2 className='text-3xl md:text-5xl text-center font-semibold text-white axiformaRegular'>
            Service Testimonials
          </h2>
        </div>
        <div>
          <Image src="/images/svg.svg" alt="Rehab Fit" width={450} height={650} className='w-10' />
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5 gap-10'>
          <div className='bg-white rounded-tr-[80px] rounded-bl-[80px] rounded-md py-10 flex flex-col justify-between'>
            <div className='px-10'>
              <h2 className='text-2xl axiformaRegular text-[#0E9CD9] py-3'>Exceptional Services.</h2>
              <p className='text-sm axiformaRegular'>I must say that Dr. Darkhshan Nausheen is a combination of high technology and a very kind Religious personality. After joining his Rehab skill I had a click in my mind that now things will improve on my side. And it happened. My husband become better and one step ahead day by day. I saw whenever he's giving treatment he's also reciting the Quran. Thank you so much Doc for making Hamid, 's life better.</p>
            </div>
            <div className='flex px-12 py-4 gap-5 items-center'>
              <Image src="/images/testimonial1.png" alt="Rehab Fit" width={450} height={650} className='w-10 h-10 rounded-full' />
              <div>
                <h4 className='text-[#0E9CD9] axiformaRegular'>Muhammad Hammad </h4>
                <span>02-02-2023</span>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-tr-[80px] rounded-bl-[80px] rounded-md py-10 flex flex-col justify-between'>
            <div className='px-10'>
              <h2 className='text-2xl axiformaRegular text-[#0E9CD9] py-3'>Awesome Physiotherapist</h2>
              <p className='text-sm'>Dr. Darkhshan Nausheen Is An Awesome Physiotherapist. He Has Been Treating Me For Pain In My Lower Back. I Highly Recommend Him As A Physiotherapist. He Cares About His Clients And Wants To Help People. He Is Very Friendly And Knowledgeable.</p>
            </div>
            <div className='flex px-12 py-4 gap-5 items-center mt-20'>
              <Image src="/images/testimonial2.png" alt="Rehab Fit" width={450} height={650} className='w-10 h-10 rounded-full' />
              <div>
                <h4 className='text-[#0E9CD9] axiformaRegular'>Ruchika Thakkar </h4>
                <span>10-03-2022</span>
              </div>
            </div>
          </div>
          <div className='bg-white rounded-tr-[80px] rounded-bl-[80px] rounded-md py-10 flex flex-col justify-between'>
            <div className='px-10'>
              <h2 className='text-2xl axiformaRegular text-[#0E9CD9] py-3'>Highly recommend!</h2>
              <p className='text-sm axiformaRegular'>Excellent facility and staff. I have received Physiotherapy for my knee. The doctors are experts in the field and provide the best care possible. Highly recommend!</p>
            </div>
            <div className='flex px-12 py-4 gap-5 items-center mt-[18vh]'>
              <Image src="/images/testimonial1.png" alt="Rehab Fit" width={450} height={650} className='w-10 h-10 rounded-full' />
              <div>
                <h4 className='text-[#0E9CD9] axiformaRegular'>Muhammad Hammad </h4>
                <span>02-02-2023</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-end mt-5'>
          <Image src="/images/svg.svg" alt="Rehab Fit" width={450} height={650} className='w-10' />
        </div>
      </div>
    </div>
  )
}

export default testimonials
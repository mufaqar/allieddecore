import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const offerings = [
  { id: 1, title: 'Chiropractor Treatment', img: "/images/services/1.svg" },
  { id: 2, title: 'Sports Physiotherapy', img: "/images/services/2.svg" },
  { id: 3, title: 'Pediatric Physiotherapy', img: "/images/services/3.svg" },
  { id: 4, title: 'Home Care Physiotherapy', img: "/images/services/4.svg" },
  { id: 5, title: 'Neuro Physiotherapy-Rehab', img: "/images/services/5.svg" },
  { id: 6, title: 'Pre And Post Surgery Rehabilitation', img: "/images/services/6.svg" },
  { id: 7, title: 'Geriatric Physiotherapy', img: "/images/services/7.svg" },
  { id: 8, title: 'Strength Training', img: "/images/services/8.svg" },
  { id: 9, title: 'Advanced Physiotherapy', img: "/images/services/9.svg" },
  { id: 10, title: "Women's Health Physiotherapy", img: "/images/services/10.svg" },
  { id: 11, title: 'Musculoskeltal Physiotherapy', img: "/images/services/11.svg" },
  { id: 12, title: 'Vestibular Rehabilitation (VR)', img: "/images/services/12.svg" },
  { id: 13, title: 'Workplace Ergonomics: Assesment & Training', img: "/images/services/13.svg" },
  { id: 14, title: 'Therepeutic Massage', img: "/images/services/1.svg" },
  { id: 15, title: 'Tele-Physiotherapy', img: "/images/services/2.svg" },
  { id: 16, title: 'Cardiac Rehabilitation', img: "/images/services/3.svg" },
  { id: 17, title: 'Clinical Physiotherapy', img: "/images/services/4.svg" },
  { id: 18, title: 'Physical Therapy', img: "/images/services/5.svg" },
  { id: 19, title: 'Spinal Injury Rehabilitation', img: "/images/services/6.svg" },
  { id: 20, title: 'Speech Therapy', img: "/images/services/7.svg" },
  // Add more items as needed
];

function Offer() {
  return (
    <div className='bg-[#0B577E] h-auto text-white py-14 mt-20'>
      <div className='container mx-auto px-4'>
        <div className=' text-center'>
          <h2 className='text-3xl md:text-5xl font-semibold axiformaRegular'>What We Offer</h2>
          <p className='text-lg md:text-xl axiformaRegular lg:w-[70%] xl:w-[90%] mx-auto'>
            We Offer Physiotherapy Treatments Across Neuro/ Ortho/ Chiro/ Pediatrics/ Geriatrics/ Sports Related Issues Covering A Wide Range Of Conditions and symptoms
          </p>
        </div>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5 gap-4'>
          {offerings.map((item) => (
            <div key={item.id} className='border border-[#0E9CD9] text-center p-3 rounded-tl-[5px] rounded-tr-[20px] rounded-br-[5px] rounded-bl-[20px] flex items-center gap-3'>
              <Image src={item.img} alt="icon" width={48} height={48} className='w-12 h-12 bg-[#0E9CD9] rounded-tr-[12px] rounded-bl-[12px] p-2' />
              <Link href="#" className="text-sm font-semibold axiformaRegular inline-flex text-start">{item.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Offer;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
const servicesData = [
  {
    id: 1,
    image: '/images/Rectangle 30.png',
    title: 'Chiropractor Treatment',
  },
  {
    id: 2,
    image: '/images/Rectangle 3011.png',
    title: 'Sports Physiotherapy',
  },
  {
    id: 3,
    image: '/images/Rectangle 301.png',
    title: 'Pediatric Physiotherapy',
  },
  {
    id: 4,
    image: '/images/Rectangle 302.png',
    title: 'Neuro Physiotherapy Rehab',
  },
  {
    id: 5,
    image: '/images/Rectangle 303.png',
    title: 'Pre And Post Surgery Rehabilitation',
  },
  {
    id: 6,
    image: '/images/Rectangle 304.png',
    title: 'Geriatric Physiotherapy',
  },
  {
    id: 7,
    image: '/images/Rectangle 305.png',
    title: 'Strength Training',
  },
  {
    id: 8,
    image: '/images/Rectangle 306.png',
    title: 'Advanced Physiotherapy',
  },
  {
    id: 9,
    image: '/images/Rectangle 307.png',
    title: 'Women Health Physiotherapy',
  },
  {
    id: 10,
    image: '/images/Rectangle 308.png',
    title: 'Musculoskeletal Physiotherapy',
  },
  {
    id: 11,
    image: '/images/Rectangle 309.png',
    title: 'Vestibular Rehabilitation (Vr)',
  },
  {
    id: 12,
    image: '/images/Rectangle 310.png',
    title: 'Workplace Ergonomics: Assessment & Training',
  },
  {
    id: 13,
    image: '/images/Rectangle 311.png',
    title: 'Therapeutic Massage',
  },
  {
    id: 14,
    image: '/images/Rectangle 312.png',
    title: 'Tele-physiotherapy',
  },
  {
    id: 15,
    image: '/images/Rectangle 313.png',
    title: 'Cardiac Rehabilitation',
  },
  {
    id: 16,
    image: '/images/Rectangle 314.png',
    title: 'Clinical Physiotherapy',
  },
  {
    id: 17,
    image: '/images/Rectangle 315.png',
    title: 'Physical Therapy',
  },
  {
    id: 18,
    image: '/images/Rectangle 316.png',
    title: 'Spinal Injury Rehabilitation',
  },


];

function Servicess() {
  return (
    <div className='bg-[#F3F9FD]'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 py-20'>
          {servicesData.map((service) => (
            <div key={service.id} className='text-center'>
              <Image src={service.image} alt='Rehab Fit' width={450} height={650} className='mx-auto w-96' />
              <Link href='/'>
                <h3 className='py-4 text-2xl text-[#363853] font-semibold axiformaRegular'>{service.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Servicess;

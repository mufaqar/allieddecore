import React from 'react'
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
function main() {
  return (
    <div>
      <div
        className="bg-cover bg-center min-h-screen py-16 w-full"
        style={{
          backgroundImage: `url('/images/main.jpg')`,
        }}>
        <div className='container mx-auto px-4 mt-10'>
          <div className='text-white border border-none md:w-[560px] md:mt-10'>
            <h1 className='text-5xl md:text-[92px] md:leading-[112px] py-4 font-semibold axiformaBold'>
              Integrated Physio Care
            </h1>
            <p className='text-lg md:text-[30px] md:leading-[53px] pb-10 md:max-w-lg'>
              Getting You Back To The Things You Love
            </p>
            <div>
              <Link href="/contact" className="bg-[#0E9CD9] hover:bg-[#0B577E] px-4 py-3.5 rounded-[10px] rounded-br-[20px] text-white text-lg flex items-center gap-2 justify-center md:w-[198px]">
                Consult now <BsArrowRight />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default main
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

function Blog() {
  return (
    <div className="bg-[url('/images/blog-bg.png')] bg-cover bg-center py-10 w-full">
      <div className="container mx-auto px-4">
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-7 items-center">
          <div className="bg-[#0E9CD9] mx-auto h-[363px] w-full py-10 rounded-tr-[80px] rounded-md rounded-bl-[80px] grid justify-center gap-3 items-center">
            <Image src="/images/Group 4077.svg" alt="Rehab Fit" width={450} height={650} className="w-20 mx-auto" />
            <div className="text-center px-8 text-white">
              <p className="text-2xl md:text-3xl axiformaBold">Affordable Rehabilitation You'll Love</p>
            </div>
          </div>
          <div className="bg-[#0E9CD9] mx-auto h-[363px] w-full py-10 rounded-tr-[80px] rounded-md rounded-bl-[80px] grid justify-center gap-3 items-center">
            <div className="text-center">
              <p className="text-2xl md:text-3xl axiformaBold text-white px-4 md:px-16 pb-6">
                Book Now with an Expert Physiotherapist
              </p>
              <div>
                <Link href="/contact" className="bg-white hover:bg-[#0B577E] px-4 py-3.5 rounded-[10px] rounded-br-[20px] text-[#0E9CD9] hover:text-white text-lg flex items-center gap-2 justify-center md:w-[198px] mx-auto">
                  Consult now <BsArrowRight />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-[#0E9CD9] mx-auto h-[363px] w-full py-10 rounded-tr-[80px] rounded-md rounded-bl-[80px] grid justify-center gap-3 items-center">
            <div className="text-center">
              <Image src="/images/Group 4081.svg" alt="Rehab Fit" width={450} height={650} className="w-20 mx-auto" />
              <p className="text-2xl md:text-3xl axiformaBold text-white px-4 pb-6">
                Our Convenient Location & Home Physiotherapy
              </p>
              <div className="flex text-white items-center font-semibold justify-center">
                <Image src="/images/Group 4078.svg" alt="Rehab Fit" width={450} height={650} className="w-10" />
                <p className="ml-2 text-lg md:text-xl axiformaRegular">+92 320 3588468</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;

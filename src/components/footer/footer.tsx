import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { HiLocationMarker } from 'react-icons/hi'
import { BsFillTelephoneFill } from 'react-icons/bs'

function Footer() {
  return (
    <footer>
      <div className='container mx-auto px-4 mt-10'>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 '>
          <div>
            <Link href='/'>
              <Image src='/images/logo.svg' alt='Rehab Fit' width={450} height={650} className='w-52' />
            </Link>
            <p className='py-3 text-sm '>
              Pain and Disability Management Council is an advanced rehabilitation clinic that creates a customized treatment plan to meet each patient’s unique medical needs including adults and children.
            </p>
            <div className='flex gap-4 text-[#0E9CD9] mt-3'>
              <Link href='https://facebook.com' target='_blank'>
                <FaFacebook className='text-2xl text-[#0E9CD9] hover:text-[#0B577E]' />
              </Link>
              <Link href='/'>
                <BsYoutube className='text-2xl text-[#0E9CD9] hover:text-[#0B577E]' />
              </Link>
              <Link href='/'>
                <AiFillInstagram className='text-2xl text-[#0E9CD9] hover:text-[#0B577E]' />
              </Link>
              <Link href='/'>
                <AiFillLinkedin className='text-2xl text-[#0E9CD9] hover:text-[#0B577E]' />
              </Link>
              <Link href='/'>
                <BsTwitter className='text-2xl text-[#0E9CD9] hover:text-[#0B577E]' />
              </Link>
            </div>
          </div>
          <div className=' lg:ml-14'>
            <ul className='text-sm grid gap-2 md:gap-4'>
              <li>
                <Link href='#' className='hover:text-[#0E9CD9] hover:underline'>Chiropractor Treatment</Link>
              </li>
              <li>
                <Link href='#' className='hover:text-[#0E9CD9] hover:underline'>Sports Physiotherapy</Link>
              </li>
              <li>
                <Link href='#' className='hover:text-[#0E9CD9] hover:underline'>Pediatric Physiotherapy</Link>
              </li>
              <li>
                <Link href='#' className='hover:text-[#0E9CD9] hover:underline'>Home Care Physiotherapy</Link>
              </li>
              <li>
                <Link href='#' className='hover:text-[#0E9CD9] hover:underline'>Neuro Physiotherapy-Rehab</Link>
              </li>
              <li>
                <Link href='#' className='hover:text-[#0E9CD9] hover:underline'>Pre And Post Surgery Rehabilitation</Link>
              </li>
            </ul>
          </div>
          <div className=' md:mt-0'>
            <ul className='text-sm  grid gap-2 md:gap-4'>
              <li>
                <Link href='#' className='hover:text-[#0E9CD9] hover:underline'>Geriatric Physiotherapy</Link>
              </li>
              <li>
                <Link href='#' className='hover:text-[#0E9CD9] hover:underline'>Strength Training</Link>
              </li>
              <li>
                <Link href='#' className='hover:text-[#0E9CD9] hover:underline'>Advanced Physiotherapy</Link>
              </li>
              <li>
                <Link href='#' className='hover:text-[#0E9CD9] hover:underline'>Women's Health Physiotherapy</Link>
              </li>
              <li>
                <Link href='#' className='hover:text-[#0E9CD9] hover:underline'>Musculoskeltal Physiotherapy</Link>
              </li>
              <li>
                <Link href='#' className='hover:text-[#0E9CD9] hover:underline'>Vestibular Rehabilitation (VR)</Link>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <Link href='/' className='flex gap-3 hover:text-[#0E9CD9] hover:underline'>
                <HiLocationMarker className='text-6xl text-[#0E9CD9]' />
                <div>
                  <h4 className='font-bold'>Address</h4>
                  <span>
                    Lahore poly clinic basement FDPP main gate Azam garden Multan road Lahore
                  </span>
                </div>
              </Link>

            </div>
            <div className='py-4'>
              <Link href='tel:0923055862457' className='flex gap-3 hover:text-[#0E9CD9] hover:underline'>
                <BsFillTelephoneFill className='text-2xl text-[#0E9CD9]' />
                <div>
                  <h4 className='font-bold'>Phone</h4>
                  <span>+92 305 5862457</span>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </div>
      <div className='border mt-10'></div>
      <div className='flex flex-wrap justify-between items-center text-[12px] container mx-auto px-4 py-3'>
        <p>Rehabfit 2024 ©, All rights reserved.</p>
        <p> <Link href="#"> Sitemap </Link> - <Link href="#"> Terms & Conditions</Link> - <Link href="#"> Privacy Policy </Link></p>
      </div>
    </footer>
  )
}

export default Footer;

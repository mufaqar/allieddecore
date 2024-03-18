import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import { AiFillPlayCircle } from 'react-icons/ai';
import YouTube, { YouTubeProps } from "react-youtube";

function innovation() {

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  }
  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className='container mx-auto px-4'>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 items-center lg:mt-20 mt-10'>
        <div>
          <h3 className='text-[25px] text-[#0E9CD9]'>Physiotherapy Clinic</h3>
          <h2 className='lg:text-[48px] text-xl lg:leading-[64px] font-semibold text-[#363853] '>Innovation, Integration, Accessibility</h2>
          <p className='text-[#363853] py-4 pb-6 max-w-[456px]'>Welcome to Rehab Fit by Physio Connect largest Integrative and most accessible rehabilitation provider. Our clinicians pride themselves ensuring the highest quality of care is accessible to every member . With our Innovative, Integrative, Accessible Rehabilitative care, you can rest assured that you will recover as quickly as possible with evidence-based gold standard treatment.</p>
          <div>
            <Link href="/contact" className="bg-[#0E9CD9] hover:bg-[#0B577E] px-4 py-3.5 rounded-[10px] rounded-br-[20px] text-white text-lg flex items-center gap-2 justify-center md:w-[198px]">
              Consult now <BsArrowRight />
            </Link>
          </div>
        </div>
        <div className=''>
          <YouTube
            videoId="IPnAuU6EL7M"
            opts={opts}
            className={`videocontainer aspect-video`}
            iframeClassName={`responsive-iframe rounded-tl-[80px] rounded-tr-[10px] rounded-br-[80px] rounded-bl-[10px]`}
            onReady={onPlayerReady} />
          {/* <Link href="/" className='relative'>
            <Image src="/images/inovation1.png" alt="Rehab Fit" width={602} height={496} className='md:ml-auto' />
            <Image src="/images/video/play.svg" alt="Rehab Fit" width={100} height={100} className='absolute inset-y-1/2 inset-x-1/2 -translate-x-1/2 rounded-full lg:w-[181px] lg:h-[177px]' />
          </Link> */}
          <Link href="/">
            <Image src="/images/inovation2.png" alt="Rehab Fit" width={630} height={204} className=' mt-4 md:ml-auto' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default innovation
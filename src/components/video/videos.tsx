import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import YouTube, { YouTubeProps } from "react-youtube";

function Videos() {

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
        <div className='bg-[#0B577E] h-auto text-white py-14 mt-20'>
            <div className='container mx-auto px-4'>
                <div className=' text-center'>
                    <h2 className='text-3xl md:text-5xl font-semibold axiformaRegular'>
                        Daily Routine Therapy
                    </h2>
                </div>
                <div className='grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-5 gap-7'>
                    {Video.map((item, idx) => (
                        <div key={idx}>
                            <div className='relative'>
                                <YouTube
                                    videoId={item.videoLink}
                                    opts={opts}
                                    className={`videocontainer aspect-square`}
                                    iframeClassName={`responsive-iframe`}
                                    onReady={onPlayerReady} />
                                {/* <Image src="/images/video/play.svg" alt="Rehab Fit" width={90} height={90} className='absolute inset-y-1/2 inset-x-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full' /> */}
                            </div>
                            <div className='mt-5'>
                                <Link href="#" className="text-[22px] font-semibold axiformaRegular">{item.title}</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Videos

const Video = [
    {
        videoLink: "f6SxoHq-o6k",
        title: 'Lahore poly clinic',
        img: "/images/video/1.png",
    },
    {
        videoLink: "TToA7QWyiGg",
        title: 'Inspiring Reviews from Those Who Found Hope',
        img: "/images/video/2.png",
    },
    {
        videoLink: "9mGQ_Vlvi4A",
        title: 'Mera Sunday as physiotherapist',
        img: "/images/video/3.png",
    },
    {
        videoLink: "hBPBBaAJLI4",
        title: 'Embrace Exercise and Yoga Outdoors!',
        img: "/images/video/4.png",
    },
    {
        videoLink: "cLj0gqNBjmQ",
        title: "Walking vs Cycling",
        img: "/images/video/5.png",
    },
    {
        videoLink: "kHuFr18kqVs",
        title: 'Basics about knee joint pain series',
        img: "/images/video/6.png",
    },
    {
        videoLink: "4xG2OqUDfjs",
        title: 'Celebrating World Physical Therapy Day',
        img: "/images/video/7.png",
    },
    {
        videoLink: "OAxXbEooycw",
        title: "Dr. Darkhshan Nausheen's Epic Tribute to Young PTs",
        img: "/images/video/8.png",
    },
];
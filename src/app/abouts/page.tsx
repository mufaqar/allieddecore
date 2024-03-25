'use client'
import React, { useState } from 'react';
import { FaLinkedinIn } from "react-icons/fa6";
import Link from 'next/link';
function About() {
    const [ishover, setHover] = useState(false);
    const [hoveredImage, setHoveredImage] = useState('');
    const data = [{
        image: 'partner1.jpg',
        des: 'Vytautas is a highly accomplished professional with over two decades of experience in the construction industry. As the former owner of the Bekshta Construction Group, he leveraged his expertise in finance and planning to drive innovation and success. His keen eye for detail and excellent management skills ensured the successful execution of each project.',
        linkdein: 'https://www.linkedin.com/in/vytautas-b%C4%97k%C5%A1ta-6a09496/',
        name: "Vytautas Bekshta"
    },
    {
        image: 'partner2.jpg',
        des: 'Anna is a London-based architect with over 10 years of experience designing and building unique spaces characterized by fluid and parametric shapes. Her portfolio includes contemporary private villas, residential apartments, and hospitality projects in London, Marbella, Forte dei Marmi, and California.',
        linkdein: 'https://www.linkedin.com/in/annaub/',
        name: "Anna Uborevich-Borovskaya"
    },
    {
        image: 'partner3.jpg',
        des: 'Valerijus is a Lithuania-based architect with 30 years of experience undertaking projects in Germany, Spain, France, Monaco, UAE, Kazakhstan, Vietnam, Maldives, Ukraine, and Latvia. His repertoire includes residential properties, commercial buildings, and public spaces, with a focus on reconstruction and preservation of cultural heritage.',
        linkdein: 'https://www.linkedin.com/in/valerijus-starkovskis-a11479255/',
        name: "Valerijus Starkovskis"
    }
    ];

    const accordion = [
        {
            project: "A-Project  | International Competition",
            context: "Featured project | Anna Uborevic-Borovskaya at ZHA Team",
            year: "2020",
            link: 'Dezeen',
            img: 'accordion1.jpg'
        },

        {
            project: "Concert Hall | International Competition",
            context: "Featured project | Anna Uborevic-Borovskaya at ZHA Team",
            year: "2020",
            link: 'GQ Russia',
            img: 'accordion2.jpg'
        },

        {
            project: "Dominion Office Building",
            context: "Featured project",
            year: "2015",
            link: 'Designboom',
            img: 'accordion3.jpg'
        },

        {
            project: "Rublyovo-Arkhangelskoye",
            context: "Publication",
            year: "2018",
            link: 'The Architects’ Journal',
            img: 'accordion4.jpg'
        },

    ]
    return (
        <section className='py-28'>
            <div className='container px-4 mx-auto'>
                <h1 className='md:w-[700px] lg:w-[800px] font-normal font-sans text-5xl leading-[60px]'>Spaces that inspire and where every detail tells a story</h1>
                <div className='max-w-[900px] lg:grid md:grid lg:gap-8 grid-cols-2 py-10'>
                    <p className='text-[12px] text-[#bbb3ac]'>UBBS is a highly experienced architecture and interior design firm that operates across various sectors including Residential, Hospitality, Commercial, and Retail. One of our core strengths at UBBS is our ability to deliver bespoke design solutions that are tailored to our clients’ specific needs and preferences.</p>
                    <p className='text-[12px] text-[#bbb3ac]'>At UBBS London, sustainability is at the forefront of our design philosophy. We believe that architecture and design should be environmentally responsible, and we work closely with our clients to create spaces that are energy-efficient and sustainable.</p>
                </div>
                </div>
                <div>
                    <img className='cursor-pointer w-full h-screen' src='/images/about.jpg' alt='img' />
                </div>
                <div className='container px-4 mx-auto'>
                <div className='py-16 '>
                    <h1 className='text-5xl font-sans py-10'>Meet The Team</h1>
                    <div className=' relative lg:grid md:grid lg:grid-cols-3 md:grid-cols-3 gap-6'>
                        {data.map((item, index) => (
                            <div key={index} className='md:w-[400px]'>
                                <div className='relative h-[440px] hover:scale-90 cursor-pointer duration-1000' style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                    <div className='absolute inset-0 bg-black opacity-30'></div>
                                    <div className='lg:px-8 md:px-8  mx-auto '>
                                        <div className='absolute bottom-10 flex lg:w-[340px] md:w-[340px] w-full justify-between items-center '>
                                            <h1 className='text-white text-[10px] px-2 md:px-0 lg:px-0  md:text-[12px]'>{item.name}</h1>
                                            <Link href={item.linkdein} className='p-2 mx-2 md:mx-0 lg:mx-0 rounded-full bg-white text-black font-bold'><FaLinkedinIn /></Link>
                                        </div>
                                        <p className='absolute bottom-4 text-white text-[12px]  px-2 md:px-0 lg:px-0'>Partner</p>
                                    </div>
                                </div>

                                <p className='py-4 text-sm font-sans leading-normal text-black/60'>{item.des}</p>

                            </div>
                        ))}

                    </div>
                </div>
                <div className='py-8'>
                    <h1 className='text-5xl font-sans pb-28'>Awards & Publications</h1>
                    <div>
                        <div className='relative overflow-x-auto'>
                            <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                                <thead className='text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                    <tr>
                                        <th scope='col' className='px-6 py-3 text-lg font-normal font-sans'>
                                            Project
                                        </th>
                                        <th scope='col' className='px-16 py-3 text-lg font-normal font-sans'>
                                            Context
                                        </th>
                                        <th scope='col' className='px-16 py-3 text-lg font-normal font-sans'>
                                            Year
                                        </th>
                                        <th scope='col' className='px-16 py-3 text-lg font-normal font-sans'>
                                            Link
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {accordion.map((item, idx) => (
                                        <tr key={idx} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 duration-1000 hover:bg-black hover:text-white'>
                                            <td
                                                onMouseEnter={() => {
                                                    setHoveredImage(item.img); // Set hover image when mouse enters
                                                }}
                                                onMouseLeave={() => {
                                                    setHoveredImage(''); // Reset hover image when mouse leaves
                                                }}
                                                className='px-6 py-12 font-sans whitespace-nowrap relative' // Add relative class here
                                            >
                                                {item.project}
                                                {hoveredImage === item.img && (
                                                    <img src={hoveredImage} alt='hovered img' className='absolute top-full left-0 w-16 h-16' /> // Position the image absolutely
                                                )}
                                            </td>
                                            <td className='px-16 py-12 font-sans'>{item.context}</td>
                                            <td className='px-16 py-12 font-sans'>{item.year}</td>
                                            <td className='px-16 py-12 font-sans'> {item.link}</td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default About;

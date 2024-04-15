'use client'
import React, { useState } from 'react';
import { FaLinkedinIn } from "react-icons/fa6";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion'
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
        des: 'Anna is a Islamabad-based architect with over 10 years of experience designing and building unique spaces characterized by fluid and parametric shapes. Her portfolio includes contemporary private villas, residential apartments, and hospitality projects in Islamabad, Marbella, Forte dei Marmi, and California.',
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
        <section className='md:py-28 lg:py-28 py-10'>
            <div className='container px-4 mx-auto'>
                <motion.h1
                    initial={{ x: '-100%', opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    exit={{ x: '100%', opacity: 0 }}
                    transition={{
                        stiffness: 100,
                        damping: 15,
                        duration: 1,
                        ease: "easeIn",
                    }}
                    className='md:w-[700px] lg:w-[800px] font-normal font-sans md:text-5xl lg:text-5xl text-3xl lg:leading-[60px] md:leading-[60px]'>Spaces that inspire and where every detail tells a story</motion.h1>
                <motion.div
                    initial={{ y: '-100%', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    exit={{ y: '100%', opacity: 0 }}
                    transition={{
                        stiffness: 100,
                        damping: 15,
                        duration: 1,
                        ease: "easeIn",
                    }}
                    className='md:w-[900px] lg:w-[900px] grid  lg:gap-8 md:gap-8 lg:grid-cols-2 md:grid-cols-2 gap-4 py-10 grid-cols-1'>
                    <p className='text-[12px] text-[#bbb3ac]'>ALLIEDCORE is a highly experienced architecture and interior design firm that operates across various sectors including Residential, Hospitality, Commercial, and Retail. One of our core strengths at ALLIEDCORE is our ability to deliver bespoke design solutions that are tailored to our clients’ specific needs and preferences.</p>
                    <p className='text-[12px] text-[#bbb3ac]'>At ALLIEDCORE Islamabad, sustainability is at the forefront of our design philosophy. We believe that architecture and design should be environmentally responsible, and we work closely with our clients to create spaces that are energy-efficient and sustainable.</p>
                </motion.div>
            </div>
            <div>
                <Image width='800' height='800' className='cursor-pointer w-full h-72 lg:h-screen md:h-screen' src='/images/about.jpg' alt='img' />
            </div>
            <div className='container px-4 mx-auto'>

                <div className='md:py-8 lg:py-8 md:block lg:block hidden'>
                    <h1 className='text-5xl font-sans pb-28'>Awards & Publications</h1>
                    <div>
                        <motion.div
                            initial={{ x: '-100%', opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            exit={{ x: '100%', opacity: 0 }}
                            transition={{
                                stiffness: 100,
                                damping: 15,
                                duration: 1.2,
                                ease: "easeIn",
                            }}
                            className='relative overflow-x-auto'>
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
                                                    <Image width='500' height='500' src={hoveredImage} alt='hovered img' className='absolute top-full left-0 w-16 h-16' /> // Position the image absolutely
                                                )}
                                            </td>
                                            <td className='px-16 py-12 font-sans'>{item.context}</td>
                                            <td className='px-16 py-12 font-sans'>{item.year}</td>
                                            <td className='px-16 py-12 font-sans'> {item.link}</td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </motion.div>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default About;

'use client'
import React,{useState, useEffect } from 'react';
import { motion } from 'framer-motion'
function Banner() {

    const data = [
        { img: 'dior.png' },
        { img: 'dior.png' },
        { img: 'dior.png' },
        { img: 'dior.png' },
        { img: 'dior.png' },
        { img: 'dior.png' },
        { img: 'dior.png' },
        { img: 'dior.png' },
        { img: 'dior.png' },
        { img: 'dior.png' },
        { img: 'dior.png' },
        { img: 'dior.png' },
        { img: 'dior.png' },
        { img: 'dior.png' },
        { img: 'dior.png' },
        { img: 'dior.png' },
        { img: 'dior.png' },
        { img: 'dior.png' },
        { img: 'dior.png' },
        { img: 'dior.png' },
    ];
    const number = [{
        no: '30',
        title: 'Years of experience'
    },
    {
        no: '11',
        title: 'Countries covered'
    },
    {
        no: '300',
        title: 'Projects delivered'
    },
    {
        no: '25',
        title: 'Projects per year'
    },
    ]
    const hoverimages=[{
        img:'/hover/hover1.webp',
        title:'Interior Design Services',
        des:'Space brought to life through creativity, conceptual flair and project expertise.'
    },
    {
        img:'/hover/hover2.webp',
        title:'tural Services',
        des:'We create exceptional buildings that deliver creatively and commercially.'
    },
    {
        img:'/hover/hover3.jpg',
        title:'Specification',
        des:'Outline specifications and schedules of work up to full NBS specification documents.'
    },
    {
        img:'/hover/hover4.webp',
        title:'Construction and Administration',
        des:'Transforming a brief and design into a building.'
    },
]
    const [currentindex, setcurrentindex] = useState(0)
    const [animatedNumber, setAnimatedNumber] = useState(Array(number.length).fill(0));
    useEffect(() => {
        const animationDuration = 1000; 
        const stepDelay = animationDuration / number.length;
        
        const timeoutIds = number.map((item, index) => {
            return setTimeout(() => {
                setAnimatedNumber(prevNumbers => {
                    const updatedNumbers = [...prevNumbers];
                    updatedNumbers[index] = item.no;
                    return updatedNumbers;
                });
            }, (index + 1) * stepDelay);
        });
    
        // Clear timeouts to avoid memory leaks
        return () => {
            timeoutIds.forEach(timeoutId => clearTimeout(timeoutId));
        };
    }, [number]); // Include 'number' in the dependency array
    
    return (
        <>
            <section className='h-screen bg-cover relative' style={{ backgroundImage: `url(bg.jpg)` }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className='container mx-auto px-4'>
                    <div className='md:w-[700px] float-right relative'>
                        <motion.h1
                         initial={{ y: '-100%', opacity: 0 }}
                         whileInView={{ y: 0, opacity: 1 }}
                         exit={{ y: '100%', opacity: 0 }}
                         transition={{
                           stiffness: 100,
                           damping: 15,
                           duration: 1,
                           ease: "easeIn",
                         }}
                        className='md:text-5xl text-2xl lg:text-5xl  text-white font-sans font-normal lg:py-12 py-4 md:py-12 leading-normal'>Working with leading<br /> brands</motion.h1>
                        <motion.p 
                         initial={{ x: '-100%', opacity: 0 }}
                         whileInView={{ x: 0, opacity: 1 }}
                         exit={{ x: '100%', opacity: 0 }}
                         transition={{
                           stiffness: 100,
                           damping: 15,
                           duration: 1,
                           ease: "easeIn",
                         }}
                        className='text-white md:text-sm lg:text-sm text-[12px] font-normal font-sans'>Our portfolio showcases a diverse range of projects in different scales and styles, reflecting our commitment to excellence and innovation in design. With a team of experienced architects, designers and engineers, ALLIEDCORE provides end-to-end solutions that change people's life.</motion.p>
                        <div className='grid grid-cols-3 lg:grid-cols-5 md:grid-cols-5 gap-y-8 lg:gap-y-14 md:gap-y-14 py-10'>
                            {data.map((item, idx) => (
                                <div key={idx}>
                                    <motion.img
                                     initial={{ y: '100%', opacity: 0 }}
                                     whileInView={{ y: 0, opacity: 1 }}
                                     exit={{ y: '100%', opacity: 0 }}
                                     transition={{
                                       stiffness: 100,
                                       damping: 15,
                                       duration: 1,
                                       ease: "easeIn",
                                     }}
                                    className='w-16 text-white' src={item.img} alt='img' />
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </section>
            <section className='container mx-auto px-4 pt-28'>
                <div className='md:flex lg:flex justify-between items-center'>
                    <motion.h1
                    initial={{ y: '-100%', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    exit={{ y: '100%', opacity: 0 }}
                    transition={{
                      stiffness: 100,
                      damping: 15,
                      duration: 1,
                      ease: "easeIn",
                    }}
                    className='md:text-5xl lg:text-5xl text-4xl font-sans font-normal md:pb-0 lg-pb-0 pb-4'>Highlights</motion.h1>
                    <motion.div
                    initial={{ y: '100%', opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    exit={{ y: '100%', opacity: 0 }}
                    transition={{
                      stiffness: 100,
                      damping: 15,
                      duration: 1,
                      ease: "easeIn",
                    }}
                    
                    className='md:flex lg:flex md:space-y-0 lg:space-y-0  space-y-4 lg:space-x-8  md:space-x-8 lg:w-[700px] md:w-[700px]'>
                        <p className='text-sm font-sans font-thin md:w-[350px] text-[#b5aba1] '>We are pragmatic in our approach to design and handle each project in accordance with its particular set of requirements and imperatives. When working in conservation areas or on listed buildings we aim to respect and retain the best of the historic elements and to supplement these with contemporary interventions wherever appropriate.</p>
                        <p className='text-sm font-sans font-thin md:w-[350px] text-[#b5aba1]'>Energy efficiency and sustainability issues are given serious consideration at the outset of the design process, in particular on new-build projects. Properly considered they play an important part in adding present and future value.</p>
                    </motion.div>
                </div>
            </section>

            <section className='container mx-auto px-4 pt-28'>
                <div className='md:grid md:grid-cols-4 lg:grid-cols-4  gap-8'>
                    {number.map((item, index) => (
                        <div key={index} className='border-black lg:border-r-[1px] md:border-r-[1px] pb-4 pr-4 lg:w-[200px] md:w-[280px]'>
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
                            
                             className='border-t-[1px] border-black text-7xl  pt-4 pl-4 font-sans font-normal'>{animatedNumber[index]}+</motion.h1>
                            <p className='pt-4 pl-4'>{item.title}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className='md:py-24 lg:py-24 lg:block md:block hidden'>
            <div className="bg-cover w-full h-screen relative duration-1000" style={{ backgroundImage: `url(${currentindex !== null ? hoverimages[currentindex].img : ''})`, opacity: '1' }}>
                <div className="absolute inset-0 bg-black" style={{ opacity: '0.5' }}></div>
                <div className='container px-4 mx-auto grid grid-cols-4 gap-4 w-full relative '>
                    {hoverimages.map((item, idx) => (
                        <div
                            key={idx}
                            className='pt-96 group p-4 h-screen border-l-[2px] border-white/30 cursor-pointer relative'
                            onMouseEnter={() => setcurrentindex(idx)}
                          
                        >
                            <motion.h1
                             initial={{ y: '-100%', opacity: 0 }}
                             whileInView={{ y: 0, opacity: 1 }}
                             exit={{ y: '100%', opacity: 0 }}
                             transition={{
                               stiffness: 100,
                               damping: 15,
                               duration: 1,
                               ease: "easeIn",
                             }}
                            className='text-white/70 z-10 group-hover:-mt-4 duration-1000 font-sans font-semibold text-2xl'>{item.title}</motion.h1>
                            {currentindex === idx && (
                                <motion.p 
                                initial={{ y: '100%', opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                exit={{ y: '100%', opacity: 0 }}
                                transition={{
                                  stiffness: 100,
                                  damping: 15,
                                  duration: 1,
                                  ease: "easeIn",
                                }}
                                className='text-white absolute bottom-40 text-[12px] font-thin font-sans left-0 right-0 px-4 py-2 '>{item.des}</motion.p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
}

export default Banner;

'use client'
import React,{useState, useEffect } from 'react';

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
        const animationDuration = 2000; 
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
    }, []);
    return (
        <>
            <section className='h-screen bg-cover relative' style={{ backgroundImage: `url(bg.jpg)` }}>
                <div className='absolute inset-0 bg-black opacity-50'></div>
                <div className='container mx-auto px-4'>
                    <div className='md:w-[700px] float-right relative'>
                        <h1 className='text-5xl text-white font-sans font-normal py-12 leading-normal'>Working with leading<br /> brands</h1>
                        <p className='text-white text-sm font-normal font-sans'>Our portfolio showcases a diverse range of projects in different scales and styles, reflecting our commitment to excellence and innovation in design. With a team of experienced architects, designers and engineers, UBBS provides end-to-end solutions that change people's life.</p>
                        <div className='grid grid-cols-5 gap-y-14 py-10'>
                            {data.map((item, idx) => (
                                <div key={idx}>
                                    <img className='w-16 text-white' src={item.img} alt='img' />
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </section>
            <section className='container mx-auto px-4 pt-28'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-5xl font-sans font-normal'>Highlights</h1>
                    <div className='flex  space-x-8 md:w-[700px]'>
                        <p className='text-sm font-sans font-thin md:w-[350px] text-[#b5aba1] '>We are pragmatic in our approach to design and handle each project in accordance with its particular set of requirements and imperatives. When working in conservation areas or on listed buildings we aim to respect and retain the best of the historic elements and to supplement these with contemporary interventions wherever appropriate.</p>
                        <p className='text-sm font-sans font-thin md:w-[350px] text-[#b5aba1]'>Energy efficiency and sustainability issues are given serious consideration at the outset of the design process, in particular on new-build projects. Properly considered they play an important part in adding present and future value.</p>
                    </div>
                </div>
            </section>

            <section className='container mx-auto px-4 pt-28'>
                <div className='grid grid-cols-4 gap-8'>
                    {number.map((item, index) => (
                        <div key={index} className='border-black border-r-[1px] pb-4 pr-4 w-[280px]'>
                            <h1 className='border-t-[1px] border-black text-7xl  pt-4 pl-4 font-sans font-normal'>{animatedNumber[index]}+</h1>
                            <p className='pt-4 pl-4'>{item.title}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className='py-24'>
            <div className="bg-cover w-full h-screen relative duration-1000" style={{ backgroundImage: `url(${currentindex !== null ? hoverimages[currentindex].img : ''})`, opacity: '1' }}>
                <div className="absolute inset-0 bg-black" style={{ opacity: '0.5' }}></div>
                <div className='container px-4 mx-auto grid grid-cols-4 gap-4 w-full relative '>
                    {hoverimages.map((item, idx) => (
                        <div
                            key={idx}
                            className='pt-96 p-4 h-screen border-l-[2px] border-white/30 cursor-pointer relative'
                            onMouseEnter={() => setcurrentindex(idx)}
                          
                        >
                            <h1 className='text-white z-10 font-sans font-bold text-lg'>{item.title}</h1>
                            {currentindex === idx && (
                                <p className='text-white absolute bottom-36 text-[12px] font-thin font-sans left-0 right-0 px-4 py-2 '>{item.des}</p>
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

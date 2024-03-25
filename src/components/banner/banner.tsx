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
    const [animatedNumber, setAnimatedNumber] = useState(Array(number.length).fill(0));
    useEffect(() => {
        const animationDuration = 2000; // Duration for the animation in milliseconds
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
                            <h1 className='border-t-[1px] border-black text-7xl pl-4 font-sans font-normal'>{animatedNumber[index]}+</h1>
                            <p className='pt-4 pl-4'>{item.title}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Banner;

import React from 'react'
import Navbar from '@/components/navbar'
import Contact from '@/components/contact/contact'
import Servicess from '@/components/servicess/servicess'
import About from '@/components/about/about'
import Hero from '@/components/hero'
import Projects from '@/components/project/project'
import Banner from '@/components/banner/banner'
import Blog_sec from '@/components/blog'
import data from '@/blogs.json';

function page() {
  return (
    <div>
       
        <Hero/>
        <About/>
        <Projects data={data}/>
        <Banner/>
        <Blog_sec data={data} />
    </div>
  )
}

export default page
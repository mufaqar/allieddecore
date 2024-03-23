import React from 'react'
import Navbar from '@/components/navbar'
import Contact from '@/components/contact/contact'
import Servicess from '@/components/servicess/servicess'
import Blog from '@/components/blog/blog'
import About from '@/components/about/about'
import Footer from '@/components/footer/footer'
import Hero from '@/components/hero'
function page() {
  return (
    <div>
       
        <Hero/>
        <About/>
        <Contact/>
        <Servicess/>
        <Blog/>
       
    </div>
  )
}

export default page
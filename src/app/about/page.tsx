import React from 'react'
import Navbar from '@/components/navbar'
import Contact from '@/components/contact/contact'
import About from '@/components/about/about'
import Contactpic from '@/components/contactpic/contactpic'
import Clinic from '@/components/clinic/clinic'
import Meet from '@/components/meet/meet'
import Blog from '@/components/blog/blog'
import Footer from '@/components/footer/footer'
function page() {
  return (
    <div>
        <Navbar/>
        <Contact/>
        <About/>
        <Contactpic/>
        <Clinic/>
        <Meet/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default page
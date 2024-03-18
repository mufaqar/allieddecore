import React from 'react'
import Navbar from '@/components/navbar'
import Contact from '@/components/contact/contact'
import Servicess from '@/components/servicess/servicess'
import Blog from '@/components/blog/blog'
import Footer from '@/components/footer/footer'
function page() {
  return (
    <div>
        <Navbar/>
        <Contact/>
        <Servicess/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default page
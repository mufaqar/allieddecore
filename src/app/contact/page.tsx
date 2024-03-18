"use client"
import React from 'react'
import Contact from '@/components/contact/contact'
import Navbar from '@/components/navbar'
import Main from '@/components/contact/main'
import Blog from '@/components/blog/blog'
import Footer from '@/components/footer/footer'
function page() {
  return (
    <div>
        <Navbar/>
        <Contact/>
        <Main/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default page
"use client"
import React from 'react'
import Navbar from '@/components/navbar'
import About from '@/components/about/about'
import Hero from '@/components/hero'
import Projects from '@/components/project/project'
import Banner from '@/components/banner/banner'
import Blog_sec from '@/components/blog'
import data from '@/blogs.json';

export default function Home() {
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

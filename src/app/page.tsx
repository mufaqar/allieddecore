"use client"
import React from 'react'
import Navbar from '@/components/navbar'
import Main from '@/components/main/main'
import Degree from '@/components/degree/degree'
import Offer from '@/components/offer/offer'
import Innovation from '@/components/innovation/innovation'
import Testimonials from '@/components/testimonials/testimonials'
import News from '@/components/news/news'
import Blog from '@/components/blog/blog'
import Footer from '@/components/footer/footer'
import Videos from '@/components/video/videos'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Main />
      <Degree />
      <Offer />
      <Innovation />
      <Testimonials />
      <News />
      <Videos />
      <Blog />
      <Footer />
    </main>
  )
}

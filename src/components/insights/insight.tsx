import Link from 'next/link'
import React from 'react'

function Insights() {
    const data=[{
        img:'/blogs/blog1.jpeg',
        title:'Urban design trends',
        date:'07 March 2024'
    },
    {
        img:'/blogs/blog2.jpg',
        title:'Principles of interior design',
        date:'07 March 2024'
    },
    {
        img:'/blogs/blog3.webp',
        title:'Commercial architecture: best practices',
        date:'07 March 2024'
    },
    {
        img:'/blogs/blog4.webp',
        title:'The future of architecture in hospitality',
        date:'07 March 2024'
    },
]
  return (
    <section className='container mx-auto px-4'>
        <h1>Latest insights</h1>
        <Link href={'/'}>View Blogs</Link>
        <div className=''>


        </div>
        </section>
  )
}

export default Insights
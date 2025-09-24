// src/pages/NewsAndBlogsPage.jsx

import React, { useState } from 'react'
import NewsAndBlogsCard from './NewsAndBlogsCard'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FadeInSection = ({ children }) => {
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
    return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0, y: -100, scale: 0.8 }}
    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    {children}
  </motion.div>
  
    )
  }

const articles = [
  {
    imageUrl: '/Picture.png',
    title: 'Design Trends of 2025',
    author: 'John Doe',
    date: 'June 25, 2025',
    summary:
      'Explore the emerging trends shaping modern architecture. Sustainable materials, open layouts, and tech integrations are transforming spaces like never before. Discover what lies ahead and how these developments will reshape residential and commercial projects. From urban micro-units to sprawling eco-homes, the future is now.',
  },
  {
    imageUrl: '/blog-post-3.png',
    title: 'Urban Innovation',
    author: 'Alice Smith',
    date: 'June 24, 2025',
    summary:
      'Urban design focuses on eco-friendliness and functionality. Discover how city planning evolves to meet modern needs. Community-first approaches and resilient materials lead the way. Smart cities, modular construction, and adaptive reuse stand at the center of this shift.',
  },
  {
    imageUrl: '/Image (1).png',
    title: 'Construction Safety Insights',
    author: 'Mark Lee',
    date: 'June 22, 2025',
    summary:
      'Latest techniques in ensuring on-site safety and efficient workflows. Learn how regulations and innovations merge to protect workers and improve productivity. Advanced PPE, automation, and predictive analytics reduce risks significantly.',
  },
  {
    imageUrl: '/Picture.png',
    title: 'Minimalist Home Concepts',
    author: 'Emma Chen',
    date: 'June 20, 2025',
    summary:
      'Minimalism in residential design prioritizes clean lines, open spaces, and essential living. Explore how these principles enhance everyday living and simplify construction. Less becomes more through intentional layout and reduced material waste.',
  },
]

const NewsAndBlogs = () => {
  const [expanded, setExpanded] = useState(false)
  const lead = articles[0]
  const truncated = lead.summary.split(' ').slice(0, 25).join(' ') + '...'

  return (
    <div className="w-full">
      {/* Top Banner */}
      <FadeInSection>
      <div
  className="relative w-full  bg-center bg-cover flex items-center justify-center"
  style={{ backgroundImage: 'url("/PICTURE-Banner-News-And-blog.png")' }}
>
  <div className='sm:py-30 py-20 lg:py-40'>
  <h1 className="text-white text-[20px] sm:text-[48px] lg:text-[64px] font-bold">
    News <span className="text-orange-500">Blogs</span>
  </h1>
  </div>
</div>
      </FadeInSection>

      {/* Content */}
      <FadeInSection>
      <div className="sm:w-[70%] w-[90%] mx-auto sm:py-12 py-5">
        <div className="flex items-center sm:mb-4 mb-2">
          <hr className="w-10 border-orange-500 border-2 mr-3" />
          <h2 className="sm:text-2xl text-xl font-semibold text-orange-500">News & Blogs</h2>
        </div>

        <h3 className="text-black font-medium sm:text-[28px] text-[16px] leading-[130%] capitalize mb-4 max-w-4xl">
          Stay updated with the <span className="text-orange-500">latest insights</span> and <span className="text-orange-500">industry trends</span> from our experts
        </h3>

        <p className="text-black sm:text-[16px] text-[12px] font-normal leading-[110%] sm:mb-10 mb-6 max-w-4xl">
          Get deep dives into architectural advancements, construction practices, safety improvements, and design philosophies shaping our built environment.
        </p>

        <div className="flex flex-col lg:flex-row sm:gap-8 gap-4 sm:mb-12 mb-6">
          {/* Left: Image + Info */}
          <div className="lg:w-1/2 w-full">
            <figure>
              <img src="/Picture.png" alt={lead.title} className="w-full object-cover mb-3" />
            </figure>
            <div className="h-[1px] w-full bg-gray-900 mb-3"></div>
            <div className="flex justify-between text-[12px] text-gray-500 font-light mb-3">
              <span>{lead.author}</span>
              <span>{lead.date}</span>
            </div>
            <div className="h-[1px] w-full bg-gray-900 sm:mb-3"></div>
          </div>

          {/* Right: Title + Para + Button */}
          <div className="lg:w-1/2 w-full flex flex-col justify-start">
            <h3 className="font-[500] text-[20px] sm:text-[24px] text-black leading-[130%] sm:mb-4 mb-2">
              {lead.title}
            </h3>
            <p className="font-[300] text-[14px] sm:text-[16px] text-black leading-[130%] mb-3">
              {expanded ? lead.summary : truncated}
            </p>
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="text-orange-500 text-sm font-medium hover:underline mt-2 self-start cursor-pointer"
            >
              {expanded ? 'See Less' : 'See More'}
            </button>
          </div>
        </div>

        {/* Additional Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(1).map((item, index) => (
            <NewsAndBlogsCard
              key={index}
              imageUrl={item.imageUrl}
              title={item.title}
              author={item.author}
              date={item.date}
              summary={item.summary}
            />
          ))}
        </div>
        {/* Load More Button */}
<div className="flex justify-center mt-10">
  <button
    className="bg-white text-black border border-black lg:px-20 md:px-15 sm:px-10  px-5 lg:py-4 md:py-3 sm:py-2 py-1 md:text-lg sm:text-md  text-sm font-medium transition duration-300 hover:bg-black hover:text-white cursor-pointer"
  >
    Load More
  </button>
</div>

      </div>
      </FadeInSection>
    </div>
  )
}

export default NewsAndBlogs

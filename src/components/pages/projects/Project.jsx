// src/pages/ProjectsPage.jsx

import React from 'react'
import ProjectCard from './ProjectsCard'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ProjectsPage = () => {

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
  const projects = [
    {
      image: '/Image 3.png',
      heading: 'Modern Living Space',
      description: 'A contemporary design.',
    },
    {
      image: '/Image 3.png',
      heading: 'Office Interior',
      description: 'Elegant workspace with.',
    },
    {
      image: '/Image 5.png',
      heading: 'Urban Kitchen',
      description: 'A sleek kitchen with.',
    },
    {
      image: '/Image 5.png',
      heading: 'Creative Studio',
      description: 'Design-forward space.',
    },
    {
      image: '/Image 3.png',
      heading: 'Outdoor Lounge',
      description: 'Open-air comfort with.Open-ai',
    },
    {
      image: '/Image 3.png',
      heading: 'Luxury Bedroom',
      description: 'A restful retreat with.',
    },
  ]

  return (
    <div className="w-full">
      {/* Top Banner */}
      <FadeInSection>
    <section
  className="relative w-full bg-center bg-cover flex items-center justify-center"
  style={{ backgroundImage: 'url("/PICTURE-Banner-News-And-blog.png")' }}
>
  <div className="absolute inset-0  bg-opacity-30" />
  <div className="relative z-10 text-center py-20 sm:py-32 lg:py-40">
    <h1 className="text-white text-[20px] sm:text-[48px] lg:text-[64px] font-bold">
      <span className="text-white">Our</span>{' '}
      <span className="text-orange-500">Projects</span>
    </h1>
  </div>
</section>
      </FadeInSection>


      {/* Projects Section */}
      <FadeInSection>
      <div className="sm:w-[70%] w-[90%] mx-auto sm:py-12 py-5">
        <div className="flex items-center sm:mb-4 mb-2">
          <hr className="w-10 border-orange-500 border-2 mr-3" />
          <h2 className="sm:text-2xl text-xl   font-semibold text-orange-500">Projects</h2>
        </div>

        <h3 className="text-black font-medium sm:text-[28px] text-[16px] leading-[100%] capitalize mb-4 max-w-4xl">
          Take a closer look at our{' '}
          <span className="text-orange-500">impeccable</span> craftsmanship and{' '}
          <span className="text-orange-500">attention</span> to detail in every{' '}
          <span className="text-orange-500">project</span> we deliver
        </h3>

        <p className="text-black sm:text-[16px] text-[12px] font-normal leading-[100%] mb-10 max-w-4xl">
          Lorem ipsum dolor sit amet consectetur. Pellen tesque proin pretium amet id duis. Urna scelerisque. Pellentesque proin pretium amet id duis. Urna scelerisque.
        </p>

        <div className="grid justify-center gap-5 grid-cols-2 sm:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              imageUrl={project.image}
              heading={project.heading}
              description={project.description}
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

export default ProjectsPage

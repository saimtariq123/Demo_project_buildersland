import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false)

  const images = [
    '/Image 5.png',
    '/Image 4.png',
    '/Image 4.png',
    '/Image 3.png',
    '/gALLERY-PIC-3.png',
    '/Image 5.png',
    '/Image 4.png',
    '/Image 3.png',
  ]

  const displayedImages = showAll ? [...images, ...images] : images

  return (
    <section className="w-full bg-black text-white h-auto sm:py-[100px] py-[50px]  px-6">
      <div className=" sm:w-[80%] w-[95%] m-auto">
        {/* Header */}
        <div className="flex items-center mb-4 sm:mb-6">
          <hr className="w-10 border-orange-500 border-2 mr-3" />
          <h2 className="text-xl sm:text-2xl font-semibold text-orange-500">Projects</h2>
        </div>

        <h3 className="text-[18px] sm:text-[28px] font-medium leading-[100%] mb-4 sm:mb-6">
          Take a closer look at our <span className="text-orange-500">impeccable craftsmanship</span> and attention to <span className="text-orange-500">detail</span> in every project we deliver
        </h3>

        <p className="text-[12px] sm:text-[16px] font-light leading-[100%] text-white mb-10">
          Lorem ipsum dolor sit amet consectetur. Pellentesque proin pretium amet id duis. Urna scelerisque. Pellentesque proin pretium amet id duis. Urna scelerisque.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-[10px]">
          {displayedImages.map((src, idx) => (
            <div key={idx} className="relative group overflow-hidden">
              <img
                src={src}
                alt={`project-${idx}`}
                className="w-full h-auto object-cover transition duration-300 ease-in-out group-hover:opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <FiSearch className="text-white text-5xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-white text-black px-6 py-3 rounded hover:bg-orange-500 hover:text-white transition"
          >
            {showAll ? 'View Less' : 'View All'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

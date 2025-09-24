import React, { useState } from 'react'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import "../../../../src/App.css"
import { Link } from 'react-router-dom'

const ReadyToBuildPage = () => {
  const [slideIndex, setSlideIndex] = useState(0)
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
  const testimonials = [
    [
      {
        img: 'team-person-1.png',
        name: 'John Doe',
        role: 'Project Manager',
        feedback: 'Exceptional quality and professionalism. Would recommend without hesitation.',
        stars: 5,
      },
      {
        img: 'team-person-2.png',
        name: 'Jane Smith',
        role: 'Architect',
        feedback: 'They exceeded expectations in every phase of the build.',
        stars: 4,
      },
    ],
    [
      {
        img: 'team-person-3.png',
        name: 'Ali Khan',
        role: 'Civil Engineer',
        feedback: 'Reliable and efficient team. Our project ran smoothly.',
        stars: 5,
      },
      {
        img: 'team-person-4.png',
        name: 'Sara Lee',
        role: 'Interior Designer',
        feedback: 'Creative team with timely delivery. Very satisfied.',
        stars: 4,
      },
    ],
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <FadeInSection>
      <section
        className="w-full bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url('Ready-to-build-together-banner-pic-home-pg 1.png')` }}
      >
        <div className="w-[90%] mx-auto py-12 md:py-20 flex flex-col justify-center text-white">
          <h2 className="text-[24px] sm:text-[28px] font-medium leading-tight capitalize mb-4">
            Ready To <span className="text-orange-500">Build</span> Together?
          </h2>
          <p className="text-[14px] sm:text-[16px] font-light leading-snug max-w-xl mb-6">
            Lorem ipsum dolor sit amet consectetur. Pellen tesque proin pretium amet id duis. Urna scelerisque.
            Pellentesque proin pretium amet id duis. Urna scelerisque.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-orange-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded hover:bg-orange-600 transition">
              Get Started
            </button>
            <button className="bg-gray-300 text-black px-6 py-2 sm:py-3 rounded">
              <Link to='/singleService'>
              Learn More
              </Link>
            </button>
          </div>
        </div>
      </section>
      </FadeInSection>

     

      {/* Testimonials */}
      <section className="py-[40px] px-4 sm:px-8 lg:px-0 w-full max-w-6xl mx-auto text-center">
        <div className="flex justify-center items-center mb-4">
          <hr className="w-10 border-orange-500 border-2 mr-3" />
          <h2 className="text-xl sm:text-2xl font-semibold text-orange-500">Testimonials</h2>
        </div>
        <h3 className="text-xl sm:text-[28px] font-medium capitalize mb-4">
          See what our clients have to say about us
        </h3>
        <p className="text-sm sm:text-[16px] font-light leading-snug max-w-3xl mx-auto mb-12">
          Lorem ipsum dolor sit amet consectetur. Pellen tesque proin pretium amet id duis. Urna scelerisque.
          Pellentesque proin pretium amet id duis. Urna scelerisque.
        </p>

        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-5 mb-10">
          {testimonials[slideIndex].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center sm:items-start sm:flex-row w-full max-w-md mx-auto gap-4 p-4 rounded shadow"
            >
              <img
                src={item.img}
                alt={item.name}
                className=" max-h-[200px] object-cover"
              />
              <div className="text-left">
                <h4 className="sm:text-[18px] text-[12px] font-semibold text-black">{item.name}</h4>
                <p className="sm:text-[16px] text-[11px] font-medium text-gray-700 mb-2">{item.role}</p>
                <p className="sm:text-[16px] text-[10px] font-light text-gray-700 mb-2">{item.feedback}</p>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-[16px] ${i < item.stars ? 'text-yellow-500' : 'text-gray-400'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <button
            disabled={slideIndex === 0}
            onClick={() => setSlideIndex(0)}
            className="px-5 py-2 rounded bg-gray-300 disabled:opacity-50 cursor-pointer"
          >
            &#8592; Back
          </button>
          <button
            disabled={slideIndex === 1}
            onClick={() => setSlideIndex(1)}
            className="px-5 py-2 rounded bg-orange-500 text-white disabled:opacity-50 cursor-pointer"
          >
            Forward &#8594;
          </button>
        </div>
      </section>
      

      

      {/* Companies Section */}
    <section className="bg-black py-16 w-full overflow-hidden">
  <div className="w-[90%] mx-auto text-white">
    <div className="flex items-center mb-4">
      <hr className="w-10 border-orange-500 border-2 mr-3" />
      <h2 className="text-xl sm:text-2xl font-semibold text-orange-500">Companies We Worked With</h2>
    </div>
    <div className="relative w-full overflow-hidden mt-10">
      <div className="flex w-max animate-marquee gap-20">
        {[
          'logoipsum-244 1.png',
          'logoipsum-242 1.png',
          'logoipsum-264 1.png',
          'logoipsum-244 1.png',
          'logoipsum-242 1.png',
          'logoipsum-264 1.png',
        ]
          .concat([
            'logoipsum-244 1.png',
            'logoipsum-242 1.png',
            'logoipsum-264 1.png',
            'logoipsum-244 1.png',
            'logoipsum-242 1.png',
            'logoipsum-264 1.png',
          ])
          .map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`Company Logo ${idx + 1}`}
              className="h-8 sm:h-16 md:h-20 w-[150px] object-contain flex-shrink-2"
            />
          ))}
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default ReadyToBuildPage

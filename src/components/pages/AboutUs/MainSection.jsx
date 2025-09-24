import React from 'react'
import { useState } from 'react'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"


const MainSection = () => {

    const tabData = {
    offer: [
      'We deliver cost-effective solutions tailored to client needs.',
      'All projects are planned with sustainability in mind.',
      'We maintain transparent communication throughout the build.',
      'Our services align with latest construction standards.'
    ],
    provide: [
      'Providing skilled professionals for every task.',
      'Real-time monitoring and site reporting.',
      'Efficient material usage to reduce waste.',
      'Expert guidance during every construction phase.'
    ],
    guarantee: [
      'Timely completion backed by detailed project roadmaps.',
      'No compromise on safety and durability.',
      'Post-completion support and service.',
      'Guaranteed satisfaction through detailed execution.'
    ]
  }
  
    const [activeTab, setActiveTab] = useState('offer')
    const StaticContent = ({ children }) => {
    return <div>{children}</div>
  }
    const FadeInSection = ({ children }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
  return (
    <section className="w-full bg-white pt-[80px] sm:pt-[100px]">
          {/* Upper About Section */}
          <FadeInSection>
          <div className="w-[80%] sm:w-[80%] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start  ">
            {/* Left Side with Images */}
            <div className="relative w-full flex sm:items-end sm:justify-end items-start  justify-center xl:pt-[0px] sm:pt-[100px]">
              <figure className="w-fit right-0">
                <img
                  src="/Bck Rectangle Picture.png"
                  alt="Back"
                  className="back-image relative top-0 object-cover"
                />
              </figure>
              <img
                src="/Front square Picture.png"
                alt="Front"
                className="front-image absolute top-55 right-50 object-cover z-10"
              />
            </div>

            {/* Right Side Text */}
            <div className="flex flex-col justify-center">
              <div className="w-full sm:w-[90%]">
                <div className="flex items-center mb-4 sm:mb-6">
                  <hr className="w-8 sm:w-10 border-orange-500 border-2 mr-3" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-orange-500">About Us</h2>
                </div>
                <h3 className="text-[22px] sm:text-[28px] font-medium leading-[100%] mb-4 sm:mb-6 text-black">
                  Exceptional <span className="text-orange-500">construction services</span> and expert{' '}
                  <span className="text-orange-500">insights</span>, from start to finish.
                </h3>
                <p className="text-[14px] sm:text-[16px] font-light leading-[100%] text-black mb-6 sm:mb-8">
                  Lorem ipsum dolor sit amet consectetur. Pellen tesque proin pretium amet id duis. Urna
                  scelerisque. Pellentesque proin pretium amet id duis. Urna scelerisque.
                </p>
                <ul className="mb-6 sm:mb-8 list-disc pl-5 text-black space-y-2 font-semibold">
                  <li>Creative</li>
                  <li>Sustainable</li>
                  <li>Efficient</li>
                </ul>
                <button className="bg-black text-white px-5 py-2 sm:px-6 sm:py-3 rounded hover:bg-orange-500 transition cursor-pointer">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          </FadeInSection>

          {/* Lower Section */}
          <div className="sm:pl-[13%] pl-0 relative w-full mt-[50px] sm:mt-[200px]">
            <div className="sm:w-[80%] mx-auto relative">
              {/* Left Image */}
              <img
                src="/Group 158.png"
                alt="Overlay"
                className="object-cover"
              />

              {/* Overlay Headings */}
              <div className="absolute sm:top-[171px] top-[100px] sm:-left-30 space-y-6 flex flex-col sm:items-end">
                <h3 className="bg-orange-500 text-white text-xl sm:text-2xl font-bold px-4 py-2 w-fit">where</h3>
                <h3 className="bg-orange-500 text-white text-xl sm:text-2xl font-bold px-4 py-2 w-fit">dreams</h3>
                <h3 className="bg-orange-500 text-white text-xl sm:text-2xl font-bold px-4 py-2 w-fit">become true</h3>
              </div>

              {/* Right Tabbed Box */}
               <StaticContent>
              <div className="w-full">
                {/* Desktop */}
                <div className="hidden xl:block absolute top-[70px] left-[calc(536px-50px)] bg-white p-6 sm:p-8 shadow-lg w-full sm:w-[420px]">
                  <h2 className="text-3xl font-semibold mb-4">What We</h2>
                  <div className="w-full sm:h-[3px] bg-black mt-4" />
                  <div className="flex gap-0 mb-4">
                    {['offer', 'provide', 'guarantee'].map((key) => (
                      <button
                        key={key}
                        className={`px-3 py-1 ${activeTab === key ? 'bg-black text-white' : 'bg-white text-black'} hover:bg-black hover:text-white text-bold text-2xl pr-[26px] hover:cursor-pointer transition`}
                        onClick={() => setActiveTab(key)}
                      >
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </button>
                    ))}
                  </div>
                 
                    <ul className="list-disc text-gray-600 pl-5 space-y-2 text-sm sm:text-lg">
                      {tabData[activeTab].map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                
                </div>

                {/* Mobile */}
                <div className="block xl:hidden mt-6 bg-white p-6 shadow-lg w-full max-w-xl">
                  
                  <h2 className="md:text-3xl text-2xl font-semibold mb-4">What We</h2>
                  <div className="w-full h-[3px] bg-black mt-4" />
                  <div className="flex gap-2 mb-4">
                    {['offer', 'provide', 'guarantee'].map((key) => (
                      <button
                        key={key}
                        className={`md:px-6 px-[15px] sm:px-5 py-1  ${activeTab === key ? 'bg-black text-white sm:text-2xl' : 'bg-white text-black sm:text-2xl '} transition`}
                        onClick={() => setActiveTab(key)}
                      >
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </button>
                    ))}
                  </div>
                 
                    <ul className="list-disc text-black pl-5 space-y-2 sm:text-lg md:mb-[50px]">
                      {tabData[activeTab].map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                 
                </div>
              </div>
               </StaticContent>
            </div>
          </div>
          <br />
        </section>
  )
}

export default MainSection

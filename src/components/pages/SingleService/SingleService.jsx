import React from 'react'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SingleServiceCard from './SingleServiceCard'
import { useParams } from 'react-router-dom'
import services from '../Services/ServiceData' // Assuming you have a separate file for service data

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

const services1 = [
  {
    img: '../public/Vector.svg',
    heading: 'Design',
    para: 'High end design. Reliable construction service.'
  },
  {
    img: '/Vector.svg',
    heading: 'Development',
    para: 'Reliable construction service and execution.'
  },
  {
    img: '/Vector.svg',
    heading: 'Consultation',
    para: 'Expert project planning and consulting services.'
  }
]

const benefits = [
  'High quality project delivery',
  'Dedicated project management',
  'Transparent pricing and timelines Transparent pricing and timelines',
  'Expert consultation throughoutTransparent pricing and timelines',
  'Expert consultation throughoutTransparent pricing and timelines',
  'Expert consultation throughoutTransparent pricing and timelines',
  'Expert consultation throughoutTransparent pricing and timelines'
]

const SingleServicePage = () => {
  const { id } = useParams()
const index = parseInt(id)

const service = !isNaN(index) && services[index] ? services[index] : services[0]


  return (
    <div className="w-full">
      {/* Top Banner */}
      <FadeInSection>
        <section
          className="relative w-full bg-center bg-cover flex items-center justify-center"
          style={{ backgroundImage: 'url("/Banner-Single-Service-.png")' }}
        >
          <div className="sm:py-30 py-20 lg:py-40">
            <h1 className="text-white text-[20px] sm:text-[48px] lg:text-[64px] font-bold">
              <span className="text-orange-500">Single</span> Service
            </h1>
          </div>
        </section>
      </FadeInSection>

      {/* Section Heading */}
      <FadeInSection>
        <section className="px-4 sm:px-8 xl:w-[80%]  w-[95%] mx-auto py-8 sm:py-12 flex flex-col items-start">
          <div className="flex items-center mb-6 sm:mb-8">
            <hr className="w-10 border-orange-500 border-2 mr-3" />
            <h2 className="text-xl sm:text-2xl font-semibold text-orange-500">Single Services</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-8">
            {/* Left */}
            <div className="lg:w-3/5 w-full">
              <h3 className="text-[18px]  sm:text-[20px] md:text-[24px  ] font-semibold text-black mb-4">{service.title}</h3>
              <img
                src="/SIngle-SERVICE-aRCHITECTURE 1.png"
                alt="Service"
                className="object-cover mb-6 w-full"
              />
              <p className="text-[13px] sm:text-[16px] text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Pellentesque proin pretium amet id duis. Urna scelerisque. Nulla facilisi. Sed at elit ut nisi gravida laoreet. Donec ut magna in velit laoreet. Lorem ipsum dolor sit amet consectetur. Pellentesque proin pretium amet id duis. Urna scelerisque. Nulla facilisi. Sed at elit ut nisi gravida laoreet. Donec ut magna in velit laoreet.                Lorem ipsum dolor sit amet consectetur. Pellentesque proin pretium amet id duis. Urna scelerisque. Nulla facilisi. Sed at elit ut nisi gravida laoreet. Donec ut magna in velit laoreet. Lorem ipsum dolor sit amet consectetur. Pellentesque proin pretium amet id duis. Urna scelerisque. Nulla facilisi. Sed at elit ut nisi gravida laoreet. Donec ut magna in velit laoreet.

              </p>
            </div>

            {/* Right */}
            <div className="lg:w-2/5 w-full flex flex-col">
              <h3 className="text-3xl font-semibold mb-4">Other Services</h3>
              <div className="grid grid-cols-1  lg:grid-cols-1 gap-4">
                {services1.map((s, i) => (
                  <div key={i} className="w-full mx-auto">
                    <SingleServiceCard img={s.img} heading={s.heading} para={s.para} />
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-center">
                <button className="border border-black text-black px-6 py-2 bg-white hover:bg-black hover:text-white transition cursor-pointer">
                  View All
                </button>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* What You Will Get */}
      <FadeInSection>
        <section className="px-4 sm:px-8 sm:w-[80%] w-[90%] mx-auto py-12">
          <div className="flex items-center mb-6">
            <hr className="w-10 border-orange-500 border-2 mr-3" />
            <h2 className="text-xl sm:text-2xl font-semibold text-orange-500">What You Will Get</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-8 sm:gap-7 gap-5 mb-10">
            {benefits.map((point, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="p-[1px] bg-black flex items-center justify-center text-white font-bold">✔</div>
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <p className="text-gray-700">
              With our services, you gain a partner committed to your success. We guide you through every stage with professionalism and integrity.
            </p>
          </div>
        </section>
      </FadeInSection>
    </div>
  )
}

export default SingleServicePage

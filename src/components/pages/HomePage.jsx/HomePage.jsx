import React from 'react'
import { Link } from 'react-router-dom'
import HomeServices from './HomeServices'
import AboutUsSection from '../AboutUs/AboutUsSection'
import ProjectsSection from './ProjectsSection'
import OurTeam from '../AboutUs/OurTeam'
import WhoWeAreSection from '../AboutUs/WhoWeAreSection'
import ReadyToBuildPage from './ReadyTOBuildPage'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

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

const Home = () => {
  return (
    <div className="w-full font-sans">

      {/* Hero Section */}
      <FadeInSection>
      <section className="relative w-full">
        <div 
          className="absolute inset-0 w-full overflow-hidden -z-10 bg-cover bg-center"
          style={{ backgroundImage: "url('/Hero1 1.png')" }}
        ></div>
        <div className="relative w-[80%] mx-auto px-4 sm:px-6 pt-[80px] pb-[50px] sm:pt-[150px] sm:pb-[200px] flex flex-col justify-center text-white">
          <h1 className="text-[25px] sm:text-[74px] font-medium sm:font-normal leading-[1.2] sm:leading-[82px]">
            Building the <span className="text-orange-500">future</span>,<br />
            brick by brick,
          </h1>
          <p className="mt-1 sm:mt-4 text-[20px] sm:text-[28px] font-medium leading-[1.2] sm:leading-[100%] capitalize">
            with our expert construction services.
          </p>
          <div className="flex items-center mt-4 sm:mt-6 gap-4 sm:gap-6">
            <Link
              to="/contact"
              className="bg-orange-500 px-3 sm:px-6 py-1 sm:py-3 text-white text-sm sm:text-base font-medium rounded hover:bg-orange-600 transition"
            >
              Contact Us
            </Link>
            <span className="underline text-white text-[12px] sm:text-[20px] font-medium leading-[100%] cursor-pointer hover:text-orange-500 ">
              <Link to={"/services"}>Our Services {">> "} </Link>
            </span>
          </div>
        </div>

        <div className="absolute bg-white text-black p-4 sm:p-5 w-[80%] sm:w-[350px] left-1/2 transform -translate-x-1/2 sm:left-[calc(100%-370px)] bottom-0 translate-y-[70%] sm:translate-y-0 shadow-lg">
          <div className="mb-2">
            <div className='flex items-end'>
              <h3 className="text-[20px] sm:text-[30px] font-medium leading-[120%] max-w-[80%]">
                See What our clients has to say
              </h3>
              <hr className="bg-black border h-[2px] sm:h-[4px] w-[20%] mb-3" />
            </div>
          </div>
          <p className="text-[16px] sm:text-[20px] font-light leading-[1.2] sm:leading-[100%]">
            delivering high-quality projects that exceed our family's expectations.
          </p>
        </div>
      </section>
      </FadeInSection>

      {/* Feature Boxes Section */}
      <FadeInSection>
        <section className="w-full lg:mt-[100px] sm:mt-[50px] sm:px-6 flex flex-col items-center sm:pt-0 pt-[100px]">
          <div className="flex flex-col md:flex-row justify-between lg:gap-[117px] md:gap-[20px] gp-[30px] w-full max-w-[80%]">
            {[
              {
                title: 'HIGH QUALITY',
                desc: 'Lorem ipsum dolor sit amet consectetur. Elit vestibulum vestibulum hendrerit odio eget quam massa.',
              },
              {
                title: 'HIGH QUALITY',
                desc: 'Lorem ipsum dolor sit amet consectetur. Elit vestibulum vestibulum hendrerit odio eget quam massa.',
              },
              {
                title: 'HIGH QUALITY',
                desc: 'Lorem ipsum dolor sit amet consectetur. Elit vestibulum vestibulum hendrerit odio eget quam massa.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex-1 relative">
                <h4 className="pl-5 text-orange-500 sm:text-[20px] text-[16px] font-medium capitalize sm:mb-4 mb-2 leading-[100%]">
                  {item.title}
                </h4>
                <div className="relative">
                  <p className="pl-4 sm:text-[14px] text-[12px] font-light leading-[28px] text-gray-800 border-l-[4px] border-orange-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <br />
        </section>
      </FadeInSection>

      {/* Services Section with ID */}
      <FadeInSection>
        <section id="services">
          <HomeServices />
        </section>
      </FadeInSection>

      {/* About Us Section */}
      <FadeInSection>
        <section id="about-us">
          <AboutUsSection showFullContent={false} />
        </section>
      </FadeInSection>

      {/* Projects Section */}
      <FadeInSection>
        <section id="projects">
          <ProjectsSection />
        </section>
      </FadeInSection>

      {/* Who We Are Section */}
      <FadeInSection>
        <section id="whoWeAre">
          <WhoWeAreSection />
        </section>
      </FadeInSection>

      {/* Ready To Build + Our Team */}
      <FadeInSection>
        <ReadyToBuildPage />
        <OurTeam />
      </FadeInSection>
    </div>
  )
}

export default Home

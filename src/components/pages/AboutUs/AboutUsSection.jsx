import WhoWeAreAndFAQs from './WhoWeAreSection'
import OurTeam from './OurTeam'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import MainSection from './MainSection'

const AboutUsSection = ({ showFullContent = true }) => {
  // Animated section component
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

  

  return (
    <div className="w-full">
      {/* Top Banner Section */}
      {showFullContent && (
        <FadeInSection>
          <section
            className="w-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: "url('/Banner-About-Us.png')",
            }}
          >
            <h1 className="text-white text-[32px] sm:text-[48px] lg:text-[64px] font-bold sm:py-40 py-20">
              <span className="text-white">About</span>{' '}
              <span className="text-orange-500">Us</span>
            </h1>
          </section>
        </FadeInSection>
      )}

      {/* Main Section */}
      
        <MainSection />
      

      {showFullContent && (
        <>
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
                  <button className="bg-orange-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded hover:bg-orange-600 transition cursor-pointer">
                    Get Started
                  </button>
                  <button className="bg-gray-300 text-black px-6 py-2 sm:py-3 rounded cursor-pointer">
                    Learn More
                  </button>
                </div>
              </div>
            </section>
          </FadeInSection>

          <WhoWeAreAndFAQs />
          <OurTeam />
        </>
      )}
    </div>
  )
}

export default AboutUsSection
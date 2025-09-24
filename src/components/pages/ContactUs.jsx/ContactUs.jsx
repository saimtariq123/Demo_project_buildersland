import Form1 from '../Services/Form'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ContactUs = () => {
  

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

  const services = ['Consulting', 'Development', 'Design']

  return (
    <div className="w-full font-sans">
      {/* Top Banner */}
      <FadeInSection>
      <section
     
  className="relative w-full  bg-center bg-cover flex items-center justify-center"
  style={{ backgroundImage: 'url("/Banner-Contact-Us (1).png")' }}
>
  <div className='sm:py-30 py-20 lg:py-40'>
  <h1 className="text-white text-[20px] sm:text-[48px] lg:text-[64px] font-bold">
    Contact <span className="text-orange-500">Us</span>
  </h1>
  </div>

</section>
      </FadeInSection>

      {/* Content Section */}
      <FadeInSection>
      <section className=" px-4 sm:px-8  sm:w-[80%] w-[90%] md:w-[] lg:w-[] xl:w- mx-auto py-8 sm:py-12 flex flex-col items-start">
        {/* Heading */}
        <div className="flex items-center mb-6 sm:mb-8">
          <hr className="w-10 border-orange-500 border-2 mr-3" />
          <h2 className="text-xl sm:text-2xl font-semibold text-orange-500">Contact Us</h2>
        </div>

        {/* Description */}
        <div className="mb-10 sm:mb-16 max-w-full md:max-w-5xl">
          <h2 className="mb-5 font-medium sm:text-[35px] text-[20px] leading-[100%] tracking-[0em]">
  We'd love to hear from you! Get in touch with us today to discuss your construction needs.
</h2>

          <p className="text-gray-700 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur. Odio sit a ornare pharetra at neque vulputate.
            Amet sed netus libero leo. Neque elementum elementum feugiat euismod hendrerit vulputate nisl pretium.
          </p>
        </div>

        {/* Form Section */}
        <Form1/>
      </section>
      </FadeInSection>

      {/* Black Background Section */}
      <FadeInSection>
      <section className="w-full bg-black text-white">
        <div className="px-4 sm:px-8 max-w-screen-xl mx-auto h-auto md:h-[400px] flex flex-col md:flex-row py-8 sm:py-12 items-start justify-between">
          {/* Left Side Text */}
          <div className="w-full md:w-1/2 pr-0 md:pr-10 flex flex-col justify-start h-full">
            <div className="flex items-center mb-4 sm:mb-6">
              <hr className="w-10 border-orange-500 border-2 mr-3" />
              <h3 className="text-xl sm:text-2xl font-semibold">Find us here</h3>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              We're just a Click away! Reach out to us today to schedule a consultation
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-10">
              Lorem ipsum dolor sit amet consectetur. Pellen tesque proin pretium amet id duis. Urna scelerisque.
              Pellen tesque proin pretium amet id duis. Urna scelerisque.
            </p>
            <button className="bg-white text-black px-6 py-3 text-sm sm:text-base rounded w-max hover:bg-orange-500 hover:text-white transition cursor-pointer">
              Contact Us
            </button>
          </div>

          {/* Right Side Image */}
          <div className="w-full md:w-1/2 h-full flex justify-center items-end mt-8 md:mt-0">
            <figure className="w-full max-w-sm sm:max-w-md">
              <img
                src="/right Side.png"
                alt="Contact Visual"
                className="w-full h-auto object-contain"
              />
            </figure>
          </div>
        </div>
      </section>
      </FadeInSection>

      {/* Footer */}
<div className="w-full h-px bg-white/20"></div> 
     
    </div>
  )
}

export default ContactUs

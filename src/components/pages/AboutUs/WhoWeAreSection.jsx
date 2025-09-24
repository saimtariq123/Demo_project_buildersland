import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const AnimatedNumber = ({ target, start }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    const num = parseInt(target.replace(/\D/g, ''))
    const duration = 2000
    const startTime = Date.now()

    const update = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      const value = Math.floor(progress * num)
      setCount(value)
      if (progress < 1) requestAnimationFrame(update)
    }

    update()
  }, [target, start])

  return <span>{count}</span>
}

const FadeInSection = ({ children }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -100, scale: 0.8 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

const WhoWeAreAndFAQs = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [statsRef, statsInView] = useInView({ threshold: 0.2, triggerOnce: true })

  const stats = [
    { number: '250+', label: 'Completed Projects' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Years of Experience' },
  ]

  const faqs = [
    {
      question: 'What types of construction services do you offer?',
      answer:
        'We provide residential, commercial, and industrial construction services including planning, execution, and post-completion support.',
    },
    {
      question: 'How do I get a project quote?',
      answer:
        'You can contact us via our website or phone. We will schedule a consultation to understand your requirements and provide a detailed quote.',
    },
    {
      question: 'Do you handle permits and inspections?',
      answer:
        'Yes, we manage all necessary permits and inspections to ensure compliance with local regulations.',
    },
    {
      question: 'What is your typical project timeline?',
      answer:
        'Timelines vary by project scope, but we provide a detailed schedule before starting and keep you updated throughout.',
    },
  ]

  return (
    <section className="w-full px-6 sm:py-[100px] py-[50px]">
      <div className="sm:w-[80%] w-[95%] mx-auto">
        <FadeInSection>
          <div className="mb-20" ref={statsRef}>
            <div className="flex items-center mb-4">
              <hr className="w-10 border-orange-500 border-2 mr-3" />
              <h2 className="text-2xl font-semibold text-orange-500">Who We Are</h2>
            </div>
            <h3 className="text-[20px] sm:text-[28px] font-medium leading-[100%] capitalize sm:mb-6 mb-4">
              Experience the <span className="text-orange-500">difference</span> in our craftsmanship
            </h3>
            <p className="text-[16px] font-light leading-[100%] sm:max-w-[60%] mb-10">
              Lorem ipsum dolor sit amet consectetur. Pellen tesque proin pretium amet id duis. Urna scelerisque.
              Pellentesque proin pretium amet id duis. Urna scelerisque.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#1414141A] flex flex-col justify-center items-center text-center pt-4 sm:px-0 px-4"
                >
                  <div className="text-[28px] font-bold text-black mb-2">
                    <AnimatedNumber target={stat.number} start={statsInView} />+
                  </div>
                  <div className="text-[16px] font-medium text-black">{stat.label}</div>
                  <div className="w-full sm:h-[3px] bg-black mt-4" />
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="flex flex-col lg:flex-row gap-[50px] items-start">
            <div className="w-full lg:w-1/2">
              <div className="flex items-center mb-4">
                <hr className="w-10 border-orange-500 border-2 mr-3" />
                <h2 className="text-2xl font-semibold text-orange-500">FAQs</h2>
              </div>
              <h3 className="text-[20px] sm:text-[28px] font-medium leading-[100%] capitalize mb-6">
                Answers to Your Top Construction Questions
              </h3>
              {faqs.map((faq, idx) => (
                <div key={idx} className="mb-4 border-b border-gray-300 pb-4 cursor-pointer">
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full text-left flex justify-between items-center text-[12px] sm:text-[18px] font-medium cursor-pointer"
                  >
                    {faq.question}
                    <span className="sm:text-3xl text-2xl cursor-pointer">{openIndex === idx ? '-' : '+'}</span>
                  </button>
                  {openIndex === idx && (
                    <p className="mt-2 text-[14px] font-light text-gray-700">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="w-full sm:mb-130 mb-60 lg:w-1/2 relative">
              <div className="relative w-full">
                <img
                  src="/faq-pic-2.png"
                  alt="FAQ visual top"
                  className="back-img-2 object-cover absolute top-0"
                />
                <img
                  src="Back Shape Picture.png"
                  alt="FAQ visual bottom"
                  className="front-img-2 object-cover absolute top-[210px] left-[100px]"
                />
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

export default WhoWeAreAndFAQs

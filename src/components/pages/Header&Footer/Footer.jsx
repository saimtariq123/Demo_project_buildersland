import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const footerLinks = [
  { name: 'Services', url: '/services' },
  { name: 'About Us', url: '/about' },
  { name: 'Contact Us', url: '/contact' },
  { name: 'Terms & Conditions', url: '#' },
  { name: 'FAQs', url: '#' },
  { name: 'Privacy Policy', url: '#' }
]

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <div className="w-full max-w-screen-xl mx-auto px-6 py-5 flex flex-col items-center gap-10">
        
        <figure className="w-32">
          <img src="/Group 28.png" alt="Logo" className="w-full h-auto object-contain" />
        </figure>

        <div className="flex gap-6 text-2xl text-white">
          <FaFacebookF className="hover:text-orange-500 cursor-pointer" />
          <FaInstagram className="hover:text-orange-500 cursor-pointer" />
          <FaLinkedinIn className="hover:text-orange-500 cursor-pointer" />
        </div>

        {/* Wrapped Content */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-2xl flex flex-col items-center gap-8">

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center items-center text-sm font-medium gap-4 md:gap-6">
              {footerLinks.map((item, idx) => (
                <React.Fragment key={item.name}>
                  <a href={item.url} className="hover:text-orange-500 whitespace-nowrap">{item.name}</a>
                  {idx !== footerLinks.length - 1 && (
                    <span className="h-4 w-[2px] bg-orange-500 inline-block" />
                  )}
                </React.Fragment>
              ))}
            </div>

           {/* Paragraph + Subscribe Row */}
<div className="w-full flex flex-col md:flex-row justify-between items-start gap-2 pt-4">
  <p className="text-sm text-gray-300 w-full md:w-[55%]">
    Lorem ipsum dolor sit amet consectr tesque proin pretium amet id duis. Urna scelerisque.
  </p>
  <div className="w-full md:w-[45%]">
    <div className="flex w-full">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 sm:px-4 px-2 py-2 rounded-l bg-white text-black border-none focus:outline-none"
      />
      <button className="sm:px-6 px-3 py-2 bg-orange-500 text-white font-semibold rounded-r hover:bg-orange-600">
        Subscribe
      </button>
    </div>
  </div>
</div>


          </div>
        </div>
      </div>

      <div className="w-full bg-orange-500 h-[70px]">
        <div className="max-w-screen-xl mx-auto px-6 h-full flex flex-col sm:flex-row justify-between items-center text-sm text-black font-medium">
          <span>Copyright © 2023 Builder’sLand By Evonicmedia. All Rights Reserved.</span>
          <span>Powered By Evonicsoft</span>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer

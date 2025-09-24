import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const services = [
  'Design',
  'Development',
  'Consultation',
  'Supervision',
  'Inspection',
  'Maintenance',
]

const Form = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  return (
    <section className="w-full px-6 max-w-screen-xl mx-auto pb-5" id="form">
      <div className="flex flex-col md:flex-row gap-10 sm:gap-12 items-stretch w-full">
        <div className="w-full md:w-1/2">
          <img
            src="/Contact-Us-Get-in-Touch 1.png"
            alt="Get in Touch"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-between">
          {/* Name Field - Mobile first approach */}
          <div className="mb-4">
            <label className="text-gray-800 font-semibold text-sm sm:text-base">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-400 rounded px-3 py-2 text-sm sm:text-base focus:outline-none mt-1"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="text-gray-800 font-semibold text-sm sm:text-base">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-400 rounded px-3 py-2 text-sm sm:text-base focus:outline-none mt-1"
            />
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <label className="text-gray-800 font-semibold text-sm sm:text-base">Phone</label>
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full border border-gray-400 rounded px-3 py-2 text-sm sm:text-base focus:outline-none mt-1"
            />
          </div>

          {/* Services Dropdown */}
          <div className="mb-4">
            <label className="text-gray-800 font-semibold text-sm sm:text-base">Select Services</label>
            <div className="relative mt-1">
              <div
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="border border-gray-400 rounded px-3 py-2 cursor-pointer flex justify-between items-center text-sm sm:text-base"
              >
                <span>{selectedService || 'Choose Service'}</span>
                <FaChevronDown className="text-gray-500" />
              </div>
              {dropdownOpen && (
                <ul className="absolute left-0 right-0 bg-white shadow-md border border-gray-300 z-10 mt-1 rounded text-sm sm:text-base">
                  {services.map(service => (
                    <li
                      key={service}
                      onClick={() => {
                        setSelectedService(service)
                        setDropdownOpen(false)
                      }}
                      className="px-4 py-2 hover:bg-orange-100 cursor-pointer"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label className="text-gray-800 font-semibold text-sm sm:text-base">Write Message</label>
            <textarea
              placeholder="Your message..."
              className="w-full h-40 border border-gray-400 rounded px-3 py-2 focus:outline-none resize-none mt-1 text-sm sm:text-base"
            ></textarea>
          </div>

          <button className="w-full bg-black text-white py-3 text-sm sm:text-lg rounded hover:bg-orange-600 transition cursor-pointer">
            Send Message
          </button>
        </div>
      </div>
    </section>
  )
}

export default Form
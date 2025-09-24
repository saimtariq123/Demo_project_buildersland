import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  FaChevronDown,
  FaSearch,
  FaBars,
  FaTimes,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()

 const baseNavItems = [
  { name: 'Home', url: '/' },
  { name: 'About Us', url: '/about' },
  { name: 'Projects', url: '/projects' },
  { name: 'Services', url: '/services' },
]

const [navItems, setNavItems] = useState([])

useEffect(() => {
  setNavItems(
    baseNavItems.map(item => ({
      ...item,
      active: location.pathname === item.url
    }))
  )
}, [location.pathname])

  const services = [
    { name: 'Single service', url: '/singleService' },
     {name:"News & Blogs", url: '/blogs'},
    { name: 'Contact Us', url: '/contact' },
  ]

  const [servicesOpen, setServicesOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const dropdownRef = useRef(null)
  const searchRef = useRef(null)

  const handleNavClick = (index, url) => {
    setNavItems(navItems.map((item, i) => ({ ...item, active: i === index })))
    setServicesOpen(false)
    setSidebarOpen(false)
    navigate(url)
  }

  const handleServiceClick = (url) => {
    setServicesOpen(false)
    setSidebarOpen(false)
    navigate(url)
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        searchRef.current &&
        !searchRef.current.contains(e.target)
      ) {
        setServicesOpen(false)
        setSearchOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="w-full shadow-sm relative z-50">
      <div className="w-[80%] flex items-center justify-between py-4 max-w-7xl mx-auto">
        <figure className="h-auto">
          <img
            className="h-10 sm:h-12 cursor-pointer"
            src="../public/logo.png"
            alt="Logo"
            onClick={() => navigate('/')}
          />
        </figure>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex flex-1 justify-center">
          <ul className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavClick(index, item.url)}
                  className={`uppercase border-b-2 transition-all duration-300 text-sm cursor-pointer ${
                    item.active
                      ? 'text-orange-500 border-orange-500'
                      : 'text-gray-700 border-transparent hover:text-orange-500 hover:border-orange-500'
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`uppercase border-b-2 text-sm cursor-pointer flex items-center gap-1 transition-all duration-300 ${
                  servicesOpen
                    ? 'text-orange-500 border-orange-500'
                    : 'text-gray-700 border-transparent hover:text-orange-500 hover:border-orange-500'
                }`}
              >
                More <FaChevronDown className="text-xs" />
              </button>
              {servicesOpen && (
                <ul className="absolute mt-2 bg-white shadow-lg rounded p-2 min-w-[10rem] z-10">
                  {services.map((s) => (
                    <li key={s.name}>
                      <button
                        onClick={() => handleServiceClick(s.url)}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white cursor-pointer"
                      >
                        {s.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>

        {/* Right: Search + Social Icons for sm+ */}
        <div className="hidden md:flex items-center gap-3 sm:ml-4" >
         <div className="flex items-center gap-2">
  <button
    onClick={() => setSearchOpen(!searchOpen)}
    className="text-gray-700 text-lg cursor-pointer"
  >
    {searchOpen ? <FaTimes /> : <FaSearch />}
  </button>
  {searchOpen && (
    <input
      type="text"
      placeholder="Search..."
      className="px-2 py-1 border border-gray-300 rounded w-40"
    />
  )}
</div>


          <div className="h-6 border-l border-gray-400 mx-2" />
          <FaFacebookSquare className="text-xl text-gray-700 hover:text-orange-500 cursor-pointer" />
          <FaInstagramSquare className="text-xl text-gray-700 hover:text-orange-500 cursor-pointer" />
          <FaLinkedin className="text-xl text-gray-700 hover:text-orange-500 cursor-pointer" />
        </div>

        {/* Mobile Right: Search + Sidebar Toggle */}
        <div className="flex sm:hidden items-center gap-3" >
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-gray-700 text-lg cursor-pointer"
          >
            <FaSearch />
          </button>
          {searchOpen && (
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 px-2 py-1 border border-gray-300 rounded w-32"
            />
          )}
          <button
            className="text-orange-500 text-2xl ml-2 cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-orange-700 text-2xl cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          >
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col px-6 gap-4">
          {navItems.map((item, index) => (
            <li key={item.name}>
              <button
                onClick={() => handleNavClick(index, item.url)}
                className={`text-base w-full text-left py-2 cursor-pointer border-b transition-all duration-300 ${
                  item.active
                    ? 'text-orange-500 border-orange-500'
                    : 'text-gray-700 border-gray-300 hover:text-orange-500 hover:border-orange-500'
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`text-base w-full text-left py-2 cursor-pointer border-b transition-all duration-300 ${
                servicesOpen
                  ? 'text-orange-500 border-orange-500'
                  : 'text-gray-700 border-gray-300 hover:text-orange-500 hover:border-orange-500'
              }`}
            >
              More
            </button>
            {servicesOpen && (
              <div className="flex flex-col">
                {services.map((s) => (
                  <button
                    key={s.name}
                    onClick={() => handleServiceClick(s.url)}
                    className="text-base w-full text-left py-2 cursor-pointer border-b border-gray-300 hover:text-orange-500 hover:border-orange-500"
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            )}
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header

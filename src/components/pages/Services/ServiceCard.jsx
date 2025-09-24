import React from 'react'

const ServiceCard = ({ image, title, description, serial }) => {
  return (
    
    <div className="w-full bg-white hover:bg-[#2D2D2D] transition-colors duration-300 group relative">
      <div className="absolute top-2 left-3 font-semibold text-sm sm:text-base text-black group-hover:text-orange-500 transition">
        {serial}
      </div>
      <div className="flex justify-center py-6 transition  group-hover:brightness-90">
        <img src={image} alt={title} className="object-contain group-hover:invert-0 invert-100 text-black transition" />
      </div>
      <h3 className="text-black group-hover:text-white text-[20px] font-medium leading-[100%] text-center mb-2 transition">
        {title}
      </h3>
      <p className="text-black group-hover:text-white group-hover:line-through text-[14px] font-light leading-[100%] text-center transition px-2">
        {description}
      </p>
      <div className="w-full h-[3px] bg-black mt-4 group-hover:bg-orange-500 transition"></div>
    </div>
   
  )
}

export default ServiceCard

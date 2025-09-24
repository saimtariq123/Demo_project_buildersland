import React from 'react'

const CardForServices = ({ img, title, para, strikethrough, serial }) => {
  return (
    <div className="flex flex-col justify-between items-center text-center p-4 relative bg-black text-gray-300 hover:bg-[#2D2D2D] hover:text-white transition-colors duration-700 group">
      <span className="absolute top-2 left-3 text-[0.375rem] sm:text-sm font-semibold">
        {serial < 10 ? `0${serial}` : serial}
      </span>

      <div className="flex flex-col items-center mt-2">
        <img
          src={img}
          alt={title}
          className="w-[30px] h-[30px] sm:w-[65px] sm:h-[65px] sm:mb-4 mb-2 object-contain"
        />
        <h3 className="font-medium sm:text-[20px] text-[15px] leading-[100%] mb-2">
          {title}
        </h3>
        <p
          className={`sm:text-[14px] text-[9px] leading-[120%] mt-2 font-[300] ${
            strikethrough ? 'line-through' : ''
          }`}
        >
          {para}
        </p>
      </div>
      <br />
      <div className="w-full h-[3px] bg-gray-300 group-hover:bg-orange-500 transition-colors duration-700"></div>
    </div>
  )
}

export default CardForServices
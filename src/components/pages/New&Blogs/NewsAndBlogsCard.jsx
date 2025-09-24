// src/components/NewsAndBlogsCard.jsx

import React, { useState } from 'react'

const NewsAndBlogsCard = ({ imageUrl, title, author, date, summary, full }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`w-full ${full ? 'lg:grid lg:grid-cols-2 lg:gap-8' : 'max-w-sm'}`}>
      {/* Image + Metadata */}
      <div>
        <figure className="w-full overflow-hidden mb-4">
          <img
            src={imageUrl}
            alt={title}
            className=" object-cover"
          />
        </figure>
        <h3 className="font-[500] text-[14px] sm:text-[16px] text-black leading-[100%] mb-3 text-center">
          {title}
        </h3>
        <div className="h-[1px] w-full bg-gray-900 mb-3"></div>
        <div className="flex justify-between text-[12px] text-gray-500 font-light mb-3">
          <span>{author}</span>
          <span>{date}</span>
        </div>
        <div className="h-[1px] w-full bg-gray-900 mb-3"></div>
      </div>

      {/* Textual Content */}
      <div className={`${full ? 'flex flex-col justify-start' : ''}`}>
        <p className="font-[300] text-[12px] sm:text-[14px] text-black leading-[100%] mb-3">
          {expanded ? summary : summary.split(' ').slice(0, 20).join(' ') + '...'}
        </p>
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="text-orange-500 text-[12px] sm:text-sm font-medium hover:underline self-start cursor-pointer"
        >
          {expanded ? 'See Less' : 'See More'}
        </button>
      </div>
    </div>
  )
}

export default NewsAndBlogsCard

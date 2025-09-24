import React from 'react'

const ProjectCard = ({ imageUrl, description, heading }) => {
  return (
    <div className="w-full max-w-sm">
      <figure className="w-full  overflow-hidden">
        <img src={imageUrl} alt={heading} className="w-full h-full object-cover" />
      </figure>
      <div className="w-full h-[1px] bg-gray-900 my-[14.63px]"></div>
      <p className="sm:text-[14px] text-[10px] font-light text-black mb-[14.63px] text-wrap text-center">{description}</p>
      <div className="w-full h-[1px] bg-gray-900 mb-[14.63px]"></div>
      <h3 className="font-medium sm:text-[20px] text-[14px]  leading-[100%] text-black text-center">{heading}</h3>
    </div>
  )
}

export default ProjectCard

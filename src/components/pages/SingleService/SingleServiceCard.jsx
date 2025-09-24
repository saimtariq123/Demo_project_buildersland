import React from 'react';

const SingleServiceCard = ({ img, heading, para }) => {
  return (
    <div className="flex items-start gap-4 sm:gap-6 p-2 xl:p-6 bg-white  rounded-xl w-full">
      {/* Image Section */}
      <div className="bg-[#2D2D2D] p-4 sm:p-10 flex-shrink-0">
        <img
          src={img}
          alt="Service"
          className="xl:h-[65px] xl:w-[65px] md:h-[70px] md:w-[60px] object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between w-full">
        <div>
         <div className="inline-block"> {/* Key wrapper */}
  <h2 className="text-[18px] sm:text-[26px] font-semibold text-black">
    {heading}
  </h2>
  <div className="h-[2px] bg-black w-full"></div> {/* Will match h2 width */}
</div>
          <p className="mt-3 text-[15px] xl:text-lg  text-gray-800">{para}</p>
        </div>
        <a href="/singleService" className="xl:mt-4 mt-2 text-orange-500 hover:underline text-sm sm:text-lg ">
          Learn more →
        </a>
      </div>
    </div>
  );
};

export default SingleServiceCard;

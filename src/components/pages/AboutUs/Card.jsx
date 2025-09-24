import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

const Card = ({ image, name, role }) => {
  return (
    <div className="  border border-gray-300 rounded shadow-[12px_12px_24px_0px_rgba(0,0,0,0.12)] bg-white overflow-hidden group relative">
      <div className="relative w-full  ">
        <img
          src={image}
          alt={name}
          className="sm:w-full sm:h-full h-[210px] object-cover group-hover:brightness-75 transition duration-300"
        />
       <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 flex flex-col gap-2 transition-opacity duration-300">
  {[FaInstagramSquare, FaFacebookSquare, FaLinkedin].map((Icon, i) => (
  <div
    key={i}
    className="rounded-full bg-white p-2 transition-all duration-300 
               hover:cursor-pointer hover:scale-120"
  >
    <Icon className="h-5 w-5 text-black  transition-colors duration-300" />
  </div>
))}
</div>

      </div>

      <div className="group-hover:bg-black bg-white transition-colors duration-500 px-4 py-2 text-center h-full">
        <p className="font-medium sm:text-[16px] text-[14px] leading-[23px]  text-black group-hover:text-white transition duration-500">
          {name}
        </p>
        <p className="font-normal sm:text-[16px] text-[14px] leading-[23px] text-gray-700 group-hover:text-white transition duration-500">
          {role}
        </p>
      </div>
    </div>
  );
};

export default Card;

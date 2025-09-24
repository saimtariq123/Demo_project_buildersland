import { Link } from 'react-router-dom'
import CardForServices from './CardForServices'

const HomeServicesSection = () => {
  const cards = [
    {
      img: '/ICon.png',
      title: 'Project Planning',
      para: 'Comprehensive strategy and scheduling to ensure smooth execution from day one.',
      color: 'grey',
      serial: 1,
    },
    {
      img: '/greyWorker.png',
      title: 'Construction',
      para: 'Robust structural development carried out with precision and industry standards.',
      color: 'black',
      serial: 2,
    },
    {
      img: '/greyWorker.png',
      title: 'Site Supervision',
      para: 'Constant monitoring and quality control to maintain flawless construction outcomes.',
      color: 'black',
      serial: 3,
    },
    {
      img: '/greyWorker.png',
      title: 'Post-Completion',
      para: 'Detailed handover and follow-up services to guarantee sustained satisfaction.',
      color: 'black',
      serial: 4,
    },
  ]

  return (
    <section className="w-full bg-black text-white py-[60px] sm:py-[100px]">
      <div className=" w-[90%] sm:w-[80%] mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
        {/* Left Section */}
        <div className="w-full ">
          <div className="flex items-center mb-4 sm:mb-6">
            <hr className="w-8 sm:w-10 border-orange-500 border-2 mr-3" />
            <h2 className="text-xl sm:text-2xl font-semibold text-orange-500">Services</h2>
          </div>
          <h3 className="text-[20px] sm:text-[28px] font-medium leading-[100%] mb-4 sm:mb-6">
            Exceptional <span className="text-orange-500">construction services</span> and expert{' '}
            <span className="text-orange-500">insights</span>, from start to finish.
          </h3>
          <p className="text-[13px] sm:text-[16px] font-light  leading-[130%] text-white mb-6 sm:mb-8">
            Lorem ipsum dolor sit amet consectetur. Pellen tesque proin pretium amet id duis. Urna
            scelerisque. Pellentesque proin pretium amet id duis. Urna scelerisque.
          </p>
          <button className="bg-white text-black px-5 py-2 sm:px-6 sm:py-3 rounded hover:bg-orange-500 hover:text-white transition cursor-pointer">
           <Link to='/services'>Find Out
           </Link> 
          </button>
        </div>

        {/* Right Section with Cards */}
        <div className="w-full  grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6">
          {cards.map((card, idx) => (
            <CardForServices
              key={idx}
              img={card.img}
              title={card.title}
              para={card.para}
              strikethrough={false}
              color={card.color}
              serial={card.serial}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeServicesSection

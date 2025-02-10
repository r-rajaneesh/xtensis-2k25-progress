import React, { useEffect, useState } from 'react';
import Waves from '../jsrepo/Waves/Waves.jsx';
import { FaArrowRight } from "react-icons/fa";
import Navbar from './Navbar.jsx'
import { Navigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';

function Hero() {
  const [timeLeft, setTimeLeft] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2025-02-22T00:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    // New interval for currentIndex
    const indexInterval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % 12); // Loop from 0 to 8
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(indexInterval); // Clear the new interval on cleanup
    };
  }, []);

  const CardData = ({title, content, more, link, readme}) => {
    return (
      <div className='mb-8 mt-5 pl-2 pr-2'>
      <h1 className='font-pink text-xl font-bold'>
      {title}
      </h1>
      <p className='font-raleway text-sm font-semibold'>
      {content}
      </p>
      <p>
        {more}
      </p>
      <button className='flex items-center mt-2' onClick={() => <Navigate to={`/${link}`} />}>
        <div className='bg-white pl-4 pr-4 font-semibold font-inter h-10 flex items-center justify-center text-black rounded-full p-2'>
          {readme}
        </div>
        <div  className='bg-white font-semibold font-inter h-10 w-10 flex items-center justify-center text-black rounded-full p-2'>
          <FaArrowRight />
        </div>
      </button>
    </div>
    );
  }

  return (
    <div className='h-full w-full bg-gray-100 flex flex-col justify-between items-center'>
      <Navbar />
      <div className='flex items-center flex-row justify-center w-full'>
        <p className='absolute xl:-translate-y-30 xl:-translate-x-60 md:-translate-y-18 md:-translate-x-20 right-0 text-right xl:text-md md:text-xs font-raleway font-semibold'>
          Festivals for those who <br /> want to meet interesting people.
        </p>
        <h1 className='xl:text-[10.5vw] md:text-[12vw] font-pink font-extrabold'>
          XTENSIS 2k25
        </h1>
        <p className='absolute z-10 bg-white rounded-full font-poppins p-2 xl:text-xl md:text-xs translate-x-24 -rotate-12 border-2 border-black'>
          22ndOfFebrauary
        </p>
      </div>
      <div className='xl:max-w-7xl lg:max-w-6xl grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2  gap-2 p-2'>
        {/* techniical events */}
        <div className=' bg-green-400 p-4 flex flex-col justify-between items-center text-white rounded-2xl h-full'>
          <div className='grid grid-cols-4 grid-rows-3 gap-2'>
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className={`w-14 max-w- h-14 border-2 border-white rounded-full ${index === currentIndex ? 'bg-white' : 'bg-transparent'} transition-all duration-750`}
              />
            ))}
          </div>
          <CardData
          title="Show Your Tech Prowess"
          content="Compete in coding, web design, and quizzes to challenge your technical expertise and creativity."
          link="tevents"
          more="Tech patterns, code snippets, or a futuristic circuit design."
          readme="Explore Events"
          />
        </div>
        {/* non technical events */}
        <div className='bg-violet-500 p-4 flex flex-col justify-between items-center text-white rounded-2xl h-full'>
          <div className='w-full h-full'>
            <Waves
              lineColor="#fff"
              backgroundColor="rgba(255, 255, 255, 0.2)"
              waveSpeedX={0.065}
              waveSpeedY={0.04}
              waveAmpX={50}
              waveAmpY={20}
              friction={0.9}
              tension={0.01}
              className='h-full'
              xGap={7}
              yGap={36}
            />
          </div>
          <CardData
            title="Unleash Your Creativity"
            content="Participate in fun events like short film-making, gaming, and more to showcase your talents."
            link="ntevents"
            more="Film reels, paint strokes, or game controllers."
            readme="Join the Fun"
          />
        </div>

        <div className='col-span-2 grid grid-cols-1 grid-rows-2 gap-2'>
            <div className='bg-orange-500 p-2 flex flex-col justify-between items-center rounded-2xl'>
              <div className='flex flex-row justify-center'>
                {
                  Array.from({length: 5}).map((_, index) => {
                    return (
                      <img key={index} src={logo}
                      className={`w-24 h-24 rounded-full object-cover `}
                      />
                    );
                  })
                }
              </div>
            </div>
            <div className='bg-black rounded-2xl'>
              hello
            </div>
        </div>
        
      </div>
    </div>
  );
}

export default Hero;

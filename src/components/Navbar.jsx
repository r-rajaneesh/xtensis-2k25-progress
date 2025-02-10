import React, { useEffect, useState } from 'react';


function Navbar() {
  const [timeLeft, setTimeLeft] = useState({});

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

  return (
    <div className='xl:max-w-7xl lg:max-w-6xl ml-4 mr-4 flex flex-row  justify-center gap-4 items-center mb-5'>
      <div className='bg-white p-2 pl-4 pr-4 rounded-full shadow-md'>
         🥳 <span className='font-poppins'>Xtensis Festival</span>
      </div>
      <div className='font-poppins flex flex-row justify-evenly gap-3 pl-4 pr-4 bg-white p-2 shadow-md rounded-full'>
        <a href="/">
          About
        </a>
        <p>.</p>
        <a href="/events">
          Events
        </a>
        <p>.</p>
        <a href="/contact">
          Contact
        </a>
        <p>.</p>
        <a href="/organizers">
          Organizers
        </a>
      </div>
      <div className='bg-white p-2 rounded-full shadow-md font-poppins pl-4 pr-4'>
        Starts in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </div>
    </div>
  )
}

export default Navbar

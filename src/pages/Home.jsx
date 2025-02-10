import React from 'react'
import Hero from '../components/Hero'
import FollowCursor from '../jsrepo/FollowCursor/FollowCursor'

function Home() {
  return (
    <div className='w-screen min-h-screen flex items-center pt-6 pb-6 bg-gray-100'>
      <Hero />
      <FollowCursor
      offsetX={20}
      cardWidth='200px'
      rotationFactor={10}
      enableTilt={true}
      animationConfig={{ mass: 5, tension: 350, friction: 40 }}
      wheelConfig={{ mass: 1, tension: 200, friction: 30 }}
    >
      {/* Other content can go in here */}
      <p className='translate-y-34 text-white bg-black/60 rounded-2xl text-sm font-normal font-inter p-1'>
      Register for xtensis soon!
      </p>
    </FollowCursor>
    </div>
  )
}

export default Home

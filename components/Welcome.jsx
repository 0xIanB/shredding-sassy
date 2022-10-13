import React from 'react'
import Image from 'next/image'
import welcome from '../assets/welcome.png'
import welcomesassy from '../assets/welcomesassy.jpg'
import { useParallax } from 'react-scroll-parallax';

const Welcome = () => {
  const parallax = useParallax({
    speed: 10,
  });

  return (
    <div className='flex flex-col-reverse mb-40 mt-40 lg:mb-60 md:flex-row'>
      {/* Text */}
      <div className='flex flex-col text-darkpurple2 items-center lg:items-start justify-center'>
          <h1 className='font-bold font-body text-2xl lg:text-4xl lg:w-1/2 lg:pr-20 text-center lg:text-left lg:pl-24 py-8'>Welcome to Meta Mountain</h1>
          <p className='text-md lg:text-xl font-medium text-center lg:text-start w-full md:w-3/4 items-center justify-center lg:justify-start lg:items-start lg:pl-24 px-8 lg:px-4'>{"Sassy's are a bunch of fun loving, adrenaline fueled Sasquatches that reside on Meta Mountain. A mysterious mountain with endless terrain and some of the gnarliest features in the world."}</p>
      </div>
      {/* Image */}
      <div className='flex flex-row px-8 lg:px-0 items-center justify-center'>
        <div ref={parallax.ref} className='flex absolute -ml-[220px] md:-ml-[400px] lg:-ml-[600px] z-20 w-[200px] h-[240px] lg:w-[285px] lg:h-[340px]'>
            <Image
              src={welcomesassy}
              alt='Sassy'
              width={285}
              height={340}
            >
            </Image>
          </div>
          <div className='flex items-center -mr-6 lg:-mr-0 justify-center w-[400px] h-[500px] md:w-[400px] md:h-[500px] lg:w-[600px] lg:h-[700]'>
            <Image
              src={welcome}
              alt='Sassy Welcome'
              width={600}
              height={700}
            >
            </Image>
          </div>
      </div>
    </div>
  )
}

export default Welcome
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
    <div id='welcome' className='flex flex-col-reverse mb-40 mt-48 lg:mb-60 lg:flex-row'>
      {/* Text */}
      <div className='flex flex-col text-pri items-center lg:items-start justify-center'>
          <h1 className='font-bold font-body text-2xl lg:text-4xl lg:w-1/2 lg:pr-20 text-center lg:text-left lg:pl-24 py-8'>Welcome to Meta Mountain</h1>
          <p className='text-md lg:text-xl font-medium text-center lg:text-start w-full md:w-3/4 items-center justify-center lg:justify-start lg:items-start lg:pl-24 px-8 lg:px-4'>{"Sassy's are a bunch of fun loving, adrenaline fueled Sasquatches that reside on Meta Mountain. A mysterious mountain with endless terrain and some of the gnarliest features in the world."}</p>
      </div>
      {/* Image */}
      <div className='flex flex-row px-8 ml-8 lg:px-0 items-center justify-center'>
        <div ref={parallax.ref} className='flex absolute z-20 -ml-[600px]'>
            <Image
              src={welcomesassy}
              alt='Sassy'
              width={285}
              height={340}
            >
            </Image>
          </div>
          <div className='flex items-center -mr-6 lg:-mr-0 justify-center'>
            <Image
              src={welcome}
              alt='Sassy Welcome'
              width={1500}
              height={1500}
            >
            </Image>
          </div>
      </div>
    </div>
  )
}

export default Welcome
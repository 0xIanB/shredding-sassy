import React from 'react'
import Image from 'next/image'
import welcome from '../assets/welcome.png'
import welcomesassy from '../assets/welcomesassy.jpg'
import { useParallax } from 'react-scroll-parallax';

const Welcome = () => {
  const parallax1 = useParallax({
    speed: 10,
  });
  const parallax2 = useParallax({
    speed: 10,
  });
  const parallax3 = useParallax({
    speed: 10,
  });

  return (
    <div id='welcome' className='flex flex-col-reverse mb-20 mt-48 md:mt-16 lg:mt-[25px] lg:mb-40 lg:flex-row'>
      {/* Text */}
      <div className='flex flex-col text-pri items-center lg:items-start justify-center shrink'>
          <h1 className='font-bold font-body text-2xl lg:text-4xl lg:w-[43%] lg:pr-20 text-center lg:text-left lg:pl-24 py-8'>Welcome to Meta Mountain</h1>
          <p className='text-md lg:text-lg font-medium text-center lg:text-start md:w-[60%] items-center justify-center lg:justify-start lg:items-start lg:pl-24 px-8 lg:px-4 -mt-4'>{"Sassy's are a bunch of fun loving, adrenaline fueled Sasquatches that reside on Meta Mountain. A mysterious mountain with endless terrain and some of the gnarliest features in the world."}</p>
      </div>
      {/* Desktop Image */}
      <div className='hidden lg:flex flex-row items-center justify-center p-8 lg:p-0'>
        <div ref={parallax1.ref} className='flex absolute z-20 lg:-ml-[600px] shadow-2xl'>
            <Image
              src={welcomesassy}
              alt='Sassy'
              width={300}
              height={350}
            >
            </Image>
          </div>
          <div className='flex items-center -mr-6 lg:-mr-0 justify-center shrink-0'>
            <Image
              src={welcome}
              alt='Sassy Welcome'
              width={700}
              height={700}
            >
            </Image>
          </div>
      </div>
      {/* Tablet Image */}
      <div className='hidden md:flex lg:hidden flex-row items-center justify-center p- lg:p-0'>
        <div ref={parallax2.ref} className='flex absolute z-20 -ml-[400px] shadow-2xl'>
            <Image
              src={welcomesassy}
              alt='Sassy'
              width={250}
              height={300}
            >
            </Image>
          </div>
          <div className='flex items-center -mr-6 lg:-mr-0 justify-center shrink-0'>
            <Image
              src={welcome}
              alt='Sassy Welcome'
              width={500}
              height={600}
            >
            </Image>
          </div>
      </div>
      {/* Mobile Image */}
      <div className='md:hidden flex flex-row items-center justify-center lg:p-0 ml-6'>
        <div ref={parallax3.ref} className='flex absolute z-20 -ml-[250px] shadow-2xl'>
            <Image
              src={welcomesassy}
              alt='Sassy'
              width={150}
              height={180}
            >
            </Image>
          </div>
          <div className='flex items-center -mr-6 lg:-mr-0 justify-center shrink-0'>
            <Image
              src={welcome}
              alt='Sassy Welcome'
              width={300}
              height={380}
            >
            </Image>
          </div>
      </div>
    </div>
  )
}

export default Welcome
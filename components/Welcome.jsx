import React from 'react'
import Image from 'next/image'
import welcome from '../assets/welcome.png'
import welcomesassy from '../assets/welcomesassy.jpg'
import { useParallax } from 'react-scroll-parallax';

const Welcome = () => {
  const parallax1 = useParallax({
    speed: 15,
  });
  const parallax2 = useParallax({
    speed: 15,
  });
  const parallax3 = useParallax({
    speed: 15,
  });
  const parallax4 = useParallax({
    speed: 15,
  });

  return (
    <div id='welcome' className='flex flex-col-reverse mb-20 mt-32 md:mt-16 lg:mt-[25px] lg:mb-40 lg:flex-row'>
      {/* Text */}
      <div className='flex flex-col text-pri items-center lg:items-start justify-center shrink'>
          <h1 className='font-bold font-body text-2xl md:text-3xl lg:text-4xl lg:w-[55%] lg:pr-20 text-center lg:text-left lg:pl-24 py-8 px-2'>Welcome to Meta Mountain</h1>
          <p className='text-md md:text-lg xl:text-lg font-medium text-center lg:text-start md:w-[90%] lg:w-[60%] items-center justify-center lg:justify-start lg:items-start lg:pl-24 px-8 lg:px-4 -mt-4'>{"Sassy's are a bunch of fun loving, adrenaline fueled Sasquatches that reside on Meta Mountain. A mysterious mountain with endless terrain and some of the gnarliest features in the world."}</p>
      </div>
      {/* Desktop Image */}
      <div className='hidden lg:flex xxl:hidden flex-row items-center justify-center p-8 lg:p-0'>
        <div ref={parallax1.ref} className='flex absolute z-20 lg:-ml-[500px] shadow-2xl'>
            <Image
              src={welcomesassy}
              alt='Sassy'
              width={300}
              height={300}
            >
            </Image>
          </div>
          <div className='flex items-center -mr-6 lg:-mr-0 justify-center'>
            <Image
              src={welcome}
              alt='Sassy Welcome'
              width={1300}
              height={1350}
            >
            </Image>
          </div>
      </div>
      {/* Tablet Image */}
      <div className='hidden md:flex lg:hidden flex-row items-center justify-center p- lg:p-0'>
        <div ref={parallax2.ref} className='flex absolute z-20 -ml-[370px] shadow-2xl'>
            <Image
              src={welcomesassy}
              alt='Sassy'
              width={300}
              height={300}
            >
            </Image>
          </div>
          <div className='flex items-center -mr-6 lg:-mr-0 justify-center shrink-0'>
            <Image
              src={welcome}
              alt='Sassy Welcome'
              width={600}
              height={600}
            >
            </Image>
          </div>
      </div>
      {/* Mobile Image */}
      <div className='flex flex-row md:hidden items-center justify-center lg:p-0 lg:ml-14 ml-6'>
        <div ref={parallax3.ref} className='flex absolute z-20 -ml-[210px] shadow-2xl'>
            <Image
              src={welcomesassy}
              alt='Sassy'
              width={150}
              height={150}
            >
            </Image>
          </div>
          <div className='flex items-center lg:-mr-0 justify-center shrink-0'>
            <Image
              src={welcome}
              alt='Sassy Welcome'
              width={300}
              height={300}
            >
            </Image>
          </div>
      </div>
      {/* Widscreen */}
      <div className='hidden xxl:flex flex-row items-center justify-center p-8 lg:p-0'>
        <div ref={parallax4.ref} className='flex absolute z-20 lg:-ml-[1000px] shadow-2xl'>
            <Image
              src={welcomesassy}
              alt='Sassy'
              width={600}
              height={600}
            >
            </Image>
          </div>
          <div className='flex items-center -mr-6 lg:-mr-0 justify-center'>
            <Image
              src={welcome}
              alt='Sassy Welcome'
              width={1300}
              height={1300}
            >
            </Image>
          </div>
      </div>
    </div>
  )
}

export default Welcome
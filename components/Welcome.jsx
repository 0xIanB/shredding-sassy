import React from 'react'
import Image from 'next/image'
import welcome from '../assets/welcome.png'
import welcomesassy from '../assets/welcomesassy.jpg'
import { useParallax } from 'react-scroll-parallax';

const Welcome = () => {
  const parallax1 = useParallax({
    speed: 15,
  });

  return (
    <div id='welcome' className='flex flex-col-reverse mb-20 lg:flex-row'>
      {/* Text */}
      <div className='flex flex-col text-pri items-center lg:items-start justify-center shrink'>
          <h1 className='mainBodyHeaderStyle font-bold font-body lg:w-[80-%] 2xl:w-[90%] xxl:pr-0 text-center lg:text-left lg:pl-24 pb-8'>Welcome to Meta Mountain</h1>
          <p className='mainBodyTextStyle font-medium text-center lg:text-start md:w-[90%] lg:w-[80%] xxl:w-[40%] items-center justify-center lg:justify-start lg:items-start lg:pl-24 px-8 lg:px-4 -mt-4'>{"Sassy's are a bunch of fun loving, adrenaline fueled Sasquatches that reside on Meta Mountain. A mysterious mountain with endless terrain and some of the gnarliest features in the world."}</p>
      </div>
      {/* Desktop Image */}
      <div className='flex flex-row items-center justify-center mx-6 md:mr-12 lg:mx-0 mt-24 mb-10 lg:mt-14'>
        <div ref={parallax1.ref} className='sassyFloatingStyle flex z-20 -mr-[170px] md:-mr-[100px] lg:-mr-[160px] 2xl:-mr-[250px] shadow-2xl shrink-0'>
            <Image
              src={welcomesassy}
              alt='Sassy'
              objectFit='fill'
            >
            </Image>
          </div>
          <div className='sassyWelcomeStyle flex items-center justify-center'>
            <Image
              src={welcome}
              alt='Sassy Welcome'
              objectFit='fill'
            >
            </Image>
          </div>
      </div>
    </div>
  )
}

export default Welcome
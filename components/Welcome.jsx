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
    <div id='welcome' class='flex flex-col-reverse mb-20 lg:flex-row'>
      {/* Text */}
      <div class='flex flex-col text-pri items-center lg:items-start justify-center shrink'>
          <h1 class='mainBodyHeaderStyle font-bold font-body lg:w-[75%] 2xl:w-[42%] xxl:pr-0 text-center lg:text-left lg:pl-24 mt-4 sm:mt-8'>Welcome to</h1>
          <h1 class='mainBodyHeaderStyle font-bold font-body lg:w-[75%] 2xl:w-[50%] xxl:pr-0 text-center lg:text-left lg:pl-24 pb-8'>Meta Mountain</h1>
          <p class='mainBodyTextStyle font-medium text-center lg:text-start md:w-[90%] lg:w-[60%] xxl:w-[40%] items-center justify-center lg:justify-start lg:items-start lg:pl-24 px-8 lg:px-4 -mt-4'>{"Sassy's are a bunch of fun loving, adrenaline fueled Sasquatches that reside on Meta Mountain. A mysterious mountain with endless terrain and some of the gnarliest features in the world."}</p>
      </div>
      {/* Desktop Image */}
      <div class='flex flex-row items-center justify-center mx-4 md:mr-12 lg:mx-0 mt-20 md:mt-24 w-full'>
        <div ref={parallax1.ref} class='sassyFloatingStyle flex z-20 -mr-[100px] md:-mr-[100px] lg:-mr-[160px] 2xl:-mr-[250px] shadow-2xl'>
            <Image
              src={welcomesassy}
              alt='Sassy'
              objectFit='fill'
            >
            </Image>
          </div>
          <div class='sassyWelcomeStyle flex items-center justify-center'>
            <Image
              src={welcome}
              alt='Sassy Welcome'
              width={1200}
              height={1200}
            >
            </Image>
          </div>
      </div>
    </div>
  )
}

export default Welcome
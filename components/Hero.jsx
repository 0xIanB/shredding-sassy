import React from 'react'
import Image from 'next/image'
import animatedSassy from '../assets/animatedsassy.gif'
import s1Sassy from '../assets/s1Sassy.png'
import s2Sassy from '../assets/s2Sassy.png'
import s3Sassy from '../assets/s3Sassy.png'
import aSassy from '../assets/aSassy.png'
import ySassy from '../assets/ySassy.png'
import mobileHero from '../assets/mobilehero.jpg'
import shredding from '../assets/shredding.png'

const Hero = () => {
  return (
    <div className='flex h-screen justify-center text-center'>
      <div className='flex items-start justify-center w-full h-screen sm:hidden'>
        <Image
          src={mobileHero}
          alt='Mobile Hero'
          height={800}
          width={500}
        >
        </Image>
      </div>
      <div className='hidden sm:inline-flex flex-col items-center justify-center'>

        {/* Hero Logo */}
        <div className='hidden sm:inline-flex flex-row lg:w-[1000px] lg:h-[300px] mb-12'>
          <div id='shredding' className='static'>
            <Image
              src={shredding}
              alt='Shredding'
            >
            </Image>
          </div>
          {/* S1 Div */}
          <div className='relative'>
            <div className='z-0'>
              <Image
                src={s1Sassy}
                alt='S1 Sassy'
              >
              </Image>
            </div>
          </div>
          {/* A Div */}
          <div className='relative'>
            <div className='z-0'>
              <Image
                src={aSassy}
                alt='A Sassy'
              >
              </Image>
            </div>
          </div>
          {/* S2 Div */}
          <div className='relative'>
            <div className='z-0'>
              <Image
                src={s2Sassy}
                alt='S2 Sassy'
              >
              </Image>
            </div>
          </div>
          {/* S3 Div */}
          <div className='relative'>
            <div className='z-0'>
              <Image
                src={s3Sassy}
                alt='S3 Sassy'
              >
              </Image>
            </div>
          </div>
          {/* Y Div */}
          <div className='relative'>
            <div className='z-0'>
              <Image
                src={ySassy}
                alt='Y Sassy'
              >
              </Image>
            </div>
          </div>
        </div>
        {/* Laying Sassy */}
        <div className='hidden sm:inline-flex mt-12'>
          <Image
            src={animatedSassy}
            alt='Animated Sassy'
            height={100}
            width={200}
          >
          </Image>
        </div>
      </div>
    </div>
  )
}

export default Hero
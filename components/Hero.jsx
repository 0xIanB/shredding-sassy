import React from 'react'
import Image from 'next/image'
import animatedSassy from '../assets/animatedsassy.gif'
import s1Sassy from '../assets/s1Sassy.png'
import s2Sassy from '../assets/s2Sassy.png'
import s3Sassy from '../assets/s3Sassy.png'
import aSassy from '../assets/aSassy.png'
import ySassy from '../assets/ySassy.png'
import sPurple from '../assets/sPurple.png'
import aPurple from '../assets/aPurple.png'
import yPurple from '../assets/yPurple.png'
import mobileHero from '../assets/mobilehero.jpg'
import mobileSassy from '../assets/mobileSassy.png'
import shredding from '../assets/shredding.png'

const Hero = () => {
  return (
    <div className='flex h-screen justify-center'>
      <div className='flex flex-col w-full h-screen sm:hidden'>
        <div className='flex flex-col'>
          <Image
            src={mobileHero}
            alt='Mobile Hero'
            height={690}
            width={390}
          >
          </Image>
        </div>
        {/* Mobile Button */}
        <div className='flex flex-row bg-white pt-3 justify-center -mt-36 z-10 mx-6'>
          {/* Sassy */}
          <div className='flex items-start -mt-[90px] -ml-[65px]'>
            <Image
              src={mobileSassy}
              alt='Mobile Hero'
              height={150}
              width={150}
            >
            </Image>
          </div>
          {/* Info */}
          <div className='flex flex-col items-start -ml-6 mt-1'>
            <p className='text-pri text-sm font-mont font-medium -mb-1'>The World of //</p>
            <h1 className='text-pri text-sm font-bold font-mont'>META MOUNTAIN</h1>
          </div>
          {/* Discover Button */}
          <div className='flex flex-row'>
            <a href="#welcome">
              <button className='py-[9px] px-3 ml-4 mt-1 mr-2 bg-ter text-white font-bold text-sm font-mont hover:cursor-pointer flex flex-row'>
                Discover 
                <div className='animate-bounce ml-1'>
                ▼
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className='hidden sm:inline-flex flex-col items-center justify-center'>
        {/* Hero Logo */}
        <div className='hidden sm:inline-flex lg:hidden flex-row lg:w-[1000px] lg:h-[300px] mb-12'>
          <div className='static'>
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
      {/* Hero Image Hover Effect */}
      <div className='hidden lg:inline-flex flex-row mt-10 lg:visible'>
        {/* Shredding Div */}
        <div>
          <div>
            <Image
              src={shredding}
              alt='S1 Sassy'
            >
            </Image>
          </div>
        </div>
        {/* S1 Div */}
        <div className='flex'>
          <div className='absolute z-0 hover:z-20'>
            <Image
              src={s1Sassy}
              alt='S1 Sassy'
            >
            </Image>
          </div>
          <div className='z-10 hover:z-[-100] opacity-80 invisible lg:visible'>
          <Image
              src={sPurple}
              alt='S Purple'
            >
            </Image>
          </div>
        </div>
        {/* A Div */}
        <div className='flex'>
          <div className='absolute z-0 hover:z-20'>
            <Image
              src={aSassy}
              alt='A Sassy'
            >
            </Image>
          </div>
          <div className='z-10 hover:z-[-100] opacity-80 invisible lg:visible'>
          <Image
              src={aPurple}
              alt='A Purple'
            >
            </Image>
          </div>
        </div>
        {/* S2 Div */}
        <div className='flex'>
          <div className='absolute z-0 hover:z-20 ml-5'>
            <Image
              src={s2Sassy}
              alt='S2 Sassy'
            >
            </Image>
          </div>
          <div className='z-10 hover:z-[-100] opacity-80 invisible lg:visible ml-5'>
          <Image
              src={sPurple}
              alt='S Purple'
            >
            </Image>
          </div>
        </div>
        {/* S3 Div */}
        <div className='flex ml-3'>
          <div className='absolute z-0 hover:z-20'>
            <Image
              src={s3Sassy}
              alt='S3 Sassy'
            >
            </Image>
          </div>
          <div className='z-10 hover:z-[-100] opacity-80 invisible lg:visible'>
          <Image
              src={sPurple}
              alt='S Purple'
            >
            </Image>
          </div>
        </div>
        {/* Y Div */}
        <div className='flex ml-1'>
          <div className='absolute z-0 hover:z-20'>
            <Image
              src={ySassy}
              alt='Y Sassy'
            >
            </Image>
          </div>
          <div className='z-10 hover:z-[-100] opacity-80 invisible lg:visible'>
          <Image
              src={yPurple}
              alt='Y Purple'
            >
            </Image>
          </div>
        </div>
      </div>
        {/* Laying Sassy */}
        <div className='hidden sm:inline-flex mt-12 mb-20'>
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
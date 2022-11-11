import React from 'react'
import Image from 'next/image'
import hero from '../assets/hero.png'
import mobileHero from '../assets/mobilehero.jpg'
import mobileSassy from '../assets/mobileSassy.png'
import { ImArrowDown } from 'react-icons/im'

const Hero = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col w-full sm:hidden'>
        <div className='flex flex-col'>
          <Image
            src={mobileHero}
            alt='Mobile Hero'
          >
          </Image>
        </div>
        {/* Mobile Button */}
        <div className='flex flex-row bg-white pt-3 justify-center -mt-28 z-10 mx-6'>
          {/* Sassy */}
          <div className='flex items-start -mt-[90px] -ml-[58px]'>
            <Image
              src={mobileSassy}
              alt='Mobile Hero'
              height={150}
              width={150}
            >
            </Image>
          </div>
          {/* Info */}
          <div className='flex flex-col items-start -ml-6 mt-2'>
            <p className='text-pri text-xs font-mont font-medium '>{"The World of //"}</p>
            <h1 className='text-pri text-xs font-bold font-mont'>META MOUNTAIN</h1>
          </div>
          {/* Discover Button */}
          <div className='flex flex-row justify-center'>
            <a href="#welcome">
              <button className='py-[9px] px-3 ml-4 mt-1 mr-1 bg-ter text-white font-bold text-xs font-mont hover:cursor-pointer flex flex-row justify-center items-center align-middle'>
                Discover 
                <div className='animate-bounce ml-3'>
                  <ImArrowDown />
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
        {/* Hero Logo */}
        <div className='hidden sm:flex '>
          <div>
            <Image
              src={hero}
              alt='Shredding'
              width={1200}
              height={700}
      
            >
            </Image>
          </div>
      </div>
    </div>
  )
}

export default Hero
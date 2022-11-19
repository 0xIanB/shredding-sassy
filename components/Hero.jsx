import React from 'react'
import Image from 'next/image'
import hero from '../assets/hero.png'
import mobileHero from '../assets/mobilehero.jpg'
import mobileSassy from '../assets/mobileSassy.png'
import { ImArrowDown } from 'react-icons/im'

const Hero = () => {
  return (
    <div class='flex justify-center'>
      {/* Mobile Hero */}
      <div class='flex flex-col w-full sm:hidden'>
        <div class='flex flex-col'>
          <Image
            src={mobileHero}
            alt='Mobile Hero'
          >
          </Image>
        </div>
        <div class='flex flex-row bg-white pt-3 justify-center -mt-28 z-10 mx-6'>
          {/* Sassy */}
          <div class='flex items-start -mt-[90px] -ml-[58px]'>
            <Image
              src={mobileSassy}
              alt='Mobile Hero'
              height={150}
              width={150}
            >
            </Image>
          </div>
          {/* Info */}
          <div class='flex flex-col items-start -ml-6 mt-2'>
            <p class='text-pri text-xs font-mont font-medium '>{"The World of //"}</p>
            <h1 class='text-pri text-xs font-bold font-mont'>META MOUNTAIN</h1>
          </div>
          {/* Discover Button */}
          <div class='flex flex-row justify-center'>
            <a href="#welcome">
              <button class='py-[9px] px-3 ml-4 mt-1 mr-1 bg-ter text-white font-bold text-xs font-mont hover:cursor-pointer flex flex-row justify-center items-center align-middle'>
                Discover 
                <div class='animate-bounce ml-3'>
                  <ImArrowDown />
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>

        {/* Hero Desktop */}
        <div class='hidden sm:flex 2xl:hidden lg:-mt-8'>
          <div>
            <Image
              src={hero}
              alt='Shredding'
              width={1250}
              height={700}
            >
            </Image>
          </div>
      </div>
        {/* Hero Widescreen */}
        <div class='hidden 2xl:flex lg:-mt-8'>
          <div>
            <Image
              src={hero}
              alt='Shredding'
              width={2500}
              height={1400}
            >
            </Image>
          </div>
      </div>
    </div>
  )
}

export default Hero
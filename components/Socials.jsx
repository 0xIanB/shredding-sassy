import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import discordSassy from '../assets/discordsassy.png'
import twitterSassy from '../assets/twittersassy.png'
import shopSassy from '../assets/shopsassy.png'
import manifestoSassy from '../assets/manifestosassy.png'
import trailSassy from '../assets/trailsassy.png'

const styles = {
  container: 'flex flex-col w-auto mx-auto justify-center items-center space-y-4 px-8 lg:space-y-8 lg:py-10 2xl:py-20 z-0',
  topSet: 'hidden md:flex flex-col lg:flex-row font-body items-center font-bold text-pri text-2xl -mb-4 lg:-mb-0 ',
  topSetMobile:'flex flex-col md:hidden font-body items-center font-bold text-pri text-md',
  bottomSet: 'hidden md:flex md:flex-col lg:flex-row items-center font-body font-bold text-pri text-2xl',
  bottomSetMobile: 'flex flex-row md:hidden items-center font-body font-bold text-pri text-md justify-center',
  longBox: 'flex flex-row cursor-pointer items-center justify-between border-[3px] 2xl:border-[6px] border-pri w-[450px] h-[130px] 2xl:w-[900px] 2xl:h-[260px] p-4 hover:bg-pri hover:text-white mx-2 mb-4 lg:mb-0',
  longBoxMobile: 'flex flex-row cursor-pointer items-center justify-between border-[3px] border-pri py-4 pl-6 lg:p-8 w-[265px] h-[110px] lg:w-[550px] lg:h-[130px] ',
  shortBox: 'flex flex-row items-center justify-between border-[3px] 2xl:border-[6px] border-pri p-4 w-[450px] h-[130px] lg:w-[295px] lg:h-[130px] 2xl:h-[260px] 2xl:w-[595px] cursor-pointer hover:bg-pri hover:text-white mx-2 mb-4 lg:mb-0',
  squareBox:'flex flex-col lg:hidden items-center justify-center border-[3px] border-pri w-[120px] h-[150px] px-3 mx-3',
}

const Socials = () => {
  return (
    <div class={styles.container}>
      {/* Top */}
      <div class={styles.topSet}>
        {/* Twitter */}
        <a 
          target='_blank'
          href='https://twitter.com/ShreddingSassy' 
          rel='noopener noreferrer'
        >
          <div class={styles.longBox}>
            <div class='2xl:text-5xl'>
              Twitter
            </div>
            <div class='flex items-center mt-2 2xl:hidden'>
              <Image
                src={twitterSassy}
                alt='Twitter Sassy'
                height={130}
                width={130}
              >
              </Image>
            </div>
            <div class='hidden 2xl:flex items-center mt-2'>
              <Image
                src={twitterSassy}
                alt='Twitter Sassy'
                height={260}
                width={260}
              >
              </Image>
            </div>
          </div>
        </a>
        {/* Discord */}
        <a 
          target='_blank'
          href='#' 
          rel='noopener noreferrer'
        >
          <div class={styles.longBox}>
            <div class='2xl:text-5xl'>
              Discord
            </div>
            <div class='flex items-center 2xl:hidden'>
              <Image
                  src={discordSassy}
                  alt='Discord Sassy'
                  height={130}
                  width={130}
                >
                </Image>
            </div>
            <div class='hidden 2xl:flex items-center'>
              <Image
                  src={discordSassy}
                  alt='Discord Sassy'
                  height={260}
                  width={260}
                >
                </Image>
            </div>
          </div>
        </a>
      </div>
      {/* Top Mobile */}
      <div class={styles.topSetMobile}>
        {/* Twitter */}
        <a 
          target='_blank'
          href='https://twitter.com/ShreddingSassy' 
          rel='noopener noreferrer'
        >
          <div class={styles.longBoxMobile}>
            <div class='2xl:text-5xl'>
              Twitter
            </div>
            <div class='flex items-center mt-2'>
              <Image
                src={twitterSassy}
                alt='Twitter Sassy'
                height={110}
                width={110}
              >
              </Image>
            </div>
          </div>
        </a>
      </div>
      {/* Bottom */}
      <div class={styles.bottomSet}>
        {/* Shop */}
        <Link 
          href='/shop' 
          rel='noopener noreferrer'
        >
          <div class={styles.shortBox}>
            <div class='2xl:text-5xl'>
              Shop
            </div>
            <div class='flex items-center mt-4 2xl:hidden'>
              <Image
                src={shopSassy}
                alt='Shop Sassy'
                height={130}
                width={130}
              >
              </Image>
            </div>
            <div class='hidden 2xl:flex items-center mt-4'>
              <Image
                src={shopSassy}
                alt='Shop Sassy'
                height={260}
                width={260}
              >
              </Image>
            </div>
          </div>
        </Link>
        {/* Manifesto */}
        <a 
          href='https://medium.com/@shreddingsassy' 
          rel='noopener noreferrer'
          target='_blank'
        >
          <div class={styles.shortBox}>
            <div class='2xl:text-5xl'>
              Medium
            </div>
            <div class='flex items-center mt-4 2xl:hidden'>
            <Image
                src={manifestoSassy}
                alt='Manifesto Sassy'
                height={130}
                width={130}
              >
              </Image>
            </div>
            <div class='hidden 2xl:flex items-center mt-4'>
            <Image
                src={manifestoSassy}
                alt='Manifesto Sassy'
                height={260}
                width={260}
              >
              </Image>
            </div>
          </div>
        </a>
        {/* Trail Map */}
        <Link 
          href='/trailmap' 
          rel='noopener noreferrer'
        >
          <div class={styles.shortBox}>
            <div class='2xl:text-5xl'>
              Trail Map
            </div>
            <div class='flex items-center mt-4 2xl:hidden'>
              <Image
                src={trailSassy}
                alt='Twitter Sassy'
                height={130}
                width={130}
              >
              </Image>
            </div>
            <div class='hidden 2xl:flex items-center mt-4'>
              <Image
                src={trailSassy}
                alt='Twitter Sassy'
                height={260}
                width={260}
              >
              </Image>
            </div>
          </div>
        </Link>
      </div>
      {/* Bottom Mobile */}
      <div class={styles.bottomSetMobile}>
         {/* Discord */}
          <a 
          target='_blank'
          href='#' 
          rel='noopener noreferrer'
          >
          <div class={styles.squareBox}>
            <div class=''>
              Discord
            </div>
            <div class='flex items-center -mt-2'>
              <Image
                  src={discordSassy}
                  alt='Discord Sassy'
                  height={115}
                  width={115}
                >
                </Image>
            </div>
          </div>
          </a>
        {/* Shop */}
        <Link 
          href='/shop' 
          rel='noopener noreferrer'
        >
          <div class={styles.squareBox}>
            <div class='mt-1'>
              Shop
            </div>
            <div class='flex items-center'>
              <Image
                src={shopSassy}
                alt='Shop Sassy'
                height={110}
                width={110}
              >
              </Image>
            </div>
          </div>
        </Link>
        </div>
        {/* Manifesto */}
        <div class={styles.bottomSetMobile}>
        <a 
          href='https://medium.com/@shreddingsassy' 
          rel='noopener noreferrer'
          target='_blank'
        >
          <div class={styles.squareBox}>
          <div class='mt-1'>
              Medium
            </div>
            <div class='flex items-center'>
            <Image
                src={manifestoSassy}
                alt='Manifesto Sassy'
                height={110}
                width={110}
              >
              </Image>
            </div>
          </div>
        </a>
        {/* Trail Map */}
        <Link 
          href='/trailmap' 
          rel='noopener noreferrer'
        >
          <div class={styles.squareBox}>
            <div class='mt-1'>
              Trail Map
            </div>
            <div class='flex items-center'>
              <Image
                src={trailSassy}
                alt='Twitter Sassy'
                height={110}
                width={110}
              >
              </Image>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Socials
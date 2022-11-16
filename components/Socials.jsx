import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import discordSassy from '../assets/discordsassy.png'
import twitterSassy from '../assets/twittersassy.png'
import shopSassy from '../assets/shopsassy.png'
import manifestoSassy from '../assets/manifestosassy.png'
import trailSassy from '../assets/trailsassy.png'

const styles = {
  container: 'flex flex-col w-full mx-auto justify-center items-center space-y-4 px-8 lg:space-y-8 lg:py-20 z-0',
  topSet: 'hidden md:flex flex-col lg:flex-row font-body items-center font-bold text-pri text-2xl -mb-4 lg:-mb-0 ',
  topSetMobile:'flex flex-col md:hidden font-body items-center font-bold text-pri text-md',
  bottomSet: 'hidden md:flex md:flex-col lg:flex-row items-center font-body font-bold text-pri text-2xl',
  bottomSetMobile: 'flex flex-row md:hidden items-center font-body font-bold text-pri text-md justify-center',
  longBox: 'flex flex-row cursor-pointer items-center justify-between border-[3px] border-pri w-[450px] h-[130px] p-4 hover:bg-pri hover:text-white mx-2 mb-4 lg:mb-0',
  longBoxMobile: 'flex flex-row cursor-pointer items-center justify-between border-[3px] border-pri py-4 pl-6 lg:p-8 w-[265px] h-[110px] lg:w-[550px] lg:h-[130px] ',
  shortBox: 'flex flex-row items-center justify-between border-[3px] border-pri p-4 w-[450px] h-[130px] lg:w-[295px] lg:h-[130px] cursor-pointer hover:bg-pri hover:text-white mx-2 mb-4 lg:mb-0',
  squareBox:'flex flex-col lg:hidden items-center justify-center border-[3px] border-pri w-[120px] h-[150px] px-3 mx-3',
  textcontainer: 'flex flex-col text-center justify-center pt-16 lg:pt-24 pb-16',
  textbox: 'font-mont text-lg md:text-3xl lg:text-5xl text-[#230A43]',
  textline: 'py-1 md:py-3',
  spantext: 'underline font-medium'
}

const Socials = () => {
  return (
    <div className={styles.container}>
      {/* Top */}
      <div className={styles.topSet}>
        {/* Twitter */}
        <a 
          target='_blank'
          href='https://twitter.com/ShreddingSassy' 
          rel='noopener noreferrer'
        >
          <div className={styles.longBox}>
            <div>
              Twitter
            </div>
            <div className='flex items-center mt-2'>
              <Image
                src={twitterSassy}
                alt='Twitter Sassy'
                height={130}
                width={130}
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
          <div className={styles.longBox}>
            <div>
              Discord
            </div>
            <div className='flex items-center'>
              <Image
                  src={discordSassy}
                  alt='Discord Sassy'
                  height={130}
                  width={130}
                >
                </Image>
            </div>
          </div>
        </a>
      </div>
      {/* Top Mobile */}
      <div className={styles.topSetMobile}>
        {/* Twitter */}
        <a 
          target='_blank'
          href='https://twitter.com/ShreddingSassy' 
          rel='noopener noreferrer'
        >
          <div className={styles.longBoxMobile}>
            <div>
              Twitter
            </div>
            <div className='flex items-center mt-2'>
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
      <div className={styles.bottomSet}>
        {/* Shop */}
        <Link 
          href='/shop' 
          rel='noopener noreferrer'
        >
          <div className={styles.shortBox}>
            <div>
              Shop
            </div>
            <div className='flex items-center mt-4'>
              <Image
                src={shopSassy}
                alt='Shop Sassy'
                height={130}
                width={130}
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
          <div className={styles.shortBox}>
            <div>
              Medium
            </div>
            <div className='flex items-center mt-4'>
            <Image
                src={manifestoSassy}
                alt='Manifesto Sassy'
                height={130}
                width={130}
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
          <div className={styles.shortBox}>
            <div>
              Trail Map
            </div>
            <div className='flex items-center mt-4'>
              <Image
                src={trailSassy}
                alt='Twitter Sassy'
                height={130}
                width={130}
              >
              </Image>
            </div>
          </div>
        </Link>
      </div>
      {/* Bottom Mobile */}
      <div className={styles.bottomSetMobile}>
         {/* Discord */}
          <a 
          target='_blank'
          href='#' 
          rel='noopener noreferrer'
          >
          <div className={styles.squareBox}>
            <div className=''>
              Discord
            </div>
            <div className='flex items-center -mt-2'>
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
          <div className={styles.squareBox}>
            <div className='mt-1'>
              Shop
            </div>
            <div className='flex items-center'>
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
        <div className={styles.bottomSetMobile}>
        <a 
          href='https://medium.com/@shreddingsassy' 
          rel='noopener noreferrer'
          target='_blank'
        >
          <div className={styles.squareBox}>
          <div className='mt-1'>
              Medium
            </div>
            <div className='flex items-center'>
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
          <div className={styles.squareBox}>
            <div className='mt-1'>
              Trail Map
            </div>
            <div className='flex items-center'>
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
      <div className={styles.textcontainer}>
        <div className={styles.textbox}>
          <p className={styles.textline}><span className={styles.spantext}>Web3</span> has the ability to unify a </p>
          <p className={styles.textline}><span className={styles.spantext}>global community</span> 🌍 driven by a </p>
          <p className={styles.textline}>passion ❤️ for <span className={styles.spantext}> extreme sports</span> 💀 </p>
          <p className={styles.textline}>and <span className={styles.spantext}> good times</span>. 🤙</p>
        </div>
      </div>
    </div>
  )
}

export default Socials
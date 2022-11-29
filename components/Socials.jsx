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
  longBox: 'flex flex-row cursor-pointer items-center justify-between border-[3px] 2xl:border-[6px] border-pri p-4 hover:bg-pri hover:text-white mx-2 mb-4 lg:mb-0',
  longBoxModified: 'flex lg:hidden flex-row cursor-pointer items-center justify-between border-[3px] 2xl:border-[6px] border-pri p-4 hover:bg-pri hover:text-white mx-2 mb-4 lg:mb-0',
  longBoxMobile: 'flex flex-row cursor-pointer items-center justify-between border-[3px] border-pri py-4 pl-6 lg:p-8 w-[265px] h-[110px] lg:w-[550px] lg:h-[130px] ',
  shortBox: 'hidden lg:flex flex-row items-center justify-between border-[3px] 2xl:border-[6px] border-pri p-4 cursor-pointer hover:bg-pri hover:text-white mx-2 mb-4 lg:mb-0',
  squareBox:'flex flex-col lg:hidden items-center justify-center border-[3px] border-pri w-[120px] h-[150px] px-3 mx-3',
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
          <div className={`longboxStyle ${styles.longBox}`}>
            <h2 className='socialLinkStyle'>Twitter</h2>
            <div className='sassyHeadStyle flex items-center mt-2'>
              <Image
                src={twitterSassy}
                alt='Twitter Sassy'
                objectFit='fill'
              >
              </Image>
            </div>
          </div>
        </a>
        {/* Shred Paper */}
        <a 
          target='_blank'
          href='https://docs.shreddingsassy.com/shred-paper/' 
          rel='noopener noreferrer'
        >
          <div className={`longboxStyle ${styles.longBox}`}>
          <h2 className='socialLinkStyle'>Shred Paper</h2>
            <div className='sassyHeadStyle flex items-center mt-4'>
              <Image
                  src={manifestoSassy}
                  alt='Shred Sassy'
                  objectFit='fill'
                >
                </Image>
            </div>
          </div>
        </a>
      </div>
      {/* Bottom */}
      <div className={styles.topSet}>
        {/* Shop */}
        <Link 
          href='/shop' 
          rel='noopener noreferrer'
        >
          <div className={`shortboxStyle ${styles.shortBox}`}>
          <h2 className='socialLinkStyle'>Shop</h2>
            <div className='sassyHeadStyle flex items-center mt-4'>
              <Image
                src={shopSassy}
                alt='Shop Sassy'
                objectFit='fill'
              >
              </Image>
            </div>
          </div>
        </Link>
        <Link 
          href='/shop' 
          rel='noopener noreferrer'
        >
          <div className={`longboxStyle ${styles.longBoxModified}`}>
          <h2 className='socialLinkStyle'>Shop</h2>
            <div className='sassyHeadStyle flex items-center mt-4'>
              <Image
                src={shopSassy}
                alt='Shop Sassy'
                objectFit='fill'
              >
              </Image>
            </div>
          </div>
        </Link>
        {/* Discord */}
        <a 
          href='https://discord.gg/sassy' 
          rel='noopener noreferrer'
          target='_blank'
        >
          <div className={`shortboxStyle ${styles.shortBox}`}>
          <h2 className='socialLinkStyle'>Discord</h2>
            <div className='sassyHeadStyle flex items-center'>
            <Image
                src={discordSassy}
                alt='Discord Sassy'
                objectFit='fill'
              >
              </Image>
            </div>
          </div>
        </a>
        <a 
          href='https://discord.gg/sassy' 
          rel='noopener noreferrer'
          target='_blank'
        >
          <div className={`longboxStyle ${styles.longBoxModified}`}>
          <h2 className='socialLinkStyle'>Discord</h2>
            <div className='sassyHeadStyle flex items-center'>
            <Image
                src={discordSassy}
                alt='Discord Sassy'
                objectFit='fill'
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
          <div className={`shortboxStyle ${styles.shortBox}`}>
          <h2 className='socialLinkStyle'>Trail Map</h2>
            <div className='sassyHeadStyle flex items-center mt-4'>
              <Image
                src={trailSassy}
                alt='Trail Map Sassy'
                objectFit='fill'
              >
              </Image>
            </div>
          </div>
        </Link>
        <Link 
          href='/trailmap' 
          rel='noopener noreferrer'
        >
          <div className={`longboxStyle ${styles.longBoxModified}`}>
          <h2 className='socialLinkStyle'>Trail Map</h2>
            <div className='sassyHeadStyle flex items-center mt-4'>
              <Image
                src={trailSassy}
                alt='Trail Map Sassy'
                objectFit='fill'
              >
              </Image>
            </div>
          </div>
        </Link>
      </div>
        
      {/* Top Mobile */}
      {/* Manifesto */}
      <div className={styles.bottomSetMobile}>
        <a 
          href='https://twitter.com/ShreddingSassy' 
          rel='noopener noreferrer'
          target='_blank'
        >
          <div className={styles.squareBox}>
          <div className='mt-1'>
              Twitter
            </div>
            <div className='flex items-center mt-1'>
            <Image
                src={twitterSassy}
                alt='Twitter Sassy'
                height={115}
                width={115}
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
            <div className='flex items-center mt-1'>
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
      <div className={styles.topSetMobile}>
        {/* Twitter */}
        <a 
          target='_blank'
          href='https://shreddingsassy.gitbook.io/shredpaper/' 
          rel='noopener noreferrer'
        >
          <div className={styles.longBoxMobile}>
            <div className='2xl:text-5xl'>
              Shred Paper
            </div>
            <div className='flex items-center mt-2'>
              <Image
                src={manifestoSassy}
                alt='Manifesto Sassy'
                height={95}
                width={95}
              >
              </Image>
            </div>
          </div>
        </a>
      </div>
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
    </div>
  )
}

export default Socials
import React from 'react'
import Image from 'next/image'
import footerImg from '../assets/logo.png'
import Link from 'next/link';
import twitterImg from '../assets/twitter.png'
import mediumImg from '../assets/medium.png'
import igImg from '../assets/igblue.png'
import discordImg from '../assets/discord.png'

const styles = {
  container: 'flex flex-col space-y-8 lg:flex-row justify-between items-center p-8 border-t-2 border-[#D9D9D9] z-20',
  socialLinks: 'flex items-center cursor-pointer',
  leftside: 'flex flex-col items-center justify-center space-x-4 lg:-ml-4',
}

const Footer = () => {
  return (
    <div className={styles.container}>
      {/* Left Side */}
      <div className={styles.leftside}>
        {/* Offset Carbon Button */}
        <div className='flex items-center justify-center ml-6'>
          <iframe src="https://www.aerial.is/nft/embed?address=0x3e88721fa41d5e102d54b4a04e550222efdd234d">
          </iframe>
        </div>
        {/* Socials Icons */}
        <div className='flex flex-row -mt-8 justify-center items-center space-x-8 pr-4 lg:pr-4 lg:-mt-14'>
          {/* Discord */}
          <div className={styles.socialLinks}>
            <a
              href='https://discord.gg/sassy'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src={discordImg}
                alt='Discord Logo'
                height={23}
                width={29}
              >
              </Image>
            </a>
          </div>
          {/* Twitter */}
          <div className={styles.socialLinks}>
            <a
              href='https://twitter.com/ShreddingSassy'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src={twitterImg}
                alt='Twitter Logo'
                height={23}
                width={28}
              >
              </Image>
            </a>
          </div>
          {/* Medium */}
          <div className={styles.socialLinks}> 
            <a 
              href='https://medium.com/@shreddingsassy'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src={mediumImg}
                alt='Medium Logo'
                height={23}
                width={27}
              >
              </Image>
            </a>
          </div>
          {/* Instagram */}
          <div className={styles.socialLinks}> 
            <a 
              href='https://www.instagram.com/shreddingsassy/' 
              target='_blank'  
              rel='noopener noreferrer'
            >
              <Image
                src={igImg}
                alt='Instagram Logo'
                height={27}
                width={27}
              >
              </Image>
            </a>
          </div>
        </div>
      </div>   
      {/* Middle */}
      <div className='cursor-pointer hidden lg:inline-flex'>
        <Link href='/'>
          <Image
            src={footerImg}
            alt='Shredding Sassy Logo'
            height={86}
            width={350}
          >
          </Image>
        </Link>
      </div>
      <div className='cursor-pointer ml-4 lg:hidden'>
        <Link href='/'>
          <Image
            src={footerImg}
            alt='Shredding Sassy Logo'
            height={65}
            width={250}
          >
          </Image>
        </Link>
      </div>
      {/* Right Side */}
      <div className='flex flex-col items-center lg:items-end text-lg font-mont text-pri'>
        <div className='flex flex-col items-center lg:items-end font-medium'>
          <p>© 2022 Shredding Sassy</p>
          <p>Bold by nature</p>
        </div>
        <div className='flex lg:py-2 font-semibold cursor-pointer'>
          <Link href='/terms'
          >
          <p>Terms & Conditions</p>  
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
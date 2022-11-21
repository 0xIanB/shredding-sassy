import React from 'react'
import Image from 'next/image'
import footerImg from '../assets/logo.png'
import Link from 'next/link';
import { FaTwitter, FaMediumM, FaInstagram, FaDiscord } from 'react-icons/fa'

const styles = {
  container: 'flex flex-col space-y-8 lg:flex-row justify-between items-center p-8 2xl:p-16 z-20',
  socialLinks: 'flex items-center cursor-pointer',
  leftside: 'flex flex-col items-center justify-center space-x-4 lg:-ml-4',
  socialIcons: 'flex items-center text-[#5470C7] hover:text-hov'
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
        {/* Social Icons */}
        <div className='flex flex-row -mt-8 justify-center items-center space-x-8 pr-4 lg:pr-4 lg:-mt-14 2xl:hidden'>
          {/* Discord */}
          <div className={styles.socialIcons}>
            <a
              href='https://discord.gg/sassy'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaDiscord size={25}/>
            </a>
          </div>
          {/* Twitter */}
          <div className={styles.socialIcons}>
            <a
              href='https://twitter.com/ShreddingSassy'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitter size={25}/>
            </a>
          </div>
          {/* Medium */}
          <div className={styles.socialIcons}> 
            <a 
              href='https://medium.com/@shreddingsassy'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaMediumM size={25}/> 
            </a>
          </div>
          {/* Instagram */}
          <div className={styles.socialIcons}> 
            <a 
              href='https://www.instagram.com/shreddingsassy/' 
              target='_blank'  
              rel='noopener noreferrer'
            >
              <FaInstagram size={25} />
            </a>
          </div>
        </div>
        {/* Social Icons Wide*/}
        <div className='hidden 2xl:flex flex-row -mt-8 justify-center items-center space-x-8 pr-4 lg:pr-4 lg:-mt-14'>
          {/* Discord */}
          <div className={styles.socialIcons}>
            <a
              href='https://discord.gg/sassy'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaDiscord size={50}/>
            </a>
          </div>
          {/* Twitter */}
          <div className={styles.socialIcons}>
            <a
              href='https://twitter.com/ShreddingSassy'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitter size={50}/>
            </a>
          </div>
          {/* Medium */}
          <div className={styles.socialIcons}> 
            <a 
              href='https://medium.com/@shreddingsassy'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaMediumM size={50}/> 
            </a>
          </div>
          {/* Instagram */}
          <div className={styles.socialIcons}> 
            <a 
              href='https://www.instagram.com/shreddingsassy/' 
              target='_blank'  
              rel='noopener noreferrer'
            >
              <FaInstagram size={50} />
            </a>
          </div>
        </div>
      </div>   
      {/* Middle */}
      <div className='footerLogoStyle cursor-pointer pt-2'>
        <Link href='/'>
          <Image
            src={footerImg}
            alt='Shredding Sassy Logo'
            objectFit='fill'
          >
          </Image>
        </Link>
      </div>
      {/* Right Side */}
      <div className='flex flex-col items-center lg:items-end text-lg font-mont text-pri'>
        <div className='flex flex-col items-center lg:items-end font-medium'>
          <p class='footerTextStyle'>© 2022 Shredding Sassy</p>
          <p class='footerTextStyle'>Bold by nature</p>
        </div>
        <div className='flex lg:py-2 2xl:py-6 font-semibold cursor-pointer'>
          <Link href='/terms'
          >
          <p class='footerTextStyle'>Terms & Conditions</p>  
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
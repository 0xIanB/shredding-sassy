import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import headerImg from '../assets/logo.png'
import twitterImg from '../assets/twitter.png'
import mediumImg from '../assets/medium.png'
import igImg from '../assets/igblue.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import mobilenav from '../assets/navmobile.png'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='sticky z-50 flex items-start justify-between bg-white shadow-xl'>
          {/* Sassy Logo Box */}
          <div className='hidden lg:inline-flex p-4 pt-5 shrink-0 hover:cursor-pointer'>
        <Link href='/'>    
        <Image
          src={headerImg}
          alt='Shredding Sassy Logo'
          height={50}
          width={200}
        >
        </Image>
        </Link>
      </div>

      {/* Nav Links */}
      <div className='hidden justify-center lg:text-xl font-body items font-bold lg:inline-flex lg:p-7 lg:ml-12 lg:space-x-10 shrink-0'>
        <Link href='/sssc'>
          <button className='linkBtn'>SSSC</button>
        </Link>
        <Link href='/team'>
          <button className='linkBtn'>Team</button>
        </Link>
        <Link href='/trailmap'>
          <button className='linkBtn'>Trail Map</button>
        </Link>
        <Link href='/lore'>
          <button className='linkBtn'>Lore</button>
        </Link>
        <Link href='/shop'>
          <button className='linkBtn'>Shop</button>
        </Link>
      </div>

      {/* Socials Links */}
      <div className='flex-row hidden lg:inline-flex justify-between items-center p-4 shrink-0'>
        {/* Social Icons */}
        <div className='flex flex-row items-center px-4 cursor-pointer space-x-4'>
          {/* Twitter */}
          <div className='flex items-center'>
            <Link
              href='https://twitter.com/ShreddingSassy'
              target='_blank'
            >
              <Image
                src={twitterImg}
                alt='Twitter Logo'
                height={18}
                width={20}
              >
              </Image>
            </Link>
          </div>
          {/* Medium */}
          <div className='flex items-center'> 
            <Link 
              href='https://medium.com/@shreddingsassy'
              target='_blank'
            >
              <Image
                src={mediumImg}
                alt='Medium Logo'
                height={18}
                width={20}
              >
              </Image>
            </Link>
          </div>
          {/* Instagram */}
          <div className='flex items-center'> 
            <Link 
              href='https://www.instagram.com/shreddingsassy/' 
              target='_blank'  
            >
              <Image
                src={igImg}
                alt='Instagram Logo'
                height={22}
                width={22}
              >
              </Image>
            </Link>
          </div>
        </div>
        {/* Discord Link Button */}
        <div className='flex'>
          <button className='bg-[#5470C7] w-[250px] h-[50px] rounded-sm text-white font-semibold py-2 px-4'>Join Our Discord</button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className='lg:hidden flex items-center w-full justify-between h-[85px] pl-2 pr-8'>
        <div className='flex items-center justify-center mt-8'>
          <Link href='/'>
            <Image
              src={mobilenav}
              alt='Mobile Nav'
              height={75}
              width={90}
            >
            </Image>
          </Link>

        </div>
        <div className='flex'>
          {toggle && (
            <div>
              <div className='flex flex-col -mr-[32px] -mb-[190px] text-xl font-body font-bold space-y-2 bg-white w-[250px] p-8 rounded-lg shadow-xl'>
                <div className='flex items-end justify-end pb-2 '>
                  <AiOutlineClose 
                    size={25} 
                    onClick={() => setToggle(false)} />
                </div>
                <div className='flex flex-col space-y-2'>
                  <Link href='/sssc'>
                    <button className='linkBtn'>SSSC</button>
                  </Link>
                  <Link href='/team'>
                    <button className='linkBtn'>Team</button>
                  </Link>
                  <Link href='/trailmap'>
                    <button className='linkBtn'>Trail Map</button>
                  </Link>
                  <Link href='/lore'>
                    <button className='linkBtn'>Lore</button>
                  </Link>
                  <Link href='/shop'>
                    <button className='linkBtn'>Shop</button>
                  </Link>
                </div>
                
              </div>
            </div>
          ) || (
            <div className='transition ease-in-out'>
              <AiOutlineMenu 
                size={25} 
                onClick={() => setToggle(true)}/>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
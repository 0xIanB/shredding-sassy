import React, { useState, useEffect } from 'react'
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

  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return (
    <div className={`sticky ${ scrollDirection === "down" ? "-top-24" : "top-0"} h-24 z-50 flex items-start justify-between bg-white shadow-xl transition-all duration-500`}>
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
      <div className='hidden justify-center lg:text-xl font-body items font-bold lg:inline-flex lg:p-7 ml-36 lg:space-x-12 shrink-0'>
        <Link href='/sssc'>
          <button className='text-pri'>SSSC</button>
        </Link>
        <Link href='/team'>
          <button className='text-pri'>Team</button>
        </Link>
        <Link href='/trailmap'>
          <button className='text-pri'>Trail Map</button>
        </Link>
        <Link href='/shop'>
          <button className='text-pri'>Shop</button>
        </Link>
      </div>

      {/* Socials Links */}
      <div className='flex-row hidden lg:inline-flex justify-between items-center p-4 shrink-0'>
        {/* Social Icons */}
        <div className='flex flex-row items-center px-4 cursor-pointer space-x-4'>
          {/* Twitter */}
          <div className='flex items-center'>
            <a
              href='https://twitter.com/ShreddingSassy'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src={twitterImg}
                alt='Twitter Logo'
                height={18}
                width={20}
              >
              </Image>
            </a>
          </div>
          {/* Medium */}
          <div className='flex items-center'> 
            <a 
              href='https://medium.com/@shreddingsassy'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src={mediumImg}
                alt='Medium Logo'
                height={18}
                width={20}
              >
              </Image>
            </a>
          </div>
          {/* Instagram */}
          <div className='flex items-center'> 
            <a 
              href='https://www.instagram.com/shreddingsassy/' 
              target='_blank'  
              rel='noopener noreferrer'
            >
              <Image
                src={igImg}
                alt='Instagram Logo'
                height={22}
                width={22}
              >
              </Image>
            </a>
          </div>
        </div>
        {/* Discord Link Button */}
        <div className='flex'>
          <a
            href="https://discord.gg/sassy"
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='bg-[#5470C7] w-[250px] h-[50px] rounded-sm text-white font-semibold py-2 px-4'>Join Our Discord</button>  
          </a>

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
                    <button className='text-pri'>SSSC</button>
                  </Link>
                  <Link href='/team'>
                    <button className='text-pri'>Team</button>
                  </Link>
                  <Link href='/trailmap'>
                    <button className='text-pri'>Trail Map</button>
                  </Link>
                  <Link href='/shop'>
                    <button className='text-pri'>Shop</button>
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
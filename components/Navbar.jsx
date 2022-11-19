import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import headerImg from '../assets/logo.png'
import logoWhite from '../assets/logoWhite.png'
import mobileSassy from '../assets/mobileSassy.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaTwitter, FaMediumM, FaInstagram } from 'react-icons/fa'

const styles = {
  logoContainer: 'flex p-4 shrink-0 hover:cursor-pointer 2xl:hidden',
  logoContainerWide: 'flex p-4 shrink-0 hover:cursor-pointer hidden 2xl:flex',
  navLinkContainer: 'hidden lg:flex text-xl 2xl:text-5xl font-body font-bold shrink-0 ml-14',
  linkAnimate: 'text-pri mr-6 2xl:mr-12 hover-underline-animation',
  socialIcons: 'flex items-center text-[#5470C7] hover:text-hover 2xl:p-2'
}

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);

  const handleNav = () => {
    setNav(!nav);
  };

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
    <div class={`sticky ${ scrollDirection === "down" ? "-top-24 2xl:-top-40" : "top-0"} flex flex-row justify-between h-[75px] 2xl:h-[150px] w-full z-50 items-center bg-white transition-all duration-500`}>
      <div class='flex justify-between w-full h-full items-center'>
      {/* Sassy Logo */}
      <div class={styles.logoContainer}>
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
      {/* Sassy Logo Wide */}
      <div class={styles.logoContainerWide}>
        <Link href='/'>    
          <Image
            src={headerImg}
            alt='Shredding Sassy Logo'
            height={100}
            width={400}
          >
          </Image>
        </Link>
      </div>
      {/* Nav Links */}
      <div class={styles.navLinkContainer}>
        <Link href='/sssc'>
          <button class={styles.linkAnimate}>SSSC</button>
        </Link>
        <Link href='/team'>
          <button class={styles.linkAnimate}>Team</button>
        </Link>
        <Link href='/trailmap'>
          <button class={styles.linkAnimate}>Trail Map</button>
        </Link>
        <Link href='/shop'>
          <button class={styles.linkAnimate}>Shop</button>
        </Link>
        <Link href='/faw'>
          <button class={styles.linkAnimate}>FAQ</button>
        </Link>
      </div>
      {/* Socials Links */}
      <div class='hidden lg:flex 2xl:hidden items-center p-4'>
        {/* Social Icons */}
        <div class='flex items-center px-4 cursor-pointer space-x-4'>
          {/* Twitter */}
          <div class={styles.socialIcons}>
            <a
              href='https://twitter.com/ShreddingSassy'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitter size={25}/>
            </a>
          </div>
          {/* Medium */}
          <div class={styles.socialIcons}> 
            <a 
              href='https://medium.com/@shreddingsassy'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaMediumM size={25}/> 
            </a>
          </div>
          {/* Instagram */}
          <div class={styles.socialIcons}> 
            <a 
              href='https://www.instagram.com/shreddingsassy/' 
              target='_blank'  
              rel='noopener noreferrer'
            >
              <FaInstagram size={25} />
            </a>
          </div>
        </div>
        {/* Discord Link Button */}
        <div class='flex shrink-0'>
          <a
            href="https://discord.gg/sassy"
            target='_blank'
            rel='noopener noreferrer'
          >
            <button class='bg-[#5470C7] w-full h-[50px] 2xl:h-[100px] rounded-sm text-white font-semibold py-2 px-4 hover:bg-hov'>Join Our Discord</button>  
          </a>
        </div>
      </div>
      {/* Socials Links Wide */}
      <div class='hidden 2xl:flex items-center p-4'>
        {/* Social Icons */}
        <div class='flex items-center px-4 cursor-pointer space-x-4'>
          {/* Twitter */}
          <div class={styles.socialIcons}>
            <a
              href='https://twitter.com/ShreddingSassy'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitter size={50}/>
            </a>
          </div>
          {/* Medium */}
          <div class={styles.socialIcons}> 
            <a 
              href='https://medium.com/@shreddingsassy'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaMediumM size={50}/> 
            </a>
          </div>
          {/* Instagram */}
          <div class={styles.socialIcons}> 
            <a 
              href='https://www.instagram.com/shreddingsassy/' 
              target='_blank'  
              rel='noopener noreferrer'
            >
              <FaInstagram size={50} />
            </a>
          </div>
        </div>
        {/* Discord Link Button */}
        <div class='flex shrink-0'>
          <a
            href="https://discord.gg/sassy"
            target='_blank'
            rel='noopener noreferrer'
          >
            <button class='bg-[#5470C7] w-full h-[50px] 2xl:h-[100px] text-3xl rounded-sm text-white font-semibold py-2 px-10 hover:bg-hov'>Join Our Discord</button>  
          </a>
        </div>
      </div>
      </div>
      
      {/* Hamburger Icon */}
      <div
        onClick={handleNav}
        class='lg:hidden text-pri p-4 '
      >
        <AiOutlineMenu size={25} />
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        class={
          nav ? 'lg:hidden fixed left-0 top-0 w-full h-screen' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          class={
            nav
              ? 'fixed right-0 top-0 w-full h-screen bg-pri p-4  ease-in duration-300'
              : 'fixed right-[-125%] top-0 p-4 ease-in duration-300'
          }
        >
          <div>
            <div class='flex w-full items-center justify-between pb-4'>
              <Link href='/'>
                <a>
                  <Image
                    src={logoWhite}
                    alt='Shredding Sassy Logo'
                    height={50}
                    width={200}
                  />
                </a>
              </Link>
              <div
                onClick={handleNav}
                class='text-white -mt-2 cursor-pointer'
              >
                <AiOutlineClose size={25}/>
              </div>
            </div>
          </div>
          <div class='flex flex-row justify-between py-6'>
          {/* Mobile Links */}
          <div class='py-4 flex flex-col'>
            <ul class='uppercase space-y-6'>
              <Link href='/'>
                <li onClick={() => setNav(false)} class='p-1 pl-3 text-sm bg-white w-[70%] rounded-md text-pri tracking-widest font-bold hover:bg-gray-300 cursor-pointer'>
                  Home
                </li>
              </Link>
              <Link href='/sssc'>
                <li onClick={() => setNav(false)} class='p-1 pl-3 text-sm bg-white w-[60%] rounded-md text-pri tracking-widest font-bold hover:bg-gray-300 cursor-pointer'>
                  SSSC
                </li>
              </Link>
              <Link href='/team'>
                <li onClick={() => setNav(false)} class='p-1 pl-3 text-sm bg-white w-[68%] rounded-md text-pri tracking-widest font-bold hover:bg-gray-300 cursor-pointer'>
                  Team
                </li>
              </Link>
              <Link href='/trailmap'>
                <li onClick={() => setNav(false)} class='p-1 pl-3 text-sm bg-white w-[110%] rounded-md text-pri tracking-widest font-bold hover:bg-gray-300 cursor-pointer'>
                  Trail Map
                </li>
              </Link>
              <Link href='/shop'>
                <li onClick={() => setNav(false)} class='p-1 pl-3 text-sm bg-white w-[68%] rounded-md text-pri tracking-widest font-bold hover:bg-gray-300 cursor-pointer'>
                  Shop
                </li>
              </Link>
              <Link
                href="https://discord.gg/sassy"
                target='_blank'
                rel='noopener noreferrer'
              >
                <li onClick={() => setNav(false)} class='p-1 pl-3 text-sm bg-white w-[95%] rounded-md text-pri tracking-widest font-bold hover:bg-gray-300 cursor-pointer'>
                  Discord
                </li>
              </Link>
            </ul>
          </div>
          {/* Sassy Image */}
          <div class='-mr-24'>
          <Image
            src={mobileSassy}
            alt='Sassy'
            width={350}
            height={350}
          />
          </div>
          </div>
        {/* Social Icons */}
        <div class='flex items-center cursor-pointer space-x-8 p-2'>
          {/* Twitter */}
          <div class={styles.socialIcons}>
            <a
              href='https://twitter.com/ShreddingSassy'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitter size={25}/>
            </a>
          </div>
          {/* Medium */}
          <div class={styles.socialIcons}> 
            <a 
              href='https://medium.com/@shreddingsassy'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaMediumM size={25}/> 
            </a>
          </div>
          {/* Instagram */}
          <div class={styles.socialIcons}> 
            <a 
              href='https://www.instagram.com/shreddingsassy/' 
              target='_blank'  
              rel='noopener noreferrer'
            >
              <FaInstagram size={25} />
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
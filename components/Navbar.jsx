import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import headerImg from '../assets/logo.png'
import logoWhite from '../assets/logoWhite.png'
import mobileSassy from '../assets/mobileSassy.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaTwitter, FaMediumM, FaInstagram } from 'react-icons/fa'

const styles = {
  logoContainer: 'flex p-4 shrink-0 hover:cursor-pointer',
  navLinkContainer: 'hidden lg:flex text-xl font-body font-bold shrink-0',
  linkAnimate: 'text-pri mr-8 hover-underline-animation',
  socialIcons: 'flex items-center text-[#5470C7] hover:text-hov'
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
    <div className={`sticky ${ scrollDirection === "down" ? "-top-24" : "top-0"} flex flex-row justify-between h-[75px] z-50 items-center bg-white shadow-xl transition-all duration-500`}>
      {/* Sassy Logo Box */}
      <div className={styles.logoContainer}>
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
      <div className={styles.navLinkContainer}>
        <Link href='/sssc'>
          <button className={styles.linkAnimate}>SSSC</button>
        </Link>
        <Link href='/team'>
          <button className={styles.linkAnimate}>Team</button>
        </Link>
        <Link href='/trailmap'>
          <button className={styles.linkAnimate}>Trail Map</button>
        </Link>
        <Link href='/shop'>
          <button className={styles.linkAnimate}>Shop</button>
        </Link>
      </div>
      {/* Socials Links */}
      <div className='hidden lg:flex items-center p-4'>
        {/* Social Icons */}
        <div className='flex items-center px-4 cursor-pointer space-x-4'>
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
        {/* Discord Link Button */}
        <div className='flex shrink-0'>
          <a
            href="https://discord.gg/sassy"
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='bg-[#5470C7] w-full h-[50px] rounded-sm text-white font-semibold py-2 px-4 hover:bg-hov'>Join Our Discord</button>  
          </a>
        </div>
      </div>
      {/* Hamburger Icon */}
      <div
        onClick={handleNav}
        className='lg:hidden text-pri p-4 '
      >
        <AiOutlineMenu size={25} />
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'lg:hidden fixed left-0 top-0 w-full h-screen' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? 'fixed right-0 top-0 w-full h-screen bg-pri p-4  ease-in duration-300'
              : 'fixed right-[-125%] top-0 p-4 ease-in duration-300'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between pb-4'>
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
                className='text-white p-2 cursor-pointer'
              >
                <AiOutlineClose size={25}/>
              </div>
            </div>
            <div className='py-4'>
              <p className='w-[85%] md:w-[90%] py-4 font-semibold text-white pb-4'>
              Join us on Meta Mountain 🏔️, <br/>Interfusing Extreme Sports & Web3 
              </p>
            </div>
          </div>
          <div className='flex flex-row justify-between'>
          {/* Mobile Links */}
          <div className='py-4 flex flex-col'>
            <ul className='uppercase space-y-6'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-1 pl-2 text-sm border-white border-2 w-[65%] rounded-md text-white tracking-widest font-bold'>
                  Home
                </li>
              </Link>
              <Link href='/sssc'>
                <li onClick={() => setNav(false)} className='p-1 pl-3 text-sm bg-white w-[60%] rounded-md text-pri tracking-widest font-bold'>
                  SSSC
                </li>
              </Link>
              <Link href='/team'>
                <li onClick={() => setNav(false)} className='p-1 pl-3 text-sm bg-white w-[68%] rounded-md text-pri tracking-widest font-bold'>
                  Team
                </li>
              </Link>
              <Link href='/trailmap'>
                <li onClick={() => setNav(false)} className='p-1 pl-3 text-sm bg-white w-[110%] rounded-md text-pri tracking-widest font-bold'>
                  Trail Map
                </li>
              </Link>
              <Link href='/shop'>
                <li onClick={() => setNav(false)} className='p-1 pl-3 text-sm bg-white w-[68%] rounded-md text-pri tracking-widest font-bold'>
                  Shop
                </li>
              </Link>
            </ul>
          </div>
          {/* Sassy Image */}
          <div className='-mr-24'>
          <Image
            src={mobileSassy}
            alt='Sassy'
            width={350}
            height={350}
          />
          </div>
          </div>
        {/* Social Icons */}
        <div className='flex items-center cursor-pointer space-x-8 mt-12 p-2'>
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
        </div>
      </div>
    </div>
  )
}

export default Navbar
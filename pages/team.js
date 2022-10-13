import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import shredders from '../assets/shredders.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/iglink.png'
import josh from '../assets/josh.jpg'
import joshsassy from '../assets/joshsassy.png'
import jakesassy from '../assets/jakesassy.png'
import olliesassy from '../assets/olliesassy.png'
import raabsassy from '../assets/raabsassy.png'
import franksassy from '../assets/franksassy.png'
import jaysassy from '../assets/jaysassy.png'
import tylersassy from '../assets/tylersassy.png'
import iansassy from '../assets/iansassy.png'
import natesassy from '../assets/natesassy.png'
import toondsassy from '../assets/toondsassy.png'
import ragensassy from '../assets/ragensassy.png'
import leftsassy from '../assets/leftsassy.png'
import rightsassy from '../assets/rightsassy.png'
import ben from '../assets/ben.png'
import garrett from '../assets/garrett.png'
import james from '../assets/james.png'
import noah from '../assets/noah.png'
import karel from '../assets/karel.png'
import tyler from '../assets/tyler.png'
import jonjoe from '../assets/jonjoe.png'
import zach from '../assets/zach.png'
import keith from '../assets/keith.png'
import absolute from '../assets/absolute.png'
import dynastar from '../assets/dynastar.png'
import faction from '../assets/faction.png'
import panda from '../assets/panda.png'
import shaggys from '../assets/shaggys.png'
import shred from '../assets/shred.png'
import skibro from '../assets/skibro.png'
import snowrock from '../assets/snowrock.png'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const team = () => {
  return (
    <div className='flex flex-col'>
      <Head>
        <title>Shredding Sassy | Team</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
        
        {/* Header */}
        <div className='flex flex-col md:flex-row px-4 mt-20 lg:-mb-[200px] justify-between'>
          {/* Left Side */}
          <div className='flex flex-col md:w-1/2 space-y-8'>
            {/* Title */}
              <div className='flex w-full justify-center lg:justify-start md:ml-6'>
                <Image
                  src={shredders}
                  alt='Team Shredders'
                  height={100}
                  width={550}
                >
                </Image>
            
              </div>
            {/* Info */}
            <div className='flex flex-col mx-6 md:ml-[65px] lg:ml-24 space-y-8 lg:mr-20 text-center md:text-left'>
              <p className='text-md md:text-lg font-medium text-darkpurple2 '>The core team is based in Europe - a bunch of adrenaline junkies with backgrounds in project management, marketing, branding, e-commerce and crypto.</p>
              <p className='text-md md:text-lg font-medium text-darkpurple2'>Pioneering a new kind of brand that we build together.</p>
            </div>
          </div>
          {/* Right Side */}
          <div className='hidden lg:inline-flex mr-20 items-center mt-18 lg:-mb-6'>
            {/* Sassy 1 */}
            <div className='-mr-[130px]'>
              <Image
                src={leftsassy}
                alt='Left Sassy'
                height={400}
                width={400}
              >
              </Image>
            </div>
            {/* Sassy 2 */}
            <div>
              <Image
                src={rightsassy}
                alt='Right Sassy'
                height={400}
                width={400}
              >
              </Image>
            </div>
          </div>
        </div>
        
        {/* Core Team */}
        <div className='flex flex-col ml-14 md:ml-20 lg:ml-[110px] mt-20'>
        {/* Title */}
        <div className='flex flex-col mb-10 lg:mt-20 text-center md:text-start mr-14 md:mr-0 '>
          <h1 className='font-bold text-3xl text-darkpurple2 '>Core Team</h1>
        </div> 
          {/* Team Cards */}
          <div className='flex flex-row flex-wrap space-x-2 justify-center md:justify-start'>
            {/* Card */}
            <div className='flex flex-col w-[330px] pr-10 pb-10'>
              {/* Image */}
              <div>
                <Image
                  src={joshsassy}
                  alt='Josh Sassy'
                  height={300}
                  width={300}
                >
                </Image>
              </div>

              {/* Info */}
              <div className='flex flex-row items-center justify-between py-4 '>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className='uppercase text-3xl font-bold text-darkpurple2'>josh</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className='uppercase text-xl font-bold text-brown'>co-founder</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className='flex pb-8 cursor-pointer'>
                  <Link
                    href='/'
                    
                  >
                    <Image
                      src={twitter}
                      alt='Twitter Logo'
                      height={20}
                      width={25}
                    >
                    </Image>
                  </Link>
                </div>

              </div>
              {/* Description */}
              <div className='flex'>
                <p>Father, passionate Skier and Mountain Biker. Josh has a digital marketing, branding and ecommerce background. Over the last 12 years he has launched, successfully ran and sold a number of online businesses. </p>
              </div>
            </div>
            {/* Card */}
            <div className='flex flex-col w-[330px]   pr-10 pb-10'>
              {/* Image */}
              <div>
                <Image
                  src={jakesassy}
                  alt='Jake Sassy'
                  height={300}
                  width={300}
                >
                </Image>
              </div>
              {/* Info */}
              <div className='flex flex-row items-center justify-between py-4'>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className='uppercase text-3xl font-bold text-darkpurple2'>jake</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className='uppercase text-xl font-bold text-brown'>co-founder</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className='flex pb-8 cursor-pointer'>
                  <Link
                    href='/'

                  >
                    <Image
                      src={twitter}
                      alt='Twitter Logo'
                      height={20}
                      width={25}
                    >
                    </Image>
                  </Link>
                </div>

              </div>
              {/* Description */}
              <div className='flex'>
                <p>A lifelong recreational skier with over 10 years experience in design, marketing and branding ecommerce businesses. In the crypto space since 2017 and and has been involved with community NFT art collections as both a creator and builder. </p>
              </div>
            </div>
            {/* Card */}
            <div className='flex flex-col w-[330px]   pr-10 pb-10'>
              {/* Image */}
              <div>
                <Image
                  src={olliesassy}
                  alt='Ollie Sassy'
                  height={300}
                  width={300}
                >
                </Image>
              </div>
              {/* Info */}
              <div className='flex flex-row items-center justify-between py-4'>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className='uppercase text-3xl font-bold text-darkpurple2'>ollie</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className='uppercase text-xl font-bold text-brown'>co-founder</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className='flex pb-8 cursor-pointer'>
                  <Link
                    href='/'

                  >
                    <Image
                      src={instagram}
                      alt='Instagram Logo'
                      height={30}
                      width={30}
                    >
                    </Image>
                  </Link>
                </div>

              </div>
              {/* Description */}
              <div className='flex'>
                <p>{"Ollie is a Paralympic Snowboarder and extreme sports junkie. He joined Team GB after losing his leg in December 2018 and at the Beijing 2022 Paralympic winter games won Britain's first medal in snowboarding with a Bronze medal in Banked Slalom. "}</p>
              </div>
            </div>
            {/* Card */}
            <div className='flex flex-col w-[330px]   pr-12 pb-10'>
              {/* Image */}
              <div>
                <Image
                  src={raabsassy}
                  alt='Raab Sassy'
                  height={300}
                  width={300}
                >
                </Image>
              </div>
              {/* Info */}
              <div className='flex flex-row items-center justify-between py-4'>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className='uppercase text-3xl font-bold text-darkpurple2'>raab</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className='uppercase text-xl font-bold text-brown'>co-founder</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className='flex pb-8 cursor-pointer'>
                  <Link
                    href='/'

                  >
                    <Image
                      src={twitter}
                      alt='Twitter Logo'
                      height={20}
                      width={25}
                    >
                    </Image>
                  </Link>
                </div>

              </div>
              {/* Description */}
              <div className='flex'>
                <p>Professional Ski Guide, Crypto enthusiast & GastroPub owner. Over 14 years guiding throughout Europe. He owns a ski school, travel agency and a Michelin GastroPub. With 6 years experience in the crypto & NFT space. </p>
              </div>
            </div>
            {/* Card */}
            <div className='flex flex-col w-[330px]   pr-12 pb-10'>
              {/* Image */}
              <div>
                <Image
                  src={franksassy}
                  alt='Frank Sassy'
                  height={300}
                  width={300}
                >
                </Image>
              </div>
              {/* Info */}
              <div className='flex flex-row items-center justify-between py-4'>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className='uppercase text-3xl font-bold text-darkpurple2'>frank</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className='uppercase text-xl font-bold text-brown'>lead illustrator</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className='flex pb-8 cursor-pointer'>
                  <Link
                    href='/'

                  >
                    <Image
                      src={twitter}
                      alt='Twitter Logo'
                      height={20}
                      width={25}
                    >
                    </Image>
                  </Link>
                </div>

              </div>
              {/* Description */}
              <div className='flex'>
                <p>Frank runs a multidisciplinary creative studio focused on illustration & animation, located in Cape Town, South Africa. He has worked with large brands such as Nike, Reebok and Kelloggs and uses this experience to bring the Sassys to life.</p>
              </div>
            </div>
            {/* Card */}
            <div className='flex flex-col w-[330px]   pr-12 pb-10'>
              {/* Image */}
              <div>
                <Image
                  src={jaysassy}
                  alt='Jay Sassy'
                  height={300}
                  width={300}
                >
                </Image>
              </div>
              {/* Info */}
              <div className='flex flex-row items-center justify-between py-4'>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className='uppercase text-3xl font-bold text-darkpurple2'>jay</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className='uppercase text-xl font-bold text-brown'>marketing</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className='flex pb-8 cursor-pointer'>
                  <Link
                    href='/'

                  >
                    <Image
                      src={twitter}
                      alt='Twitter Logo'
                      height={20}
                      width={25}
                    >
                    </Image>
                  </Link>
                </div>

              </div>
              {/* Description */}
              <div className='flex'>
                <p>A lifelong recreational skier with over 10 years experience in design, marketing and branding ecommerce businesses. In the crypto space since 2017 and and has been involved with community NFT art collections as both a creator and builder.</p>
              </div>
            </div>
            {/* Card */}
            <div className='flex flex-col w-[330px]   pr-12 pb-10'>
              {/* Image */}
              <div>
                <Image
                  src={tylersassy}
                  alt='Tyler Sassy'
                  height={300}
                  width={300}
                >
                </Image>
              </div>
              {/* Info */}
              <div className='flex flex-row items-center justify-between py-4'>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className='uppercase text-3xl font-bold text-darkpurple2'>tyler</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className='uppercase text-xl font-bold text-brown'>web design</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className='flex pb-8 cursor-pointer'>
                  <Link
                    href='/'

                  >
                    <Image
                      src={twitter}
                      alt='Twitter Logo'
                      height={20}
                      width={25}
                    >
                    </Image>
                  </Link>
                </div>

              </div>
              {/* Description */}
              <div className='flex'>
                <p>Needs Completed </p>
              </div>
            </div>
            {/* Card */}
            <div className='flex flex-col w-[330px]   pr-12 pb-10'>
              {/* Image */}
              <div>
                <Image
                  src={iansassy}
                  alt='Ian Sassy'
                  height={300}
                  width={300}
                >
                </Image>
              </div>
              {/* Info */}
              <div className='flex flex-row items-center justify-between py-4'>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className='uppercase text-3xl font-bold text-darkpurple2'>ian</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className='uppercase text-xl font-bold text-brown'>developer</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className='flex pb-8 cursor-pointer'>
                  <Link
                    href='/'

                  >
                    <Image
                      src={twitter}
                      alt='Twitter Logo'
                      height={20}
                      width={25}
                    >
                    </Image>
                  </Link>
                </div>

              </div>
              {/* Description */}
              <div className='flex'>
                <p>Needs completed</p>
              </div>
            </div>
            {/* Card */}
            <div className='flex flex-col w-[330px]   pr-12 pb-10'>
              {/* Image */}
              <div>
                <Image
                  src={natesassy}
                  alt='Nate Sassy'
                  height={300}
                  width={300}
                >
                </Image>
              </div>
              {/* Info */}
              <div className='flex flex-row items-center justify-between py-4'>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className='uppercase text-3xl font-bold text-darkpurple2'>nate</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className='uppercase text-xl font-bold text-brown'>storytelling</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className='flex pb-8 cursor-pointer'>
                  <Link
                    href='/'

                  >
                    <Image
                      src={twitter}
                      alt='Twitter Logo'
                      height={20}
                      width={25}
                    >
                    </Image>
                  </Link>
                </div>

              </div>
              {/* Description */}
              <div className='flex'>
                <p>Nate’s primary interests lie in utilizing his background in journalism and copywriting to explore NFTs as a vehicle for world-building and harnessing Web3 technology to redefine how we tell stories. His passions include his family, canyoneering, and rock climbing in the American West.</p>
              </div>
            </div>
            {/* Card */}
            <div className='flex flex-col w-[330px]   pr-12 pb-10'>
              {/* Image */}
              <div>
                <Image
                  src={toondsassy}
                  alt='Toond Sassy'
                  height={300}
                  width={300}
                >
                </Image>
              </div>
              {/* Info */}
              <div className='flex flex-row items-center justify-between py-4'>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className='uppercase text-3xl font-bold text-darkpurple2'>toond</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className='uppercase text-xl font-bold text-brown'>concept artist</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className='flex pb-8 cursor-pointer'>
                  {/* Future Link Here */}
                </div>

              </div>
              {/* Description */}
              <div className='flex'>
                <p>Toond is an experienced illustrator and specialist in digital drawing, he enjoys creating characters and has a passion for comic books and manga. </p>
              </div>
            </div>
            {/* Card */}
            <div className='flex flex-col w-[330px]   pr-12 pb-10'>
              {/* Image */}
              <div>
                <Image
                  src={ragensassy}
                  alt='Ragen Sassy'
                  height={300}
                  width={300}
                >
                </Image>
              </div>
              {/* Info */}
              <div className='flex flex-row items-center justify-between py-4'>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className='uppercase text-3xl font-bold text-darkpurple2'>ragen</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className='uppercase text-xl font-bold text-brown'>animator</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className='flex pb-8 cursor-pointer'>
                  {/* Future Link Here */}
                </div>

              </div>
              {/* Description */}
              <div className='flex'>
                <p>With over 10 years experience in illustration and animation Ragen is passionate and loves his craft. He has worked with a number of leading brands to deliver stunning animated characters and videos.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pros & Ambassadors */}
        <div className='flex flex-col pl-14 lg:pl-[110px] mt-20'>
          
          {/* Title */}
          <div>
            <h1 className='font-bold text-3xl text-center md:text-start mr-14 lg:mr-0 text-darkpurple2 pb-10'>Pros & Ambassadors</h1>
          </div>
          {/* Team Cards */}
          <div className='flex flex-row flex-wrap'>
            {/* Card */}
            <div className='flex flex-col w-[330px]   pr-10 pb-10'>
              {/* Image */}
              <div>
                <Image
                  src={ben}
                  alt='Ben'
                  height={300}
                  width={300}
                >
                </Image>
              </div>
              {/* Info */}
              <div className='flex flex-row items-center justify-between py-4'>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className='uppercase text-3xl font-bold text-darkpurple2'>ben tudhope</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className='uppercase text-xl font-bold text-brown'>snowboarder</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className='flex pb-7 cursor-pointer'>
                  <Link
                    href='/'
                  >
                    <Image
                      src={instagram}
                      alt='Instagram Logo'
                      height={25}
                      width={25}
                    >
                    </Image>
                  </Link>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className='flex flex-col w-[330px]   pr-10 pb-10'>
              {/* Image */}
              <div>
                <Image
                  src={garrett}
                  alt='Garrett'
                  height={300}
                  width={300}
                >
                </Image>
              </div>
              {/* Info */}
              <div className='flex flex-row items-center justify-between py-4'>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className='uppercase text-3xl font-bold text-darkpurple2'>garrett geros</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className='uppercase text-xl font-bold text-brown'>snowboarder</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className='flex pb-7 cursor-pointer'>
                  <Link
                    href='/'
                  >
                    <Image
                      src={instagram}
                      alt='Instagram Logo'
                      height={25}
                      width={25}
                    >
                    </Image>
                  </Link>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className='flex flex-col w-[330px]   pr-10 pb-10'>
              {/* Image */}
              <div>
                <Image
                  src={james}
                  alt='James'
                  height={300}
                  width={300}
                >
                </Image>
              </div>
              {/* Info */}
              <div className='flex flex-row items-center justify-between py-4'>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className='uppercase text-3xl font-bold text-darkpurple2 w-75%'>james barnes miller</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className='uppercase text-xl font-bold text-brown'>snowboarder</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className='flex pb-[65px] cursor-pointer'>
                  <Link
                    href='/'
                  >
                    <Image
                      src={instagram}
                      alt='Instagram Logo'
                      height={33}
                      width={33}
                    >
                    </Image>
                  </Link>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className='flex flex-col w-[330px]   pr-10 pb-10'>
              {/* Image */}
              <div>
                <Image
                  src={jonjoe}
                  alt='JonJoe'
                  height={300}
                  width={300}
                >
                </Image>
              </div>
              {/* Info */}
              <div className='flex flex-row items-center justify-between py-4'>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className='uppercase text-3xl font-bold text-darkpurple2'>jonjoe boulter</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className='uppercase text-xl font-bold text-brown'>snowboarder</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className='flex pb-7 cursor-pointer'>
                  <Link
                    href='/'
                  >
                    <Image
                      src={instagram}
                      alt='Instagram Logo'
                      height={25}
                      width={25}
                    >
                    </Image>
                  </Link>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className='flex flex-col w-[330px]   pr-10 pb-10'>
              {/* Image */}
              <div>
                <Image
                  src={karel}
                  alt='Karel'
                  height={300}
                  width={300}
                >
                </Image>
              </div>
              {/* Info */}
              <div className='flex flex-row items-center justify-between py-4'>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className='uppercase text-3xl font-bold text-darkpurple2 w-3/4'>karel van goor</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className='uppercase text-xl font-bold text-brown'>snowboarder</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className='flex pb-[65px] cursor-pointer'>
                  <Link
                    href='/'
                  >
                    <Image
                      src={instagram}
                      alt='Instagram Logo'
                      height={25}
                      width={25}
                    >
                    </Image>
                  </Link>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className='flex flex-col w-[330px]   pr-10 pb-10'>
              {/* Image */}
              <div>
                <Image
                  src={keith}
                  alt='Keith'
                  height={300}
                  width={300}
                >
                </Image>
              </div>
              {/* Info */}
              <div className='flex flex-row items-center justify-between py-4'>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className='uppercase text-3xl font-bold text-darkpurple2'>keith gabel</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className='uppercase text-xl font-bold text-brown'>snowboarder</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className='flex pb-7 cursor-pointer'>
                  <Link
                    href='/'
                  >
                    <Image
                      src={instagram}
                      alt='Instagram Logo'
                      height={25}
                      width={25}
                    >
                    </Image>
                  </Link>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className='flex flex-col w-[330px]   pr-10 pb-10'>
              {/* Image */}
              <div>
                <Image
                  src={noah}
                  alt='Noah'
                  height={300}
                  width={300}
                >
                </Image>
              </div>
              {/* Info */}
              <div className='flex flex-row items-center justify-between py-4'>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className='uppercase text-3xl font-bold text-darkpurple2'>noah elliot</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className='uppercase text-xl font-bold text-brown'>snowboarder</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className='flex pb-7 cursor-pointer'>
                  <Link
                    href='/'
                  >
                    <Image
                      src={instagram}
                      alt='Instagram Logo'
                      height={25}
                      width={25}
                    >
                    </Image>
                  </Link>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className='flex flex-col w-[330px]   pr-10'>
              {/* Image */}
              <div>
                <Image
                  src={tyler}
                  alt='Tyler'
                  height={300}
                  width={300}
                >
                </Image>
              </div>
              {/* Info */}
              <div className='flex flex-row items-center justify-between py-4'>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className='uppercase text-3xl font-bold text-darkpurple2'>tyler burdick</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className='uppercase text-xl font-bold text-brown'>snowboarder</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className='flex pb-7 cursor-pointer'>
                  <Link
                    href='/'
                  >
                    <Image
                      src={instagram}
                      alt='Instagram Logo'
                      height={25}
                      width={25}
                    >
                    </Image>
                  </Link>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className='flex flex-col w-[330px]   pr-10 pb-10'>
              {/* Image */}
              <div>
                <Image
                  src={zach}
                  alt='Zach'
                  height={300}
                  width={300}
                >
                </Image>
              </div>
              {/* Info */}
              <div className='flex flex-row items-center justify-between py-4'>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className='uppercase text-3xl font-bold text-darkpurple2'>zach miller</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className='uppercase text-xl font-bold text-brown'>snowboarder</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className='flex pb-7 cursor-pointer'>
                  <Link
                    href='/'
                  >
                    <Image
                      src={instagram}
                      alt='Instagram Logo'
                      height={25}
                      width={25}
                    >
                    </Image>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Partners */}
        <div className='flex flex-col pl-14 lg:pl-[110px] mt-20 mb-20'>
          
          {/* Title */}
          <div>
            <h1 className='font-bold text-3xl text-darkpurple2 pb-10 text-center md:text-start mr-14 lg:mr-0'>Partners</h1>
          </div>
          {/* Partner */}
          <div className='flex flex-row flex-wrap'>
            {/* Card */}
            <div className='flex flex-col w-[330px] pr-10 pb-10'>
              {/* Image */}
              <div>
                <Image
                  src={absolute}
                  alt='Absolute-Snow'
                  height={300}
                  width={300}
                >
                </Image>
              </div>
            </div>
            {/* Card */}
            <div className='flex flex-col w-[330px]   pr-10 pb-10'>
              {/* Image */}
              <div>
                <Image
                  src={dynastar}
                  alt='DynaStar'
                  height={300}
                  width={300}
                >
                </Image>
              </div>
            </div>
            {/* Card */}
            <div className='flex flex-col w-[330px]   pr-10 pb-10'>
              {/* Image */}
              <div>
                <Image
                  src={faction}
                  alt='Faction'
                  height={300}
                  width={300}
                >
                </Image>
              </div>
            </div>
            {/* Card */}
            <div className='flex flex-col w-[330px]   pr-10 pb-10'>
              {/* Image */}
              <div>
                <Image
                  src={panda}
                  alt='Panda Optics'
                  height={300}
                  width={300}
                >
                </Image>
              </div>
            </div>
            {/* Card */}
            <div className='flex flex-col w-[330px]   pr-10 pb-10'>
              {/* Image */}
              <div>
                <Image
                  src={shaggys}
                  alt='Shaggys'
                  height={300}
                  width={300}
                >
                </Image>
              </div>
            </div>
            {/* Card */}
            <div className='flex flex-col w-[330px]   pr-10 pb-10'>
              {/* Image */}
              <div>
                <Image
                  src={shred}
                  alt='Shred'
                  height={300}
                  width={300}
                >
                </Image>
              </div>
            </div>
            {/* Card */}
            <div className='flex flex-col w-[330px]   pr-10'>
              {/* Image */}
              <div>
                <Image
                  src={skibro}
                  alt='SkiBro'
                  height={300}
                  width={300}
                >
                </Image>
              </div>
            </div>
            {/* Card */}
            <div className='flex flex-col w-[330px]   pr-10 pb-10'>
              {/* Image */}
              <div>
                <Image
                  src={snowrock}
                  alt='SnowRock'
                  height={300}
                  width={300}
                >
                </Image>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default team
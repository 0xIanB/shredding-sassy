import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import ssscsassy from '../assets/ssscsassy.png'
import brownstroke from '../assets/ssscheader.png'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { AiOutlinePlus } from 'react-icons/ai'

const sssc = () => {
  return (
    <div className='flex flex-col'>
    <Head>
        <title>Shredding Sassy | SSSC</title>
        <meta name="description" content="Bringing extreme sports to web3. A new kind of brand that we build together, creating unforgettable digital & physical experiences whilst onboarding new users to web3 via sought-after utility." />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
      
      {/* Header */}
      <div className='flex flex-col lg:flex-row px-4 mt-20 justify-between mb-20 lg:mb-8'>
        {/* Left Side */}
        <div className='flex flex-col lg:w-1/2 space-y-8'>
          {/* Title */}
            <div className='flex w-full ml-1 lg:ml-0 justify-center lg:justify-start '>
              <Image
                src={brownstroke}
                alt='Team Shredders'
                height={100}
                width={700}
              >
              </Image>
            </div>
          {/* Info */}
          <div className='flex flex-col mx-6 md:ml-20 space-y-8 lg:mr-40 text-center lg:text-start'>
            <p className='text-md lg:text-lg font-medium text-pri'>By holding a Shredding Sassy NFT you will become a fully fledged member of the Shredding Sassy Social Club. </p>
            <p className='text-md lg:text-lg font-medium text-pri'>This is our community. Where like minded individuals will be part of a collective, where we feel included and welcome. Sharing stories, photos and videos. Discussing ideas, arranging meetups and planning trips. </p>
            <p className='text-md lg:text-lg font-medium text-pri'>Being a member of the SSSC comes with many perks and benefits: </p>
          </div>
        </div>

        {/* Right Side */}
        <div className='hidden lg:inline-flex items-center md:-mb-16 lg:mr-40'>
          <Image
            src={ssscsassy}
            alt='Left Sassy'
            height={500}
            width={500}
          >
          </Image>
        </div>
      </div>

      {/* Main Container */}
      <div className='flex flex-col items-center lg:items-start justify-center md:flex-row flex-wrap lg:justify-evenly lg:mr-8 '>
        {/* Inner Container */}
        <div className='flex flex-row text-pri border-4 border-pri w-[330px] sm:w-[600px] h-[100px] sm:h-[125px] items-center justify-between p-4 mb-10 lg:mb-20'>
          {/* Number */}
          <div className='flex ml-2 sm:ml-4 border-4 sm:border-4 border-pri px-4 sm:px-6 py-2 sm:py-4 rounded-full'>
            <p className='text-lg sm:text-2xl font-bold'>1</p>
          </div>
          {/* Title */}
          <div className='flex mr-20 ml-4 sm:-ml-0 items-start sm:mr-[220px]'>
            <p className='text-lg sm:text-2xl font-bold'>Discounts</p>
          </div>
          {/* Toggle */}
          <div className='flex font-bold sm:mr-8 border-2 border-pri p-2 rounded-full cursor-pointer hover:bg-pri hover:text-white'>
            <AiOutlinePlus size={25}/>
          </div>
        </div>
        {/* Inner Container */}
        <div className='flex flex-row text-pri border-4 border-pri w-[330px] sm:w-[600px] h-[100px] sm:h-[125px] items-center justify-between p-4 mb-10 lg:mb-20'>
          {/* Number */}
          <div className='flex ml-2 sm:ml-4 border-4 sm:border-4 border-pri px-4 sm:px-6 py-2 sm:py-4 rounded-full'>
            <p className='text-lg sm:text-2xl font-bold'>2</p>
          </div>
          {/* Title */}
          <div className='flex ml-4 sm:-ml-0 sm:mr-20'>
            <p className='text-lg sm:text-2xl font-bold'>Access to pro athletes</p>
          </div>
          {/* Toggle */}
          <div className='flex font-bold sm:mr-8 border-2 border-pri p-2 rounded-full cursor-pointer hover:bg-pri hover:text-white'>
            <AiOutlinePlus size={25}/>
          </div>
        </div>
        {/* Inner Container */}
        <div className='flex flex-row text-pri border-4 border-pri w-[330px] sm:w-[600px] h-[100px] sm:h-[125px] items-center justify-between p-4 mb-10 lg:mb-20'>
          {/* Number */}
          <div className='flex ml-2 sm:ml-4 border-4 sm:border-4 border-pri px-4 sm:px-6 py-2 sm:py-4 rounded-full'>
            <p className='text-lg sm:text-2xl font-bold'>3</p>
          </div>
          {/* Title */}
          <div className='flex sm:-ml-0 sm:mr-36'>
            <p className='text-lg sm:text-2xl font-bold'>Parties & Events</p>
          </div>
          {/* Toggle */}
          <div className='flex font-bold sm:mr-8 border-2 border-pri p-2 rounded-full cursor-pointer hover:bg-pri hover:text-white'>
            <AiOutlinePlus size={25}/>
          </div>
        </div>
        {/* Inner Container */}
        <div className='flex flex-row text-pri border-4 border-pri w-[330px] sm:w-[600px] h-[100px] sm:h-[125px] items-center justify-between p-4 mb-10 lg:mb-20'>
          {/* Number */}
          <div className='flex ml-2 sm:ml-4 border-4 sm:border-4 border-pri px-4 sm:px-6 py-2 sm:py-4 rounded-full'>
            <p className='text-lg sm:text-2xl font-bold'>4</p>
          </div>
          {/* Title */}
          <div className='flex sm:-ml-0 sm:mr-36'>
            <p className='text-lg sm:text-2xl font-bold'>Community Trips</p>
          </div>
          {/* Toggle */}
          <div className='flex font-bold sm:mr-8 border-2 border-pri p-2 rounded-full cursor-pointer hover:bg-pri hover:text-white'>
            <AiOutlinePlus size={25}/>
          </div>
        </div>
        {/* Inner Container */}
        <div className='flex flex-row text-pri border-4 border-pri w-[330px] sm:w-[600px] h-[100px] sm:h-[125px] items-center justify-between p-4 mb-10 lg:mb-20'>
          {/* Number */}
          <div className='flex ml-2 sm:ml-4 border-4 sm:border-4 border-pri px-4 sm:px-6 py-2 sm:py-4 rounded-full'>
            <p className='text-lg sm:text-2xl font-bold'>5</p>
          </div>
          {/* Title */}
          <div className='flex ml-4 sm:-ml-2 sm:mr-24'>
            <p className='text-lg sm:text-2xl font-bold'>Raffles & Giveaways</p>
          </div>
          {/* Toggle */}
          <div className='flex font-bold sm:mr-8 border-2 border-pri p-2 rounded-full cursor-pointer hover:bg-pri hover:text-white'>
            <AiOutlinePlus size={25}/>
          </div>
        </div>
        {/* Inner Container */}
        <div className='flex flex-row text-pri border-4 border-pri w-[330px] sm:w-[600px] h-[100px] sm:h-[125px] items-center justify-between p-4 mb-10 lg:mb-20'>
          {/* Number */}
          <div className='flex ml-2 sm:ml-4 border-4 sm:border-4 border-pri px-4 sm:px-6 py-2 sm:py-4 rounded-full'>
            <p className='text-lg sm:text-2xl font-bold'>6</p>
          </div>
          {/* Title */}
          <div className='flex mr-8 sm:-ml-1 sm:mr-44'>
            <p className='text-lg sm:text-2xl font-bold'>The Directory</p>
          </div>
          {/* Toggle */}
          <div className='flex font-bold sm:mr-8 border-2 border-pri p-2 rounded-full cursor-pointer hover:bg-pri hover:text-white'>
            <AiOutlinePlus size={25}/>
          </div>
        </div>
        {/* Inner Container */}
        <div className='flex flex-row text-pri border-4 border-pri w-[330px] sm:w-[600px] h-[100px] sm:h-[125px] items-center justify-between p-4 mb-10 lg:mb-20'>
          {/* Number */}
          <div className='flex ml-2 sm:ml-4 border-4 sm:border-4 border-pri px-4 sm:px-6 py-2 sm:py-4 rounded-full'>
            <p className='text-lg sm:text-2xl font-bold'>7</p>
          </div>
          {/* Title */}
          <div className='flex ml-4 sm:-ml-0 sm:mr-28'>
            <p className='text-lg sm:text-2xl font-bold'>AR & VR Experience</p>
          </div>
          {/* Toggle */}
          <div className='flex font-bold sm:mr-8 border-2 border-pri p-2 rounded-full cursor-pointer hover:bg-pri hover:text-white'>
            <AiOutlinePlus size={25}/>
          </div>
        </div>
        {/* Inner Container */}
        <div className='flex flex-row text-pri border-4 border-pri w-[330px] sm:w-[600px] h-[100px] sm:h-[125px] items-center justify-between p-4 mb-10 lg:mb-20'>
          {/* Number */}
          <div className='flex ml-2 sm:ml-4 border-4 sm:border-4 border-pri px-4 sm:px-6 py-2 sm:py-4 rounded-full'>
            <p className='text-lg sm:text-2xl font-bold'>8</p>
          </div>
          {/* Title */}
          <div className='flex ml-4 sm:-ml-1 sm:mr-16'>
            <p className='text-lg sm:text-2xl font-bold'>Exclusive Merchandise</p>
          </div>
          {/* Toggle */}
          <div className='flex font-bold sm:mr-8 border-2 border-pri p-2 rounded-full cursor-pointer hover:bg-pri hover:text-white'>
            <AiOutlinePlus size={25}/>
          </div>
        </div>
        {/* Inner Container */}
        <div className='flex flex-row text-pri border-4 border-pri w-[330px] sm:w-[600px] h-[100px] sm:h-[125px] items-center justify-between p-4 mb-10 lg:mb-20'>
          {/* Number */}
          <div className='flex ml-2 sm:ml-4 border-4 sm:border-4 border-pri px-4 sm:px-6 py-2 sm:py-4 rounded-full'>
            <p className='text-lg sm:text-2xl font-bold'>9</p>
          </div>
          {/* Title */}
          <div className='flex sm:-ml-0 mr-20 sm:mr-60'>
            <p className='text-lg sm:text-2xl font-bold'>The App</p>
          </div>
          {/* Toggle */}
          <div className='flex font-bold sm:mr-8 border-2 border-pri p-2 rounded-full cursor-pointer hover:bg-pri hover:text-white'>
            <AiOutlinePlus size={25}/>
          </div>
        </div>
        {/* Inner Container */}
        <div className='flex flex-row text-pri border-4 border-pri w-[330px] sm:w-[600px] h-[100px] sm:h-[125px] items-center justify-between p-4 mb-10 lg:mb-20'>
          {/* Number */}
          <div className='flex ml-2 sm:ml-4 border-4 sm:border-4 border-pri px-3 sm:px-5 py-2 sm:py-4 rounded-full'>
            <p className='text-lg sm:text-2xl font-bold'>10</p>
          </div>
          {/* Title */}
          <div className='flex sm:-ml-0 mr-2 sm:mr-[140px]'>
            <p className='text-lg sm:text-2xl font-bold'>Loyalty Rewards</p>
          </div>
          {/* Toggle */}
          <div className='flex font-bold sm:mr-8 border-2 border-pri p-2 rounded-full cursor-pointer hover:bg-pri hover:text-white'>
            <AiOutlinePlus size={25}/>
          </div>
        </div>

      </div>

      
    <Footer />
  </div>
)
}

export default sssc







import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import trailMap from '../assets/trailmap.png'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const trailmap = () => {
  return (
    <div>
      <Head>
        <title>Shredding Sassy | Trail Map</title>
        <meta name="description" content="Bringing extreme sports to web3. A new kind of brand that we build together, creating unforgettable digital & physical experiences whilst onboarding new users to web3 via sought-after utility." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className=''>
        <div className='flex-col items-center text-center text-pri'>
        <h1 className='font-bold font-mont text-2xl md:text-4xl pt-10 lg:py-10'>Welcome to Meta Mountain</h1>
        <p className='lg:hidden py-4 text-pri font-mont font-medium'>Pinch To Zoom and Explore!</p>
        </div>
        <div className='pb-20'>
          <Image
            src={trailMap}
            alt='Trail Map'
          >
          </Image>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default trailmap
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
      <div className='flex flex-col justify-center items-center h-full w-full'>
        <div className='flex-col items-center text-center text-pri'>
        <h1 className='font-bold font-mont text-2xl md:text-4xl pt-10 lg:py-10'>Welcome to Meta Mountain</h1>
        </div>
        <div className='flex justify-center items-center pb-20 w-[25%]'>
          <Image
            src={trailMap}
            alt='Trail Map'
          >
          </Image>
        </div>
        <a href="assets/trailmap.png" download="Trail Map">
        <p>Click To Download</p>
        </a>
      </div>
      <Footer />
    </div>
  )
}

export default trailmap
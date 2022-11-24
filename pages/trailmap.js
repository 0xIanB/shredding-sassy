import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import trailMapFramed from '../assets/trailmapframed.png'
import trailMap from '../assets/trailmap.png'
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
        <h2 className='trailMapHeader font-bold font-mont text-pri pt-20 lg:pt-14'>The Trail Map</h2>
        </div>
          <div className='trailFramedMapStyle flex justify-center items-center'>
        <a href='https://www.shreddingsassy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrailmap.239ea497.png&w=3840&q=75' target="_blank" rel='noreferrer'>
          <Image
            src={trailMapFramed}
            alt='Trail Map'
            priority={true}
            objectFit='fill'
          >
          </Image>
        </a>
        </div>
        <a href='https://www.shreddingsassy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrailmap.239ea497.png&w=3840&q=75' target="_blank" rel='noreferrer'>
        <p className='trailMapStyle text-pri font-mont animate-bounce font-medium'>Click To Explore Meta Mountain</p>
        </a>
      </div>
      <div className='hidden'>
        <Image
          src={trailMap}
          alt='Trail Map'
          >
        </Image>
      </div>
    </div>
  )
}

export default trailmap
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
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
      <div class='flex flex-col justify-center items-center h-full w-full'>
        <div class='flex-col items-center text-center text-pri'>
        <h2 class='trailMapHeader font-bold font-mont text-pri pt-20 lg:pt-14 pb-10 '>The Trail Map</h2>
        </div>
        <div class='flex justify-center items-center pb-12 w-[60%] lg:w-[30%]'>
          <Image
            src={trailMap}
            alt='Trail Map'
          >
          </Image>
        </div>
        <a href="https://shredding-sassy.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftrailmap.140331ea.png&w=3840&q=75" target="_blank" rel='noreferrer'>
        <p class='trailMapStyle text-pri font-mont animate-bounce font-medium'>Click To Explore Meta Mountain</p>
        </a>
      </div>
    </div>
  )
}

export default trailmap
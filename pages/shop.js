import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'

const shop = () => {
  return (
    <div>
      <Head>
        <title>Shredding Sassy | Shop</title>
        <meta name="description" content="Bringing extreme sports to web3. A new kind of brand that we build together, creating unforgettable digital & physical experiences whilst onboarding new users to web3 via sought-after utility." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className='flex items-center justify-center mt-52 2xl:mt-72'>
        <p className='shopStyle font-bold font-mont text-pri '>...COMING SOON</p>
      </div>
    </div>
  )
}

export default shop
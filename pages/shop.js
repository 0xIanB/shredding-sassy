import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
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
      <div className='flex flex-col space-y-8 items-center text-center justify-center p-20'>
        <p className='font-bold font-mont text-pri text-2xl pt-4 pb-2 '>...COMING SOON</p>
      </div>
      <Footer />
    </div>
  )
}

export default shop
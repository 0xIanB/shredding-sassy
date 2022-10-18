import React from 'react'
import Head from 'next/head'
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
        Trail Map
      <Footer />
    </div>
  )
}

export default trailmap
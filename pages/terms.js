import React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const terms = () => {
  return (
    <div className='h-screen'>
      <Head>
        <title>Shredding Sassy | T&C</title>
        <meta name="description" content="Bringing extreme sports to web3. A new kind of brand that we build together, creating unforgettable digital & physical experiences whilst onboarding new users to web3 via sought-after utility." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className='flex items-center text-center justify-center p-20'>
        <h1 className='text-pri font-bold text-4xl'>TERMS & CONDITIONS</h1>
      </div>
      
      <div className='flex'>
        <h1>

        </h1>
        <p>

        </p>
      </div>
      <Footer />
    </div>
  )
}

export default terms
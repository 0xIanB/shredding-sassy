import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

const faq = () => {
  return (
    <div>
      <Head>
        <title>Shredding Sassy | FAQ</title>
        <meta name="description" content="Bringing extreme sports to web3. A new kind of brand that we build together, creating unforgettable digital & physical experiences whilst onboarding new users to web3 via sought-after utility." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className='flex h-screen w-full'>
        {/* Header */}
        <div class='flex justify-center'>
          <h2 class='font-mont text-pri font-bold'>FAQ</h2>
          
        </div>

      </div>
    </div>
  )
}

export default faq
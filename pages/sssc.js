import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import ssscsassy from '../assets/ssscsassy.png'
import brownstroke from '../assets/ssscheader.png'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'

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
      <Accordion allowMultiple className='flex flex-row flex-wrap justify-evenly mx-4 lg:mx-0 lg:-ml-4'>
        <AccordionItem className='w-[600px] mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='text-pri font-bold text-xl'>
                <AccordionButton _expanded={{ bg: '#230A43', color: 'white' }} className='flex flex-row border-4 border-pri p-6'>
                {isExpanded ? (
                    <div className='px-4 py-2 border-4 bg-white border-white text-pri rounded-full'>
                      1
                    </div>
                  ) : (
                    <div className='px-4 py-2 border-4 border-pri rounded-full'>
                      1
                    </div>
                  )}
                  <Box className='ml-4' flex='1' textAlign='left'>
                    Discounts
                  </Box>
                  {isExpanded ? (
                    <div className='p-2 border-2 bg-white border-white text-pri rounded-full'>
                      <AiOutlineMinus fontSize='20px' />
                    </div>
                  ) : (
                    <div className='p-2 border-2 border-pri rounded-full'>
                      <AiOutlinePlus fontSize='20px' />
                    </div>
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p className='text-pri font-medium mt-8 mb-4'>We are in discussion with many top brands and retailers in the mountain sports space to provide amazing discounts and special offers.</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem className='w-[600px] mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='text-pri font-bold text-xl'>
                <AccordionButton _expanded={{ bg: '#230A43', color: 'white' }} className='flex flex-row border-4 border-pri p-6'>
                {isExpanded ? (
                    <div className='px-4 py-2 border-4 bg-white border-white text-pri rounded-full'>
                      2
                    </div>
                  ) : (
                    <div className='px-4 py-2 border-4 border-pri rounded-full'>
                      2
                    </div>
                  )}
                  <Box className='ml-4' flex='1' textAlign='left'>
                    Access to pro athletes
                  </Box>
                  {isExpanded ? (
                    <div className='p-2 border-2 bg-white border-white text-pri rounded-full'>
                      <AiOutlineMinus fontSize='20px' />
                    </div>
                  ) : (
                    <div className='p-2 border-2 border-pri rounded-full'>
                      <AiOutlinePlus fontSize='20px' />
                    </div>
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p className='text-pri font-medium mt-8 mb-4'>We are in discussion with many top brands and retailers in the mountain sports space to provide amazing discounts and special offers.</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem className='w-[600px] mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='text-pri font-bold text-xl'>
                <AccordionButton _expanded={{ bg: '#230A43', color: 'white' }} className='flex flex-row border-4 border-pri p-6'>
                {isExpanded ? (
                    <div className='px-4 py-2 border-4 bg-white border-white text-pri rounded-full'>
                      3
                    </div>
                  ) : (
                    <div className='px-4 py-2 border-4 border-pri rounded-full'>
                      3
                    </div>
                  )}
                  <Box className='ml-4' flex='1' textAlign='left'>
                    Parties & Events
                  </Box>
                  {isExpanded ? (
                    <div className='p-2 border-2 bg-white border-white text-pri rounded-full'>
                      <AiOutlineMinus fontSize='20px' />
                    </div>
                  ) : (
                    <div className='p-2 border-2 border-pri rounded-full'>
                      <AiOutlinePlus fontSize='20px' />
                    </div>
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p className='text-pri font-medium mt-8 mb-4'>We are in discussion with many top brands and retailers in the mountain sports space to provide amazing discounts and special offers.</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem className='w-[600px] mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='text-pri font-bold text-xl'>
                <AccordionButton _expanded={{ bg: '#230A43', color: 'white' }} className='flex flex-row border-4 border-pri p-6'>
                {isExpanded ? (
                    <div className='px-4 py-2 border-4 bg-white border-white text-pri rounded-full'>
                      4
                    </div>
                  ) : (
                    <div className='px-4 py-2 border-4 border-pri rounded-full'>
                      4
                    </div>
                  )}
                  <Box className='ml-4' flex='1' textAlign='left'>
                    Community Trips
                  </Box>
                  {isExpanded ? (
                    <div className='p-2 border-2 bg-white border-white text-pri rounded-full'>
                      <AiOutlineMinus fontSize='20px' />
                    </div>
                  ) : (
                    <div className='p-2 border-2 border-pri rounded-full'>
                      <AiOutlinePlus fontSize='20px' />
                    </div>
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p className='text-pri font-medium mt-8 mb-4'>We are in discussion with many top brands and retailers in the mountain sports space to provide amazing discounts and special offers.</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem className='w-[600px] mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='text-pri font-bold text-xl'>
                <AccordionButton _expanded={{ bg: '#230A43', color: 'white' }} className='flex flex-row border-4 border-pri p-6'>
                {isExpanded ? (
                    <div className='px-4 py-2 border-4 bg-white border-white text-pri rounded-full'>
                      5
                    </div>
                  ) : (
                    <div className='px-4 py-2 border-4 border-pri rounded-full'>
                      5
                    </div>
                  )}
                  <Box className='ml-4' flex='1' textAlign='left'>
                    Raffles & Giveaways
                  </Box>
                  {isExpanded ? (
                    <div className='p-2 border-2 bg-white border-white text-pri rounded-full'>
                      <AiOutlineMinus fontSize='20px' />
                    </div>
                  ) : (
                    <div className='p-2 border-2 border-pri rounded-full'>
                      <AiOutlinePlus fontSize='20px' />
                    </div>
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p className='text-pri font-medium mt-8 mb-4'>We are in discussion with many top brands and retailers in the mountain sports space to provide amazing discounts and special offers.</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem className='w-[600px] mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='text-pri font-bold text-xl'>
                <AccordionButton _expanded={{ bg: '#230A43', color: 'white' }} className='flex flex-row border-4 border-pri p-6'>
                {isExpanded ? (
                    <div className='px-4 py-2 border-4 bg-white border-white text-pri rounded-full'>
                      6
                    </div>
                  ) : (
                    <div className='px-4 py-2 border-4 border-pri rounded-full'>
                      6
                    </div>
                  )}
                  <Box className='ml-4' flex='1' textAlign='left'>
                    The Directory
                  </Box>
                  {isExpanded ? (
                    <div className='p-2 border-2 bg-white border-white text-pri rounded-full'>
                      <AiOutlineMinus fontSize='20px' />
                    </div>
                  ) : (
                    <div className='p-2 border-2 border-pri rounded-full'>
                      <AiOutlinePlus fontSize='20px' />
                    </div>
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p className='text-pri font-medium mt-8 mb-4'>We are in discussion with many top brands and retailers in the mountain sports space to provide amazing discounts and special offers.</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem className='w-[600px] mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='text-pri font-bold text-xl'>
                <AccordionButton _expanded={{ bg: '#230A43', color: 'white' }} className='flex flex-row border-4 border-pri p-6'>
                {isExpanded ? (
                    <div className='px-4 py-2 border-4 bg-white border-white text-pri rounded-full'>
                      7
                    </div>
                  ) : (
                    <div className='px-4 py-2 border-4 border-pri rounded-full'>
                      7
                    </div>
                  )}
                  <Box className='ml-4' flex='1' textAlign='left'>
                    AR & VR Experiences
                  </Box>
                  {isExpanded ? (
                    <div className='p-2 border-2 bg-white border-white text-pri rounded-full'>
                      <AiOutlineMinus fontSize='20px' />
                    </div>
                  ) : (
                    <div className='p-2 border-2 border-pri rounded-full'>
                      <AiOutlinePlus fontSize='20px' />
                    </div>
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p className='text-pri font-medium mt-8 mb-4'>We are in discussion with many top brands and retailers in the mountain sports space to provide amazing discounts and special offers.</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem className='w-[600px] mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='text-pri font-bold text-xl'>
                <AccordionButton _expanded={{ bg: '#230A43', color: 'white' }} className='flex flex-row border-4 border-pri p-6'>
                {isExpanded ? (
                    <div className='px-4 py-2 border-4 bg-white border-white text-pri rounded-full'>
                      8
                    </div>
                  ) : (
                    <div className='px-4 py-2 border-4 border-pri rounded-full'>
                      8
                    </div>
                  )}
                  <Box className='ml-4' flex='1' textAlign='left'>
                    Exclusive Merchandise
                  </Box>
                  {isExpanded ? (
                    <div className='p-2 border-2 bg-white border-white text-pri rounded-full'>
                      <AiOutlineMinus fontSize='20px' />
                    </div>
                  ) : (
                    <div className='p-2 border-2 border-pri rounded-full'>
                      <AiOutlinePlus fontSize='20px' />
                    </div>
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p className='text-pri font-medium mt-8 mb-4'>We are in discussion with many top brands and retailers in the mountain sports space to provide amazing discounts and special offers.</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem className='w-[600px] mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='text-pri font-bold text-xl'>
                <AccordionButton _expanded={{ bg: '#230A43', color: 'white' }} className='flex flex-row border-4 border-pri p-6'>
                {isExpanded ? (
                    <div className='px-4 py-2 border-4 bg-white border-white text-pri rounded-full'>
                      9
                    </div>
                  ) : (
                    <div className='px-4 py-2 border-4 border-pri rounded-full'>
                      9
                    </div>
                  )}
                  <Box className='ml-4' flex='1' textAlign='left'>
                    The App
                  </Box>
                  {isExpanded ? (
                    <div className='p-2 border-2 bg-white border-white text-pri rounded-full'>
                      <AiOutlineMinus fontSize='20px' />
                    </div>
                  ) : (
                    <div className='p-2 border-2 border-pri rounded-full'>
                      <AiOutlinePlus fontSize='20px' />
                    </div>
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p className='text-pri font-medium mt-8 mb-4'>We are in discussion with many top brands and retailers in the mountain sports space to provide amazing discounts and special offers.</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        <AccordionItem className='w-[600px] mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='text-pri font-bold text-xl'>
                <AccordionButton _expanded={{ bg: '#230A43', color: 'white' }} className='flex flex-row border-4 border-pri p-6'>
                {isExpanded ? (
                    <div className='px-3 py-2 border-4 bg-white border-white text-pri rounded-full'>
                      10
                    </div>
                  ) : (
                    <div className='px-3 py-2 border-4 border-pri rounded-full'>
                      10
                    </div>
                  )}
                  <Box className='ml-4' flex='1' textAlign='left'>
                    Loyalty Rewards
                  </Box>
                  {isExpanded ? (
                    <div className='p-2 border-2 bg-white border-white text-pri rounded-full'>
                      <AiOutlineMinus fontSize='20px' />
                    </div>
                  ) : (
                    <div className='p-2 border-2 border-pri rounded-full'>
                      <AiOutlinePlus fontSize='20px' />
                    </div>
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p className='text-pri font-medium mt-8 mb-4'>We are in discussion with many top brands and retailers in the mountain sports space to provide amazing discounts and special offers.</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    <Footer />
  </div>
)
}

export default sssc







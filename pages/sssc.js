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
import miniSassy1 from '../assets/miniSassy1.png'
import miniSassy2 from '../assets/miniSassy2.png'
import miniSassy3 from '../assets/miniSassy3.png'
import miniSassy4 from '../assets/miniSassy4.png'
import miniSassy5 from '../assets/miniSassy5.png'
import miniSassy6 from '../assets/miniSassy6.png'
import miniSassy7 from '../assets/miniSassy7.png'
import miniSassy8 from '../assets/miniSassy8.png'
import miniSassy9 from '../assets/miniSassy9.png'
import miniSassy10 from '../assets/miniSassy10.png'

const styles = {
    bodyText: 'font-medium text-pri 2xl:w-[75%] pb-8',
}

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
      <div className='flex flex-col xl:flex-row px-4 mt-20 justify-center items-center xl:justify-between mb-10 lg:mb-6'>
        {/* Left Side */}
        <div className='flex flex-col justify-center items-center  xl:items-start space-y-8'>
          {/* Title */}
            <div className='flex 2xl:hidden justify-center xl:justify-start shrink-0'>
              <Image
                src={brownstroke}
                alt='Team Shredders'
                width={700}
                height={80}
              >
              </Image>
            </div>
            <div className='hidden 2xl:flex justify-center xl:justify-start shrink-0'>
              <Image
                src={brownstroke}
                alt='Team Shredders'
                width={900}
                height={100}
              >
              </Image>
            </div>
          {/* Info */}
          <div className='flex px-2 xl:px-0 flex-col text-center xl:text-start xl:ml-20 justify-center md:w-[70%] lg:w-[45%] 2xl:w-[50%]'>
            <p className={`mainBodyTextStyle ${styles.bodyText}`}>By holding a Shredding Sassy NFT you will become a fully fledged member of the Shredding Sassy Social Club. </p>
            <p className={`mainBodyTextStyle ${styles.bodyText}`}>This is our community. Where like minded individuals will be part of a collective, where we feel included and welcome. Sharing stories, photos and videos. Discussing ideas, arranging meetups and planning trips. </p>
            <p className={`mainBodyTextStyle ${styles.bodyText}`}>Being a member of the SSSC comes with many perks and benefits. </p>
          </div>
        </div>
      </div>

      {/* Mobile Main Container */}
      <Accordion allowMultiple className='flex flex-row flex-wrap xl:hidden justify-evenly mx-4 mb-20'>
        {/* Item 1 */}
        <div className='flex flex-col -mt-8'>
        <div className='flex justify-end -mb-2 xl:invisible'>
            <Image 
              src={miniSassy7}
              alt='Mini Sassy 7'
              height={80}
              width={80}
            />           
          </div>
        <AccordionItem className='mobileAccStyle mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='ssscSubHeaderMobileStyle text-pri font-bold '>
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
                <p className='text-pri font-medium p-1 mt-8 mb-4'>We have partnered with 20+ brands, retailers and service providers in the Ski & Snowboard space to provide amazing discounts, early access and special offers.</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        </div>            
        {/* Item 2 */}
        <div className='flex flex-col -mt-8'>
        <div className='flex justify-start -mb-2 xl:invisible'>
            <Image 
              src={miniSassy10}
              alt='Mini Sassy 10'
              height={80}
              width={80}
            />           
          </div>
        <AccordionItem className='mobileAccStyle mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='ssscSubHeaderMobileStyle text-pri font-bold'>
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
                <p className='text-pri font-medium p-1 mt-8 mb-4'>Exclusive access to pro athletes via AMA calls, presentations, meet-ups and events. Members will have the chance to ask questions, chat and meet in person.</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        </div>
        {/* Item 3 */}
        <div className='flex flex-col -mt-8'>
          <div className='flex justify-end -mb-2 mr-24'>
            <Image 
              src={miniSassy1}
              alt='Mini Sassy 1'
              height={80}
              width={80}
            />           
          </div>
          <AccordionItem className='mobileAccStyle mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='ssscSubHeaderMobileStyle text-pri font-bold'>

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
                <p className='text-pri font-medium p-1 mt-8 mb-4'>Shredding Sassy will be organizing a number of events and parties around the world in the most fantastic locations. A lot of these will be exclusively for our members.</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        </div>            
        {/* Item 4 */}
        <div className='flex flex-col -mt-8'>
        <div className='flex justify-end -mb-2 mr-10 '>
            <Image 
              src={miniSassy9}
              alt='Mini Sassy 9'
              height={80}
              width={80}
            />           
          </div>
        <AccordionItem className='mobileAccStyle mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='ssscSubHeaderMobileStyle text-pri font-bold'>

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
                <p className='text-pri font-medium p-1 mt-8 mb-4'>There will be Ski / Snowboard trips organized worldwide in the most jaw dropping, deep pow, winter wonderland locations. Bring a friend and meet some awesome new people within the community.</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        </div>
        {/* Item 5 */}
        <div className='flex flex-col -mt-8'>
        <div className='flex justify-start -mb-2 mr-20 '>
            <Image 
              src={miniSassy8}
              alt='Mini Sassy 8'
              height={80}
              width={80}
            />           
          </div>
        <AccordionItem className='mobileAccStyle mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='ssscSubHeaderMobileStyle text-pri font-bold'>

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
                <p className='text-pri font-medium p-1 mt-8 mb-4'>Every month we will be obtaining tickets to mountain sports events & competitions, lift passes, ski and snowboard equipment, WL spots for other NFT projects, discounts on merch and more. Members will be able to obtain raffle tickets using their SASSY points.</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        </div>
        {/* Item 6 */}
        <div className='flex flex-col -mt-8'>
          <div className='flex justify-center -mb-2'>
            <Image 
              src={miniSassy2}
              alt='Mini Sassy 2'
              height={80}
              width={80}
            />           
          </div>
          <AccordionItem className='mobileAccStyle mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='ssscSubHeaderMobileStyle text-pri font-bold'>

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
                <p className='text-pri font-medium p-1 mt-8 mb-4'>A database packed with the best locations, restaurants, hotels, tour guides, instructors, activities and more. Our aim is to provide clear, easy access to information when booking a trip. The directory will be built over time to cover all major mountain towns in the world.</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        </div>
        {/* Item 7 */}
        <div className='flex flex-col -mt-8'>
          <div className='flex justify-start lg:justify-end -mb-2'>
            <Image 
              src={miniSassy3}
              alt='Mini Sassy 3'
              height={80}
              width={80}
            />           
          </div>
          <AccordionItem className='mobileAccStyle mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='ssscSubHeaderMobileStyle text-pri font-bold'>

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
                <p className='text-pri font-medium p-1 mt-8 mb-4'>With AR becoming more accessible we will be creating incredible experiences using this technology. Some ideas we have include: Treasure hunts on the mountain, getting your Sassy on skis or a snowboard carving in front of your eyes. We also have big plans that involve using ski/snowboard goggles…</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        </div>
        {/* Item 8 */}
        <div className='flex flex-col -mt-8'>
          <div className='flex justify-end lg:justify-start -mb-2'>
            <Image 
              src={miniSassy4}
              alt='Mini Sassy 4'
              height={80}
              width={80}
            />           
          </div>
          <AccordionItem className='mobileAccStyle mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='ssscSubHeaderMobileStyle text-pri font-bold'>

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
                <p className='text-pri font-medium p-1 mt-8 mb-4'>A range of clothing and merchandise using the freshest designs and eco friendly, sustainable and recycled materials where possible. We intend on collaborating with amazing artists, pro athletes and top brands.</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        </div>
        {/* Item 9 */}
        <div className='flex flex-col -mt-8'>
          <div className='flex justify-start -mb-2 ml-40'>
            <Image 
              src={miniSassy5}
              alt='Mini Sassy 5'
              height={80}
              width={80}
            />           
          </div>
          <AccordionItem className='mobileAccStyle mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='ssscSubHeaderMobileStyle text-pri font-bold'>

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
                <p className='text-pri font-medium p-1 mt-8 mb-4'>A mobile app will be developed for IOS and Android. We have many features planned for the app including: GPS for our competitions and games on the mountain, easily obtaining discount codes from our partners, access to the directory, calendar for events, ama calls and meetups.</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        </div>
        {/* Item 10 */}
        <div className='flex flex-col -mt-8'>
          <div className='flex justify-end -mb-2 mr-20 '>
            <Image 
              src={miniSassy6}
              alt='Mini Sassy6'
              height={80}
              width={80}
            />           
          </div>
          <AccordionItem className='mobileAccStyle mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='ssscSubHeaderMobileStyle text-pri font-bold'>

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
                <p className='text-pri font-medium p-1 mt-8 mb-4'>{"NFT holders will be able to ‘lodge’ their Shredding Sassy to accrue SASSY points as well as other loyalty rewards. The longer you have your Sassy ‘lodging’ the more rewards you get."}</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        </div>
      </Accordion>
      {/* Main Container */}
      <Accordion allowMultiple className='hidden xl:flex flex-row flex-wrap justify-evenly mx-4 mb-20 mt-16'>
        {/* Item 1 */}
        <div className='flex flex-col -mt-8'>
        <AccordionItem className='AccStyle mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='ssscSubHeaderStyle text-pri font-bold '>
                <AccordionButton _expanded={{ bg: '#230A43', color: 'white' }} className='flex flex-row border-4 border-pri p-6'>
                {isExpanded ? (
                    <div className='px-4 py-2 2xl:px-6 border-4 bg-white border-white text-pri rounded-full'>
                      1
                    </div>
                  ) : (
                    <div className='px-4 py-2 2xl:px-6 border-4 border-pri rounded-full'>
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
                <p className='text-pri font-medium p-1 mt-8 mb-4'>We have partnered with 20+ brands, retailers and service providers in the Ski & Snowboard space to provide amazing discounts, early access and special offers.</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        </div>            
        {/* Item 2 */}
        <div className='flex flex-col -mt-8'>
          
        <div className='flex justify-end -mb-8 -mt-[468px]'>
          <Image
            src={ssscsassy}
            alt='SSSC Sassy'
            height={500}
            width={500}
          >
          </Image>
        </div>
        <AccordionItem className='AccStyle mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='ssscSubHeaderStyle text-pri font-bold'>
                <AccordionButton _expanded={{ bg: '#230A43', color: 'white' }} className='flex flex-row border-4 border-pri p-6'>
                {isExpanded ? (
                    <div className='px-4 py-2 2xl:px-6 border-4 bg-white border-white text-pri rounded-full'>
                      2
                    </div>
                  ) : (
                    <div className='px-4 py-2 2xl:px-6 border-4 border-pri rounded-full'>
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
                <p className='text-pri font-medium p-1 mt-8 mb-4'>Exclusive access to pro athletes via AMA calls, presentations, meet-ups and events. Members will have the chance to ask questions, chat and meet in person.</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        </div>
        {/* Item 3 */}
        <div className='flex flex-col -mt-8'>
          <div className='flex justify-end -mb-2 mr-24'>
            <Image 
              src={miniSassy1}
              alt='Mini Sassy 1'
              height={80}
              width={80}
            />           
          </div>
          <AccordionItem className='AccStyle mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='ssscSubHeaderStyle text-pri font-bold'>

                <AccordionButton _expanded={{ bg: '#230A43', color: 'white' }} className='flex flex-row border-4 border-pri p-6'>
                {isExpanded ? (
                    <div className='px-4 py-2 2xl:px-6 border-4 bg-white border-white text-pri rounded-full'>
                      3
                    </div>
                  ) : (
                    <div className='px-4 py-2 2xl:px-6 border-4 border-pri rounded-full'>
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
                <p className='text-pri font-medium p-1 mt-8 mb-4'>Shredding Sassy will be organizing a number of events and parties around the world in the most fantastic locations. A lot of these will be exclusively for our members.</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        </div>            
        {/* Item 4 */}
        <div className='flex flex-col -mt-8'>
        <div className='flex justify-end -mb-2 mr-10 '>
            <Image 
              src={miniSassy9}
              alt='Mini Sassy 9'
              height={80}
              width={80}
            />           
          </div>
        <AccordionItem className='AccStyle mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='ssscSubHeaderStyle text-pri font-bold'>

                <AccordionButton _expanded={{ bg: '#230A43', color: 'white' }} className='flex flex-row border-4 border-pri p-6'>
                {isExpanded ? (
                    <div className='px-4 py-2 2xl:px-6 border-4 bg-white border-white text-pri rounded-full'>
                      4
                    </div>
                  ) : (
                    <div className='px-4 py-2 2xl:px-6 border-4 border-pri rounded-full'>
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
                <p className='text-pri font-medium p-1 mt-8 mb-4'>There will be Ski / Snowboard trips organized worldwide in the most jaw dropping, deep pow, winter wonderland locations. Bring a friend and meet some awesome new people within the community.</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        </div>
        {/* Item 5 */}
        <div className='flex flex-col -mt-8'>
        <div className='flex justify-start -mb-2 mr-20 '>
            <Image 
              src={miniSassy8}
              alt='Mini Sassy 8'
              height={80}
              width={80}
            />           
          </div>
        <AccordionItem className='AccStyle mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='ssscSubHeaderStyle text-pri font-bold'>

                <AccordionButton _expanded={{ bg: '#230A43', color: 'white' }} className='flex flex-row border-4 border-pri p-6'>
                {isExpanded ? (
                    <div className='px-4 py-2 2xl:px-6 border-4 bg-white border-white text-pri rounded-full'>
                      5
                    </div>
                  ) : (
                    <div className='px-4 py-2 2xl:px-6 border-4 border-pri rounded-full'>
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
                <p className='text-pri font-medium p-1 mt-8 mb-4'>Every month we will be obtaining tickets to mountain sports events & competitions, lift passes, ski and snowboard equipment, WL spots for other NFT projects, discounts on merch and more. Members will be able to obtain raffle tickets using their SASSY points.</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        </div>
        {/* Item 6 */}
        <div className='flex flex-col -mt-8'>
          <div className='flex justify-center -mb-2'>
            <Image 
              src={miniSassy2}
              alt='Mini Sassy 2'
              height={80}
              width={80}
            />           
          </div>
          <div className='flex justify-center -mb-2'>
            <Image 
              src={miniSassy2}
              alt='Mini Sassy 2'
              height={80}
              width={80}
            />           
          </div>
          <AccordionItem className='AccStyle mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='ssscSubHeaderStyle text-pri font-bold'>

                <AccordionButton _expanded={{ bg: '#230A43', color: 'white' }} className='flex flex-row border-4 border-pri p-6'>
                {isExpanded ? (
                    <div className='px-4 py-2 2xl:px-6 border-4 bg-white border-white text-pri rounded-full'>
                      6
                    </div>
                  ) : (
                    <div className='px-4 py-2 2xl:px-6 border-4 border-pri rounded-full'>
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
                <p className='text-pri font-medium p-1 mt-8 mb-4'>A database packed with the best locations, restaurants, hotels, tour guides, instructors, activities and more. Our aim is to provide clear, easy access to information when booking a trip. The directory will be built over time to cover all major mountain towns in the world.</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        </div>
        {/* Item 7 */}
        <div className='flex flex-col -mt-8'>
          <div className='flex 2xl:hidden justify-start lg:justify-end -mb-2'>
            <Image 
              src={miniSassy3}
              alt='Mini Sassy 3'
              height={80}
              width={80}
            />           
          </div>
          <div className='hidden 2xl:flex justify-start lg:justify-end -mb-2'>
            <Image 
              src={miniSassy3}
              alt='Mini Sassy 3'
              height={100}
              width={100}
            />           
          </div>
          <AccordionItem className='AccStyle mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='ssscSubHeaderStyle text-pri font-bold'>

                <AccordionButton _expanded={{ bg: '#230A43', color: 'white' }} className='flex flex-row border-4 border-pri p-6'>
                {isExpanded ? (
                    <div className='px-4 py-2 2xl:px-6 border-4 bg-white border-white text-pri rounded-full'>
                      7
                    </div>
                  ) : (
                    <div className='px-4 py-2 2xl:px-6 border-4 border-pri rounded-full'>
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
                <p className='text-pri font-medium p-1 mt-8 mb-4'>With AR becoming more accessible we will be creating incredible experiences using this technology. Some ideas we have include: Treasure hunts on the mountain, getting your Sassy on skis or a snowboard carving in front of your eyes. We also have big plans that involve using ski/snowboard goggles…</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        </div>
        {/* Item 8 */}
        <div className='flex flex-col -mt-8'>
          <div className='flex 2xl:hidden justify-end lg:justify-start -mb-2'>
            <Image 
              src={miniSassy4}
              alt='Mini Sassy 4'
              height={80}
              width={80}
            />           
          </div>
          <div className='hidden 2xl:flex justify-end lg:justify-start -mb-2'>
            <Image 
              src={miniSassy4}
              alt='Mini Sassy 4'
              height={100}
              width={100}
            />           
          </div>
          <AccordionItem className='AccStyle mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='ssscSubHeaderStyle text-pri font-bold'>

                <AccordionButton _expanded={{ bg: '#230A43', color: 'white' }} className='flex flex-row border-4 border-pri p-6'>
                {isExpanded ? (
                    <div className='px-4 py-2 2xl:px-6 border-4 bg-white border-white text-pri rounded-full'>
                      8
                    </div>
                  ) : (
                    <div className='px-4 py-2 2xl:px-6 border-4 border-pri rounded-full'>
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
                <p className='text-pri font-medium p-1 mt-8 mb-4'>A range of clothing and merchandise using the freshest designs and eco friendly, sustainable and recycled materials where possible. We intend on collaborating with amazing artists, pro athletes and top brands.</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        </div>
        {/* Item 9 */}
        <div className='flex flex-col -mt-8'>
          <div className='flex 2xl:hidden justify-start -mb-2 ml-40'>
            <Image 
              src={miniSassy5}
              alt='Mini Sassy 5'
              height={80}
              width={80}
            />           
          </div>
          <div className='hidden 2xl:flex justify-start -mb-2 ml-40'>
            <Image 
              src={miniSassy5}
              alt='Mini Sassy 5'
              height={100}
              width={100}
            />           
          </div>
          <AccordionItem className='AccStyle mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='ssscSubHeaderStyle text-pri font-bold'>

                <AccordionButton _expanded={{ bg: '#230A43', color: 'white' }} className='flex flex-row border-4 border-pri p-6'>
                {isExpanded ? (
                    <div className='px-4 py-2 2xl:px-6 border-4 bg-white border-white text-pri rounded-full'>
                      9
                    </div>
                  ) : (
                    <div className='px-4 py-2 2xl:px-6 border-4 border-pri rounded-full'>
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
                <p className='text-pri font-medium p-1 mt-8 mb-4'>A mobile app will be developed for IOS and Android. We have many features planned for the app including: GPS for our competitions and games on the mountain, easily obtaining discount codes from our partners, access to the directory, calendar for events, ama calls and meetups.</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        </div>
        {/* Item 10 */}
        <div className='flex flex-col -mt-8'>
          <div className='flex 2xl:hidden justify-end -mb-2 mr-20 '>
            <Image 
              src={miniSassy6}
              alt='Mini Sassy6'
              height={80}
              width={80}
            />           
          </div>
          <div className='hidden 2xl:flex justify-end -mb-2 mr-20 '>
            <Image 
              src={miniSassy6}
              alt='Mini Sassy6'
              height={100}
              width={100}
            />           
          </div>
          <AccordionItem className='AccStyle mb-10'>
          {({ isExpanded }) => (
            <>
              <h2 className='ssscSubHeaderStyle text-pri font-bold'>

                <AccordionButton _expanded={{ bg: '#230A43', color: 'white' }} className='flex flex-row border-4 border-pri p-6'>
                {isExpanded ? (
                    <div className='px-3 py-2 2xl:px-4 border-4 bg-white border-white text-pri rounded-full'>
                      10
                    </div>
                  ) : (
                    <div className='px-3 py-2 2xl:px-4 border-4 border-pri rounded-full'>
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
                <p className='text-pri font-medium p-1 mt-8 mb-4'>{"NFT holders will be able to ‘lodge’ their Shredding Sassy to accrue SASSY points as well as other loyalty rewards. The longer you have your Sassy ‘lodging’ the more rewards you get."}</p> 
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
        </div>



      </Accordion>
    <Footer />
  </div>
)
}

export default sssc







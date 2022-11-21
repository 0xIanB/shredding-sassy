import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import rightSassy from '../assets/rightsassy.png'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'
import Footer from '../components/Footer'

const styles = {
  itemHeader:'font-bold font-mont bg-pri/30 rounded-xl py-4 px-8',
  itemHeaderExpanded:'font-bold font-mont bg-pri/30 rounded-xl rounded-b-none py-4 p-8',
  itemDescription:'font-mont font-medium rounded-xl py-4 px-8 text-pri border-2 -mt-2',
}

const faq = () => {
  return (
    <div>
      <Head>
        <title>Shredding Sassy | FAQ</title>
        <meta name="description" content="Bringing extreme sports to web3. A new kind of brand that we build together, creating unforgettable digital & physical experiences whilst onboarding new users to web3 via sought-after utility." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    <div class='flex w-full justify-center mt-16'>
      <div class='container flex flex-col lg:flex-row-reverse justify-evenly text-pri'>
        <div class='flex flex-col-reverse justify-between '>
        {/* Header */}
        <div class='flex justify-start'>
          <h2 class='faqHeaderStyle font-mont text-pri font-extrabold mb-12 px-8 lg:hidden'>FAQ</h2>
        </div>
        {/* Mobile Sassy */}
        <div class='flex lg:hidden justify-center'>
          <Image
            src={rightSassy}
            alt='Right Sassy'
            width={150}
            height={250}
          />
        </div>
        {/* Large Sassy */}
        <div class='hidden lg:flex items-start justify-start h-[60%] mr-30 2xl:mr-64 mt-10 shrink-0'>
          <Image
            src={rightSassy}
            alt='Right Sassy'
            width={280}
            height={450}
          />
        </div>
          </div>
        {/* Accordion */}
        <div class='faqItemWidth px-8'>
        <h2 class='faqHeaderStyle font-mont text-pri font-extrabold mb-12 hidden lg:flex'>FAQ</h2>
        <Accordion defaultIndex={[11]} allowMultiple>
          <AccordionItem className='mb-2 w-full'>
          {({ isExpanded }) => (
            <>
              {isExpanded ? (
                  <h2 class={`faqItemHeaderStyle ${styles.itemHeaderExpanded} `}>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        What is Shredding Sassy?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  ) : (
                  <h2 class={`faqItemHeaderStyle ${styles.itemHeader} `}>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        What is Shredding Sassy?
                      </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                  )}
              <AccordionPanel pb={4}>
                <p class={`faqItemDescriptionStyle ${styles.itemDescription}`}>A digital collection of 6,200 adrenaline fuelled Sasquatches that reside on Meta Mountain. Shredding Sassy is an extreme sports brand and social club. Using NFTs and web3 technology to pioneer a new kind of brand we build together.</p> 
              </AccordionPanel>
            </>
          )}
          </AccordionItem>
          <AccordionItem className='mb-2 w-full'>
          {({ isExpanded }) => (
            <>
              {isExpanded ? (
                  <h2 class={`faqItemHeaderStyle ${styles.itemHeaderExpanded} `}>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        What is Shredding Sassy’s mission?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  ) : (
                  <h2 class={`faqItemHeaderStyle ${styles.itemHeader} `}>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        What is Shredding Sassy’s mission?
                      </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                  )}
              <AccordionPanel pb={4}>
                <p class={`faqItemDescriptionStyle ${styles.itemDescription}`}>Shredding Sassy is interfusing extreme sports and web3. Think – a decentralized red bull without the energy drink. We are looking to redefine the tangible benefits of NFT ownership and seamlessly onboard a wave of new users to web3.</p> 
              </AccordionPanel>
            </>
          )}
          </AccordionItem>
          <AccordionItem className='mb-2 w-full'>
          {({ isExpanded }) => (
            <>
              {isExpanded ? (
                  <h2 class={`faqItemHeaderStyle ${styles.itemHeaderExpanded} `}>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        Which extreme sports?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  ) : (
                  <h2 class={`faqItemHeaderStyle ${styles.itemHeader} `}>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        Which extreme sports?
                      </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                  )}
              <AccordionPanel pb={4}>
                <p class={`faqItemDescriptionStyle ${styles.itemDescription}`}>Our initial focus is the Ski & Snowboard market worth a cool 189 billion per year with over 132 million people. However, this is just the start, we will be expanding into a number of extreme sports.</p> 
              </AccordionPanel>
            </>
          )}
          </AccordionItem>
          <AccordionItem className='mb-2 w-full'>
          {({ isExpanded }) => (
            <>
              {isExpanded ? (
                  <h2 class={`faqItemHeaderStyle ${styles.itemHeaderExpanded} `}>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        What is the utility of Shredding Sassy?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  ) : (
                  <h2 class={`faqItemHeaderStyle ${styles.itemHeader} `}>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        What is the utility of Shredding Sassy?
                      </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                  )}
              <AccordionPanel pb={4}>
                <p class={`faqItemDescriptionStyle ${styles.itemDescription}`}>Holding a Shredding Sassy NFT will unlock membership to the Shredding Sassy Social Club. An exclusive club with discounts from leading brands, access to pro athletes, loyalty rewards, digital experiences, community trips & more.</p> 
              </AccordionPanel>
            </>
          )}
          </AccordionItem>
          <AccordionItem className='mb-2 w-full'>
          {({ isExpanded }) => (
            <>
              {isExpanded ? (
                  <h2 class={`faqItemHeaderStyle ${styles.itemHeaderExpanded} `}>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        What are the mint proceeds being used for?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  ) : (
                  <h2 class={`faqItemHeaderStyle ${styles.itemHeader} `}>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        What are the mint proceeds being used for?
                      </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                  )}
              <AccordionPanel pb={4}>
                <p class={`faqItemDescriptionStyle ${styles.itemDescription}`}>The founders will not be taking any compensation from the mint. All funds will be used to grow the brand. This includes: building products & utility, developing software, sponsoring athletes, organizing events and marketing the SSSC.</p> 
              </AccordionPanel>
            </>
          )}
          </AccordionItem>
          <AccordionItem className='mb-2 w-full'>
          {({ isExpanded }) => (
            <>
              {isExpanded ? (
                  <h2 class={`faqItemHeaderStyle ${styles.itemHeaderExpanded} `}>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        Is this just for Skiers & Snowboarders?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  ) : (
                  <h2 class={`faqItemHeaderStyle ${styles.itemHeader} `}>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        Is this just for Skiers & Snowboarders?
                      </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                  )}
              <AccordionPanel pb={4}>
                <p class={`faqItemDescriptionStyle ${styles.itemDescription}`}>No. We are growing a community of people that align with Shredding Sassy’s vision. We believe the on-ramp for mass adoption into web3 is providing tangible, real world benefits and utility.</p> 
              </AccordionPanel>
            </>
          )}
          </AccordionItem>
          <AccordionItem className='mb-2 w-full'>
          {({ isExpanded }) => (
            <>
              {isExpanded ? (
                  <h2 class={`faqItemHeaderStyle ${styles.itemHeaderExpanded} `}>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        When is the mint?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  ) : (
                  <h2 class={`faqItemHeaderStyle ${styles.itemHeader} `}>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        When is the mint?
                      </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                  )}
              <AccordionPanel pb={4}>
                <p class={`faqItemDescriptionStyle ${styles.itemDescription}`}>We are looking to mint in mid December. The mint date will be announced closer to the time on our official Twitter and Discord server.</p> 
              </AccordionPanel>
            </>
          )}
          </AccordionItem>
          <AccordionItem className='mb-2 w-full'>
          {({ isExpanded }) => (
            <>
              {isExpanded ? (
                  <h2 class={`faqItemHeaderStyle ${styles.itemHeaderExpanded} `}>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        What is the mint price?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  ) : (
                  <h2 class={`faqItemHeaderStyle ${styles.itemHeader} `}>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        What is the mint price?
                      </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                  )}
              <AccordionPanel pb={4}>
                <p class={`faqItemDescriptionStyle ${styles.itemDescription}`}>TBC</p> 
              </AccordionPanel>
            </>
          )}
          </AccordionItem>
          <AccordionItem className='mb-2 w-full'>
          {({ isExpanded }) => (
            <>
              {isExpanded ? (
                  <h2 class={`faqItemHeaderStyle ${styles.itemHeaderExpanded} `}>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        What is the Mountain List?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  ) : (
                  <h2 class={`faqItemHeaderStyle ${styles.itemHeader} `}>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        What is the Mountain List?
                      </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                  )}
              <AccordionPanel pb={4}>
                <p class={`faqItemDescriptionStyle ${styles.itemDescription}`}>The Mountain-List is our whitelist / allowlist for the NFT mint. Getting on this list entitles you to 1 discounted mint.</p> 
              </AccordionPanel>
            </>
          )}
          </AccordionItem>
          <AccordionItem className='mb-2 w-full'>
          {({ isExpanded }) => (
            <>
              {isExpanded ? (
                  <h2 class={`faqItemHeaderStyle ${styles.itemHeaderExpanded} `}>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        Will there be rare ones?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  ) : (
                  <h2 class={`faqItemHeaderStyle ${styles.itemHeader} `}>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        Will there be rare ones?
                      </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                  )}
              <AccordionPanel pb={4}>
                <p class={`faqItemDescriptionStyle ${styles.itemDescription}`}>You bet.</p> 
              </AccordionPanel>
            </>
          )}
          </AccordionItem>
        </Accordion>
        </div>  
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default faq


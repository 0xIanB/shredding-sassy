import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import shredders from '../assets/shredders.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/iglink.png'
import josh from '../assets/josh.png'
import raab from '../assets/raab.png'
import ollie from '../assets/ollie.png'
import jake from '../assets/jake.png'
import joshsassy from '../assets/joshsassy.png'
import jakesassy from '../assets/jakesassy.png'
import olliesassy from '../assets/olliesassy.png'
import raabsassy from '../assets/raabsassy.png'
import franksassy from '../assets/franksassy.png'
import jaysassy from '../assets/jaysassy.png'
import tylersassy from '../assets/tylersassy.png'
import iansassy from '../assets/iansassy.png'
import natesassy from '../assets/natesassy.png'
import toondsassy from '../assets/toondsassy.png'
import ragensassy from '../assets/ragensassy.png'
import leftsassy from '../assets/leftsassy.png'
import rightsassy from '../assets/rightsassy.png'
import ben from '../assets/ben.png'
import garrett from '../assets/garrett.png'
import james from '../assets/james.png'
import noah from '../assets/noah.png'
import karel from '../assets/karel.png'
import tyler from '../assets/tyler.png'
import jonjoe from '../assets/jonjoe.png'
import zach from '../assets/zach.png'
import keith from '../assets/keith.png'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Marquee from 'react-fast-marquee'
import absolute from '../assets/absolute.png'
import dynastar from '../assets/dynastar.png'
import faction from '../assets/faction.png'
import panda from '../assets/panda.png'
import shaggys from '../assets/shaggys.png'
import shred from '../assets/shred.png'
import skibro from '../assets/skibro.png'
import planks from '../assets/planks.png'
import ellis from '../assets/ellis.png'
import facefreeze from '../assets/facefreeze.png'
import fatmap from '../assets/fatmap.png'
import futureproof from '../assets/futureproof.png'
import gilson from '../assets/gilson.png'
import nuco from '../assets/nuco.png'
import skiyodl from '../assets/skiyodl.png'
import unrevealed from '../assets/unrevealed.png'
import erna from '../assets/erna.png'

const styles = {
  bodyText:'font-medium text-pri',
  sectionHeader:'font-bold text-pri',
  coreCard: 'flex flex-col mr-2 lg:mr-3 xl:mr-4 ml-2 mb-56 lg:mb-[200px] xl:mb-[300px] 2xl:mb-[500px] 3xl:mb-[700px] shrink-0',
  proCard: 'flex flex-col mr-2 lg:mr-4 xl:mr-8 ml-2 mb-2 lg:mb-20 shrink-0',
  coreHeader: 'uppercase font-bold text-pri',
  proHeader: 'uppercase font-bold text-pri',
  infoContainer: 'flex flex-row items-start py-2 justify-between',
  coreSubHeader: 'uppercase font-bold 2xl:pl-1',
  twitterLogo: 'flex cursor-pointer pt-2 lg:pt-3 2xl:pt-4 3xl:pt-6',
  cardReveal: 'invisible lg:visible absolute z-0 hover:z-20',
  igBlock: 'flex cursor-pointer pt-1 lg:pt-2 2xl:pt-4',
  proIGBlock: 'flex cursor-pointer pt-2 lg:pt-2 2xl:pt-4',
  marqueecontainer: 'scroll-hidden w-full',
  marquee:'flex pb-20',
  imageBox: 'flex items-center border-[4px] 2xl:border-[6.5px] border-black mr-10 cursor-pointer'
}

const team = () => {
  return (
    <div className='flex flex-col text-pri font-body'>
      <Head>
        <title>Shredding Sassy | Team</title>        
        <meta name="description" content="Bringing extreme sports to web3. A new kind of brand that we build together, creating unforgettable digital & physical experiences whilst onboarding new users to web3 via sought-after utility." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
        <div className='flex flex-col justify-center xl:ml-12 2xl:ml-44'>

        {/* Header */}
        <div className='flex flex-col md:flex-row px-4 mt-20 justify-between text-pri'> 
          {/* Left Side */}
          <div className='flex flex-col xl:w-1/2 space-y-8'>
            {/* Title */}
              <div className='flex 2xl:hidden justify-center lg:justify-start shrink-0'>
                <Image
                  src={shredders}
                  alt='Team Shredders'
                  width={700}
                  height={100}
                >
                </Image>
              </div>
              <div className='hidden 2xl:flex justify-center lg:justify-start shrink-0'>
                <Image
                  src={shredders}
                  alt='Team Shredders'
                  width={1050}
                  height={150}
                >
                </Image>
              </div>
            {/* Info */}
            <div className='flex flex-col mx-6 md:ml-[65px] lg:ml-20 space-y-8 lg:mr-20 text-center lg:text-left'>
              <p className={`mainBodyTextStyle ${styles.bodyText}`}>The core team is based in Europe - a bunch of adrenaline junkies with backgrounds in project management, marketing, branding, e-commerce and crypto.</p>
              <p className={`mainBodyTextStyle ${styles.bodyText}`}>Pioneering a new kind of brand that we build together.</p>
            </div>
          </div>
          {/* Right Side */}
          <div className='hidden lg:inline-flex mr-20 2xl:mr-64 items-center mt-18 -mb-20'>
            {/* Sassy 1 */}
            <div className='teamTopSassyStyle -mr-[110px] xl:-mr-[130px] 2xl:-mr-[150px]'>
              <Image
                src={leftsassy}
                alt='Left Sassy'
                objectFit='fill'
              >
              </Image>
            </div>
            {/* Sassy 2 */}
            <div className='teamTopSassyStyle'>
              <Image
                src={rightsassy}
                alt='Right Sassy'
                objectFit='fill'
              >
              </Image>
            </div>
          </div>
        </div>
        {/* Core Team */}
        <div className='flex flex-col mx-2 md:mx-4 lg:mx-2 mt-20 lg:mt-8 text-pri lg:pb-10'>
        {/* Title */}
        <div className='flex flex-col items-center lg:items-start mx-20 mb-8 lg:pl-2'>
          <h1 className={`mainBodySubHeaderStyle ${styles.sectionHeader}`}>Core Team</h1>
        </div> 
          {/* Team Cards */}
          <div className='flex flex-row flex-wrap justify-center lg:justify-start lg:mx-20'>
            {/* Card */}
            <div className={`cardStyle ${styles.coreCard}`}>
              {/* Image */}
              <div className='cardImageStyle z-10 hover:z-[-100]'>
                <Image
                  src={joshsassy}
                  alt='Josh Sassy'
                  objectFit='fill'
                >
                </Image>
              </div>
              <div className={`cardImageStyle ${styles.cardReveal}`}>
                <Image
                  src={josh}
                  alt='Josh'
                  objectFit='fill'
                >
                </Image>
              </div>
              {/* Info */}
              <div className={styles.infoContainer}>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className={`coreSubHeaderStyle ${styles.coreHeader}`}>josh</h1>
                    <h1 className={`coreSubSubHeaderStyle ${styles.coreSubHeader}`}>co-founder</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className={`coreTwitterStyle ${styles.twitterLogo}`}>
                  <a
                    href='https://twitter.com/_odyssey6'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <Image
                      src={twitter}
                      alt='Twitter Logo'
                      objectFit='fill'
                    >
                    </Image>
                  </a>
                </div>
              </div>
              {/* Description */}
              <div className='flex'>
                <p className='teamTextStyle'>Father, passionate Skier and Mountain Biker. Josh has a digital marketing, branding and ecommerce background. Over the last 12 years he has launched, successfully ran and sold a number of online businesses. </p>
              </div>
            </div>
            {/* Card */}
            <div className={`cardStyle ${styles.coreCard}`}>
              {/* Image */}
              <div className='cardImageStyle z-10 hover:z-[-100]'>
                <Image
                  src={jakesassy}
                  alt='Jake Sassy'
                  objectFit='fill'
                >
                </Image>
              </div>
              <div className={`cardImageStyle ${styles.cardReveal}`}>
                <Image
                  src={jake}
                  alt='Jake'
                  objectFit='fill'
                >
                </Image>
              </div>
              {/* Info */}
              <div className={styles.infoContainer}>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className={`coreSubHeaderStyle ${styles.coreHeader}`}>jake</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className={`coreSubSubHeaderStyle ${styles.coreSubHeader}`}>co-founder</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className={`coreTwitterStyle ${styles.twitterLogo}`}>                  
                <a
                    href='https://twitter.com/PepePeddler'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <Image
                      src={twitter}
                      alt='Twitter Logo'
                      objectFit='fill'
                    >
                    </Image>
                  </a>
                </div>

              </div>
              {/* Description */}
              <div className='flex'>
                <p className='teamTextStyle'>A lifelong recreational skier with over 10 years experience in design, marketing and branding ecommerce businesses. In the crypto space since 2017 and and has been involved with community NFT art collections as both a creator and builder. </p>
              </div>
            </div>
            {/* Card */}
            <div className={`cardStyle ${styles.coreCard}`}>              
            {/* Image */}
              <div className='cardImageStyle z-10 hover:z-[-100]'>
                <Image
                  src={olliesassy}
                  alt='Ollie Sassy'
                  objectFit='fill'
                >
                </Image>
              </div>
              <div className={`cardImageStyle ${styles.cardReveal}`}>
                <Image
                  src={ollie}
                  alt='Ollie'
                  objectFit='fill'
                >
                </Image>
              </div>
              {/* Info */}
              <div className={styles.infoContainer}>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className={`coreSubHeaderStyle ${styles.coreHeader}`}>ollie</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className={`coreSubSubHeaderStyle ${styles.coreSubHeader}`}>co-founder</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className={`proIGStyle ${styles.proIGBlock}`}>
                  <a
                    href='https://www.instagram.com/olliemx131'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <Image
                      src={instagram}
                      alt='Instagram Logo'
                      objectFit='fill'
                    >
                    </Image>
                  </a>
                </div>

              </div>
              {/* Description */}
              <div className='flex'>
                <p className='teamTextStyle'>{"Ollie is a Paralympic Snowboarder and extreme sports junkie. He joined Team GB after losing his leg in December 2018 and at the Beijing 2022 Paralympic winter games won Britain's first medal in snowboarding with a Bronze medal in Banked Slalom. "}</p>
              </div>
            </div>
            {/* Card */}
            <div className={`cardStyle ${styles.coreCard}`}>             
             {/* Image */}
              <div className='cardImageStyle z-10 hover:z-[-100]'>
                <Image
                  src={raabsassy}
                  alt='Raab Sassy'
                  objectFit='fill'
                >
                </Image>
              </div>
              <div className={`cardImageStyle ${styles.cardReveal}`}>
                <Image
                  src={raab}
                  alt='Raab'
                  objectFit='fill'
                >
                </Image>
              </div>
              {/* Info */}
              <div className={styles.infoContainer}>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className={`coreSubHeaderStyle ${styles.coreHeader}`}>raab</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className={`coreSubSubHeaderStyle ${styles.coreSubHeader}`}>co-founder</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className={`coreTwitterStyle ${styles.twitterLogo}`}>                  
                <a
                    href='https://twitter.com/Raabsk1'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <Image
                      src={twitter}
                      alt='Twitter Logo'
                      objectFit='fill'
                    >
                    </Image>
                  </a>
                </div>
              </div>
              {/* Description */}
              <div className='flex'>
                <p className='teamTextStyle'>Professional Ski Guide, Crypto enthusiast & GastroPub owner. Over 14 years guiding throughout Europe. He owns a ski school, travel agency and a Michelin GastroPub. With 6 years experience in the crypto & NFT space. </p>
              </div>
            </div>
            {/* Card */}
            <div className={`cardStyle ${styles.coreCard}`}> 
              {/* Image */}
              <div>
                <Image
                  src={franksassy}
                  alt='Frank Sassy'
                  objectFit='fill'
                >
                </Image>
              </div>
              {/* Info */}
              <div className={styles.infoContainer}>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className={`coreSubHeaderStyle ${styles.coreHeader}`}>frank</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className={`coreSubSubHeaderStyle ${styles.coreSubHeader}`}>lead illustrator</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className={`coreTwitterStyle ${styles.twitterLogo}`}>                  
                <a
                    href='https://twitter.com/hellomstrfrnk'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <Image
                      src={twitter}
                      alt='Twitter Logo'
                      objectFit='fill'
                    >
                    </Image>
                  </a>
                </div>

              </div>
              {/* Description */}
              <div className='flex'>
                <p className='teamTextStyle'>Frank runs a multidisciplinary creative studio focused on illustration & animation, located in Cape Town, South Africa. He has worked with large brands such as Nike, Reebok and Kelloggs and uses this experience to bring the Sassys to life.</p>
              </div>
            </div>
            {/* Card */}
            <div className={`cardStyle ${styles.coreCard}`}> 
              {/* Image */}
              <div>
                <Image
                  src={jaysassy}
                  alt='Jay Sassy'
                  objectFit='fill'
                >
                </Image>
              </div>
              {/* Info */}
              <div className={styles.infoContainer}>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className={`coreSubHeaderStyle ${styles.coreHeader}`}>jay</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className={`coreSubSubHeaderStyle ${styles.coreSubHeader}`}>marketing</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className={`coreTwitterStyle ${styles.twitterLogo}`}>                  
                <a
                    href='https://twitter.com/jaybird_nft'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <Image
                      src={twitter}
                      alt='Twitter Logo'
                      objectFit='fill'
                    >
                    </Image>
                  </a>
                </div>

              </div>
              {/* Description */}
              <div className='flex'>
                <p className='teamTextStyle'>{"Find Jay making a friend on the chairlift or shredding fresh pow in Whistler, Canada. Or find him down the NFT rabbit hole as the co-host of the Web3 Academy podcast. Over 20 years working across disciplines - from branding, customer acquisition, tech, and strategy - he's guided digital products to scale to a global audience."}</p>
              </div>
            </div>
            {/* Card */}
            <div className={`cardStyle ${styles.coreCard}`}> 
              {/* Image */}
              <div>
                <Image
                  src={tylersassy}
                  alt='Tyler Sassy'
                  objectFit='fill'
                >
                </Image>
              </div>
              {/* Info */}
              <div className={styles.infoContainer}>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className={`coreSubHeaderStyle ${styles.coreHeader}`}>tyler</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className={`coreSubSubHeaderStyle ${styles.coreSubHeader}`}>web design</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className={`coreTwitterStyle ${styles.twitterLogo}`}>                  
                <a
                    href='https://twitter.com/t_gal11'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <Image
                      src={twitter}
                      alt='Twitter Logo'
                      objectFit='fill'
                    >
                    </Image>
                  </a>
                </div>

              </div>
              {/* Description */}
              <div className='flex'>
                <p className='teamTextStyle'>{"Tyler is a 'has been' snowboarder but now enjoys surfing, photography and a good beer every now and then. He's a web designer at ImpactDM specializing in web3 projects and has over 5 years of creative experience with building websites, graphic design and video editing. He's been involved in the crypto space since 2020."}</p>
              </div>
            </div>
            {/* Card */}
            <div className={`cardStyle ${styles.coreCard}`}> 
              {/* Image */}
              <div>
                <Image
                  src={iansassy}
                  alt='Ian Sassy'
                  objectFit='fill'
                >
                </Image>
              </div>
              {/* Info */}
              <div className={styles.infoContainer}>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className={`coreSubHeaderStyle ${styles.coreHeader}`}>I??N</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className={`coreSubSubHeaderStyle ${styles.coreSubHeader}`}>Engineer</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className={`coreTwitterStyle ${styles.twitterLogo}`}>                  
                <a
                    href='https://twitter.com/0xIanB'
                    rel='noreferrer'
                    target='_blank'

                  >
                    <Image
                      src={twitter}
                      alt='Twitter Logo'
                      objectFit='fill'
                    >
                    </Image>
                  </a>
                </div>

              </div>
              {/* Description */}
              <div className='flex'>
                <p className='teamTextStyle'>{"Fmr. Countintelligence Agent turned Blockchain Security Researcher. In his spare time, he enjoys building unique projects using blockchain technology."} </p>
              </div>
            </div>
            {/* Card */}
            <div className={`cardStyle ${styles.coreCard}`}> 
              {/* Image */}
              <div>
                <Image
                  src={natesassy}
                  alt='Nate Sassy'
                  objectFit='fill'
                >
                </Image>
              </div>
              {/* Info */}
              <div className={styles.infoContainer}>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className={`coreSubHeaderStyle ${styles.coreHeader}`}>nate</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className={`coreSubSubHeaderStyle ${styles.coreSubHeader}`}>storytelling</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className={`coreTwitterStyle ${styles.twitterLogo}`}>                  
                <a
                    href='https://twitter.com/n8amis1'
                    rel='noreferrer'
                    target='_blank'

                  >
                    <Image
                      src={twitter}
                      alt='Twitter Logo'
                      objectFit='fill'
                    >
                    </Image>
                  </a>
                </div>

              </div>
              {/* Description */}
              <div className='flex'>
                <p className='teamTextStyle'>Nate???s primary interests lie in utilizing his background in journalism and copywriting to explore NFTs as a vehicle for world-building and harnessing Web3 technology to redefine how we tell stories. His passions include his family, canyoneering, and rock climbing in the American West.</p>
              </div>
            </div>
            {/* Card */}
            <div className={`cardStyle ${styles.coreCard}`}> 
              {/* Image */}
              <div>
                <Image
                  src={toondsassy}
                  alt='Toond Sassy'
                  objectFit='fill'
                >
                </Image>
              </div>
              {/* Info */}
              <div className={styles.infoContainer}>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className={`coreSubHeaderStyle ${styles.coreHeader}`}>toond</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className={`coreSubSubHeaderStyle ${styles.coreSubHeader}`}>concept artist</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className={`coreTwitterStyle ${styles.twitterLogo}`}>                  
                {/* Future Link Here */}
                </div>

              </div>
              {/* Description */}
              <div className='flex'>
                <p className='teamTextStyle'>Toond is an experienced illustrator and specialist in digital drawing, he enjoys creating characters and has a passion for comic books and manga. </p>
              </div>
            </div>
            {/* Card */}
            <div className={`cardStyle ${styles.coreCard}`}> 
              {/* Image */}
              <div>
                <Image
                  src={ragensassy}
                  alt='Ragen Sassy'
                  objectFit='fill'
                >
                </Image>
              </div>
              {/* Info */}
              <div className={styles.infoContainer}>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className={`coreSubHeaderStyle ${styles.coreHeader}`}>ragen</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className={`coreSubSubHeaderStyle ${styles.coreSubHeader}`}>animator</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className={`coreTwitterStyle ${styles.twitterLogo}`}>                  
                {/* Future Link Here */}
                </div>

              </div>
              {/* Description */}
              <div className='flex'>
                <p className='teamTextStyle'>With over 10 years experience in illustration and animation Ragen is passionate and loves his craft. He has worked with a number of leading brands to deliver stunning animated characters and videos.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pros & Ambassadors */}
        <div className='flex flex-col md:mx-4 lg:mx-2 mt-4 text-pri'>
        {/* Title */}
        <div className='flex flex-col items-center text-center lg:items-start mx-20 mb-8 lg:pl-2'>
          <h1 className={`mainBodySubHeaderStyle ${styles.sectionHeader}`}>Pros & Ambassadors</h1>
        </div> 
          {/* Pro Cards */}
          <div className='flex flex-row flex-wrap justify-center lg:justify-start lg:mx-20'>
            {/* Card */}
            <div className={`proCardStyle ${styles.proCard}`}> 
              {/* Image */}
              <div>
                <Image
                  src={ben}
                  alt='Ben'
                  objectFit='fill'
                >
                </Image>
              </div>
              {/* Info */}
              <div className={styles.infoContainer}>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className={`proSubHeaderStyle ${styles.proHeader}`}>ben</h1>
                  </div>
                  <div>
                    <h1 className={`proSubHeaderStyle ${styles.proHeader}`}>tudhope</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className={`proSubSubHeaderStyle ${styles.coreSubHeader}`}>snowboarder</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className={`proIGStyle  ${styles.igBlock}`}>
                  <a
                    href='https://www.instagram.com/bentudhope'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <Image
                      src={instagram}
                      alt='Instagram Logo'
                      objectFit='fill'
                    >
                    </Image>
                  </a>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className={`proCardStyle  ${styles.proCard}`}> 
              {/* Image */}
              <div>
                <Image
                  src={garrett}
                  alt='Garrett'
                  objectFit='fill'
                >
                </Image>
              </div>
              {/* Info */}
              <div className={styles.infoContainer}>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className={`proSubHeaderStyle ${styles.proHeader}`}>garrett</h1>
                  </div>
                  <div>
                    <h1 className={`proSubHeaderStyle ${styles.proHeader}`}>geros</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className={`proSubSubHeaderStyle ${styles.coreSubHeader}`}>snowboarder</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className={`proIGStyle  ${styles.igBlock}`}>               
                <a
                    href='https://www.instagram.com/garrettgeros22'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <Image
                      src={instagram}
                      alt='Instagram Logo'
                      objectFit='fill'
                    >
                    </Image>
                  </a>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className={`proCardStyle  ${styles.proCard}`}>  
              {/* Image */}
              <div>
                <Image
                  src={james}
                  alt='James'
                  objectFit='fill'
                >
                </Image>
              </div>
              {/* Info */}
              <div className={styles.infoContainer}>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className={`proSubHeaderStyle ${styles.proHeader}`}>james</h1>
                  </div>
                  <div>
                    <h1 className={`proSubHeaderStyle ${styles.proHeader}`}>barnes-miller</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className={`proSubSubHeaderStyle ${styles.coreSubHeader}`}>snowboarder</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className={`proIGStyle  ${styles.igBlock}`}>                
                <a
                    href='https://www.instagram.com/stubbergram'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <Image
                      src={instagram}
                      alt='Instagram Logo'
                      objectFit='fill'
                    >
                    </Image>
                  </a>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className={`proCardStyle ${styles.proCard}`}> 
              {/* Image */}
              <div>
                <Image
                  src={jonjoe}
                  alt='JonJoe'
                  objectFit='fill'
                >
                </Image>
              </div>
              {/* Info */}
              <div className={styles.infoContainer}>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className={`proSubHeaderStyle ${styles.proHeader}`}>jonjoe</h1>
                  </div>
                  <div>
                    <h1 className={`proSubHeaderStyle ${styles.proHeader}`}>boulter</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className={`proSubSubHeaderStyle ${styles.coreSubHeader}`}>snowboarder</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className={`proIGStyle  ${styles.igBlock}`}>               
                <a
                    href='https://www.instagram.com/jonjoeboulter'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <Image
                      src={instagram}
                      alt='Instagram Logo'
                      objectFit='fill'
                    >
                    </Image>
                  </a>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className={`proCardStyle ${styles.proCard}`}> 
              {/* Image */}
              <div>
                <Image
                  src={karel}
                  alt='Karel'
                  objectFit='fill'
                >
                </Image>
              </div>
              {/* Info */}
              <div className={styles.infoContainer}>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className={`proSubHeaderStyle ${styles.proHeader}`}>karel</h1>
                  </div>
                  <div>
                    <h1 className={`proSubHeaderStyle ${styles.proHeader}`}>van goor</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className={`proSubSubHeaderStyle ${styles.coreSubHeader}`}>snowboarder</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className={`proIGStyle  ${styles.igBlock}`}>               
                <a
                    href='https://www.instagram.com/karelvangoor'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <Image
                      src={instagram}
                      alt='Instagram Logo'
                      objectFit='fill'
                    >
                    </Image>
                  </a>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className={`proCardStyle ${styles.proCard}`}> 
              {/* Image */}
              <div>
                <Image
                  src={keith}
                  alt='Keith'
                  objectFit='fill'
                >
                </Image>
              </div>
              {/* Info */}
              <div className={styles.infoContainer}>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                  <h1 className={`proSubHeaderStyle ${styles.proHeader}`}>keith</h1>
                  </div>
                  <div>
                  <h1 className={`proSubHeaderStyle ${styles.proHeader}`}>gabel</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className={`proSubSubHeaderStyle ${styles.coreSubHeader}`}>snowboarder</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className={`proIGStyle  ${styles.igBlock}`}>               
                <a
                    href='https://www.instagram.com/grizzlygabel'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <Image
                      src={instagram}
                      alt='Instagram Logo'
                      objectFit='fill'
                    >
                    </Image>
                  </a>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className={`proCardStyle ${styles.proCard}`}> 
              {/* Image */}
              <div>
                <Image
                  src={noah}
                  alt='Noah'
                  objectFit='fill'
                >
                </Image>
              </div>
              {/* Info */}
              <div className={styles.infoContainer}>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className={`proSubHeaderStyle ${styles.proHeader}`}>noah </h1>
                  </div>
                  <div>
                    <h1 className={`proSubHeaderStyle ${styles.proHeader}`}>elliot</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className={`proSubSubHeaderStyle ${styles.coreSubHeader}`}>snowboarder</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className={`proIGStyle  ${styles.igBlock}`}>                
                <a
                    href='https://www.instagram.com/elliott_sendy'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <Image
                      src={instagram}
                      alt='Instagram Logo'
                      objectFit='fill'
                    >
                    </Image>
                  </a>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className={`proCardStyle ${styles.proCard}`}> 
              {/* Image */}
              <div>
                <Image
                  src={tyler}
                  alt='Tyler'
                  objectFit='fill'
                >
                </Image>
              </div>
              {/* Info */}
              <div className={styles.infoContainer}>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className={`proSubHeaderStyle ${styles.proHeader}`}>tyler</h1>
                  </div>
                  <div>
                    <h1 className={`proSubHeaderStyle ${styles.proHeader}`}>burdick</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className={`proSubSubHeaderStyle ${styles.coreSubHeader}`}>snowboarder</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className={`proIGStyle  ${styles.igBlock}`}>              
                <a
                    href='https://www.instagram.com/doctburdick'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <Image
                      src={instagram}
                      alt='Instagram Logo'
                      objectFit='fill'
                    >
                    </Image>
                  </a>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className={`proCardStyle ${styles.proCard}`}> 
              {/* Image */}
              <div>
                <Image
                  src={zach}
                  alt='Zach'
                  objectFit='fill'
                >
                </Image>
              </div>
              {/* Info */}
              <div className={styles.infoContainer}>
                {/* Left Side */}
                <div>
                  {/* Name */}
                  <div>
                    <h1 className={`proSubHeaderStyle ${styles.proHeader}`}>zach</h1>
                  </div>
                  <div>
                    <h1 className={`proSubHeaderStyle ${styles.proHeader}`}>miller</h1>
                  </div>
                  {/* Title */}
                  <div>
                    <h1 className={`proSubSubHeaderStyle ${styles.coreSubHeader}`}>snowboarder</h1>
                  </div>
                </div>
                {/* Right Side */}
                <div className={`proIGStyle  ${styles.igBlock}`}>                 
                <a
                    href='https://www.instagram.com/themountainmiller'
                    rel='noreferrer'
                    target='_blank'
                  >
                    <Image
                      src={instagram}
                      alt='Instagram Logo'
                      objectFit='fill'
                    >
                    </Image>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Partners */}
        <div className='flex flex-col items-center lg:items-start mt-8'>
          {/* Title */}
          <div className='flex flex-col items-center lg:items-start mx-20 mb-8 lg:pl-3'>
            <h1 className={`mainBodySubHeaderStyle ${styles.sectionHeader}`}>Partners</h1>
          </div> 
        </div>
      </div>
          {/* Partner Cards */}
          <div className={styles.marqueecontainer}>
          {/* Desktop */}
          <div className={styles.marquee}>
            <Marquee gradientWidth='0' speed={50}>
              <div className={`partnerStyle ${styles.imageBox}`}>
                <Image
                  src={absolute}
                  alt='Absolute-Snow'
                  objectFit='fill'
                />
              </div>
              <div className={`partnerStyle ${styles.imageBox}`}>
                <Image
                  src={dynastar}
                  alt='Dynastar'
                  objectFit='fill'
                />
              </div>        
              <div className={`partnerStyle ${styles.imageBox}`}>
                <Image
                  src={unrevealed}
                  alt='Unrevealed'
                  objectFit='fill'
                />
              </div>        
              <div className={`partnerStyle ${styles.imageBox}`}>
                <Image
                  src={faction}
                  alt='Faction'
                  objectFit='fill'
                />
              </div>        
              <div className={`partnerStyle ${styles.imageBox}`}>
                <Image
                  src={panda}
                  alt='Panda'
                  objectFit='fill'
                />
              </div>         
              <div className={`partnerStyle ${styles.imageBox}`}>
                <Image
                  src={shaggys}
                  alt='Shaggys'
                  objectFit='fill'
                />
              </div> 
              <div className={`partnerStyle ${styles.imageBox}`}>
                <Image
                  src={unrevealed}
                  alt='Unrevealed'
                  objectFit='fill'
                />
              </div>       
              <div className={`partnerStyle ${styles.imageBox}`}>
                <Image
                  src={shred}
                  alt='Shred'
                  objectFit='fill'
                />
              </div>        
              <div className={`partnerStyle ${styles.imageBox}`}>
                <Image
                  src={skibro}
                  alt='Ski Bro'
                  objectFit='fill'
                />
              </div>       
              <div className={`partnerStyle ${styles.imageBox}`}>
                <Image
                  src={planks}
                  alt='Planks'
                  objectFit='fill'
                />
              </div>
              <div className={`partnerStyle ${styles.imageBox}`}>
                <Image
                  src={unrevealed}
                  alt='Unrevealed'
                  objectFit='fill'
                />
              </div> 
              <div className={`partnerStyle ${styles.imageBox}`}>
                <Image
                  src={skiyodl}
                  alt='Ski Yodl'
                  objectFit='fill'
                />
              </div>
              <div className={`partnerStyle ${styles.imageBox}`}>
                <Image
                  src={fatmap}
                  alt='Fatmap'
                  objectFit='fill'
                />
              </div>
              <div className={`partnerStyle ${styles.imageBox}`}>
                <Image
                  src={nuco}
                  alt='Nuco'
                  objectFit='fill'
                />
              </div>    
              <div className={`partnerStyle ${styles.imageBox}`}>
                <Image
                  src={unrevealed}
                  alt='Unrevealed'
                  objectFit='fill'
                />
              </div>    
              <div className={`partnerStyle ${styles.imageBox}`}>
                <Image
                  src={erna}
                  alt='Erna Low'
                  objectFit='fill'
                />
              </div>     
              <div className={`partnerStyle ${styles.imageBox}`}>
                <Image
                  src={futureproof}
                  alt='Future Proof'
                  objectFit='fill'
                />
              </div> 
              <div className={`partnerStyle ${styles.imageBox}`}>
                <Image
                  src={unrevealed}
                  alt='Unrevealed'
                  objectFit='fill'
                />
              </div>  
              <div className={`partnerStyle ${styles.imageBox}`}>
                <Image
                  src={ellis}
                  alt='Ellis Brigham'
                  objectFit='fill'
                />
              </div> 
              <div className={`partnerStyle ${styles.imageBox}`}>
                <Image
                  src={gilson}
                  alt='Gilson'
                  objectFit='fill'
                />
              </div> 
              <div className={`partnerStyle ${styles.imageBox}`}>
                <Image
                  src={unrevealed}
                  alt='Unrevealed'
                  objectFit='fill'
                />
              </div>  
              <div className={`partnerStyle ${styles.imageBox}`}>
                <Image
                  src={facefreeze}
                  alt='Face Freeze'
                  objectFit='fill'
                />
              </div> 
            </Marquee>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default team
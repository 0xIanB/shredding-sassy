import React,{ Component } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import trailMap from '../assets/trailmap.png'
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
      <div className='lg:hidden'>
        <div className='flex-col items-center text-center text-pri'>
          <h1 className='font-bold font-mont text-2xl pt-4 pb-2 '>Welcome to Meta Mountain</h1>
          <p className='text-sm font-medium pb-4'>Interact with the Trail Map using pinch zoom and explore.</p>
        </div>
        <Image
          src={trailMap}
          alt='Trail Map'
        >
        </Image>
      </div>
      <div className='invisible lg:visible'>
        <div className='flex flex-col items-center text-center text-pri'>
          <h1 className='font-bold font-mont text-4xl py-4'>Welcome to Meta Mountain</h1>
          <p className='text-md font-medium pb-2'>Interact with the Trail Map by either using the buttons below & scrollbar or with your mouse & scroll wheel.</p>
        </div>
        <TransformWrapper
            initialScale={1}
          >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <React.Fragment>
                <div className="flex flex-row justify-center space-x-4 z-0 mt-2 mb-2">
                  <button
                    className='bg-pri text-white py-2 px-4 rounded-sm text-mont font-semibold' 
                    onClick={() => zoomIn()}
                  >
                    Zoom In
                  </button>
                  <button 
                    className='bg-pri text-white py-2 px-4 rounded-sm text-mont font-semibold'
                    onClick={() => zoomOut()}
                  >
                    Zoom Out
                  </button>
                  <button 
                    className='bg-pri text-white py-2 px-4 rounded-sm text-mont font-semibold'
                    onClick={() => resetTransform()}
                  >
                    Reset
                  </button>
                </div>
                <TransformComponent>
                  <div className='hover:cursor-all-scroll'>
                    <Image
                      src={trailMap}
                      alt='Trail Map'
                    >
                    </Image>
                  </div>
                </TransformComponent>
                <div className=" invisible lg:visible flex flex-row justify-center space-x-4 z-0 mt-2 mb-2">
                  <button
                    className='bg-pri text-white py-2 px-4 rounded-sm text-mont font-semibold' 
                    onClick={() => zoomIn()}
                  >
                    Zoom In
                  </button>
                  <button 
                    className='bg-pri text-white py-2 px-4 rounded-sm text-mont font-semibold'
                    onClick={() => zoomOut()}
                  >
                    Zoom Out
                  </button>
                  <button 
                    className='bg-pri text-white py-2 px-4 rounded-sm text-mont font-semibold'
                    onClick={() => resetTransform()}
                  >
                    Reset
                  </button>
                </div>
              </React.Fragment>
            )}
          </TransformWrapper>
      </div>
      <Footer />
    </div>
  )
}

export default trailmap
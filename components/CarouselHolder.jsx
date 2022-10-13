import React from 'react'
import EmbalaCarousel from './EmbalaCarousel'

const CarouselHolder = () => {
  return (
    <div className='h-screen flex items-center flex-col justify-start p-8 sm:mt-10'>
      {/* Title */}
      <div className='flex items-center justify-center'>
        <h1 className='font-bold text-pri text-2xl lg:text-4xl text-center p-2'>Digital collectible avatars living on the Ethereum blockchain.</h1>
      </div>
      {/* Description */}
      <div className='flex items-start justify-center w-full lg:w-3/5'>
        <p className='text-md text-center text-pri font-medium p-2'>
        Our Sassy NFTs are contrived from over 150 unique, hand drawn traits with varying rarity.  Each one represents a DAO vote and membership to the <span className='underline font-semibold'>Shredding Sassy Social Club.</span> 
        </p>
      </div>
      {/* Carousel */}
      <div className='flex w-full items-center justify-center'>
        <EmbalaCarousel />
      </div>
    </div>
  )
}

export default CarouselHolder



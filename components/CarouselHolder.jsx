import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'
import image4 from '../assets/4.png'
import image5 from '../assets/5.png'
import image6 from '../assets/6.png'
import image7 from '../assets/7.png'
import image8 from '../assets/8.png'
import image9 from '../assets/9.png'
import image10 from '../assets/10.png'
import image11 from '../assets/11.png'
import image12 from '../assets/12.png'
import useEmblaCarousel from 'embla-carousel-react'

const CarouselHolder = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });
  
  return (
    <div className='h-screen flex items-center flex-col justify-start p-8 sm:mt-10'>
      {/* Title */}
      <div className='flex items-center justify-center'>
        <h1 className='font-bold text-pri text-2xl lg:text-4xl text-center p-2'>Digital collectible avatars living on the Ethereum blockchain</h1>
      </div>
      {/* Description */}
      <div className='flex items-start justify-center w-full lg:w-3/5'>
        <p className='text-md text-center text-pri font-medium p-2'>
        Our Sassy NFTs are contrived from over 150 unique, hand drawn traits with varying rarity.  Each one represents a DAO vote and membership to the {" "}
          <span className='underline font-semibold'> 
          <Link 
            href='/sssc'
          >
            Shredding Sassy Social Club.
          </Link></span> 
        </p>
      </div>
      {/* Carousel */}
      <div className="flex w-full">
      <div className='mt-10 overflow-hidden w-[100%]' ref={viewportRef}>
        <div className="flex ml-14 sm:ml-8 md:ml-12 cursor-grab">
          <div className="flex items-end shrink-0 pr-14">
            <Image
              src={image6}
              alt='Image 1'
              height={300}
              width={300}
            >
            </Image>
          </div>
          <div className="flex items-end shrink-0 pr-14">
            <Image
              src={image2}
              alt='Image 2'
              height={300}
              width={300}
            >
            </Image>
          </div>
          <div className="flex items-end shrink-0 pr-14">
            <Image
              src={image10}
              alt='Image 3'
              height={300}
              width={300}
            >
            </Image>
          </div>
          <div className="flex items-end shrink-0 pr-14">
            <Image
              src={image1}
              alt='Image 4'
              height={300}
              width={300}
            >
            </Image>
          </div>
          <div className="flex items-end shrink-0 pr-14">
            <Image
              src={image5}
              alt='Image 5'
              height={300}
              width={300}
            >
            </Image>
          </div>
          <div className="flex items-end shrink-0 pr-14">
            <Image
              src={image9}
              alt='Image 6'
              height={300}
              width={300}
            >
            </Image>
          </div>
          <div className="flex items-end shrink-0 pr-14">
            <Image
              src={image7}
              alt='Image 7'
              height={300}
              width={300}
            >
            </Image>
          </div>
          <div className="flex items-end shrink-0 pr-14">
            <Image
              src={image8}
              alt='Image 6'
              height={300}
              width={300}
            >
            </Image>
          </div>
          <div className="flex items-end shrink-0 pr-14">
            <Image
              src={image4}
              alt='Image 6'
              height={300}
              width={300}
            >
            </Image>
          </div>
          <div className="flex items-end shrink-0 pr-14">
            <Image
              src={image3}
              alt='Image 6'
              height={300}
              width={300}
            >
            </Image>
          </div>
          <div className="flex items-end shrink-0 pr-14">
            <Image
              src={image11}
              alt='Image 6'
              height={300}
              width={300}
            >
            </Image>
          </div>
          <div className="flex items-end shrink-0 pr-14">
            <Image
              src={image12}
              alt='Image 6'
              height={300}
              width={300}
            >
            </Image>
          </div>
        </div>
      </div>

    </div>
    </div>
  )
}

export default CarouselHolder



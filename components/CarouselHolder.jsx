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
import image13 from '../assets/13.png'
import image14 from '../assets/14.png'
import image15 from '../assets/15.png'
import image16 from '../assets/16.png'
import arrows from '../assets/arrows.png'
import useEmblaCarousel from 'embla-carousel-react'

const CarouselHolder = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });
  
  return (
    <div className='flex items-center flex-col justify-start px-8 mt-20 lg:mt-40 lg:mb-40 py-20 bg-gray-200'>
      {/* Title */}
      <div className='flex items-center justify-center'>
        <h1 className='mainBodyHeaderStyle font-bold text-pri  text-center p-2 md:w-[70%]'>Digital collectible avatars living on the Ethereum blockchain</h1>
      </div>
      {/* Description */}
      <div className='flex items-start justify-center w-full lg:w-3/5'>
        <p className='mainBodyTextStyle text-md text-center text-pri font-medium p-2'>
        Our Sassy NFTs are contrived from over 140 unique, hand drawn traits with varying rarity.  Each one represents a DAO vote and membership to the {" "}
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
      <div className='mt-4 overflow-hidden w-[100%]' ref={viewportRef}>
        <div className="flex ml-16 sm:ml-8 md:ml-8 lg:ml-12 cursor-grab">
          <div className="sassyCarouselStyle flex items-end pr-14 shrink-0">
            <Image
              src={image1}
              alt='Image 1'
              objectFit='fill'
            >
            </Image>
          </div>
          <div className="sassyCarouselStyle flex items-end pr-14 shrink-0">
            <Image
              src={image2}
              alt='Image 2'
              objectFit='fill'
            >
            </Image>
          </div>
          <div className="sassyCarouselStyle flex items-end pr-14 shrink-0">
            <Image
              src={image3}
              alt='Image 3'
              objectFit='fill'
            >
            </Image>
          </div>
          <div className="sassyCarouselStyle flex items-end pr-14 shrink-0">
            <Image
              src={image4}
              alt='Image 4'
              objectFit='fill'
            >
            </Image>
          </div>
          <div className="sassyCarouselStyle flex items-end pr-14 shrink-0">
            <Image
              src={image5}
              alt='Image 5'
              objectFit='fill'
            >
            </Image>
          </div>
          <div className="sassyCarouselStyle flex items-end pr-14 shrink-0">
            <Image
              src={image6}
              alt='Image 6'
              objectFit='fill'
            >
            </Image>
          </div>
          <div className="sassyCarouselStyle flex items-end pr-14 shrink-0">
            <Image
              src={image7}
              alt='Image 7'
              objectFit='fill'
            >
            </Image>
          </div>
          <div className="sassyCarouselStyle flex items-end pr-14 shrink-0">
            <Image
              src={image8}
              alt='Image 8'
              objectFit='fill'
            >
            </Image>
          </div>
          <div className="sassyCarouselStyle flex items-end pr-14 shrink-0">
            <Image
              src={image9}
              alt='Image 9'
              objectFit='fill'
            >
            </Image>
          </div>
          <div className="sassyCarouselStyle flex items-end pr-14 shrink-0">
            <Image
              src={image10}
              alt='Image 10'
              objectFit='fill'
            >
            </Image>
          </div>
          <div className="sassyCarouselStyle flex items-end pr-14 shrink-0">
            <Image
              src={image11}
              alt='Image 11'
              objectFit='fill'
            >
            </Image>
          </div>
          <div className="sassyCarouselStyle flex items-end pr-14 shrink-0">
            <Image
              src={image12}
              alt='Image 12'
              objectFit='fill'
            >
            </Image>
          </div>
          <div className="sassyCarouselStyle flex items-end pr-14 shrink-0">
            <Image
              src={image13}
              alt='Image 13'
              objectFit='fill'
            >
            </Image>
          </div>
          <div className="sassyCarouselStyle flex items-end pr-14 shrink-0">
            <Image
              src={image14}
              alt='Image 14'
              objectFit='fill'
            >
            </Image>
          </div>
          <div className="sassyCarouselStyle flex items-end pr-14 shrink-0">
            <Image
              src={image15}
              alt='Image 15'
              objectFit='fill'
            >
            </Image>
          </div>
          <div className="sassyCarouselStyle flex items-end pr-14 shrink-0">
            <Image
              src={image16}
              alt='Image 16'
              objectFit='fill'
            >
            </Image>
          </div>
        </div>
      </div>
    </div>
    <div className='flex mt-10'>
      <h1 className='mainBodyTextStyle text-pri uppercase font-mont font-bold mr-4'>Swipe For More Sassys</h1>
      <div className='animate-pulse'>
        <Image 
          src={arrows}
          alt='Arrows'
          width={50}
          height={25}
        />
      </div>

    </div>
    </div>
  )
}

export default CarouselHolder



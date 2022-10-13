import React from 'react'
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

export const EmblaCarousel = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    dragFree: true,
    containScroll: "trimSnaps",
  });

  return (
    <div className="flex w-full">
      <div className='mt-10 overflow-hidden w-[100%]' ref={viewportRef}>
        <div className="flex cursor-grab space-x-12 ml-4 md:ml-12 lg:mr-8">
          <div className="flex items-end shrink-0 mx-4">
            <Image
              src={image6}
              alt='Image 1'
              height={300}
              width={300}
            >
            </Image>
          </div>
          <div className="flex items-end shrink-0 mx-4">
            <Image
              src={image2}
              alt='Image 2'
              height={300}
              width={300}
            >
            </Image>
          </div>
          <div className="flex items-end shrink-0 mx-4">
            <Image
              src={image10}
              alt='Image 3'
              height={300}
              width={300}
            >
            </Image>
          </div>
          <div className="flex items-end shrink-0 mx-4">
            <Image
              src={image1}
              alt='Image 4'
              height={300}
              width={300}
            >
            </Image>
          </div>
          <div className="flex items-end shrink-0 mx-4">
            <Image
              src={image5}
              alt='Image 5'
              height={300}
              width={300}
            >
            </Image>
          </div>
          <div className="flex items-end shrink-0 mx-4">
            <Image
              src={image9}
              alt='Image 6'
              height={300}
              width={300}
            >
            </Image>
          </div>
          <div className="flex items-end shrink-0 mx-4">
            <Image
              src={image7}
              alt='Image 7'
              height={300}
              width={300}
            >
            </Image>
          </div>
          <div className="flex items-end shrink-0 mx-4">
            <Image
              src={image8}
              alt='Image 6'
              height={300}
              width={300}
            >
            </Image>
          </div>
          <div className="flex items-end shrink-0 mx-4">
            <Image
              src={image4}
              alt='Image 6'
              height={300}
              width={300}
            >
            </Image>
          </div>
          <div className="flex items-end shrink-0 mx-4">
            <Image
              src={image3}
              alt='Image 6'
              height={300}
              width={300}
            >
            </Image>
          </div>
          <div className="flex items-end shrink-0 mx-4">
            <Image
              src={image11}
              alt='Image 6'
              height={300}
              width={300}
            >
            </Image>
          </div>
          <div className="flex items-end shrink-0 mx-4">
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
  )
}

export default EmblaCarousel
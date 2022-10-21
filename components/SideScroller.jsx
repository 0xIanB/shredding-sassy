import React from 'react'
import Image from 'next/image'
import side1 from '../assets/side1.png'
import side2 from '../assets/side2.png'
import side3 from '../assets/side3.png'
import side4 from '../assets/side4.png'

const SideScroller = () => {
  return (
    <div className='flex flex-col mb-10 lg:mb-10 lg:flex-row'>
      {/* Left Side Static */}
      <div className='flex flex-col text-pri items-center lg:items-start justify-center'>
          <h1 className='font-bold font-body text-2xl lg:text-4xl w-3/4 pr-4 text-center lg:text-left lg:pl-24 py-8'>Shredding Sassy, a brand with a big vision</h1>
      </div>

      {/* Right Side Scroller */}
      <div className='flex flex-col lg:h-screen lg:w-full lg:overflow-y-scroll scrollbar-hide' id='customcursor2'>
        <div className='flex flex-col items-center justify-center lg:-mr-4'>
          {/* Image */}
          <div className='flex items-center lg:justify-center p-6 lg:p-0 lg:pb-4'>
            <Image
              src={side1}
              alt='Side Image 1'
              width={1000}
              height={500}
            >
            </Image>
          </div>
          {/* Text */}
          <div className='flex flex-col items-center lg:items-start space-y-4 px-6 lg:px-0 py-6 lg:w-full'>
            {/* Title */}
            <div>
              <h1 className='font-bold text-pri text-xl lg:text-2xl'>Shredding Sassy Social Club</h1>
            </div>
            {/* Info */}
            <div className='flex items-center text-center lg:text-left lg:items-start'>
              <p className='font-medium text-pri text-md lg:mr-32 lg:pb-20'>Members will help in growing the brand by discussing and voting on proposals whilst also being inundated with perks and benefits. Discounts from top brands, exclusive access to pro athletes and incredible mountain experiences both physically and digitally.</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center lg:-mr-4'>
          {/* Image */}
          <div className='flex items-center lg:justify-center p-6 lg:p-0 lg:pb-4'>
            <Image
              src={side2}
              alt='Side Image 2'
              width={1000}
              height={500}
            >
            </Image>
          </div>
          {/* Text */}
          <div className='flex flex-col items-center lg:items-start space-y-4 px-6 lg:px-0 py-6 lg:w-full'>
            {/* Title */}
            <div>
              <h1 className='font-bold text-pri text-xl lg:text-2xl'>Building a sustainable business</h1>
            </div>
            {/* Info */}
            <div className='flex items-center text-center lg:text-left lg:items-start'>
              <p className='font-medium text-pri text-md lg:mr-32 lg:pb-20'>{"We're a business and understand we can't just rely on royalties to fund our vision. We're already working on multiple revenue streams, both physical and digital to ensure the growth ofthe brand is sustainable."}</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center lg:-mr-4'>
          {/* Image */}
          <div className='flex items-center lg:justify-center p-6 lg:p-0 lg:pb-4'>
            <Image
              src={side3}
              alt='Side Image 3'
              width={1000}
              height={500}
            >
            </Image>
          </div>
          {/* Text */}
          <div className='flex flex-col items-center lg:items-start space-y-4 px-6 lg:px-0 py-6 lg:w-full'>
            {/* Title */}
            <div>
              <h1 className='font-bold text-pri text-xl lg:text-2xl'>Sponsoring Athletes</h1>
            </div>
            {/* Info */}
            <div className='flex items-center text-center lg:text-left lg:items-start'>
              <p className='font-medium text-pri text-md lg:mr-32 lg:pb-20'>{"We will be actively searching for and sponsoring new talented extreme athletes. Providing funds from our treasury to assist with the costs of travel, accommodation and equipment."}</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center lg:-mr-4'>
          {/* Image */}
          <div className='flex items-center lg:justify-center p-6 lg:p-0 lg:pb-4'>
            <Image
              src={side4}
              alt='Side Image 4'
              width={1000}
              height={500}
            >
            </Image>
          </div>
          {/* Text */}
          <div className='flex flex-col items-center lg:items-start space-y-4 px-6 lg:px-0 py-6 lg:w-full'>
            {/* Title */}
            <div>
              <h1 className='font-bold text-pri text-xl lg:text-2xl'>Protecting our future</h1>
            </div>
            {/* Info */}
            <div className='flex items-center text-center lg:text-left lg:items-start'>
              <p className='font-medium text-pri text-md lg:mr-32 lg:pb-20'>{"A big part of our mission involves sustainability and protecting our environment. We will be working with a number of amazing charities, donating funds and organizing clean up initiatives as well as tracking and offsetting our carbon footprint."}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SideScroller
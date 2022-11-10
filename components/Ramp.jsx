import React from 'react'
import Image from 'next/image'
import ramp from '../assets/ramp.png'

const Ramp = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      {/* Image */}
      <div className='flex items-center justify-center px-8 md:px-16 lg:px-0'>
        <Image
          src={ramp}
          alt='Sassy Ramp'
          width={1200}
          height={1400}
        >
        </Image>
      </div>
      {/* Text */}
      <div className='flex flex-col text-pri items-center lg:items-end justify-center'>
          <h1 className='font-bold font-body text-2xl lg:text-4xl lg:w-1/2 text-center lg:text-right lg:pr-24 py-8'>The future is decentralized</h1>
          <p className='text-md lg:text-lg font-medium text-center lg:text-end w-full md:w-[64%] items-center justify-center lg:justify-end lg:items-end lg:pr-24 px-8 lg:px-4'>{"We are building the world's first decentralised extreme sports brand. We believe in communities over corporations and envision a future where ownership and profit are not limited to a select few."}</p>
      </div>
    </div>
  )
}

export default Ramp
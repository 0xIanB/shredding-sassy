import React from 'react'
import Image from 'next/image'
import ramp from '../assets/ramp.png'

const Future = () => {
  return (
    <div class='flex flex-col lg:flex-row'>
      {/* Image */}
      <div class='flex items-center justify-center px-8 md:px-24 lg:px-0'>
        <Image
          src={ramp}
          alt='Sassy Ramp'
          width={1000}
          height={1000}
        >
        </Image>
      </div>
      {/* Text */}
      <div class='flex flex-col text-pri items-center lg:items-end justify-center px-8 md:px-16 w-full xl:w-[80%] 2xl:w-[60%] '>
          <h1 class='mainBodyHeaderStyle font-bold font-body  xxl:pr-0 text-center xl:text-left pb-8 pt-8 '>The future is decentralized</h1>
          <p class='mainBodyTextStyle font-medium text-center lg:text-end w-full items-center justify-center lg:justify-end lg:items-end xl:w-[70%] 2xl:w-[60%]'>{"We are building the world's first decentralised extreme sports brand. We believe in communities over corporations and envision a future where ownership and profit are not limited to a select few."}</p>
      </div>
    </div>
  )
}

export default Future
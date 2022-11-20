import React from 'react'
import Image from 'next/image'
import side1 from '../assets/side1.png'
import side2 from '../assets/side2.png'
import side3 from '../assets/side3.png'
import side4 from '../assets/side4.png'

const styles = {
  imageContainer: 'flex flex-col items-center lg:items-end mb-8',
  imageBox: 'px-4 lg:px-0 lg:w-[80%]',
  infoContainer: 'flex flex-col px-4 lg:px-0 lg:w-[80%] items-center lg:items-start text-pri',
  infoHeader: 'text-xl lg:text-2xl font-body font-bold py-4',
  infoDescription: 'text-md lg:text-lg font-medium text-center lg:text-start pb-8'
}

const Vision = () => {
  return (
    <div className='flex mt-8 '>
      {/* Main Container */}
      <div class='flex flex-col lg:flex-row justify-between'>
        {/* Left Side */}
        <div class='text-center px-28 pb-8'>
          <h1 class='text-pri font-body font-bold text-3xl w-full '>Shredding Sassy, a brand with a big vision</h1>
        </div>
        {/* Right Side */}
        <div>
          {/* Image 1 */}
          <div class={styles.imageContainer}>
            {/* Image */}
            <div class={styles.imageBox}>
              <Image 
                src={side1}
                alt='Side Image 1'
              />
            </div>
            {/* Text */}
            <div class={styles.infoContainer}>
              <h1 class={styles.infoHeader}>{`Shredding Sassy Social Club`}</h1>
              <p class={styles.infoDescription}>{`Members will help in growing the brand by discussing and voting on proposals whilst also being inundated with perks and benefits. Discounts from top brands, exclusive access to pro athletes and incredible mountain experiences both physically and digitally.`}</p>
            </div>
          </div>
          {/* Image 2 */}
          <div class={styles.imageContainer}>
            {/* Image */}
            <div class={styles.imageBox}>
              <Image 
                src={side2}
                alt='Side Image 2'
              />
            </div>
            {/* Text */}
            <div class={styles.infoContainer}>
              <h1 class={styles.infoHeader}>{`Building a sustainable business`}</h1>
              <p class={styles.infoDescription}>{`We're a business and understand we can't just rely on royalties to fund our vision. We're already working on multiple revenue streams, both physical and digital to ensure the growth ofthe brand is sustainable.`}</p>
            </div>
          </div>
          {/* Image 3 */}
          <div class={styles.imageContainer}>
            {/* Image */}
            <div class={styles.imageBox}>
              <Image 
                src={side3}
                alt='Side Image 3'
              />
            </div>
            {/* Text */}
            <div class={styles.infoContainer}>
              <h1 class={styles.infoHeader}>{`Sponsoring Athletes`}</h1>
              <p class={styles.infoDescription}>{`We will be actively searching for and sponsoring new talented extreme athletes. Providing funds from our treasury to assist with the costs of travel, accommodation and equipment.`}</p>
            </div>
          </div>
          {/* Image 4 */}
          <div class={styles.imageContainer}>
            {/* Image */}
            <div class={styles.imageBox}>
              <Image 
                src={side4}
                alt='Side Image 4'
              />
            </div>
            {/* Text */}
            <div class={styles.infoContainer}>
              <h2 class='font-body font-bold py-4'>{`Protecting our future`}</h2>
              <p class={styles.infoDescription}>{`A big part of our mission involves sustainability and protecting our environment. We will be working with a number of amazing charities, donating funds and organizing clean up initiatives as well as tracking and offsetting our carbon footprint.`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vision
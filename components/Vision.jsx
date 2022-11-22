import React from 'react'
import Image from 'next/image'
import side1 from '../assets/side1.png'
import side2 from '../assets/side2.png'
import side3 from '../assets/side3.png'
import side4 from '../assets/side4.png'

const styles = {
  imageContainer: 'flex flex-col items-center lg:items-end mb-8',
  imageBox: 'px-4 lg:px-0 lg:w-[65%]',
  infoContainer: 'flex flex-col px-4 lg:px-0 lg:w-[65%] items-center lg:items-start text-pri',
  infoHeader: 'font-body font-bold py-4',
  infoDescription: 'font-medium text-center lg:text-start pb-8'
}

const Vision = () => {
  return (
    <div className='flex mt-8 '>
      {/* Main Container */}
      <div class='flex flex-col lg:flex-row justify-between'>
        {/* Left Side */}
        <div class='mainBodyHeaderStyle text-center lg:text-start px-20 lg:pl-12 lg:pr-0 pb-12 pt-8 lg:pt-0 lg:w-[60%] 2xl:w-[40%]'>
          <h1 class='visionStyle text-pri font-body font-bold  '>Shredding Sassy, a brand with a big vision</h1>
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
              <h1 class={`visionHeaderStyle ${styles.infoHeader}`}>{`Shredding Sassy Social Club`}</h1>
              <p class={`mainBodyTextStyle ${styles.infoDescription}`}>{`Members will help in growing the brand by discussing and voting on proposals whilst also being inundated with perks and benefits. Discounts from top brands, exclusive access to pro athletes and incredible mountain experiences both physically and digitally.`}</p>
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
              <h1 class={`visionHeaderStyle ${styles.infoHeader}`}>{`Building a sustainable business`}</h1>
              <p class={`mainBodyTextStyle ${styles.infoDescription}`}>{`We're a business and understand we can't just rely on royalties to fund our vision. We're already working on multiple revenue streams, both physical and digital to ensure the growth ofthe brand is sustainable.`}</p>
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
              <h1 class={`visionHeaderStyle ${styles.infoHeader}`}>{`Sponsoring Athletes`}</h1>
              <p class={`mainBodyTextStyle ${styles.infoDescription}`}>{`We will be actively searching for and sponsoring new talented extreme athletes. Providing funds from our treasury to assist with the costs of travel, accommodation and equipment.`}</p>
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
              <h2 class={`visionHeaderStyle ${styles.infoHeader}`}>{`Protecting our future`}</h2>
              <p class={`mainBodyTextStyle ${styles.infoDescription}`}>{`A big part of our mission involves sustainability and protecting our environment. We will be working with a number of amazing charities, donating funds and organizing clean up initiatives as well as tracking and offsetting our carbon footprint.`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vision
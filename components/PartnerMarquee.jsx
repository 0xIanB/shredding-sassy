import React from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import absolute from '../assets/absolute.png'
import dynastar from '../assets/dynastar.png'
import faction from '../assets/faction.png'
import panda from '../assets/panda.png'
import shaggys from '../assets/shaggys.png'
import shred from '../assets/shred.png'
import skibro from '../assets/skibro.png'
import snowrock from '../assets/snowrock.png'
import line from '../assets/line.png'

const styles = {
  container: 'flex flex-col items-center w-full z-10 cursor-pointer -mt-10',
  marqueecontainer: 'text-[30px] lg:text-[60px] tracking-widest scroll-hidden text-gray-800/30 font-bold font-lond py-20',
  marquee:'overflow-hidden',
  marqueetext: 'mx-1 lg:mx-2 mt-4',
  imageBox: 'flex items-center border-8 rounded-md border-black mr-10 cursor-pointer',
  line: 'flex items-center mr-8'
}

const PartnerMarquee = () => {
  return (
    <div className={styles.container}>
    <div className={styles.marqueecontainer}>
      <div className={styles.marquee}>
        <Marquee gradientWidth='0' speed={100} pauseOnHover={true}>
          <div class={styles.imageBox}>
            <Image
              src={absolute}
              alt='Absolute-Snow'
              height={150}
              width={150}
            />
          </div>
          <div class={styles.line}>
            <Image
              src={line}
              alt='Line'
              height={170}
              width={2}
            />   
          </div>
          <div class={styles.imageBox}>
            <Image
              src={dynastar}
              alt='Dynastar'
              height={150}
              width={150}
            />
          </div>
          <div class={styles.line}>
            <Image
              src={line}
              alt='Line'
              height={170}
              width={2}
            />   
          </div>         
          <div class={styles.imageBox}>
            <Image
              src={faction}
              alt='Faction'
              height={150}
              width={150}
            />
          </div>
          <div class={styles.line}>
            <Image
              src={line}
              alt='Line'
              height={170}
              width={2}
            />   
          </div>         
          <div class={styles.imageBox}>
            <Image
              src={panda}
              alt='Panda'
              height={150}
              width={150}
            />
          </div>
          <div class={styles.line}>
            <Image
              src={line}
              alt='Line'
              height={170}
              width={2}
            />   
          </div>         
          <div class={styles.imageBox}>
            <Image
              src={shaggys}
              alt='Shaggys'
              height={150}
              width={150}
            />
          </div>
          <div class={styles.line}>
            <Image
              src={line}
              alt='Line'
              height={170}
              width={2}
            />   
          </div>         
          <div class={styles.imageBox}>
            <Image
              src={shred}
              alt='Shred'
              height={150}
              width={150}
            />
          </div>
          <div class={styles.line}>
            <Image
              src={line}
              alt='Line'
              height={170}
              width={2}
            />   
          </div>         
          <div class={styles.imageBox}>
            <Image
              src={skibro}
              alt='Ski Bro'
              height={150}
              width={150}
            />
          </div>
          <div class={styles.line}>
            <Image
              src={line}
              alt='Line'
              height={170}
              width={2}
            />   
          </div>         
          <div class={styles.imageBox}>
            <Image
              src={snowrock}
              alt='Snowrock'
              height={150}
              width={150}
            />
          </div>
          <div class={styles.line}>
            <Image
              src={line}
              alt='Line'
              height={170}
              width={2}
            />   
          </div>         
        </Marquee>
      </div>
    </div>
  </div>
  )
}

export default PartnerMarquee
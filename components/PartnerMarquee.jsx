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
import planks from '../assets/planks.png'
import ellis from '../assets/ellis.png'
import facefreeze from '../assets/facefreeze.png'
import fatmap from '../assets/fatmap.png'
import futureproof from '../assets/futureproof.png'
import gilson from '../assets/gilson.png'
import nuco from '../assets/nuco.png'
import skiyodl from '../assets/skiyodl.png'
import unrevealed from '../assets/unrevealed.png'
import erna from '../assets/erna.png'

const styles = {
  container: 'flex flex-col items-center w-full z-10 cursor-pointer',
  marqueecontainer: 'scroll-hidden w-full',
  marquee:'flex pb-20',
  imageBox: 'flex items-center border-[4px] 2xl:border-[6.5px] border-black mr-10 cursor-pointer'
}

const PartnerMarquee = () => {
  return (
    <div className={styles.container}>
    <div className={styles.marqueecontainer}>
      {/* Desktop */}
      <div className={styles.marquee}>
        <Marquee gradientWidth='0' speed={50}>
          <div className={`partnerStyle ${styles.imageBox}`}>
            <Image
              src={absolute}
              alt='Absolute-Snow'
              objectFit='fill'
            />
          </div>
          <div className={`partnerStyle ${styles.imageBox}`}>
            <Image
              src={dynastar}
              alt='Dynastar'
              objectFit='fill'
            />
          </div>        
          <div className={`partnerStyle ${styles.imageBox}`}>
            <Image
              src={unrevealed}
              alt='Unrevealed'
              objectFit='fill'
            />
          </div>        
          <div className={`partnerStyle ${styles.imageBox}`}>
            <Image
              src={faction}
              alt='Faction'
              objectFit='fill'
            />
          </div>        
          <div className={`partnerStyle ${styles.imageBox}`}>
            <Image
              src={panda}
              alt='Panda'
              objectFit='fill'
            />
          </div>         
          <div className={`partnerStyle ${styles.imageBox}`}>
            <Image
              src={shaggys}
              alt='Shaggys'
              objectFit='fill'
            />
          </div> 
          <div className={`partnerStyle ${styles.imageBox}`}>
            <Image
              src={unrevealed}
              alt='Unrevealed'
              objectFit='fill'
            />
          </div>       
          <div className={`partnerStyle ${styles.imageBox}`}>
            <Image
              src={shred}
              alt='Shred'
              objectFit='fill'
            />
          </div>        
          <div className={`partnerStyle ${styles.imageBox}`}>
            <Image
              src={skibro}
              alt='Ski Bro'
              objectFit='fill'
            />
          </div>       
          <div className={`partnerStyle ${styles.imageBox}`}>
            <Image
              src={planks}
              alt='Planks'
              objectFit='fill'
            />
          </div>
          <div className={`partnerStyle ${styles.imageBox}`}>
            <Image
              src={unrevealed}
              alt='Unrevealed'
              objectFit='fill'
            />
          </div> 
          <div className={`partnerStyle ${styles.imageBox}`}>
            <Image
              src={skiyodl}
              alt='Ski Yodl'
              objectFit='fill'
            />
          </div>
          <div className={`partnerStyle ${styles.imageBox}`}>
            <Image
              src={fatmap}
              alt='Fatmap'
              objectFit='fill'
            />
          </div>
          <div className={`partnerStyle ${styles.imageBox}`}>
            <Image
              src={nuco}
              alt='Nuco'
              objectFit='fill'
            />
          </div>    
          <div className={`partnerStyle ${styles.imageBox}`}>
            <Image
              src={unrevealed}
              alt='Unrevealed'
              objectFit='fill'
            />
          </div>    
          <div className={`partnerStyle ${styles.imageBox}`}>
            <Image
              src={erna}
              alt='Erna Low'
              objectFit='fill'
            />
          </div>     
          <div className={`partnerStyle ${styles.imageBox}`}>
            <Image
              src={futureproof}
              alt='Future Proof'
              objectFit='fill'
            />
          </div> 
          <div className={`partnerStyle ${styles.imageBox}`}>
            <Image
              src={unrevealed}
              alt='Unrevealed'
              objectFit='fill'
            />
          </div>  
          <div className={`partnerStyle ${styles.imageBox}`}>
            <Image
              src={ellis}
              alt='Ellis Brigham'
              objectFit='fill'
            />
          </div> 
          <div className={`partnerStyle ${styles.imageBox}`}>
            <Image
              src={gilson}
              alt='Gilson'
              objectFit='fill'
            />
          </div> 
          <div className={`partnerStyle ${styles.imageBox}`}>
            <Image
              src={unrevealed}
              alt='Unrevealed'
              objectFit='fill'
            />
          </div>  
          <div className={`partnerStyle ${styles.imageBox}`}>
            <Image
              src={facefreeze}
              alt='Face Freeze'
              objectFit='fill'
            />
          </div> 
        </Marquee>
      </div>
    </div>
  </div>
  )
}

export default PartnerMarquee
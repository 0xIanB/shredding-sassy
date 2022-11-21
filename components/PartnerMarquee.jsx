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
  marquee:'hidden lg:flex 2xl:hidden pb-20',
  marqueeMobile:'overflow-hidden pb-20 lg:hidden',
  marqueeWide:'hidden 2xl:flex overflow-hidden pb-20',
  imageBox: 'flex items-center border-[4px] 2xl:border-[6.5px] border-black mr-10 cursor-pointer'
}

const PartnerMarquee = () => {
  return (
    <div className={styles.container}>
    <div className={styles.marqueecontainer}>
      {/* Desktop */}
      <div className={styles.marquee}>
        <Marquee gradientWidth='0' speed={20} pauseOnHover={true}>
          <div class={styles.imageBox}>
            <Image
              src={absolute}
              alt='Absolute-Snow'
              height={250}
              width={250}
            />
          </div>
          <div class={styles.imageBox}>
            <Image
              src={dynastar}
              alt='Dynastar'
              height={250}
              width={250}
            />
          </div>        
          <div class={styles.imageBox}>
            <Image
              src={unrevealed}
              alt='Unrevealed'
              height={250}
              width={250}
            />
          </div>        
          <div class={styles.imageBox}>
            <Image
              src={faction}
              alt='Faction'
              height={250}
              width={250}
            />
          </div>        
          <div class={styles.imageBox}>
            <Image
              src={panda}
              alt='Panda'
              height={250}
              width={250}
            />
          </div>         
          <div class={styles.imageBox}>
            <Image
              src={shaggys}
              alt='Shaggys'
              height={250}
              width={250}
            />
          </div> 
          <div class={styles.imageBox}>
            <Image
              src={unrevealed}
              alt='Unrevealed'
              height={250}
              width={250}
            />
          </div>       
          <div class={styles.imageBox}>
            <Image
              src={shred}
              alt='Shred'
              height={250}
              width={250}
            />
          </div>        
          <div class={styles.imageBox}>
            <Image
              src={skibro}
              alt='Ski Bro'
              height={250}
              width={250}
            />
          </div>       
          <div class={styles.imageBox}>
            <Image
              src={snowrock}
              alt='Snowrock'
              height={250}
              width={250}
            />
          </div>
          <div class={styles.imageBox}>
            <Image
              src={unrevealed}
              alt='Unrevealed'
              height={250}
              width={250}
            />
          </div> 
          <div class={styles.imageBox}>
            <Image
              src={skiyodl}
              alt='Ski Yodl'
              height={250}
              width={250}
            />
          </div>
          <div class={styles.imageBox}>
            <Image
              src={fatmap}
              alt='Fatmap'
              height={250}
              width={250}
            />
          </div>
          <div class={styles.imageBox}>
            <Image
              src={nuco}
              alt='Nuco'
              height={250}
              width={250}
            />
          </div>    
          <div class={styles.imageBox}>
            <Image
              src={unrevealed}
              alt='Unrevealed'
              height={250}
              width={250}
            />
          </div>    
          <div class={styles.imageBox}>
            <Image
              src={erna}
              alt='Erna Low'
              height={250}
              width={250}
            />
          </div>     
          <div class={styles.imageBox}>
            <Image
              src={futureproof}
              alt='Future Proof'
              height={250}
              width={250}
            />
          </div> 
          <div class={styles.imageBox}>
            <Image
              src={unrevealed}
              alt='Unrevealed'
              height={250}
              width={250}
            />
          </div>  
          <div class={styles.imageBox}>
            <Image
              src={ellis}
              alt='Ellis Brigham'
              height={250}
              width={250}
            />
          </div> 
          <div class={styles.imageBox}>
            <Image
              src={gilson}
              alt='Gilson'
              height={250}
              width={250}
            />
          </div> 
          <div class={styles.imageBox}>
            <Image
              src={unrevealed}
              alt='Unrevealed'
              height={250}
              width={250}
            />
          </div>  
          <div class={styles.imageBox}>
            <Image
              src={facefreeze}
              alt='Face Freeze'
              height={250}
              width={250}
            />
          </div> 
        </Marquee>
      </div>
      {/* Mobile */}
      <div className={styles.marqueeMobile}>
        <Marquee gradientWidth='0' speed={70} pauseOnHover={true}>
          <div class={styles.imageBox}>
            <Image
              src={absolute}
              alt='Absolute-Snow'
              height={150}
              width={150}
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
          <div class={styles.imageBox}>
            <Image
              src={unrevealed}
              alt='Unrevealed'
              height={150}
              width={150}
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
          <div class={styles.imageBox}>
            <Image
              src={panda}
              alt='Panda'
              height={150}
              width={150}
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
          <div class={styles.imageBox}>
            <Image
              src={unrevealed}
              alt='Unrevealed'
              height={150}
              width={150}
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
          <div class={styles.imageBox}>
            <Image
              src={skibro}
              alt='Ski Bro'
              height={150}
              width={150}
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
          <div class={styles.imageBox}>
            <Image
              src={unrevealed}
              alt='Unrevealed'
              height={150}
              width={150}
            />
          </div> 
          <div class={styles.imageBox}>
            <Image
              src={skiyodl}
              alt='Ski Yodl'
              height={150}
              width={150}
            />
          </div>
          <div class={styles.imageBox}>
            <Image
              src={fatmap}
              alt='Fatmap'
              height={150}
              width={150}
            />
          </div>
          <div class={styles.imageBox}>
            <Image
              src={nuco}
              alt='Nuco'
              height={150}
              width={150}
            />
          </div>   
          <div class={styles.imageBox}>
            <Image
              src={unrevealed}
              alt='Unrevealed'
              height={150}
              width={150}
            />
          </div>     
          <div class={styles.imageBox}>
            <Image
              src={erna}
              alt='Erna Low'
              height={150}
              width={150}
            />
          </div>     
          <div class={styles.imageBox}>
            <Image
              src={futureproof}
              alt='Future Proof'
              height={150}
              width={150}
            />
          </div> 
          <div class={styles.imageBox}>
            <Image
              src={unrevealed}
              alt='Unrevealed'
              height={150}
              width={150}
            />
          </div>  
          <div class={styles.imageBox}>
            <Image
              src={ellis}
              alt='Ellis Brigham'
              height={150}
              width={150}
            />
          </div> 
          <div class={styles.imageBox}>
            <Image
              src={gilson}
              alt='Gilson'
              height={150}
              width={150}
            />
          </div> 
          <div class={styles.imageBox}>
            <Image
              src={unrevealed}
              alt='Unrevealed'
              height={150}
              width={150}
            />
          </div> 
          <div class={styles.imageBox}>
            <Image
              src={facefreeze}
              alt='Face Freeze'
              height={150}
              width={150}
            />
          </div> 
        </Marquee>
      </div>
      {/* Wide */}
      <div className={styles.marqueeWide}>
        <Marquee gradientWidth='0' speed={70} pauseOnHover={true}>
          <div class={styles.imageBox}>
            <Image
              src={absolute}
              alt='Absolute-Snow'
              height={350}
              width={350}
            />
          </div>
          <div class={styles.imageBox}>
            <Image
              src={dynastar}
              alt='Dynastar'
              height={350}
              width={350}
            />
          </div>        
          <div class={styles.imageBox}>
            <Image
              src={unrevealed}
              alt='Unrevealed'
              height={350}
              width={350}
            />
          </div> 
          <div class={styles.imageBox}>
            <Image
              src={faction}
              alt='Faction'
              height={350}
              width={350}
            />
          </div>        
          <div class={styles.imageBox}>
            <Image
              src={panda}
              alt='Panda'
              height={350}
              width={350}
            />
          </div>         
          <div class={styles.imageBox}>
            <Image
              src={shaggys}
              alt='Shaggys'
              height={350}
              width={350}
            />
          </div>    
          <div class={styles.imageBox}>
            <Image
              src={unrevealed}
              alt='Unrevealed'
              height={350}
              width={350}
            />
          </div>    
          <div class={styles.imageBox}>
            <Image
              src={shred}
              alt='Shred'
              height={350}
              width={350}
            />
          </div>        
          <div class={styles.imageBox}>
            <Image
              src={skibro}
              alt='Ski Bro'
              height={350}
              width={350}
            />
          </div>       
          <div class={styles.imageBox}>
            <Image
              src={snowrock}
              alt='Snowrock'
              height={350}
              width={350}
            />
          </div>
          <div class={styles.imageBox}>
            <Image
              src={unrevealed}
              alt='Unrevealed'
              height={350}
              width={350}
            />
          </div> 
          <div class={styles.imageBox}>
            <Image
              src={skiyodl}
              alt='Ski Yodl'
              height={350}
              width={350}
            />
          </div>
          <div class={styles.imageBox}>
            <Image
              src={fatmap}
              alt='Fatmap'
              height={350}
              width={350}
            />
          </div>
          <div class={styles.imageBox}>
            <Image
              src={nuco}
              alt='Nuco'
              height={350}
              width={350}
            />
          </div>  
          <div class={styles.imageBox}>
            <Image
              src={unrevealed}
              alt='Unrevealed'
              height={350}
              width={350}
            />
          </div>      
          <div class={styles.imageBox}>
            <Image
              src={erna}
              alt='Erna Low'
              height={350}
              width={350}
            />
          </div>     
          <div class={styles.imageBox}>
            <Image
              src={futureproof}
              alt='Future Proof'
              height={350}
              width={350}
            />
          </div> 
          <div class={styles.imageBox}>
            <Image
              src={unrevealed}
              alt='Unrevealed'
              height={350}
              width={350}
            />
          </div> 
          <div class={styles.imageBox}>
            <Image
              src={ellis}
              alt='Ellis Brigham'
              height={350}
              width={350}
            />
          </div> 
          <div class={styles.imageBox}>
            <Image
              src={gilson}
              alt='Gilson'
              height={350}
              width={350}
            />
          </div> 
          <div class={styles.imageBox}>
            <Image
              src={unrevealed}
              alt='Unrevealed'
              height={350}
              width={350}
            />
          </div> 
          <div class={styles.imageBox}>
            <Image
              src={facefreeze}
              alt='Face Freeze'
              height={350}
              width={350}
            />
          </div> 
        </Marquee>
      </div>
    </div>
  </div>
  )
}

export default PartnerMarquee
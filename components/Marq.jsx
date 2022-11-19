import React from 'react'
import Marquee from "react-fast-marquee"

const styles = {
  container: 'flex flex-col items-center w-full z-10',
  marqueecontainer: 'text-[30px] lg:text-[60px] 2xl:text-[100px] tracking-widest scroll-hidden text-gray-800/30 font-bold font-lond py-20',
  marquee:'overflow-hidden',
  marqueetext: 'mx-1 lg:mx-2 mt-4',
}

const Marq = () => {
  return (
    <div className={styles.container}>
      <div className={styles.marqueecontainer}>
        <div className={styles.marquee}>
          <Marquee gradientWidth='0' speed={15}>
            <h1 className={styles.marqueetext}>
              {" PUSH YOUR LIMITS ◦ READY FOR THAT ADRENALINE ◦ MOUNTAINS ARE CALLING ◦ GET STOKED ◦ GRAVITY GETS ME DOWN ◦ STAY SASSY ◦ JUST SEND IT ◦ HYPE FROM FRIENDS EQUALS BIGGER SENDS ◦ GO BIG OR GO HOME ◦ SHRED TOGETHER ◦ "}</h1>
          </Marquee>
        </div>
        <div className={styles.marquee}>   
          <Marquee gradientWidth='0' direction='right' speed={15}>
            <h1 className={styles.marqueetext}>
              {" STAY SASSY ◦ SHRED TOGETHER ◦ READY FOR THAT ADRENALINE ◦ GO BIG OR GO HOME ◦ PUSH YOUR LIMITS ◦ HYPE FROM FRIENDS EQUALS BIGGER SENDS ◦ MOUNTAINS ARE CALLING ◦ JUST SEND IT ◦ GRAVITY GETS ME DOWN ◦ GET STOKED ◦ "}</h1>
          </Marquee>
        </div>
        <div className={styles.marquee}>
          <Marquee gradientWidth='0' speed={15}>
            <h1 className={styles.marqueetext}>
              {" SHRED TOGETHER ◦ PUSH YOUR LIMITS ◦ GO BIG OR GO HOME ◦ READY FOR THAT ADRENALINE ◦ HYPE FROM FRIENDS EQUALS BIGGER SENDS ◦ MOUNTAINS ARE CALLING ◦ JUST SEND IT ◦ GET STOKED ◦ STAY SASSY ◦ GRAVITY GETS ME DOWN ◦ "}</h1>
          </Marquee>
        </div>
      </div>
    </div>
  )
}

export default Marq
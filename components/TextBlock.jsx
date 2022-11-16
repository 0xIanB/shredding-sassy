import React from 'react'

const styles = {
  textcontainer: 'flex flex-col text-center justify-center pt-20 pb-10 lg:py-20',
  textbox: 'font-mont text-xl md:text-3xl lg:text-5xl text-[#230A43]',
  textline: 'py-1 md:py-3',
  spantext: 'underline font-medium'
}

const TextBlock = () => {
  return (
    <div>
      <div className={styles.textcontainer}>
        <div className={styles.textbox}>
          <p className={styles.textline}><span className={styles.spantext}>Web3</span> has the ability to unify a </p>
          <p className={styles.textline}><span className={styles.spantext}>global community</span> 🌍 driven by a </p>
          <p className={styles.textline}>passion ❤️ for <span className={styles.spantext}> extreme sports</span> 💀 </p>
          <p className={styles.textline}>and <span className={styles.spantext}> good times</span>. 🤙</p>
        </div>
      </div>
    </div>
  )
}

export default TextBlock
import React from 'react'

const styles = {
  textcontainer: 'flex flex-col text-center justify-center pt-20 pb-10 lg:py-20 2xl:py-28 w-auto',
  textbox: 'flex flex-col font-mont text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl text-[#230A43]',
  textline: 'py-1 md:py-3',
  spantext: 'underline font-medium'
}

const TextBlock = () => {
  return (
    <div>
      <div class={styles.textcontainer}>
        <div class={styles.textbox} id='response'>
          <p class={styles.textline}><span class={styles.spantext}>Web3</span> has the ability to unify a </p>
          <p class={styles.textline}><span class={styles.spantext}>global community</span> 🌍 driven by a </p>
          <p class={styles.textline}>passion ❤️ for <span class={styles.spantext}> extreme sports</span> 💀 </p>
          <p class={styles.textline}>and <span class={styles.spantext}> good times</span>. 🤙</p>
        </div>
      </div>
    </div>
  )
}

export default TextBlock
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Welcome from '../components/Welcome'
import Ramp from '../components/Ramp'
import CarouselHolder from '../components/CarouselHolder'
import SideScroller from '../components/SideScroller'
import MarqueeBlock from '../components/MarqueeBlock'
import Socials from '../components/Socials'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shredding Sassy</title>
        <meta name="description" content="Bringing extreme sports to web3. A new kind of brand that we build together, creating unforgettable digital & physical experiences whilst onboarding new users to web3 via sought-after utility." />
        <meta property="og:image"  content="/sassylogo.jpg"></meta>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Navbar />
      <Hero />
      <Welcome />
      <Ramp />
      <CarouselHolder />
      <SideScroller />
      <MarqueeBlock />
      <Socials />
      <Footer />
    </div>
  )
}

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
        <meta name="description" content="Description Goes Here" />
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

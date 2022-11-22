import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Welcome from '../components/Welcome'
import Future from '../components/Future'
import CarouselHolder from '../components/CarouselHolder'
import Vision from '../components/Vision'
import Marq from '../components/Marq'
import Socials from '../components/Socials'
import Footer from '../components/Footer'
import TextBlock from '../components/TextBlock'

export default function Home() {
  return (
    <div id='home'>
      <Head>
        <title>Shredding Sassy</title>
        <meta name="description" content="Bringing extreme sports to web3. A new kind of brand that we build together, creating unforgettable digital & physical experiences whilst onboarding new users to web3 via sought-after utility." />
        <link rel="icon" type="image/x-icon" href="https://main.d1r25ugayjj6kc.amplifyapp.com/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Welcome />
      <Future />
      <CarouselHolder />
      <Vision />
      <Marq />
      <Socials />
      <TextBlock />
      <Footer />
    </div>
  )
}

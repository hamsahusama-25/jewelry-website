import React from 'react'
import Header from '../component/header/header'
import Hero from '../component/heroSection/hero'
import Feature from '../component/feature/feature'
import SliderHome from '../component/slider/sliderHome'
import ContactPage from '../component/footer/footer'
import Footer from '../component/footer/footer'
import About from '../component/about/about'


function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Feature/>
      <SliderHome/>
      <Footer/>
    </div>
  )
}

export default Home

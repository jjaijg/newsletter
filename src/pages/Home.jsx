import React from 'react'
import {Container} from 'react-bootstrap'
import Footer from '../components/Footer'
import HeroSection from '../sections/HeroSection'
import MarketingSection from '../sections/MarketingSection'

const Home = () => {
  return (
    <main>
        <Container className='home'>
        <HeroSection />
        <MarketingSection />
        <Footer />
        </Container>
    </main>
  )
}

export default Home
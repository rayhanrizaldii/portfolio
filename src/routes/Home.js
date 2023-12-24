import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroImg from '../components/HeroImg/HeroImg'
import Footer from '../components/Footer/Footer'
import Work from '../components/Projects/Work'
import Skills from '../components/Skills/Skills'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <Skills/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Home

import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import AboutContent from '../components/AboutContent/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Hero heading="About." text="A front-end developer who creates captivating user experiences with ease." />
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About

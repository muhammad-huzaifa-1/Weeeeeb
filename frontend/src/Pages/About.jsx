import React from 'react';
import AboutContent from '../components/AboutContent';
import ChooseUs from '../components/ChooseUs';
import Subscribe from '../components/Subscribe'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Navbar/>
      <AboutContent/>
      <ChooseUs/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default About
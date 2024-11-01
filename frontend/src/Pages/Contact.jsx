import React from 'react';
import ContactContent from '../components/ContactContent';
import Subscribe from '../components/Subscribe';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <ContactContent/>
      <div><Subscribe/></div>
      <Footer/>
    </div>
  )
}

export default Contact;
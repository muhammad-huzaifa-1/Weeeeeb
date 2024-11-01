import React from 'react'
import Title from './Title';
import { assets } from '../assets/assets';
const AboutContent = () => {
  return (
    <div>
        <div className=' text-3xl text-center py-8 md:text-3xl '>
          <Title text1={'About'} text2={"US"}/>
        </div> 

        <div>
           <div className=' flex flex-col gap-y-10 justify-start text-[17px] md:gap-x-20 md:text-lg  md:flex-row '>
              <img className=' w-full md:w-1/3 ' src={assets.about_img} alt="" />
              <div className=' text-gray-600 flex flex-col gap-y-5 justify-center md:w-1/2 '>
                <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
                <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
                <h1 className=' font-semibold text-gray-950 '>Our Mission</h1>
                <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
              </div>
           </div>
        </div>      
    </div>
  )
}

export default AboutContent;
import React from 'react'
import { assets } from '../assets/assets';
const Footer = () => {
  return (
    <div className=' flex border-y-2 justify-between w-full h-auto gap-3 flex-wrap py-20 px-10 mt-32 mb-10'>

        <div className=' w-auto md:w-1/4 '>
            <img className=' w-20 mb-3 md:w-36 md:mb-5' src={assets.logo}/>
            <p className=' poppins-regular text-sm  md:text-base text-gray-600 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur molestiae eveniet harum fuga optio similique tempora consequatur quam error veniam accusamus magni porro quis, minima ut quo, dolorum nihil quae.</p>
        </div>

        <div>
          <h1 className=' poppins-regular text-sm mt-5 md:text-xl md:mb-5 '>COMPANY</h1>
          <ul className=' text-sm md:text-base text-gray-600 '>
            <li className='poppins-regular'>Home</li>
            <li className='poppins-regular'>About us</li>
            <li className='poppins-regular'>Delivery</li>
            <li className='poppins-regular'>Privacy Policy</li>
          </ul>
        </div>
        
        <div className=' mt-5 '>
          <h1 className='poppins-regular mb-2s text-sm md:text-xl md:mb-[19px]'>GET IN TOUCH</h1>
          <ul className=' text-sm md:text-base text-gray-600 '>
            <li className='poppins-regular'>+92 3235709342</li>
            <li className='poppins-regular'>palmonlineservices@gmail.com</li>
          </ul>
        </div>

    </div>
  )
}

export default Footer;
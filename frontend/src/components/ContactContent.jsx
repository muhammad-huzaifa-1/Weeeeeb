import React from 'react'
import Title from './Title';
import { assets } from '../assets/assets';
const ContactContent = () => {
  return (
    <div>
        <div className=' text-xl text-center py-8 md:text-3xl '>
            <Title text1={'Contact'} text2={"US"}/>
        </div>

        <div className=' justify-center mt-10 flex flex-col md:flex-row gap-10 '>
            <img className=' md:w-1/3 ' src={assets.contact_img} alt="" />
            <div className=' md:self-center justify-start flex flex-col gap-y-4 text-gray-600 '>
                <h1  className=' text-xl text-gray-800 font-semibold '>Our Store</h1>

                <div>
                    <p>54709 Willms Station</p>
                    <p>Suite 350, Washington, USA</p>
                </div>

                <div>
                    <p>+92 323 5709342</p>
                    <p>Email: palmonlineservices@gmail.com</p>
                </div>

                <h1 className=' text-xl text-gray-800 font-semibold '>Carears at Forever</h1>

                <p>Learn more about our teams and job openings.</p>

                <div className=' mt-5 '>
                <a className='border-black border py-4 px-6 hover:bg-gray-900 transition-all hover:text-white ' href='mailto:palmonlineservices@gmail.com'>Contact</a>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ContactContent
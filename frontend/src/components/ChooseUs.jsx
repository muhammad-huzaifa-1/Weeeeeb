import React from 'react'
import Title from './Title';
const ChooseUs = () => {
  return (
    <div className=' mt-10 '>
        <div className=' text-xl text-left py-8 md:text-xl '>
            <Title text1={'WHY'} text2={" CHOOSE US"}/>
        </div>

        <div className='md:flex text-gray-600'>

           <div className=' border p-10 '>
              <h3 className=' text-gray-800 font-semibold mb-2'>Quality Assurance:</h3>
              <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
           </div>

           <div className=' border p-10 '>
              <h3 className=' text-gray-800 font-semibold mb-2'>Convenience:</h3>
              <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
           </div>

           <div className=' border p-10 '>
              <h3 className=' text-gray-800 font-semibold mb-2'>Exceptional Customer Service:</h3>
              <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
           </div>
        </div>

    </div>
  )
}

export default ChooseUs;
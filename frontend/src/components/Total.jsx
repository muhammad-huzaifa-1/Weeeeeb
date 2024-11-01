import React, { useContext } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext';
const Total = ({buttonText,BtnFunction}) => {

  const {currency,subTotal,TotalFee,} = useContext(ShopContext);
  return (
        <div className='w-full md:w-2/6 p-3 '>

                <div className='text-3xl text-left  py-8 mt-10 md:text-2xl'>
                    <Title text1={'CART'} text2={" TOTALS"}/>
                  </div>

                  <div className=' flex justify-between border-b border-gray-400 mb-4 '>
                    <p className=' poppins-regular '>SubTotal</p>
                    <p className=' poppins-regular '>{currency} {subTotal}</p>
                  </div>

                  <div className=' flex justify-between border-b border-gray-400 mb-4 '>
                    <p className=' poppins-regular '>Shipping Fee</p>
                    <p className=' poppins-regular '>{currency} 10.00</p>
                  </div>

                  <div className=' flex justify-between mb-4 '>
                    <p className=' poppins-semibold font-bold'>Total</p>
                    <p className=' poppins-semibold font-bold '>{currency} {TotalFee}</p>
                  </div>

                  <div className=' mt-10 '>
                      <button onClick={BtnFunction} className='  poppins-regular bg-gray-950 text-white p-3 rounded float-right cursor-pointer '>{buttonText}</button>
                  </div>
              </div>
  )
}

export default Total
import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Title from '../components/Title';
import Total from '../components/Total';
import { ShopContext } from '../context/ShopContext';
const PlaceOrder = () => {
  const {showTosts} = useContext(ShopContext)
  const placeOrder = ()=>{
    showTosts('placeOrder')
  }
  return (
    <div>
      <Navbar/>
       <div className=' flex flex-wrap lg:flex-nowrap items-center justify-between'>
          <div className=' flex flex-col w-full '>
                <div className=' text-3xl text-left  py-8 mt-10 md:text-2xl'>
                    <Title text1={'DELIVERY'} text2={" INFORMATION"}/>
                </div>
                <div className='justify-center md:w-3/4 lg:w-2/5 flex flex-col gap-2 '>
                   <div className=' flex gap-2'>
                     <input className=' w-6/12 py-2 px-3 border rounded poppins-regular' placeholder='Firstname' type="text" />
                     <input className=' w-6/12 py-2 px-3 border rounded poppins-regular' placeholder='Lastname' type="text" />
                   </div>
                     <input className=' py-2 px-3 border rounded poppins-regular' placeholder='Email' type="email" />
                     <input className=' py-2 px-3 border rounded poppins-regular' placeholder='Street' type="text" />
                   <div className='w-full  flex'>
                      <div className='w-6/12 flex gap-2 flex-col gap-x-2'>
                        <input className='py-2 mr-2 px-3 border rounded poppins-regular' placeholder='City' type="text" />
                        <input className='py-2 mr-2 px-3 border rounded poppins-regular' placeholder='Zipcode' type="text" />
                      </div>
                      <div className='w-6/12 flex gap-2 flex-col'>
                        <input className=' py-2 px-3 border rounded poppins-regular' placeholder='State' type="text" />
                        <input className=' py-2 px-3 border rounded poppins-regular' placeholder='Country' type="text" />
                      </div>
                   </div>
                      <input className=' py-2 px-3 border rounded poppins-regular' placeholder='Phone' type="number" />
                </div>
          </div>
          
            
                <Total buttonText={"PLACE ORDER"} BtnFunction={placeOrder} />
            
       </div>
      <Footer/>
    </div>
  )
}

export default PlaceOrder
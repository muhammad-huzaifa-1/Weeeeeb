import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import Footer from '../components/Footer'
import Total from '../components/Total'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'
const Cart = () => {

  const {cartData,currency,cartCount,setCartData,setCartCount,subTotal,setSubTotal,TotalFee,setTotalFee,showTosts} = useContext(ShopContext);

  const navigate = useNavigate();
  const proceedToCheckout = ()=>{
    if(subTotal>0){
      navigate('/placeOrder')
    }else{
      showTosts('checkoutError')
    }
  }

  const deleteFromCart = (id,price)=> {
    showTosts('delete')
    const newCartData = cartData.filter((item)=> item._id !== id );
    setCartData(newCartData);
    setCartCount(cartCount-1)
    let newTotalFee = TotalFee-price;
    let newSubTotal = subTotal-price;
    setSubTotal(newSubTotal);
    setTotalFee(newTotalFee)
  }


  return (
    <div>
      <Navbar/>
            <div className='text-3xl text-left py-8 mt-10 md:text-2xl'>
              <Title text1={'YOUR'} text2={"CART"}/>
            </div>

            <div className=' poppins-regular w-full relative'>
              {
                cartData.length > 0 ?(cartData.map((item)=>{
                  return(
                    <div className='poppins-regular flex mb-0 border-t border-b p-4 '>

                      <div className='poppins-regular flex gap-x-5'>
                        <img src={item.image[0]} className='w-24' alt="" />
                        <div className=' w-10 md:w-full '>
                          <h1 className='poppins-regular text-sm md:text-xl '>{item.name}</h1>
                          <h1 className='poppins-regular text-sm md:text-lg mt-2 '>{currency} {item.price}</h1>
                        </div>
                      </div>

                      <div className='poppins-regular absolute flex flex-col items-center left-2/3 md:left-1/2 '>
                        <h1 className=' poppins-regular text-sm md:text-base '>Quantity</h1>
                        <input className='poppins-regular text-center w-10 mt-3 bg-gray-100 rounded ' value={1} min={1}/>
                      </div>

                      <div className=' absolute right-0 '>
                        <img src={assets.bin_icon} onClick={()=>deleteFromCart(item._id,item.price)} className=' w-6 mt-8 cursor-pointer ' alt="" />
                      </div>

                    </div>
                  )
                })):<><h1 className='poppins-regular'>No item in cart</h1></>
              }
            </div>
                 
            <div className=' poppins-regular flex flex-col items-end '>
              <Total buttonText={"PROCEED TO CHECKOUT"} BtnFunction={proceedToCheckout}/>
            </div>
      <Footer/>
    </div>
  )
}

export default Cart
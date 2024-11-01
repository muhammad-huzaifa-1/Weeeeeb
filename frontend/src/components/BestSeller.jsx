import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItems from './ProductItems';

const BestSeller = () => {

    const {bestSeller,getProducts} = useContext(ShopContext);

    useEffect(()=>{
        getProducts();
    },[])

  return (
    <div className= 'my-10'>
        <div className=' text-center text-3xl py-8 '>
            <Title text1={"BEST"} text2={"SELLERS"}/>
            <p className=' poppins-regular w-3/4 m-auto text-xs sm:text-sm md:text-base '>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, itaque!
            </p>

        </div>

        <div className=' grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
            {
                bestSeller?.map((value, index)=>{
                    return(<><div key={index}><ProductItems category={value.category} key={index} id={value._id} name={value.name} image={value.image} price={value.price}/></div></>)
                })
            }
        </div>

    </div>
  )
}

export default BestSeller;
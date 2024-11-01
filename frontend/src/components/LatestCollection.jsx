import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItems from './ProductItems';
import { assets } from '../assets/assets';
const LatestCollection = () => {

    let { getProducts, latestProducts } = useContext(ShopContext);
    
    useEffect(()=>{
        getProducts();
    },[getProducts])
  return (
    <div className=' my-5 '>
        <div className=' text-center py-8 text-3xl '>
             <Title text1={'Latest'} text2={"Collection"}/>
             <p className='w-3/4 m-auto text-xs sm:text-sm poppins-regular md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

{/* Renderin Products */}

        <div className=' grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
          {
            latestProducts?(latestProducts.map((items)=>{
              return(
                <>
                  <div key={items._id}>
                   <ProductItems key={items._id} id={items._id} image={items.image[0]} name={items.name} category={items.category} price={items.price}/>
                  </div>
                </>
              )
            })):<><img className=' w-10 ml-[580px] mt-6 ' src={assets.loader} alt="" /></>
          }
        </div>
    </div>
  )
}

export default LatestCollection;
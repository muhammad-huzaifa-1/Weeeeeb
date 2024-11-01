import React, { useContext, useEffect, useState } from 'react'
// import { products } from '../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
const ProductsView = () => {

    const {addToCart} = useContext(ShopContext);
    
    const [currentIndex, setCurrentIndex] = useState(0)

    const location = useLocation();
    const [productView, setProductView] = useState('');
    let ProductCate = localStorage.getItem('category')
    let url = location.pathname.split(`/product/${ProductCate}/`)[1];

    const ShowNext = (product)=>{
        if(currentIndex >= product.image.length - 1){
            setCurrentIndex(0)
        }else{
            setCurrentIndex(currentIndex + 1)
        }
        
    }

    const ShowPrevious = (product)=>{
        if (currentIndex === 0) {
            setCurrentIndex(product.image.length-1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }

    useEffect(()=>{
        getProductById();
    },[productView])

    const getProductById = async()=>{
        const result = await axios.get(`http://localhost:5000/getbyId/${url}`);
        setProductView(result.data);
    }

  return (
    <div className=' md:flex md:gap-10 md:justify-center md:w-full my-28' >

        {
            productView?productView&&<div className=' overflow-hidden md:flex gap-6 items-center '>
                <div className='flex md:flex-col items-end mb-10  md:mb-0 gap-y-6'>
                    <img onClick={()=>setCurrentIndex(0)} className={`cursor-pointer ${currentIndex===0?"border-2":"border-0"} border-red-600 w-1/4 md:w-2/5`} src={productView.image[0]} alt="" />
                    <img onClick={()=>setCurrentIndex(1)} className={`cursor-pointer ${currentIndex===1?"border-2":"border-0"} border-red-600 w-1/4 md:w-2/5`} src={productView.image[1]} alt="" />
                    <img onClick={()=>setCurrentIndex(2)} className={`cursor-pointer ${currentIndex===2?"border-2":"border-0"} border-red-600 w-1/4 md:w-2/5`} src={productView.image[2]} alt="" />
                    <img onClick={()=>setCurrentIndex(3)} className={`cursor-pointer ${currentIndex===3?"border-2":"border-0"} border-red-600 w-1/4 md:w-2/5`} src={productView.image[3]} alt="" />
                </div>

                <div className='w-full relative '>
                    <i onClick={()=>ShowPrevious(productView)} className={` ${productView.image.length===1?"hidden":"block"} fa-solid fa-circle-chevron-left left-5 top-1/2 text-gray-500 cursor-pointer absolute text-[40px]`}></i>
                    <i onClick={()=>ShowNext(productView)} className={` ${productView.image.length===1?"hidden":"block"} fa-solid fa-circle-chevron-right text-gray-500 absolute top-1/2 cursor-pointer right-5 text-[40px]`}></i>
                    <img className=' md:w-full w-full ' src={productView.image[currentIndex]}  alt="/" />
                </div>
                
            </div>:<><img className=' size-[100px] mt-[100px] mr-[100px] ' src={assets.loader} alt="" /></>
        }            

        <div className=' md:w-2/5 '>
            
            {
                
                  <div className=' mt-8 border-b-2 text-[17px] text-gray-500'>
                    <h1 className='poppins-regular text-2xl text-gray-950 font-medium mb-3 '>{productView.name}</h1>
                    
                    <div className='flex items-center gap-1 mb-5'>
                        <img src={assets.star_icon} alt="/" />
                        <img src={assets.star_icon} alt="/" />
                        <img src={assets.star_icon} alt="/" />
                        <img src={assets.star_icon} alt="/" />
                        <img src={assets.star_dull_icon} alt="/" />
                        <div className='poppins-regular mt-1 ml-3 '>(122)</div>
                    </div>
    
                    <h1 className='poppins-regular text-3xl text-gray-950 font-bold mb-3 '>${productView.price}</h1>
    
                    <p className='poppins-regular my-8 '>{productView.discription}</p>
    
                    <div className=' my-6'>
                       <button onClick={()=>{addToCart(productView._id)}} className='p-3 poppins-regular cursor-pointer text-[14px] text-white bg-gray-950 '>ADD TO CART</button>
                    </div>
                </div>
                
            }

            <div className=' text-gray-500  mt-3 flex flex-col gap-y-1'>
                <p className='poppins-regular'>100% Original product.</p>
                <p className='poppins-regular'>Cash on delivery is available on this product.</p>
                <p className='poppins-regular'>Easy return and exchange policy within 7 days.</p>
            </div>
        </div>
    </div>
  )
}

export default ProductsView
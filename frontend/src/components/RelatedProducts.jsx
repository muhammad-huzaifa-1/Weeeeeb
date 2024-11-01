import React, { useEffect, useState } from 'react'
import Title from './Title'
import ProductItems from './ProductItems'
import axios from 'axios'
import { assets } from '../assets/assets'
const RelatedProducts = () => {

  const [relatedPro, setRelatedPro] = useState();
  let ProductCate = localStorage.getItem('category')

  const relatedProducts = async()=>{
    let result = await axios.get(`http://localhost:5000/relatedProducts?category=${ProductCate}`);
    setRelatedPro(result.data.slice(0,10))
  }
  useEffect(()=>{
    relatedProducts();
  },[relatedProducts])

  return (
    <div>
        <div className=' text-base text-center py-8 md:text-3xl '>
            <Title text1={'Related'} text2={"Products"}/>
        </div>
        <div className=' grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
        {
          relatedPro?relatedPro&&(relatedPro.map((items)=>{
            return (<div>
               <ProductItems key={items._id} id={items._id} image={items.image[0]} name={items.name} category={items.category} price={items.price} />
            </div>)
          })):<><img className=' w-10 ml-[580px] mt-6 ' src={assets.loader} alt="" /></>
        }
        </div>
    </div>
  )
}

export default RelatedProducts
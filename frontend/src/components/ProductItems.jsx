import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItems = ({id,image,name,price,category}) => {
    const {currency,setProductCategory} = useContext(ShopContext);
    const scrollTop = ()=>{
      window.scrollTo({top: 0, behavior: 'smooth'});
      setProductCategory(category)
      localStorage.setItem('category',category)
    }
  return (
    <div onClick={scrollTop}>
          <Link className=' text-gray-700 cursor-pointer ' to={`/product/${category}/${id}`}>

            <div className=' overflow-hidden '>
              <img className=' hover:scale-110 transition ease-in-out' src={image} alt='/'></img>
            </div>
            <p className=' pt-3 poppins-regular pb-3 text-sm '>{name}</p>
            <p className=' text-sm poppins-regular font-medium '>{currency}{price}</p>

        </Link>
    </div>
  )
}

export default ProductItems
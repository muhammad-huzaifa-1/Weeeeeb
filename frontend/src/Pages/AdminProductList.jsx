import React, { useContext, useEffect } from 'react'
import AddButtons from '../components/AddButtons'
import AdminNavbar from '../components/AdminNavbar';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
const AdminProductList = () => {

    const {getProducts,allCollection,showTosts} = useContext(ShopContext);

    const deleteProduct = async(id)=>{
      showTosts("placeOrder")
      // let result = await fetch(`http://localhost:5000/deleteProducts/${id}`,{
      //   method:"delete"
      // });
      // result = result.json();
      // if(result){
      //   getProducts();
      // }
    }

    useEffect(()=>{
      getProducts();
    },[allCollection])

  return (
    
<div>
      <AdminNavbar/>
      <div className='flex'>
        <AddButtons/>

        <div className='w-full py-10 px-8 md:py-20 md:px-16 h-auto'>
            <h1 className='poppins-regular md:text-base text-[12px] text-gray-600'>All Products List</h1>
                <table className=' mt-5 poppins-regular border-collapse w-full'>
                    <tr className=' bg-gray-100 border border-collapse text-left '>
                        <th className='py-1 text-[10px] md:text-base px-4 poppins-semibold text-gray-600 font-semibold'>Image</th>
                        <th className='py-1 text-[10px] md:text-base px-4 poppins-semibold text-gray-600 font-semibold'>Name</th>
                        <th className='py-1 text-[10px] md:text-base px-4 poppins-semibold text-gray-600 font-semibold'>Price</th>
                        <th className='py-1 text-[10px] md:text-base px-4 poppins-semibold text-gray-600 font-semibold'>Catrgory</th>
                        <th className='py-1 text-[10px] md:text-base px-4 poppins-semibold text-gray-600 font-semibold'>Action</th>
                    </tr>

                    {
                      allCollection.length>0?(allCollection?allCollection&&allCollection.map((items)=>{
                        return(
                          <>
                              <tr key={items._id} className=' border-collapse border text-left '>
                              <th className='py-[6px] text-left px-4  poppins-semibold text-gray-600 font-semibold'><img className='w-14' src={items.image[0]} alt="" /></th>
                              <th className='py-[6px] text-left px-4 poppins-regular text-[8px] md:text-base text-gray-900'>{items.name}</th>
                              <th className='py-[6px] text-left px-4 poppins-regular text-[10px] md:text-base text-gray-900'>{items.price}</th>
                              <th className='py-[6px] text-left px-4 poppins-regular text-[10px] md:text-base text-gray-900'>{items.category}</th>
                              <th className='py-[6px] text-left px-4 poppins-regular text-[12px] md:text-xl text-gray-900'><p className='poppins-regular ml-5 cursor-pointer' onClick={()=>{deleteProduct(items._id)}} >X</p></th>
                            </tr>
                          </>
                        )
                      }):<></>):<><h1>No Item found</h1></>
                    } 

                </table>
            </div>
        </div>
</div>

    
  )
}

export default AdminProductList
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
const AddButtons = () => {
  const location = useLocation();
  return (
    <div className='w-1/6 flex flex-col gap-4 mt-0 pt-14 justify-start h-screen border-r-2 '>
        <Link to="/add" className={`flex rounded border-r-0 rounded-r-none gap-x-3 items-center border cursor-pointer p-2 ${location.pathname==='/add'?"bg-pink-100 border-pink-500":"bg-white"} `}>
            <i class="fa-solid fa-circle-plus text-xl"></i>
            <p className='hidden poppins-regular md:block'>Add Items</p>
        </Link>

        <Link to='/list' className={`flex rounded border-r-0 rounded-r-none gap-x-3 items-center border cursor-pointer p-2 ${location.pathname==='/list'?"bg-pink-100 border-pink-500":"bg-white"} `}>
            <i class="fa-regular fa-calendar-check text-xl"></i>
            <p className='hidden poppins-regular md:block'>List Items</p>
        </Link>
{/* 
        <Link to='/order' className={`flex rounded border-r-0 rounded-r-none gap-x-3 items-center border cursor-pointer p-2 ${location.pathname==='/order'?"bg-pink-100 border-pink-500":"bg-white"}`}>
            <i class="fa-regular fa-calendar-check text-xl"></i>
            <p className='hidden poppins-regular md:block'>Orders</p>
        </Link> */}
    </div>
  )
}

export default AddButtons;
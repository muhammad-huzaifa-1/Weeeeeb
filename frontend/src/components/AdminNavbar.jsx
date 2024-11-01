import React from 'react'
import { assets } from '../assets/assets'
const AdminNavbar = () => {
  return (
    <div className=' border-b-2 flex items-center  justify-between py-5 font-medium '>
        <img className=' w-20 md:w-36 '  src={assets.logo} alt="" />
        <button className=' poppins-regular bg-gray-600 text-white md:py-2 md:px-7 py-1 px-3  text-[10px] md:text-base rounded-[50px] cursor-pointer'>Logout</button>
    </div>
  )
}

export default AdminNavbar
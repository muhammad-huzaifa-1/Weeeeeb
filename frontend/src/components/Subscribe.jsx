import React from 'react'

const Subscribe = () => {
  return (
    <div className='flex justify-center mt-36 my-10 w-full h-auto'>
        <div className=' w-full '>
            <h1 className=' text-center text-[25px] font-medium text-gray-700 lg:text-3xl '>Subscribe now & get 20% off</h1>
            <p className='text-center poppins-regular text-base text-gray-400 lg:text-[14px] my-1 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, reprehenderit?</p>

            <form className=' my-10 flex justify-center w-full'>
                <input className='lg:w-2/4  poppins-regular p-2 w-2/4  outline-none border  border-gray-700 ' type='email' placeholder='Enter your Email'/>
                <button className=' lg:py-3 poppins-regular lg:px-10 px-3 bg-gray-900 text-white cursor-pointer ' type='submit'>Subscribe</button>
            </form>
        </div>

    </div>
  )
}

export default Subscribe
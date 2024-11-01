import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
const TostNotification = ({tostList}) => {

  const {setList} = useContext(ShopContext);

  const removeToast = (id)=>{

    let newToastList = tostList.filter((newData)=>{
      return newData.id !== id;
    });
    setList(newToastList);

  }

  return (
    <div className=' w-full md:w-1/6 z-10 mt-4 fixed right-0 h-auto '>
      {
        tostList.map((data,index)=>{
          return <div key={index} className={`animate-popup relative bg-white md:right-5  p-3 shadow-2xl border-gray-300 border rounded-md mt-2 flex  items-center gap-x-4`}>
              <i className={`fa-solid ${data.icon} text-2xl ${data.color}`}></i>
              <p className=' poppins-regular text-base text-gray-500 '>{data.title}</p>
              <i onClick={()=>{removeToast(data.id)}} className=" absolute top-0 text-xl text-gray-400 cursor-pointer right-1 fa-solid fa-xmark"></i>
          </div>
        })
      }

    </div>
  ) 
}

export default TostNotification;
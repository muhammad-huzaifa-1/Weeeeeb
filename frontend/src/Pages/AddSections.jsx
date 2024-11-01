import React, { useContext, useEffect, useRef, useState } from 'react'
import AddButtons from '../components/AddButtons'
import AdminNavbar from '../components/AdminNavbar';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import axios from 'axios';
const AddSections = () => {

    const {getProducts,showTosts} = useContext(ShopContext);

    const [image1, setimage1]= useState();
    const [image2, setimage2]= useState();
    const [image3, setimage3]= useState();
    const [image4, setimage4]= useState();

    const [BtnDisable, setBtnDisable] = useState(false);


    const [name , setName] = useState('');
    // const [review, setReview] = useState('');
    const [price, setPrice] = useState('20');
    const [discription, setDiscription] = useState('');
    const [category, setCategory] = useState("Men");

    const onSubmitProduct = async(e)=>{
        e.preventDefault()  
        showTosts('placeOrder')
        // setBtnDisable(true);
        // try {

        //     const formData = new FormData();

        //     formData.append("name",name);
        //     formData.append('discription', discription);
        //     formData.append('price', price);
        //     formData.append('category', category);

        //     image1 && formData.append('image1', image1);
        //     image2 && formData.append('image2', image2);
        //     image3 && formData.append('image3', image3);
        //     image4 && formData.append('image4', image4);

        //     const response = await axios.post("http://localhost:5000/addProduct",formData);
        //     if(response){
        //         showTosts("productAdd");
        //         setBtnDisable(false)
        //         getProducts();
        //     }
            
        // } catch (error) {
        //     showTosts('addError')
        // }
    }

  return (
<div>
        <AdminNavbar/>
    <div className=' flex '>
          <AddButtons/>
        <form onSubmit={onSubmitProduct} className=' w-full py-10 px-8 md:py-20 md:px-16 h-auto'>

            <div className=' mb-10'>
                <h1 className=' mb-6 poppins-regular text-xl text-gray-600 '>Upload Image   </h1>
                <div className=' flex flex-wrap gap-2 '>
                   <label className=' poppins-regular cursor-pointer ' htmlFor='image1'>
                    <img className=' w-20 rounded ' src={!image1 ? assets.upload_area: URL.createObjectURL(image1)} alt="" />
                    <input className='hidden' name='image1' id='image1' onChange={(e)=>{setimage1(e.target.files[0])}} type="file"/>
                   </label>   

                   <label className=' cursor-pointer poppins-regular ' htmlFor='image2'>
                    <img className=' w-20 rounded ' src={!image2 ? assets.upload_area: URL.createObjectURL(image2)} alt="" />
                    <input className='hidden' name='image2' id='image2' onChange={(e)=>{setimage2(e.target.files[0])}} type="file"/>
                   </label>  

                   <label className=' cursor-pointer poppins-regular' htmlFor='image3'>
                    <img className=' w-20 rounded ' src={!image3 ? assets.upload_area: URL.createObjectURL(image3)} alt="" />
                    <input className='hidden' name='image3' id='image3' onChange={(e)=>{setimage3(e.target.files[0])}} type="file"/>
                   </label>  

                   <label className=' cursor-pointer poppins-regular' htmlFor='image4'>
                    <img className=' w-20 rounded ' src={!image4 ? assets.upload_area: URL.createObjectURL(image4)} alt="" />
                    <input className='hidden' name='image4' id='image4' onChange={(e)=>{setimage4(e.target.files[0])}} type="file"/>
                   </label>  
                </div>
            </div>

            <div className=' flex flex-col gap-2 mb-8'>
                <label className=' poppins-regular text-gray-600 '>Product Name</label>
                <input style={{background:"#F8F8F8"}} value={name} className='w-full lg:w-2/4 p-2 bg-gray-200 outline-pink-800 border-gray-400 border-2 rounded poppins-regular' onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='Type here'/>
            </div>

            <div className=' flex poppins-regular flex-col gap-2 mb-10'>
                <label className=' text-gray-600 poppins-regular '>Product Discription</label>
                <textarea style={{background:"#F8F8F8"}} value={discription} onChange={(e)=>{setDiscription(e.target.value)}} className='w-full h-64 resize-none  lg:w-2/4 p-2 bg-gray-200 outline-pink-800 border-gray-400 border-2 rounded ' type='text' placeholder='Write content here'/>
            </div>

            <div className=' flex gap-x-10 text-sm md:text-base  '>
               <div className=' flex flex-col gap-y-3 '>
                    <label className=' poppins-regular text-gray-600 '>Select Category</label>
                    <select onChange={(e)=>setCategory(e.target.value)}  style={{background:"#F8F8F8"}} className='poppins-regular p-[10px] border-gray-400 outline-pink-800 rounded text-lg px-3 '>
                        <option value="Men" className=' poppins-regular ' >Men</option>
                        <option value="Women"  className=' poppins-regular '>Women</option>
                        <option value="Kids" className=' poppins-regular ' >Kids</option>
                    </select>
               </div>

               <div className='  flex flex-col gap-y-3 '>
                    <label className='w-[100px] md:w-full poppins-regular  text-gray-600 '>Select Price</label>
                    <input style={{background:"#F8F8F8"}} value={price} onChange={(e)=>setPrice(e.target.value)} className='rounded w-6/12 p-2 poppins-regular bg-gray-200 border-2 border-gray-400 outline-pink-800' type="number" placeholder='30'/>
               </div>
            </div>

            <div className=' mt-10'>
                <button type='submit' disabled={BtnDisable} className={` ${BtnDisable?"bg-gray-300":"hover:bg-gray-700 hover:text-white"} py-3 px-4 border border-gray-900 rounded transition-all poppins-regular `}>ADD PRODUCT</button>
            </div>
        </form>
    </div>
</div>
  )
}

export default AddSections
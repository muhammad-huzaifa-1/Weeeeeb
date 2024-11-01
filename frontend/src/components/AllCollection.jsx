import React, { useContext, useEffect, useRef, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItems from './ProductItems';
import { assets } from '../assets/assets';
const AllCollection = () => {

    const {getProducts,allCollection,ShowSeacrh,setShowSearch } = useContext(ShopContext);

    const [Category, setCategory] = useState([]);
    const [filteredItems, setFilteredItems] = useState(allCollection);
    const [searchPro, setSearchProduct] = useState('');




    useEffect(()=>{
        getProducts();
    },[]);

    const handelFilterClick = (category)=>{
        if (Category.includes(category)) {
            let filterPro = Category.filter((data)=>{
                return data !== category;
            });

            setCategory(filterPro)
        } else {
            setCategory([...Category,category])
        }
    }

    const filterItems = ()=>{
        if (Category.length > 0) {
            let tempItems = Category.map((category)=>{
                let temp = allCollection.filter((cat)=>{
                    return cat.category === category
                });
                return temp
            });
            setFilteredItems(tempItems.flat())
        } else {
            setFilteredItems([...allCollection])
        }
    }

    useEffect(()=>{
        filterItems();
        getProducts();
    },[allCollection,Category])

  return (
    <div>

        <div className={` bg-gray-100 border-b-2 ${ShowSeacrh} flex justify-center items-center h-20`}>
            <input value={searchPro} onChange={(e)=>{setSearchProduct(e.target.value)}} className='poppins-regular w-1/2 py-1 px-4 border border-gray-500 outline-none rounded-[50px]'placeholder='Search'  type="text" name="" id="" /><span className=' ml-3  text-xl '><i onClick={()=>{setShowSearch('hidden');setSearchProduct('')}} className="fa-solid fa-xmark cursor-pointer "></i></span>
        </div>
    <div className=' my-15 '>
                <div className=' text-3xl text-center py-8 md:text-3xl '>
                    <Title text1={'All'} text2={"Collection"}/>
                </div>
{/* Renderin Products */} 
        <div className=' flex flex-wrap gap-10 md:flex-nowrap'>

            <div className='  '>
                <h1 className='poppins-regular text-sm md:text-xl mb-5'>FILTERS</h1>
                <div className=' border p-5 pr-36 w-full text-left '>
                    <h1 className=' poppins-regular text-sm md:text-xl'>CATEGORIES</h1>
                    <div className=' flex gap-x-2 mt-3 w-full text-sm md:text-base md:gap-y-2  md:flex-col '>
                        <div><input type="checkbox" onClick={()=>{handelFilterClick("Men")}}/> <span className='poppins-regular'>Men</span></div>
                        <div><input type="checkbox" onClick={()=>{handelFilterClick("Women")}}/> <span className='poppins-regular'>Women</span></div>
                        <div><input type="checkbox"  onClick={()=>{handelFilterClick("Kids")}}/> <span className='poppins-regular'>Kids</span></div>
                    </div>
                </div>
            </div>

            <div className=' grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
            {
                filteredItems.length > 0 ?(filteredItems?filteredItems.filter((item)=>{
                    return searchPro === ''?filteredItems:item.name.includes(searchPro)
                }).map((items)=>{
                    return(
                        <>
                        <ProductItems key={items._id} id={items._id} category={items.category} image={items.image[0]} name={items.name} price={items.price} />
                        </>
                    )
                    }):<><div className=' flex w-[450px] md:w-[300px] lg:w-[550px] justify-center '><img className=' size-10 mt-6 ' src={assets.loader} alt="" /></div></>):<><h1 className=' text-3xl w-56 ml-7'>No result found</h1></>
            }
            </div>
        </div>

    </div> 
    </div>
  )
}

export default AllCollection
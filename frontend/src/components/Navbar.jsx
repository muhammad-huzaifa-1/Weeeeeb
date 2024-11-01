import React, { useContext, useRef, useState } from 'react'
import { assets } from '../assets/assets';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
const Navbar = () => {
    const navigate = useNavigate();
    const [Visisble, setVisible] = useState(false);

    const user = JSON.parse(localStorage.getItem('user'));

    const {setShowSearch,cartCount,showTosts} = useContext(ShopContext);

    const logout = ()=>{
        localStorage.removeItem('user');
        navigate('/')
        showTosts('logout')
    }

    // const inp = useRef();



    return (
        <div className=' border-b-2 flex items-center justify-between py-5 font-medium '>

            <Link to="/"><img src={assets.logo} className=' w-36 ' alt='/' /></Link>

            <ul className='sm:flex gap-5 text-sm mt-2 text-gray-700 hidden '>

                <NavLink to='/' className=" flex flex-col items-center gap-1 ">
                    <p className='poppins-regular'>HOME</p>
                    <hr className=' w-2/4 border-none h-[2px] bg-gray-950 hidden' />
                </NavLink>

                <NavLink to='/collection' className=" flex flex-col items-center gap-1 ">
                    <p className='poppins-regular'>COLLECTION</p>
                    <hr className=' w-2/4 border-none h-[2px] bg-gray-950 hidden' />
                </NavLink>

                <NavLink to='/about' className=" flex flex-col items-center gap-1 ">
                    <p className='poppins-regular'>ABOUT</p>
                    <hr className=' w-2/4 border-none h-[2px] bg-gray-950 hidden' />
                </NavLink>
                <NavLink to='/contact' className=" flex flex-col items-center gap-1 ">
                    <p className='poppins-regular'>CONTACT</p>
                    <hr className=' w-2/4 border-none h-[2px] bg-gray-950 hidden' />
                </NavLink>

                <NavLink to='/add' className=" flex flex-col items-center gap-1 ">
                    <p className='poppins-regular py-1 px-3 border-black mt-[-5px] rounded-[50px] border '>Admin Panel</p>
                </NavLink>


            </ul>


            <div className=' flex items-center gap-6 '>

                <Link to='/collection'><img src={assets.search_icon} onClick={()=>{setShowSearch('block')}} className=' w-5 cursor-pointer ' alt="/" /></Link>

                <div className=' group relative '>

                    <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="/" />

                    <div className=' group-hover:block hidden absolute dropdown-menu right-0 pt-4 '>

                            <div className=' flex flex-col gap-2 w-36 py-3 px-5 rounded bg-slate-100 text-slate-400 '>

                                {
                            user?<><p className=' cursor-pointer poppins-regular hover:text-black '>My Profile</p>
                                    <p className=' cursor-pointer poppins-regular hover:text-black '>Orders</p>
                                    <p onClick={logout} className=' cursor-pointer poppins-regular hover:text-black '>Logout</p></>:
                                    <><Link to={'/login'}><p className=' cursor-pointer poppins-regular hover:text-black '>Login</p></Link></>
                                }
    
                            </div>

                    </div>
                </div>

                <Link to='/Cart' className='relative'>

                   <img src={assets.cart_icon} className=' w-5 min-w-5 ' alt="/" />
                   <p className='poppins-regular absolute right-[-5px] top-[15px] text-[12px] w-4  text-center leading-4 bg-black text-white aspect-square rounded-full '>{cartCount}</p>
                  
                </Link>

                <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt="/" className='w-5 sm:hidden cursor-pointer' />
            </div>

            <div className={` absolute top-0 right-0 bottom-0 z-30  overflow-hidden bg-white translate-all ${Visisble ? 'w-full':'w-0'} `}>

                <div className=' flex flex-col text-gray-600 '>

                    <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer '>
                        <img className=' h-4 rotate-180 ' src={assets.dropdown_icon} alt="/" />
                        <p>Back</p>
                    </div>

                    <div className=' flex flex-col gap-10 mt-20'>
                        <NavLink to='/' className="  p-2 text-black flex flex-col items-center gap-1 ">
                        <p className='poppins-regular'>HOME</p>
                        <hr className=' w-2/4 border-none h-[2px] bg-gray-950 hidden' />
                        </NavLink>

                        <NavLink to='/collection' className="  p-2 text-black flex flex-col items-center gap-1 ">
                            <p className='poppins-regular'>COLLECTION</p>
                            <hr className=' w-2/4 border-none h-[2px] bg-gray-950 hidden' />
                        </NavLink>

                        <NavLink to='/about' className="  p-2 text-black flex flex-col items-center gap-1 ">
                            <p className='poppins-regular'>ABOUT</p>
                            <hr className=' w-2/4 border-none h-[2px] bg-gray-950 hidden' />
                        </NavLink>
                        <NavLink to='/contact' className="  p-2 text-black flex flex-col items-center gap-1 ">
                            <p className='poppins-regular'>CONTACT</p>
                            <hr className=' w-2/4 border-none h-[2px] bg-gray-950 hidden' />
                        </NavLink>
                        <NavLink to='/add' className=" flex flex-col items-center gap-1 ">
                            <p className='poppins-regular py-1 px-3 border-black mt-[-5px] rounded-[50px] border '>Admin Panel</p>
                        </NavLink>
                    </div>

                </div>

            </div>
        </div>
        
    )
}

export default Navbar
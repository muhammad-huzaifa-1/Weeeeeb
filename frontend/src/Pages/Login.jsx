import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
const Login = () => {

  const {showTosts} = useContext(ShopContext);
  
  const [btnDisable, setBtnDisable] = useState(false)
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');

  const loginUser = async()=>{
    setBtnDisable(true);
    let result = await fetch(`http://localhost:5000/login`,{
      method:"post",
      body:JSON.stringify({email,password}),
      headers:{
        "Content-Type":"application/json"
      }
    });

    result = await result.json();
    if(result.email){
      setBtnDisable(false);
      localStorage.setItem('user',JSON.stringify(result));
      navigate('/');
      showTosts("register")
    }else{
      setBtnDisable(false);
      showTosts('loginError',result.result)
    }

  }


  return (
    <div>
      <Navbar/>

      <div className='flex justify-center mt-[150px] w-auto items-center '>
         <div>
           <h1 className='prata-regular text-3xl mb-10 text-center '>Login</h1>
           <div>
             <div>
                <input type="email" value={email} required onChange={(e)=>setEmail(e.target.value)} className='poppins-regular bg-white p-2 mb-3 border-black border' placeholder='Email' name="forEmail" id="forEmail" autoComplete="true" />
             </div>

             <div>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='poppins-regular bg-white p-2 mb-3 border-black border' placeholder='Password' name="" id="forPassword" autoComplete="true" />
             </div>

             <div className='flex justify-between mb-7'>
                <p className=' poppins-regular text-[13px] '>Forgot your password?</p>
                <Link to={'/register'}><p className=' poppins-regular text-[13px] '>Create account</p></Link>
             </div>

             <div className='flex justify-center'>
               <button onClick={loginUser} disabled={btnDisable} className={` poppins-regular ${btnDisable?"bg-gray-300":"bg-gray-900 "} text-sm text-white py-3 px-7 cursor-pointer `}>Sign in</button>
             </div>
           </div>
         </div>
      </div>

    </div>
  )
}

export default Login
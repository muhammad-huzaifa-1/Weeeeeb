import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar';
import { Link,useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
const Register = () => {

    const {showTosts} = useContext(ShopContext)

    const [BtnDisable, setBtnDisable] = useState(false);

    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState()

    const navigate = useNavigate();

    const onRegister = async(e)=>{
        e.preventDefault();
        setBtnDisable(true)
        let result = await fetch(`http://localhost:5000/register`,{
            method:"post",
            body: JSON.stringify({name,email,password}),
            headers:{
                "Content-Type":"application/json"
            }
        });

        result = await result.json();
        if(result.name && result.email){
          localStorage.setItem('user',JSON.stringify(result));
          navigate('/')
          showTosts('register')
          setBtnDisable(false)
        }else if(!result.name || !result.email || !result.password){
          showTosts('RegisterError',result.result);
          setBtnDisable(false)
        }
    }

  return (
    <div>
      <Navbar/>

      <div className='flex justify-center mt-[150px] w-auto items-center '>
         <div>
           <h1 className='prata-regular text-3xl mb-10 text-center '>Sign up</h1>
           <div>
            <div>
                <input type="text" className='poppins-regular bg-white p-2 mb-3 border-black border' placeholder='Username' id="forUser" value={name} onChange={(e)=>{setName(e.target.value)}} autoComplete='true' />
             </div>

             <div>
                <input type="email" className='poppins-regular bg-white p-2 mb-3 border-black border' placeholder='Email' id="forEmail" value={email} onChange={(e)=>{setEmail(e.target.value)}} autoComplete='true' />
             </div>

             <div>
                <input type="password" className='poppins-regular bg-white p-2 mb-3 border-black border' placeholder='Password'  value={password} onChange={(e)=>{setPassword(e.target.value)}} id="forPass" autoComplete='true' />
             </div>

             <div className='flex justify-between mb-7'>
                <p className=' poppins-regular text-[13px] '>Forgot your password?</p>
                <Link to={'/login'}><p className=' poppins-regular text-[13px] '>login Here?</p></Link>
             </div>

             <div className='flex justify-center'>
               <button type='submit' disabled={BtnDisable} onClick={onRegister} className={`poppins-regular text-sm text-white py-3 px-7 cursor-pointer ${BtnDisable?"bg-gray-300":"bg-gray-900"} `}>Sign up</button>
             </div>
           </div>
         </div>
      </div>

    </div>
  )
}

export default Register
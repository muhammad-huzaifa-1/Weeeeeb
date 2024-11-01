import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Collection from './Pages/Collection';
import About from './Pages/About';
import Contact from "./Pages/Contact";
import Product from './Pages/Product';
import Orders from './Pages/Orders';
import PlaceOrders from "./Pages/PlaceOrder";
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import AdminPanel from './Pages/AdminPanel';
import AddSections from './Pages/AddSections';
import TostNotification from './components/TostNotification';
import AdminProductList from './Pages/AdminProductList';
import { ShopContext } from './context/ShopContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './Pages/Register';
const App = ()=>{
  const {ProductCategory,list} = useContext(ShopContext)
  const ProductCate = localStorage.getItem('category');

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <TostNotification tostList={list}/>
      <Routes>
        <Route path='/add' element={<AddSections/>}/>
        <Route path='/list' element={<AdminProductList/>}/>
        <Route path='/Adminpanel' element={<AdminPanel/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path={`/product/${!ProductCategory?ProductCate:ProductCategory}/:productId`} element={<Product/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/placeOrder' element={<PlaceOrders/>} />
        <Route path='/login' element={<><Login/><Footer/></>} />
        <Route path='/register' element={<><Register/><Footer/></>}/>
        <Route path='/Cart' element={<Cart/>} />
      </Routes>
    </div>
  )
};

export default App;
import React from 'react'
import ProductsView from '../components/ProductsView'
import Discription from '../components/Discription'
import RelatedProducts from '../components/RelatedProducts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Product = () => {
  return (
    <div>
      <Navbar/>
      <ProductsView/>
      <Discription/>
      <RelatedProducts/>
      <Footer/>
    </div>
  )
}

export default Product
import React from 'react'
import Hero  from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular';
import Baner from '../Components/Baner.jsx/Baner';
import Cds from '../Components/Cds/Cds';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import CartItems from '../Components/CartItems/CartItems';



const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Baner/>
      <Cds/>
      <NewsLetter/>
     
    </div>
  )
}

export default Shop;
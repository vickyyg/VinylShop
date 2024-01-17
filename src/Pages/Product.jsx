import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrums from '../Components/BreadCrums/BreadCrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {

  const {allproducts} = useContext(ShopContext);
  const {productId} = useParams();
  const product = allproducts.find((e) => e.id === Number(productId));
  return (
    <div>
      <BreadCrums product = {product}/>
      <ProductDisplay product = {product}/>
      
    </div>
  )
}

export default Product
import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';
import './ProductDisplay.css'


const ProductDisplay = (props) => {
    const {product} = props;

    const {addToCart} = useContext(ShopContext); 

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img">
                <img src={product.img} alt=''/>
                <h1>{product.name}</h1>
                <div>${product.price}</div>
            </div>
            <div className="right-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur harum quaerat impedit beatae, necessitatibus, sequi eligendi a voluptatem non nulla molestias ipsam nostrum voluptate praesentium voluptas neque velit at quia.
            </div>
        </div>
       <button onClick={()=>{addToCart(product.id)}} >Add to Cart</button>
    </div>
  )
}

export default ProductDisplay;
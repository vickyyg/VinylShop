import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import removeicon from '../Assets/removeicon.png'

const CartItems = () => {
  const { totalCart, allproducts, cartItems, removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className="cartitems-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      {allproducts.map((e) => {
        if(cartItems[e.id]>0)
        {
           return <div>
          <div className="cartitems-format cartitems-main">
        <img src={e.img} alt='' className='carticon'/>
        <p>{e.name}</p>
        <p>${e.price}</p>
        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
        <p>${e.price*cartItems[e.id]}</p>
        <img className='remove-cart-icon' src={removeicon} onClick={()=>{removeFromCart(e.id)}} alt='' />
      </div>
      <hr/>
      </div>
      }
      return null;
      })}
     <div className="cartitems-down">
      <div className="cartitems-total">
        <h1>Cart totals</h1>
        <div>
          <div className="cartitems-total">
            <p>Total</p>
            <p>${totalCart()}</p>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
     </div>

    </div>
  )
}

export default CartItems
import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'


const ShopCategory = (props) => {
  const {allproducts} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <div className='shopcategory-indexsort'>
         <p>
          <span>Showing 1-12</span> out of 36 products
         </p>
      </div>
      <div className='shopcategory-products'>
        {allproducts.map((item, i) => {
          if (props.category===item.category){
             return <Item  key={i} id={item.id} name={item.name} image={item.img} price={item.price}/>
          }
          else {
            return null;
          }
        })}

      </div>

    </div>
  )
}

export default ShopCategory;
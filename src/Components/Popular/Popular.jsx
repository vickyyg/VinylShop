import React from 'react'
import './Popular.css'
import allProducts from '../Assets/all_products'
import Item from '../Item/Item'


const Popular = () => {
  return (
    <div className='vinyls'>
      <h1>hcjschjscjsjcbsjhcb</h1>
      <hr/>
      <div className="vinyl-item">
        {allProducts.map((item, i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.img} price={item.price}/>
        })}
      </div>

    </div>
  )
}

export default Popular
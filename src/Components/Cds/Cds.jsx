import React from 'react'
import cdsphotos from '../Assets/cdsphotos'
import Item from '../Item/Item'
import './Cds.css'


const Cds = () => {
  return (
    <div className='cds'>
        <h1>CD's</h1>
        
        <div className='cds-item'>
            {cdsphotos.map((item, i)=>{
              return <Item key={i} id={item.id} name={item.name} image={item.img} price={item.price}/>
            })}
        </div>
    </div>
  )
}

export default Cds;
import React from 'react'
import arrow from '../Assets/arrow.png'
import './BreadCrums.css'

const BreadCrums = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
        Home <img className='arrow' src={arrow} alt='' /> Shop <img className='arrow' src={arrow} alt=''/> {product.category} <img className='arrow' src={arrow} alt=''/> {product.name}

    </div>
  )
}

export default BreadCrums
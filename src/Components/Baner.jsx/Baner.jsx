import React from 'react'
import kurt from '../Assets/kurt.png'
import './Baner.css'

const Baner = () => {
  return (
    <div className='baner'>
     <div className='baner-left'>
      <h1>Ofertas</h1>
      <p>Con tarjeta nacion</p>

     </div>
     <div className='baner-right'>
      <img className='cobain' src={kurt} alt=''/>
     </div>

    </div>
  )
}

export default Baner
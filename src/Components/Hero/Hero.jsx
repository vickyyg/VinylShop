import React from 'react'
import './Hero.css'
import girlvinyl from '../Assets/girlvinyl.jpeg'

const Hero = () => {
  return (
    
    <div className='hero'>
        
        <div className='girl-right'>
        <img  className='girl' src={girlvinyl} alt=''/>
        </div>
        </div>
  )
}

export default Hero;
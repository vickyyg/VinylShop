import React from 'react'
import './Hero.css'
import girlvinyl from '../Assets/girlvinyl.jpeg'

const Hero = () => {
  return (
    
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrivals</h2>
            <div>
                <div className="icon">
                    <p>New</p>
                </div>
                <p>ddsfhfdhfdfhfdhffhfdhfd</p>
                <p>gfgdgdgsfsssfsf</p>
            </div>
            <div className="hero-btn">
                <div>Latest Colection</div>
            </div>
        </div>
        <div className='girl-right'>
        <img  className='girl' src={girlvinyl} alt=''/>
        </div>
        </div>
  )
}

export default Hero;
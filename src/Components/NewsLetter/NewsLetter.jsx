import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get exclusive offres on your Email</h1>
        <p>Suscribe to our newletter and stay update</p>
      <div>
        <input type='email' placeholder='Your email id'/>
        <button>Subscribe</button>
      </div>
   </div>
    
  )
}

export default NewsLetter;
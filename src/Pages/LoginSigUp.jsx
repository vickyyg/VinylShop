import React from 'react';
import './CSS/LoginSigUp.css';

const LoginSigUp = () => {
  return (
    <div className='loginsigup'>
      <div className="loginsigup-container">
        <h1>Sig Up</h1>
        <div className='loginsigup-fields'>
          <input type='text' placeholder='Your name' />
          <input type='email' placeholder='Email address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsigup-login'>Already have an account? <span>Login here</span></p>
      </div>
      <div className="loginsigup-agree">
        <input type='checkbox' name='' id='' />
        <p>By continuing, I agree to the terms of use & privacy policy.</p>
      </div>
    </div>
  );
}

export default LoginSigUp;


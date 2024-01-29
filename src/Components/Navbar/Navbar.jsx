import React, {useContext, useState} from 'react'
import './Navbar.css'
import Logo2 from '../Assets/Logo2 - copia (2).png'
import logo from '../Assets/Logo.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'



const Navbar = () => {

  const [menu, setMenu] = useState('shop')
  const {totalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img className='logo1' src={logo} alt=''/>
        
      </div>
      <ul className='nav-menu'>
       <li onClick={() => {setMenu('shop')}}><Link style={{ textDecoration: 'none'}} to='/'>Shop</Link> {menu === 'shop' ? <hr/>:<></>}</li>
       <li onClick={() => {setMenu('metals')}}><Link style={{ textDecoration: 'none'}}  to='/metals'>Metal</Link> {menu === 'metals' ? <hr/>:<></>}</li>
       <li onClick={() => {setMenu('punks')}}><Link style={{ textDecoration: 'none'}}  to='/punks'>Punk</Link> {menu === 'punks' ? <hr/>:<></>}</li>
       <li onClick={() => {setMenu('rocks')}}><Link style={{ textDecoration: 'none'}}  to='/rocks'>Rock</Link> {menu === 'rocks' ? <hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button className='login'>Login</button></Link>
        <Link to='/cart'><img className='logo' src={Logo2} alt=''/></Link>  
        <div className='nav-cart-count'>{totalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar;
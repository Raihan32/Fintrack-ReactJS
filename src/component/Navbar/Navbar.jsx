import React from 'react'
import './navbar.css'
import logo from './img/logofin.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <div className='navigasi'>
        <div className='navitem'>
          <div className='item'><p>Financial Course</p></div>
          <div className='item'><p>Financial Article</p></div>
          <div className='item'><p>Financial Record</p></div>
          <button className='tombollogin'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;

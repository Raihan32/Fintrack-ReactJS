import React from 'react'
import './navbar.css'
import logo from './img/logofin.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <NavLink to="/"><img src={logo} alt="" /></NavLink>
      <div className='navigasi'>
        <div className='navitem'>
          <NavLink className='item animasi-left-right' to="/fc"><p >Financial Course</p></NavLink>
          <NavLink className='item animasi-left-right'to="/fa"><p>Financial Article</p></NavLink>
          <NavLink className='item animasi-left-right' to="/fr"><p>Financial Record</p></NavLink>
          <NavLink type='button' className='tombollogin' to="/login">Login</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar;

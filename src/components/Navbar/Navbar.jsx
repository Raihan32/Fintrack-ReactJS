import React from 'react'
import './navbar.css'
import logo from './img/logofin.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <NavLink className="navbar-brand" to="/"><img src={logo} /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul className="navbar-nav ">
        <li className="nav-item">
        <NavLink className='nav-link' to="/fc"><p className='item animasi-left-right'>Finacial Course</p></NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className='nav-link' to="/fa"><p className='item animasi-left-right'>Financial Article</p></NavLink>
        </li>
        <li className="nav-item">
        <NavLink className='nav-link' to="/fr"><p className='item animasi-left-right'>Financial Record</p></NavLink>
        </li>
        <li><NavLink style={{textDecoration : 'none'}} to="/login"><button className='tombollogin m-2'>Login</button></NavLink></li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar;

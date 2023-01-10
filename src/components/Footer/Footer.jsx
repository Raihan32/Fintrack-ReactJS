import React from 'react'
import './footer.css'
import logoputih from './img/logoputih.png'
import sosmed from './img/sosmed.png'

const Footer = () => {
  return (
    <div>
    <div className='kaki'>
    <div className='footer'>
      <div className='platfooter'><div className='isiplat'><div className='logoplat'><img src={logoputih} alt="" /><p className='logodes'>Designed and Developed by Hustler Team</p><img src={sosmed} alt="" /></div>
      <div className='desplat'><p className='textfooter'>Take your finances to the next levels!</p><p className='logodes'>Don't hesite, money matters.</p></div></div></div>
    
    </div>
    
    </div>
    <div className='barfooter'><div className='container m-2'><p >© 2023 Financial Tracking Co., Ltd. All rights reserved.</p></div><div className='about'><p>about us</p><p>Privacy Policy</p></div></div>
    </div>
    
  )
}

export default Footer;

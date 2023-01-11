import React from 'react'
import './artikel.css'
import hero from './img/hero.png'
import card from './img/card.png'
import { NavLink } from 'react-router-dom'

const Artikel = () => {
  return (
    <div>
        <div className="artikel">
            <div className='heroartikel'>
              <div className="gambarheroartikel">
                <img src={hero} alt="" />
                </div>
                <div className="desk"><div className="desk1">
                  <p>ilustration</p>
                  <p>Lorem Ipsum is simply 
dummy text of the printing and typesetting </p>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
<button className='btn btn-primary'>Read more</button>
                </div>
                <div className="desk2"><p>Lorem Ipsum is simply 
dummy text of the printing and typesetting </p><button className='btn btn-primary'>Read More</button></div> <div className="desk2"><p>Lorem Ipsum is simply 
dummy text of the printing and typesetting </p><button className='btn btn-primary'>Read More</button></div></div>
                </div>
                <div className="isiartikel">
                <NavLink style={{textDecoration : 'none'}} to="/isiartikel"><div className='cardsartikel'><img src={card} /><div className='cardisiartikel'><p className='cardisiartikeljudul'>Cara Cermat Mencapai Financial Freedom</p> <p>Kebebasan finansial, atau financial freedom, sering menjadi bahan perbincangan karena hal ini merupakan impian dari banyak orang.</p><p>readmore</p></div></div></NavLink>
                <div className='cardsartikel'><img src={card} /><div className='cardisiartikel'><p className='cardisiartikeljudul'>Cara Cermat Mencapai Financial Freedom</p> <p>Kebebasan finansial, atau financial freedom, sering menjadi bahan perbincangan karena hal ini merupakan impian dari banyak orang.</p><p>readmore</p></div></div><div className='cardsartikel'><img src={card} /><div className='cardisiartikel'><p className='cardisiartikeljudul'>Cara Cermat Mencapai Financial Freedom</p> <p>Kebebasan finansial, atau financial freedom, sering menjadi bahan perbincangan karena hal ini merupakan impian dari banyak orang.</p><p>readmore</p></div></div><div className='cardsartikel'><img src={card} /><div className='cardisiartikel'><p className='cardisiartikeljudul'>Cara Cermat Mencapai Financial Freedom</p> <p>Kebebasan finansial, atau financial freedom, sering menjadi bahan perbincangan karena hal ini merupakan impian dari banyak orang.</p><p>readmore</p></div></div>
                </div>
            </div>
    </div>
  )
}

export default Artikel;

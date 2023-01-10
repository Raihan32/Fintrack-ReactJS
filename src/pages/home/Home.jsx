import React from 'react'
import './home.css'
import hero from './img/hero.png'
import fc from './img/financialcourse.png'
import fa from './img/fa.png'
import fr from './img/fr.png'
import imgcourse from './img/imgcourse.png'
import cardartikel from './img/cardartikel.png'

const Home = () => {
  return (
    <div className='kontainer'>
      <div className='hero'>
        <div className='textcontainer'>
          <p className='judulhero'>Let's Take Back Control Your Money</p>
          <p className='subhero'>Make your money work harder than you. This web may help you to how to make your money works</p>
        </div>
        <img src={hero} alt="" />
      </div>
      <div className='ourfeature'>
        <p className='subjudul'>Our Features</p>
        <div className='cards'>
          <div className='card'><img src={fc} alt="" /><div className='textcard'><p className='featuresjudul'>Financial Course</p><p className='featuressub'>Training to control your finances properly.</p></div></div>
          <div className='card'><img src={fa} alt="" /><div className='textcard'><p className='featuresjudul'>Financial Article</p><p className='featuressub'>Information about various financial problems and solutions.</p></div></div>
          <div className='card'><img src={fr} alt="" /><div className='textcard'><p className='featuresjudul'>Financial Record</p><p className='featuressub'>Detail your financial management with financial records.</p></div></div>
        </div>
      </div>
      <div className='course'>
        <div className='coursejudul'><p className='judulcontent'>Financial Course Preview</p><p className='more'>read more</p>
          </div>
          <div className='cousepriview'>
            <div className='courseisi'><img src={imgcourse} alt="" />
            <div className='contentisicourse'>
              <div className='contentitle'>
                <p>Cara mengatur 10JT/Bulan di Tahun Pertama Kerja</p>
                </div>
                <div className='deskripsicourse'>
                  <div className='deskripsicourseitem'>
                    <p>Yosua Putra</p>
                  </div>
                  <div className='deskripsicourseitem'>
                    <p>Manajemen Keuangan</p>
                  </div>
                  <div className='deskripsicourseitem'>
                    <p>15 Videos</p>
                  </div>
                  <div className='deskripsicourseitem'>
                    <p>Yosua Putra</p>
                  </div>
                  </div>
                </div>
                </div>
          </div>
          </div>
          <div className='article'>
            <div className='coursejudul'><p className='judulcontent'>Financial Artikel Preview</p><p className='more'>read more</p></div>
            <div className='cardsartikel'>
              <div className='cardartikel'><img src={cardartikel} alt="" /><div className='deskripsiartikel'><p className='judulartikel'>Lorem Ipsum is simply</p><p className='deskripsiartikel'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...</p></div></div>
              <div className='cardartikel'><img src={cardartikel} alt="" /><div className='deskripsiartikel'><p className='judulartikel'>Lorem Ipsum is simply</p><p className='deskripsiartikel'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...</p></div></div>
              <div className='cardartikel'><img src={cardartikel} alt="" /><div className='deskripsiartikel'><p className='judulartikel'>Lorem Ipsum is simply</p><p className='deskripsiartikel'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...</p></div></div>
              <div className='cardartikel'><img src={cardartikel} alt="" /><div className='deskripsiartikel'><p className='judulartikel'>Lorem Ipsum is simply</p><p className='deskripsiartikel'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry...</p></div></div>
            </div>
          </div>
    </div>
  )
}

export default Home;

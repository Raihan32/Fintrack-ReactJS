import React from "react";
import "./home.css";
import hero from "./img/hero.png";
import fc from "./img/financialcourse.png";
import fa from "./img/fa.png";
import fr from "./img/fr.png";
import imgcourse from "./img/imgcourse.png";
import cardartikel from "./img/cardartikel.png";
import AOS from 'aos';

const Home = () => {
  return (
    <div className="lp-kontainer">
      <div className="lp-hero">
        <div className="lp-textcontainer">
          <p className="lp-judulhero">Let's Take Back Control Your Money</p>
          <p className="lp-subhero">
            Make your money work harder than you. This web may help you to how
            to make your money works
          </p>
        </div>
        <img style={{Width: "100%" , height: "auto"}} src={hero} alt="" />
      </div>
      
      <div className="lp-ourfeature">
        <p className="lp-subjudul">Our Features</p>
        <div className="lp-cards">
        <div data-aos="flip-left">
          <div className="lp-card">
            <img src={fc} alt="" />
            <div className="lp-textcard">
              <p className="lp-featuresjudul">Financial Course</p>
              <p className="lp-featuressub">
                Training to control your finances properly.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="flip-left">
          <div className="lp-card">
            <img src={fa} alt="" />
            <div className="lp-textcard">
              <p className="lp-featuresjudul">Financial Article</p>
              <p className="lp-featuressub">
                Information about various financial problems and solutions.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="flip-left">
          <div className="lp-card">
            <img src={fr} alt="" />
            <div className="lp-textcard">
              <p className="lp-featuresjudul">Financial Record</p>
              <p className="lp-featuressub">
                Detail your financial management with financial records.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="lp-course">
        <div className="lp-coursejudul">
          <p className="lp-judulcontent">Financial Course Preview</p>
          <p className="lp-more">read more</p>
        </div>
        <div data-aos="flip-left" className="lp-cousepriview">
          <div className="lp-courseisi">
            <img src={imgcourse} alt="" />
            <div className="lp-contentisicourse">
              <div className="lp-contentitle">
                <p>Cara mengatur 10JT/Bulan di Tahun Pertama Kerja</p>
              </div>
              <div className="lp-deskripsicourse">
                <div className="lp-deskripsicourseitem">
                  <p>Yosua Putra</p>
                </div>
                <div className="lp-deskripsicourseitem">
                  <p>Manajemen Keuangan</p>
                </div>
                <div className="lp-deskripsicourseitem">
                  <p>15 Videos</p>
                </div>
                <div className="lp-deskripsicourseitem">
                  <p>Yosua Putra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lp-article">
        <div className="lp-coursejudul">
          <p className="lp-judulcontent">Financial Artikel Preview</p>
          <p className="lp-more">read more</p>
        </div>
        <div  className="cardsartikel">
          <div data-aos="flip-left" className="lp-cardartikel">
            <img src={cardartikel} alt="" />
            <div className="lp-deskripsiartikel">
              <p className="lp-judulartikel">Lorem Ipsum is simply</p>
              <p className="lp-deskripsiartikel">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry...
              </p>
            </div>
          </div>
          <div data-aos="flip-left" className="lp-cardartikel">
            <img src={cardartikel} alt="" />
            <div className="lp-deskripsiartikel">
              <p className="lp-judulartikel">Lorem Ipsum is simply</p>
              <p className="lp-deskripsiartikel">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry...
              </p>
            </div>
          </div>
          <div  data-aos="flip-left" className="lp-cardartikel">
            <img src={cardartikel} alt="" />
            <div className="lp-deskripsiartikel">
              <p className="lp-judulartikel">Lorem Ipsum is simply</p>
              <p className="lp-deskripsiartikel">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry...
              </p>
            </div>
          </div>
          <div data-aos="flip-left" className="lp-cardartikel">
            <img src={cardartikel} alt="" />
            <div className="lp-deskripsiartikel">
              <p className="lp-judulartikel">Lorem Ipsum is simply</p>
              <p className="lp-deskripsiartikel">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
AOS.init();
export default Home;

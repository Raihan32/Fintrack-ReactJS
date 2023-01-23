import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./home.css";
import hero from "./img/hero.png";
import fc from "./img/financialcourse.png";
import fa from "./img/fa.png";
import fr from "./img/fr.png";
import cardartikel from "./img/cardartikel.png";
import AOS from "aos";
import { NavLink, useNavigate } from "react-router-dom";
import {
  BsBook,
  BsClock,
  BsAward,
  BsFilm,
  BsArrowRightCircle,
} from "react-icons/bs";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const getDataUsers = async () => {
    const response = await fetch(
      "https://apigenerator.dronahq.com/api/3HxghIhe/dataku"
    );
    const dataku = await response.json();
    const users = dataku.slice(0, 1);
    setUsers(users);
  };

  useEffect(() => {
    getDataUsers();
  }, []);

  const [artikels, setArtikels] = useState([]);

  async function DataArtikels() {
    try {
      const response = await axios.get(
        "https://apigenerator.dronahq.com/api/jq3eOc4d/artikeldata"
      );
      setArtikels(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    DataArtikels();
  }, []);

  return (
    <div className="lp-kontainer">
      <Helmet>
        <title>Fintrack</title>
      </Helmet>
      <div className="lp-hero">
        <div className="lp-textcontainer">
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-easing="linear"
          >
            <p className="lp-judulhero">Let's Take Back Control Your Money</p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-easing="linear"
          >
            <p className="lp-subhero">
              Make your money work harder than you. This web may help you to how
              to make your money works
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-easing="linear"
        >
          <img src={hero} alt="hero-1" />
        </div>
      </div>

      <div className="lp-ourfeature">
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="lp-subjudul">Our Features</p>
        </div>
        <div className="lp-cards">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="linear"
          >
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
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="linear"
          >
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
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="linear"
          >
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
        <div data-aos="fade-up">
          <div className="lp-coursejudul">
            <p className="lp-judulcontent">Financial Course Preview</p>
            <NavLink className="lp-more" to="/fc">
              Read more <BsArrowRightCircle style={{ marginLeft: "10px" }} />
            </NavLink>
          </div>
        </div>

        <div data-aos="fade-up" className="lp-cousepriview">
          {users.map((user) => {
            return (
              <div
                className="lp-courseisi"
                key={user.id}
                onClick={() => {
                  navigate(`/fc/${user.id}`);
                }}
              >
                <img
                  className="lp-thubmnail"
                  src={user.image}
                  alt={user.heading}
                />

                <div className="lp-contentisicourse">
                  <div className="lp-contentitle">
                    <p>{user.heading}</p>
                  </div>
                  <div className="lp-deskripsicourse">
                    <div className="lp-deskripsicourseitem">
                      <p>
                        <BsClock style={{ marginRight: "10px" }} />
                        {user.duration}
                      </p>
                    </div>
                    <div className="lp-deskripsicourseitem">
                      <p>
                        <BsBook style={{ marginRight: "10px" }} />
                        {user.kategori}
                      </p>
                    </div>
                    <div className="lp-deskripsicourseitem">
                      <p>
                        <BsAward style={{ marginRight: "10px" }} />
                        {user.level}
                      </p>
                    </div>
                    <div className="lp-deskripsicourseitem">
                      <p>
                        <BsFilm style={{ marginRight: "5px" }} /> {user.video}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="lp-article">
        <div data-aos="fade-up">
          <div className="lp-coursejudul">
            <p className="lp-judulcontent">Financial Artikel Preview</p>
            <NavLink className="lp-more" to="/fa">
              Read more <BsArrowRightCircle style={{ marginLeft: "10px" }} />
            </NavLink>
          </div>
        </div>
        <div
          className="lp-cards-artikel"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          {artikels.slice(0, 3).map((artikel) => {
            return (
              <div class="lp-card-artikel" key={artikel.id}>
                <img
                  src={artikel.image}
                  class="lp-card-image"
                  alt={artikel.heading}
                />
                <div class="lp-card-overlay">
                  <div class="lp-card-header">
                    <svg class="lp-card-arc" xmlns="http://www.w3.org/2000/svg">
                      <path />
                    </svg>

                    <div class="lp-card-header-text">
                      <h3 class="lp-card-title">{artikel.heading}</h3>
                    </div>
                  </div>
                  <p class="lp-card-description">{artikel.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
AOS.init();
export default Home;

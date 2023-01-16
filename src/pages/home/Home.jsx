import React, { useState, useEffect } from "react";
import "./home.css";
import hero from "./img/hero.png";
import fc from "./img/financialcourse.png";
import fa from "./img/fa.png";
import fr from "./img/fr.png";
import cardartikel from "./img/cardartikel.png";
import AOS from "aos";
import { NavLink, useNavigate } from "react-router-dom";
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

  // const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   getCourses();
  // }, []);

  // const getCourses = async () => {
  //   const response = await axios.get("https://api.github.com/users");

  //   setCourses(response.results);
  // };

  return (
    <div className="lp-kontainer">
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
              Read more
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
                      <p>{user.duration}</p>
                    </div>
                    <div className="lp-deskripsicourseitem">
                      <p>{user.kategori}</p>
                    </div>
                    <div className="lp-deskripsicourseitem">
                      <p>{user.level}s</p>
                    </div>
                    <div className="lp-deskripsicourseitem">
                      <p>{user.video}</p>
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
              Read more
            </NavLink>
          </div>
        </div>
        <div className="cardsartikel">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="linear"
            className="lp-cardartikel"
          >
            <img src={cardartikel} alt="" />
            <div className="lp-deskripsiartikel">
              <p className="lp-judulartikel">Lorem Ipsum is simply</p>
              <p className="lp-deskripsiartikel">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry...
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1400"
            data-aos-easing="linear"
            className="lp-cardartikel"
          >
            <img src={cardartikel} alt="" />
            <div className="lp-deskripsiartikel">
              <p className="lp-judulartikel">Lorem Ipsum is simply</p>
              <p className="lp-deskripsiartikel">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry...
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1800"
            data-aos-easing="linear"
            className="lp-cardartikel"
          >
            <img src={cardartikel} alt="" />
            <div className="lp-deskripsiartikel">
              <p className="lp-judulartikel">Lorem Ipsum is simply</p>
              <p className="lp-deskripsiartikel">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry...
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2200"
            data-aos-easing="linear"
            className="lp-cardartikel"
          >
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

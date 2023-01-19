import React, { useState, useEffect } from "react";
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
          <div href="#" class="lp-card-artikel">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmluYW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              class="lp-card-image"
              alt="card artikel 1"
            />
            <div class="lp-card-overlay">
              <div class="lp-card-header">
                <svg class="lp-card-arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div class="lp-card-header-text">
                  <h3 class="lp-card-title">
                    Cara Kelola Keuangan Saat Terjadi Resesi, Ada Rahasianya
                  </h3>
                </div>
              </div>
              <p class="lp-card-description">
                Apa yang menjadi 'ketakutan' Presiden Joko Widodo (Jokowi)
                menjadi kenyataan. Suka tidak suka, Badai besar yang berasal
                dari dinamika perekonomian global akhirnya datang.
              </p>
            </div>
          </div>
          <div
            href="#"
            class="lp-card-artikel"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="linear"
          >
            <img
              src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmluYW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              class="lp-card-image"
              alt="card artikel 2"
            />
            <div class="lp-card-overlay">
              <div class="lp-card-header">
                <svg class="lp-card-arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div class="lp-card-header-text">
                  <h3 class="lp-card-title">
                    Cara Cermat Mencapai Financial Freedom
                  </h3>
                </div>
              </div>
              <p class="lp-card-description">
                Untuk mencapai kondisi financial freedom tentunya tidak mudah,
                terlebih jika tidak diiringi dengan persiapan dan perencanaan
                yang matang serta gaya hidup hemat. Diperlukan komitmen serta
                kedisiplinan yang tinggi dalam mengelola keuangan sejak muda.
                Kita juga harus lebih bijaksana dalam melakukan pengeluaran.
              </p>
            </div>
          </div>
          <div
            href="#"
            class="lp-card-artikel"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="linear"
          >
            <img
              src="https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpbmFuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              class="lp-card-image"
              alt="card artikel 3"
            />
            <div class="lp-card-overlay">
              <div class="lp-card-header">
                <svg class="lp-card-arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>

                <div class="lp-card-header-text">
                  <h3 class="lp-card-title">
                    Pentingnya Manajemen Keuangan dalam Kehidupan Sehari-Hari.
                  </h3>
                </div>
              </div>
              <p class="lp-card-description">
                Dengan adanya manajemen keuangan maka keuangan seseorang,
                perusahaan, maupun organisasi akan lebih jelas pengeluaran
                maupun pendapatan yang dimiliki.
              </p>
            </div>
          </div>
        </div>

        <div className="cardsartikel">
          {/* <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="linear"
            className="lp-cardartikel"
          >
            <img src="" alt="article 1" className="lp-thumbnail-artikel" />
            <div className="lp-contentartikel">
              <p className="lp-judulartikel">
                Cara Kelola Keuangan Saat Terjadi Resesi, Ada Rahasianya
              </p>
              <p className="lp-deskripsiartikel">
                Apa yang menjadi 'ketakutan' Presiden Joko Widodo (Jokowi)
                menjadi kenyataan. Suka tidak suka, Badai besar yang berasal
                dari dinamika perekonomian global akhirnya datang.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1400"
            data-aos-easing="linear"
            className="lp-cardartikel"
          >
            <img
              src="https://images.unsplash.com/photo-1644871912804-b69477a8a8a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGZpbmFuY2V8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="article 2"
              className="lp-thumbnail-artikel"
            />
            <div className="lp-contentartikel">
              <p className="lp-judulartikel">
                Cara Cermat Mencapai Financial Freedom
              </p>
              <p className="lp-deskripsiartikel">
                Untuk mencapai kondisi financial freedom tentunya tidak mudah,
                terlebih jika tidak diiringi dengan persiapan dan perencanaan
                yang matang serta gaya hidup hemat. Diperlukan komitmen serta
                kedisiplinan yang tinggi dalam mengelola keuangan sejak muda.
                Kita juga harus lebih bijaksana dalam melakukan pengeluaran.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1800"
            data-aos-easing="linear"
            className="lp-cardartikel"
          >
            <img
              src="https://images.unsplash.com/photo-1645731504293-ad4d5da42a10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZpbmFuY2V8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="article 3"
              className="lp-thumbnail-artikel"
            />
            <div className="lp-contentartikel">
              <p className="lp-judulartikel">
                Pentingnya Manajemen Keuangan dalam Kehidupan Sehari-Hari.
              </p>
              <p className="lp-deskripsiartikel">
                Dengan adanya manajemen keuangan maka keuangan seseorang,
                perusahaan, maupun organisasi akan lebih jelas pengeluaran
                maupun pendapatan yang dimiliki.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2200"
            data-aos-easing="linear"
            className="lp-cardartikel"
          >
            <img
              src="https://images.unsplash.com/photo-1631514623720-7f0996f87b75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmluYW5jZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="article 4"
              className="lp-thumbnail-artikel"
            />
            <div className="lp-contentartikel">
              <p className="lp-judulartikel">
                Cara Kelola Keuangan Saat Terjadi Resesi, Ada Rahasianya
              </p>
              <p className="lp-deskripsiartikel">
                Seiring bertambahnya usia juga mengharuskan kita dapat lebih
                pintar memilih mana yang menjadi kebutuhan ataupun hanya sekadar
                keinginan.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
AOS.init();
export default Home;

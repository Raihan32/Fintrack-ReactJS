import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import "./about.css";

const About = () => {
  return (
    <div>
      <div className="text container-fluid mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "400px" }}
        >
          <h3 className="display-3 font-weight-bold text-white">About Us</h3>
          <div className="d-inline-flex text-white">
            <p className="m-0">
              <a className="text-white" href="/">
                Home
              </a>
            </p>
            <p className="m-0 px-2">/</p>
            <p className="m-0">About Us</p>
          </div>
        </div>
      </div>
      <div
        className="d-flex flex-column mx-auto"
        style={{
          maxWidth: "40rem",
          textAlign: "justify",
        }}
      >
        <div className="text-black mx-5">
          <h1 className="text-center mb-4">Our Stroy</h1>
          <p>
            <span className="baris-kahiji">F</span>inancial tracker is a
            powerful platform for monitoring your finances. We want to empower
            millions of customers around the world to start and change their
            personal finances with money management technology, accompanied by
            learning media about the world of finance through the latest
            articles and video courses.
          </p>
        </div>
        <div className="text-black mx-5">
          <h3 className="font-weight-bold">Founder Stroy</h3>
          <p>
            There are still many Indonesian people who find it difficult to
            manage finances in the short and long term. Even though managing
            finances properly is very important, which can help identify
            financial mistakes and also make it possible to make investments.
            The solution to the problem of managing finances is to start with
            making a financial report, prepare a financial reserve, make sure
            you have spare money.
          </p>
        </div>
        <img
          className="img-fluid rounded mt-3"
          src="https://media.licdn.com/dms/image/C560BAQEX1pFURxwK_g/company-logo_200_200/0/1640263808897?e=1681948800&v=beta&t=zjL1ybxJ4Mx835KaPeZFly_9t_TfB6ilgTrcwB844pQ"
          alt="logo infinite learning"
        />
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: "500px" }}>
            <h1 className="display-6 mb-5">
              Meet Our Professional Team Members
            </h1>
          </div>
          <div className="d-flex justify-content-center row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="team-item rounded">
                <img
                  className="img-fluid"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="user1"
                />
                <div className="text-center p-4">
                  <h5>Alfisharul Shobirin</h5>
                  <span>Project Manajement or Hustler</span>
                </div>
                <div className="team-text text-center bg-white p-4">
                  <h5>Alfisharul Shobirin</h5>
                  <p>Project Manajement or Hustler</p>
                  <div className="d-flex justify-content-center">
                    <a className="btn btn-square btn-light m-1" href="/">
                      <FaTwitter />
                    </a>
                    <a className="btn btn-square btn-light m-1" href="/">
                      <FaFacebookF />
                    </a>
                    <a className="btn btn-square btn-light m-1" href="/">
                      <FaInstagram />
                    </a>
                    <a
                      className="btn btn-square btn-light m-1"
                      href="https://www.linkedin.com/in/alfisahrul-shobirin-458471190/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item rounded">
                <img
                  className="img-fluid"
                  src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="user2"
                />
                <div className="text-center p-4">
                  <h5>Tasya Takhayaza</h5>
                  <span>Hipster or Designer</span>
                </div>
                <div className="team-text text-center bg-white p-4">
                  <h5>Tasya Takhayaza</h5>
                  <p>Hipster or Designer</p>
                  <div className="d-flex justify-content-center">
                    <a
                      className="btn btn-square btn-light m-1"
                      href="/"
                      target="_blank"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      className="btn btn-square btn-light m-1"
                      href="/"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      className="btn btn-square btn-light m-1"
                      href="/"
                      target="_blank"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      className="btn btn-square btn-light m-1"
                      href="https://www.linkedin.com/in/tasya-takhayaza-yudistia-998a59224/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item rounded">
                <img
                  className="img-fluid"
                  src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="user3"
                />
                <div className="text-center p-4">
                  <h5>Hafidz Dwi Nugroho</h5>
                  <span>Hipster or Designer</span>
                </div>
                <div className="team-text text-center bg-white p-4">
                  <h5>Hafidz Dwi Nugroho</h5>
                  <p>Hipster or Designer</p>
                  <div className="d-flex justify-content-center">
                    <a
                      className="btn btn-square btn-light m-1"
                      href="/"
                      target="_blank"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      className="btn btn-square btn-light m-1"
                      href="/"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      className="btn btn-square btn-light m-1"
                      href="/"
                      target="_blank"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      className="btn btn-square btn-light m-1"
                      href="https://www.linkedin.com/in/hafidz-dwi-nugroho-23352b247/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="team-item rounded">
                <img
                  className="img-fluid"
                  src="https://images.unsplash.com/photo-1519625594242-7db544018926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlcnNvbnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="user5"
                />
                <div className="text-center p-4">
                  <h5>Dwi Aryani</h5>
                  <span>Hacker or Coder</span>
                </div>
                <div className="team-text text-center bg-white p-4">
                  <h5>Dwi Aryani</h5>
                  <p>Hacker or Coder</p>
                  <div className="d-flex justify-content-center">
                    <a
                      className="btn btn-square btn-light m-1"
                      href="/"
                      target="_blank"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      className="btn btn-square btn-light m-1"
                      href="/"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      className="btn btn-square btn-light m-1"
                      href="/"
                      target="_blank"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      className="btn btn-square btn-light m-1"
                      href="https://www.linkedin.com/in/dwi-a-409970140/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item rounded">
                <img
                  className="img-fluid"
                  src="https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFkfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt="user6"
                />
                <div className="text-center p-4">
                  <h5>Raihan Fathurrahman</h5>
                  <span>Hacker or Coder</span>
                </div>
                <div className="team-text text-center bg-white p-4">
                  <h5>Raihan Fathurrahman</h5>
                  <p>Hacker or Coder</p>
                  <div className="d-flex justify-content-center">
                    <a
                      className="btn btn-square btn-light m-1"
                      href="/"
                      target="_blank"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      className="btn btn-square btn-light m-1"
                      href="/"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      className="btn btn-square btn-light m-1"
                      href="/"
                      target="_blank"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      className="btn btn-square btn-light m-1"
                      href="https://www.linkedin.com/in/raihan-fathurrahman-704600197/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item rounded">
                <img
                  className="img-fluid"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="user4"
                />
                <div className="text-center p-4">
                  <h5>Dafa Huda Rifa'i</h5>
                  <span>Hacker or Coder</span>
                </div>
                <div className="team-text text-center bg-white p-4">
                  <h5>Dafa Huda Rifa'i</h5>
                  <p>Hacker or Coder</p>
                  <div className="d-flex justify-content-center">
                    <a
                      className="btn btn-square btn-light m-1"
                      href="/"
                      target="_blank"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      className="btn btn-square btn-light m-1"
                      href="/"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      className="btn btn-square btn-light m-1"
                      href="/"
                      target="_blank"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      className="btn btn-square btn-light m-1"
                      href="https://www.linkedin.com/in/dafa-huda-rifa-i-293a98257/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
